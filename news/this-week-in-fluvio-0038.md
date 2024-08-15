---
title: "This Week in Fluvio #38"
date: 2022-07-06
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].

---

## New release
* [Fluvio v0.9.30](https://github.com/infinyon/fluvio/releases/tag/v0.9.30)

## New features
* Re-allow string, dictionaries and lists as options to `parameters` section in connector yaml. ([#2446](https://github.com/infinyon/fluvio/issues/2446))

## Bug fixes
* Fix issue in producer when sending more than one batch in a request ([#2443](https://github.com/infinyon/fluvio/issues/2443))
* Fix bug in `last_partition_offset` update when handling smartmodules on SPU ([#2432](https://github.com/infinyon/fluvio/pull/2432))

## Developer experience improvements
* Improve CLI error output when log_dir isn't writable ([#2425](https://github.com/infinyon/fluvio/pull/2425))

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn
