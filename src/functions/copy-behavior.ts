export enum CopyBehavior {
  FirstLine = "fl",
  FullText = "full",
  Commands = "cmd",
}

const CODE_BLOCK_COPY_REGEXP = /copy=(?<quote>["'])(?<copy>.*?)\1/;

const COPY_BEHAVIOR_VALUES = Object.values(CopyBehavior);

const NON_BREAKING_SPACE = ' ';

// Parses properties from the metastring of a code block and extracts the [`CopyBehavior`].
export function parseCodeBlockCopy(metastring?: string): CopyBehavior {
  const copy = metastring?.match(CODE_BLOCK_COPY_REGEXP)?.groups!.copy?.trim();

  if (!copy) {
    // Fallback to Full Text
    return CopyBehavior.FullText;
  }

  const match = COPY_BEHAVIOR_VALUES.find((cb) => cb === copy) as
    | CopyBehavior
    | undefined;

  if (match) {
    return match;
  }

  throw new Error(
    `Invalid copy behavior: ${copy}. Valid values are: ${COPY_BEHAVIOR_VALUES.join(", ")}`,
  );
}

// Copies full text clearing "special characters" like "$" and ">>" used in code blocks.
//
// We want to keep text hierarchy for examples like YAML which is used widely or Rust
// code blocks.
function copyFullText(text: string): string {
  const isSingleLine = !text.includes('\n');

  let buff = '';
  let prevToken: string | undefined = undefined;

  while (text.length) {
    const token: string = text[0];
    const nextToken: string | undefined = text[1];
    const isFirstToken = !prevToken || prevToken === NON_BREAKING_SPACE || prevToken === '\n';

    text = text.slice(1);

    if (token === '$') {
      if (isFirstToken) {
        buff += NON_BREAKING_SPACE;
        prevToken = NON_BREAKING_SPACE;
        continue;
      }

      buff += token;
      prevToken = token;
      continue;
    }

    if (token === '>' && nextToken === '>') {
      text = text.slice(1);
      buff += NON_BREAKING_SPACE;
      buff += NON_BREAKING_SPACE;
      prevToken = NON_BREAKING_SPACE;
      continue;
    }

    buff += token;
    prevToken = token;
  }

  if (isSingleLine) {
    return buff.trim();
  }

  return buff;
}

function copyFirstLine(text: string): string {
  const final = text.split('\n')[0];

  if (final.startsWith('$')) {
    return final.slice(1).trim();
  }

  if (final.startsWith('>>')) {
    return final.slice(2).trim();
  }

  return final;
}

function copyCommands(text: string): string {
  return text.split('\n').map((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('$')) {
      return trimmed.slice(1).trim();
    }

    if (trimmed.startsWith('>>')) {
      return trimmed.slice(2).trim();
    }
  }).join('\n');
}

export function textWithCopyBehavior(text: string, behavior: CopyBehavior): string {
  switch (behavior) {
    case CopyBehavior.FirstLine:
      return copyFirstLine(text);
    case CopyBehavior.FullText:
      return copyFullText(text);
    case CopyBehavior.Commands:
      return copyCommands(text);
    default:
      console.warn(`Invalid copy behavior ${behavior}`);
      return text;
  }
}
