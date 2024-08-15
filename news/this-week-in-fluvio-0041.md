---
title: "This Week in Fluvio #41"
date: 2022-08-03
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].

---

## New release
* SmartModule development environment
  * SmartModule developers may use our [container-based development environment](https://github.com/infinyon/fluvio/blob/master/dev-tools/smartmodule.Dockerfile) which contains all the tools required to build their Rust code into WASM
  * Check out our [Dev tools](https://github.com/infinyon/fluvio/blob/master/dev-tools) for more information about how to get started
* Rust crate [fluvio-jolt](https://crates.io/crates/fluvio-jolt)
  * This is a native Rust port of the [Java library of the same name](https://github.com/bazaarvoice/jolt)
  * JSON to JSON transformation where the "specification" for the transform is itself a JSON document
  * Compatible for use in SmartModules

## Feature Highlight
This feature was added in the previous release but was not mentioned in [last week's issue](news/this-week-in-fluvio-0040).

* Support for `at-least-once` and `at-most-once` in the Producer Client. ([#2481](https://github.com/infinyon/fluvio/issues/2481))
  * This feature introduces the notion of **Delivery Semantic** to Fluvio Producer. From now, you can choose in which manner you want
  your records to be transported from the producer to the SPU unit. It's either `at-most-once` guarantee or `at-least-once`.
  The first one is sending without waiting for the response, hence no reaction for errors. The latter one is sending and
  retrying until succeeded (with certain assumptions). Check out more details in
  [Delivery Semantics](/docs/fluvio/concepts/delivery-semantics) section.

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn
