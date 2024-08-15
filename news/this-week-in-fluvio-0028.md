---
title: "This Week in Fluvio #28"
date: 2022-04-13
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].

---

## New release
* [Fluvio v0.9.23](https://github.com/infinyon/fluvio/releases/tag/v0.9.23)

## New features
* Add `TYPE` column to `fluvio connector list` ([#2218](https://github.com/infinyon/fluvio/issues/2218))

## Performance improvements
* Increase default `MAX_FETCH_BYTES` in fluvio client ([#2259](https://github.com/infinyon/fluvio/issues/2259))
* Use `Clap` instead of `StructOpt` for all CLI ([#2166](https://github.com/infinyon/fluvio/issues/2166))

## Bug fixes
* Add `fluvio-channel` to `fluvio update` process ([#2221](https://github.com/infinyon/fluvio/issues/2221))
* Disable versions from displaying in CLI subcommands ([#1805](https://github.com/infinyon/fluvio/issues/1805))
* Re-enable ZSH completions ([#2283](https://github.com/infinyon/fluvio/issues/2283))


## Recent events
We held our webinar on April 12 for Real-time Event Streaming and Data Transformation for Financial Services.

Thanks to everyone who signed up for the event and participated in the Q&A!

For those who missed it, we'll have a link to the recording in a future This Week in Fluvio.

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn
