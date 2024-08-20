import { expect, describe, it } from 'vitest';

import { CopyBehavior, textWithCopyBehavior } from '../src/functions/copy-behavior';

describe('copy behavior smoke tests', () => {
  it(`removes trailing "$" from line when using "fl" behavior`, () => {
    const have = '$ fluvio topic create my-topic';
    const want = 'fluvio topic create my-topic';

    expect(textWithCopyBehavior(have, CopyBehavior.FirstLine)).toStrictEqual(want);
  });

  it(`removes trailing ">>" from line when using "fl" behavior`, () => {
    const have = '>> show state filter-service/filter-questions/metrics';
    const want = 'show state filter-service/filter-questions/metrics';

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

  it(`removes ">>" from text using "full" behavior`, () => {
    const have = `
      >> show state filter-service/filter-questions/metrics
      >> show state filter-service/filter-questions/metrics`;

    const want = `
         show state filter-service/filter-questions/metrics
         show state filter-service/filter-questions/metrics`;

    expect(textWithCopyBehavior(have, CopyBehavior.FullText)).toStrictEqual(want);
  });
});
