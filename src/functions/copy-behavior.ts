export enum CopyBehavior {
  FirstLine = "fl",
  FullText = "full",
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

export function textWithCopyBehavior(text: string, behavior: CopyBehavior): string {
  switch (behavior) {
    case CopyBehavior.FirstLine:
      return copyFirstLine(text);
    case CopyBehavior.FullText:
      return copyFullText(text);
    default:
      console.warn(`Invalid copy behavior ${behavior}`);
      return text;
  }
}
