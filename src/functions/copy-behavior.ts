export enum CopyBehavior {
  FirstLine = 'fl',
  FullText = 'full',
}

const CODE_BLOCK_COPY_REGEXP = /copy=(?<quote>["'])(?<copy>.*?)\1/;

const COPY_BEHAVIOR_VALUES = Object.values(CopyBehavior);

// Parses properties from the metastring of a code block and extracts the [`CopyBehavior`].
export function parseCodeBlockCopy(metastring?: string): CopyBehavior {
  const copy = metastring?.match(CODE_BLOCK_COPY_REGEXP)?.groups!.copy?.trim();

  if (!copy) {
    // Fallback to Full Text
    return CopyBehavior.FullText;
  }

  const match = COPY_BEHAVIOR_VALUES.find((cb) => cb === copy) as CopyBehavior | undefined;

  if (match) {
    return match;
  }

  throw new Error(`Invalid copy behavior: ${copy}. Valid values are: ${COPY_BEHAVIOR_VALUES.join(', ')}`);
}

export function clearCommandPrefix(text: string): string {
  if (text.startsWith('$')) {
    return text.slice(1).trim();
  }

  return text;
}

export function textWithCopyBehavior(text: string, cb: CopyBehavior): string {
  switch(cb) {
    case CopyBehavior.FirstLine:
      return clearCommandPrefix(text.split('\n')[0]);
    case CopyBehavior.FullText:
      return text.split('\n').map((v) => clearCommandPrefix(v.trim())).join('\n');
    default:
      return text;
  }
}
