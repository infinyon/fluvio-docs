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
  }).filter(Boolean).join('\n');
}

export function textWithCopyBehavior(text: string, behavior: CopyBehavior): string {
  switch (behavior) {
    case CopyBehavior.FirstLine:
      return copyFirstLine(text);
    case CopyBehavior.Commands:
      return copyCommands(text);
    default:
      return text;
  }
}
