import { expect, describe, it } from 'vitest';

import { CopyBehavior, clearCommandPrefix, textWithCopyBehavior } from '../src/functions/copy-behavior';

describe('copy behavior smoke tests', () => {
  it('detects command prefix and removes it', () => {
    const have = '$ echo "Hello, World!"';
    const want = 'echo "Hello, World!"';

    expect(clearCommandPrefix(have)).toStrictEqual(want);
  });

  it('leaves text as-is if not prefixed', () => {
    const have = ' echo "Hello, World!" ';
    const want = ' echo "Hello, World!" ';

    expect(clearCommandPrefix(have)).toStrictEqual(want);
  });

  it(`removes trailing "$" from line when using "fl" behavior`, () => {
    const have = '$ echo "Hello, World!"';
    const want = 'echo "Hello, World!"';

    expect(textWithCopyBehavior(have, CopyBehavior.FirstLine)).toStrictEqual(want);
  });

  it(`removes trailing "$" from line when using "full" behavior`, () => {
    const have = `
$ mkdir -p /tmp/hello-world
$ cd /tmp/hello-world
$ echo "Hello, World!" > hello-world.txt
$ cat hello-world.txt
Hello, World!`;

    const want = `
mkdir -p /tmp/hello-world
cd /tmp/hello-world
echo "Hello, World!" > hello-world.txt
cat hello-world.txt
Hello, World!`;

    expect(textWithCopyBehavior(have, CopyBehavior.FullText)).toStrictEqual(want);
  });
});
