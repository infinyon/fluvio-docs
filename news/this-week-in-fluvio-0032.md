---
title: "This Week in Fluvio #32"
date: 2022-05-11
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].

---

## New release
* [Fluvio v0.9.26](https://github.com/infinyon/fluvio/releases/tag/v0.9.26)

## Performance improvements
* In the previous week, we added in [#2302](https://github.com/infinyon/fluvio/issues/2302) an ability to specify for Consumers
and Producers which level of isolation to use. Isolation, basically, is a trade-off between latency and guarantees. If your workload
needs low latency, but you can tolerate some losses, `ReadUncommitted` is recommended option for you. An alternative is
`ReadCommitted` - latency includes replication but data consistency is stronger. Check out
[Data Consistency](/docs/fluvio/concepts/data-consistency) for more details.

## Bug fixes
* Increase default `STORAGE_MAX_BATCH_SIZE` ([#2342](https://github.com/infinyon/fluvio/issues/2342))

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn
