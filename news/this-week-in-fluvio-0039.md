---
title: "This Week in Fluvio #39"
date: 2022-07-13
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].

---

## New release
* [Fluvio v0.9.31](https://github.com/infinyon/fluvio/releases/tag/v0.9.31)

## New features
* Add `fluvio connector config <connector-name>`  ([#2464](https://github.com/infinyon/fluvio/pull/2464))
* Add performance counters to producer ([#2424](https://github.com/infinyon/fluvio/issues/2424))

## Performance improvements
* Prefer ExternalIP to InternalIP if configured in kubernetes ([#2448](https://github.com/infinyon/fluvio/pull/2448))
* Move stream publishers to connection-level context ([#2452](https://github.com/infinyon/fluvio/pull/2452))
* Upgrade to fluvio-future 0.4.0 ([#2470](https://github.com/infinyon/fluvio/pull/2470))

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn
