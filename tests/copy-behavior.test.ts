import { expect, describe, it } from "vitest";

import {
  CopyBehavior,
  textWithCopyBehavior,
} from "../src/functions/copy-behavior";

describe("copy behavior smoke tests", () => {
  it(`removes trailing "$" from line when using "fl" behavior`, () => {
    const have = "$ fluvio topic create my-topic";
    const want = "fluvio topic create my-topic";

    expect(textWithCopyBehavior(have, CopyBehavior.FirstLine)).toStrictEqual(
      want,
    );
  });

  it(`removes trailing ">>" from line when using "fl" behavior`, () => {
    const have = ">> show state filter-service/filter-questions/metrics";
    const want = "show state filter-service/filter-questions/metrics";

    expect(textWithCopyBehavior(have, CopyBehavior.FirstLine)).toStrictEqual(
      want,
    );
  });

  it(`full-text wont remove trailing "$" from line when using "full" behavior`, () => {
    const have = `
      $ mkdir -p /tmp/hello-world
      $ cd /tmp/hello-world
      $ echo "Hello, World!" > hello-world.txt
      $ cat hello-world.txt
      Hello, World!`;

    const want = `
      $ mkdir -p /tmp/hello-world
      $ cd /tmp/hello-world
      $ echo "Hello, World!" > hello-world.txt
      $ cat hello-world.txt
      Hello, World!`;

    expect(textWithCopyBehavior(have, CopyBehavior.FullText)).toStrictEqual(
      want,
    );
  });

  it(`full-text wont remove ">>" from text using "full" behavior`, () => {
    const have = `
      >> show state filter-service/filter-questions/metrics
      >> show state filter-service/filter-questions/metrics`;

    const want = `
      >> show state filter-service/filter-questions/metrics
      >> show state filter-service/filter-questions/metrics`;

    expect(textWithCopyBehavior(have, CopyBehavior.FullText)).toStrictEqual(
      want,
    );
  });

  it(`allows "$" embedded into text`, () => {
    const have = `
      "raw_fact_json":
        json-key: "$"
        value:
          type: "jsonb"
          required: true`;

    expect(textWithCopyBehavior(have, CopyBehavior.FullText)).toStrictEqual(
      have,
    );
  });

  it(`respects identation for yaml-like`, () => {
    const have = `
      apiVersion: 0.5.0
      meta:
        name: filter-example
        version: 0.1.0
        namespace: examples

      config:
        converter: raw

      topics:
        sentences:
          schema:
            value:
              type: string

        questions:
          schema:
            value:
              type: string

      services:
        filter-service:
          sources:
            - type: topic
              id: sentences

          transforms:
            - operator: filter
              run: |
                fn filter_questions(input: String) -> Result<bool> {
                  Ok(input.contains("?"))
                }

          sinks:
            - type: topic
              id: questions`;

    expect(textWithCopyBehavior(have, CopyBehavior.FullText)).toStrictEqual(
      have,
    );
  });

  it(`full-text wont trim single-line snippets with "$"`, () => {
    const have = `$ fluvio produce sentence`;
    const want = `$ fluvio produce sentence`;

    expect(textWithCopyBehavior(have, CopyBehavior.FullText)).toStrictEqual(
      want,
    );
  });

  it(`full-text wont trim single-line snippets with ">>"`, () => {
    const have = `>> show state filter-service/filter-questions/metrics`;
    const want = `>> show state filter-service/filter-questions/metrics`;

    expect(textWithCopyBehavior(have, CopyBehavior.FullText)).toStrictEqual(
      want,
    );
  });

  it(`clears multiline commands for bash ("$") examples`, () => {
    const have = `
$ fluvio cluster create
$ fluvio topic create my-topic
$ fluvio produce my-topic  `; // checks for trailing spaces
    const want = `fluvio cluster create
fluvio topic create my-topic
fluvio produce my-topic`;

    expect(textWithCopyBehavior(have, CopyBehavior.Commands)).toStrictEqual(
      want,
    );
  });

  it(`clears multiline commands for sdf (">>") examples`, () => {
    const have = `
>> show state filter-service/filter-questions/metrics
>> select dataflow wordcount-window-simple
>> exit  `; // checks for trailing spaces
    const want = `show state filter-service/filter-questions/metrics
select dataflow wordcount-window-simple
exit`;

    expect(textWithCopyBehavior(have, CopyBehavior.Commands)).toStrictEqual(
      want,
    );
  });

  it(`supports multiline clearing`, () => {
    const have = `$ fluvio consume questions -Bd
    Are you there?
    A
    Bd
    C`;
    const want = `fluvio consume questions -Bd`;

    expect(textWithCopyBehavior(have, CopyBehavior.Commands)).toStrictEqual(
      want,
    );
  });
});
