---
title: "This Week in Fluvio #45"
date: 2022-08-31
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

This Week in Fluvio is our weekly newsletter for development updates to [Fluvio open source].

---

## Upcoming deprecation

### `fluvio connector` CLI deprecation
We intend to remove the `fluvio connector` subcommand, and related API from the Fluvio open source project, and migrate the support of managed connectors to [InfinyOn Cloud](https://infinyon.cloud).

We will announce the release to expect this change ahead of time. Currently, we are updating our documentation with equivalent workflows in preparation to support OSS Fluvio users though this migration.

:::note
This is an archival newsletter entry, for the latest on running connectors see docs on the [cdk] cli
:::

Please connect with us in [our Discord channel] or you can email us at [team@infinyon.com](mailto:team@infinyon.com) if there are any questions, concerns, comments, etc.

We'll continue to make updates about this matter until resolved.

## Upcoming InfinyOn Cloud update
We intend to continue support for managed connectors in the CLI in this environment.

Accompanying the removal of the `fluvio connector` CLI will be an update to the `fluvio cloud` CLI.

---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello! Watch videos on our [InfinyOn Youtube Channel]

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions
[InfinyOn Youtube Channel]: https://www.youtube.com/@InfinyOn
