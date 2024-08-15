---
title: "This Week in Fluvio #36"
date: 2022-06-15
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].
---

## New release
* New Kafka Source and Sink connectors
  * [Kafka Source docs]
  * [Kafka Sink docs]

## Developer experience improvements
The Fluvio Java client is now [hosted in Maven Central](https://search.maven.org/artifact/com.infinyon/fluvio), which should reduce the friction for Java developers to install.

## InfinyOn Cloud updates
We've added the capability to query your account's [CPU and memory usage via Cloud CLI]

## New blog post
* [Handling JSON data in Fluvio SmartModules](https://www.infinyon.com/blog/2022/06/smartmodule-json/)
  * Luis ([@morenol](https://github.com/morenol)) walks us through writing a SmartModule to transform JSON to into another form of JSON.
  * This post is Rust beginner friendly!

[Kafka Source docs]: ../docs/hub/connectors/inbound/kafka
[Kafka Sink docs]: ../docs/hub/connectors/outbound/kafka

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn
