---
title: "This Week in Fluvio #31"
date: 2022-05-04
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].
---

## New release
* [Fluvio v0.9.25](https://github.com/infinyon/fluvio/releases/tag/v0.9.25)

## New features
* Set timestamp in Records while producing. ([#2288](https://github.com/infinyon/fluvio/issues/2288))
* Add `{{time}}` option to `--format` in `fluvio consume` to display record timestamp ([#2345](https://github.com/infinyon/fluvio/issues/2345))

## Performance improvements
* Support `ReadCommitted` isolation in SPU for Produce requests [#2336](https://github.com/infinyon/fluvio/pull/2336)
* Producer must respect ReadCommitted isolation [#2302](https://github.com/infinyon/fluvio/issues/2302)

## Bug fixes
* Improve error messages and add `--fix` option to `fluvio cluster check` to autofix recoverable errors ([#2308](https://github.com/infinyon/fluvio/issues/2308))

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn
