---
title: "This Week in Fluvio #47"
date: 2022-09-17
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].

---

## Progress report:

### `fluvio connector` CLI deprecation
This is update #3 since we announced the deprecation of the `fluvio connector` subcommand.

We are in process of documenting the migration strategy for our Open Source users to continue managing their connectors locally using [`connector-run`](https://github.com/infinyon/fluvio-connectors/blob/main/rust-connectors/utils/connector-run/src/main.rs).

:::note
This is an archival newsletter entry, for the latest on running connectors see docs on the [cdk] cli
:::

If you're interested in trying out the bleeding edge, you can run these commands to build the `connector-run` CLI, and run your connector in Kubernetes using your existing connector config file:

```shell
$ git clone https://github.com/infinyon/fluvio-connectors.git
$ cd fluvio-connectors
$ cargo run --release --bin connector-run -- apply --config /path/to/your/connector.yml
```

Please connect with us in [our Discord channel] or you can email us at [team@infinyon.com](mailto:team@infinyon.com) if there are any questions, concerns, comments, etc.

We'll continue to make updates about this matter until resolved.


## Recent events

The InfinyOn team spent the week in NYC for an in-person meetup to plan for the future.

For some of us, this was the first time meeting face-to-face. This was the first time we were all in the same room [since our last event last year](this-week-in-fluvio-0010.md)!

![A group photo of the InfinyOn team standing in from of the entrance of the NYC Google office at Pier 57](images/0047/team-photo-at-google.jpg)

We're not yet ready to talk about it, but we are looking forward to the reveal of this collaboration. Stay tuned!

[cdk]: ../docs/fluvio/cli/cdk

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn
