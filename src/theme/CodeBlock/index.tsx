import React, {isValidElement, type ReactNode} from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ElementContent from '@theme/CodeBlock/Content/Element';
import StringContent from '@theme/CodeBlock/Content/String';
import { parseCodeBlockCopy } from '@site/src/functions/copy-behavior';

import type {Props} from '@theme/CodeBlock';

/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */
function maybeStringifyChildren(children: ReactNode): ReactNode {
  if (React.Children.toArray(children).some((el) => isValidElement(el))) {
    return children;
  }
  // The children is now guaranteed to be one/more plain strings

  // If child is "$" or "$$" jump to the next line, if not add a space
  return React.Children.toArray(children).map((child, index) => {
    if (typeof child === 'string') {
      if (index > 0) {
        return child.replace(/\$\$?/g, (match) => (match === '$' ? '\n$' : ' '));
      }
    }
    return child;
  });
}

export default function CodeBlock({
  children: rawChildren,
  metastring,
  ...props
}: Props): JSX.Element {
  // The Prism theme on SSR is always the default theme but the site theme can
  // be in a different mode. React hydration doesn't update DOM styles that come
  // from SSR. Hence force a re-render after mounting to apply the current
  // relevant styles.
  const copy = parseCodeBlockCopy(metastring);
  const isBrowser = useIsBrowser();
  const children = maybeStringifyChildren(rawChildren);
  const CodeBlockComp =
    typeof children === 'string' ? StringContent : ElementContent;
  return (
    <CodeBlockComp key={String(isBrowser)} copyBehavior={copy} {...props}>
      {children as string}
    </CodeBlockComp>
  );
}
