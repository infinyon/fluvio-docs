---
title: "This Week in Fluvio #49"
date: 2022-11-29
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].

---

## New release

* [Fluvio v0.10.1](https://github.com/infinyon/fluvio/releases/tag/v0.10.1)
* [Kafka outbound connector v0.3.1]

## New features

* [Chaining support](smartmodules/core-concepts#chaining-with-cli)
  * Producer: ([#2753](https://github.com/infinyon/fluvio/pull/2753))
  * Consumer: ([#2759](https://github.com/infinyon/fluvio/pull/2759))
  * SMDK: ([#2784](https://github.com/infinyon/fluvio/pull/2784))
  * Fluvio CLI:  ([#2812](https://github.com/infinyon/fluvio/pull/2812))

SmartModule transformation chaining was [introduced in the last release](/news/this-week-in-fluvio-0048#smartmodule-chaining-preview) as a preview with our [SQL outbound connector]

In this release, support is now available to the Rust client, `fluvio` and `smdk` CLI, and connectors wit the keyword `transforms`.

To get familiar, check out the example configs from our tutorials.

* [HTTP to SQL tutorial]
* [MQTT to SQL tutorial]
* Kafka outbound connector now supports SSL - For more info check out the [Kafka outbound connector docs]

## Bug fixes

* [Validate WASM payload before packaging](https://github.com/infinyon/fluvio/pull/2760)

## Developer experience improvements
* Make behavior with producing records from file consistent between `fluvio` and `smdk` - ([#2756](https://github.com/infinyon/fluvio/pull/2756))
* [New docs for our Certified SmartModule: Jolt]

[Chaining support]:../docs/smartmodules/core-concepts#chaining-with-cli

[HTTP to SQL tutorial]: ../docs/fluvio/tutorials/http-to-sql
[MQTT to SQL tutorial]: ../docs/fluvio/tutorials/mqtt-to-sql

[Kafka outbound connector v0.3.1]: ../docs/hub/connectors/outbound/kafka
[SQL outbound connector]: ../docs/hub/connectors/outbound/sql
[Kafka outbound connector docs]: ../docs/hub/connectors/outbound/kafka
[New docs for our Certified SmartModule: Jolt]: ../docs/hub/smartmodules/jolt

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn



