import React, {useCallback, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import copy from 'copy-text-to-clipboard';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/CodeBlock/CopyButton';
import IconCopy from '@theme/Icon/Copy';
import IconSuccess from '@theme/Icon/Success';

import styles from './styles.module.css';

const CODE_BLOCK_COPY_REGEXP = /copy=(?<quote>["'])(?<copy>.*?)\1/;

export enum CopyBehavior {
  FirstLine = 'fl',
  FullText = 'full',
}

const COPY_BEHAVIOR = Object.values(CopyBehavior);

export function parseCodeBlockCopy(metastring?: string): CopyBehavior {
  const copy = metastring?.match(CODE_BLOCK_COPY_REGEXP)?.groups!.copy?.trim();

  if (!copy) {
    // Fallback to Full Text
    return CopyBehavior.FullText;
  }

  const match = COPY_BEHAVIOR.find((cb) => cb === copy) as CopyBehavior | undefined;

  if (match) {
    return match;
  }

  throw new Error(`Invalid copy behavior: ${copy}. Valid values are: ${COPY_BEHAVIOR.join(', ')}`);
}

function textWithCopyBehavior(text: string, cb: CopyBehavior): string {
  switch(cb) {
    case CopyBehavior.FirstLine:
      const final = text.split('\n')[0];

      if (final.startsWith('$')) {
        return final.slice(1).trim();
      }

      return final;
    default:
      return text;
  }
}

export default function CopyButton({code, className, copyBehavior}: Props & {
  copyBehavior: CopyBehavior;
}): JSX.Element {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef<number | undefined>(undefined);
  const handleCopyCode = useCallback(() => {
    const text = textWithCopyBehavior(code, copyBehavior);

    copy(text);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [code]);

  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);

  return (
    <button
      type="button"
      aria-label={
        isCopied
          ? translate({
              id: 'theme.CodeBlock.copied',
              message: 'Copied',
              description: 'The copied button label on code blocks',
            })
          : translate({
              id: 'theme.CodeBlock.copyButtonAriaLabel',
              message: 'Copy code to clipboard',
              description: 'The ARIA label for copy code blocks button',
            })
      }
      title={translate({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks',
      })}
      className={clsx(
        'clean-btn',
        className,
        styles.copyButton,
        isCopied && styles.copyButtonCopied,
      )}
      onClick={handleCopyCode}>
      <span className={styles.copyButtonIcons} aria-hidden="true">
        <IconCopy className={styles.copyButtonIcon} />
        <IconSuccess className={styles.copyButtonSuccessIcon} />
      </span>
    </button>
  );
}
