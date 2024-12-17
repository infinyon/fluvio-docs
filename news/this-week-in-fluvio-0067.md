---
title: "This Week in Fluvio #67"
date: 2024-12-17
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

---
We released **Fluvio 0.14.0** last week.

## New release
Fluvio **v0.14.0** is now available!

To update you can run `fvm update`

```bash
$ fvm update

info: Updating fluvio stable to version 0.14.0. Current version is 0.12.1.
info: Downloading (1/5): fluvio@0.14.0
info: Downloading (2/5): fluvio-cloud@0.2.26
info: Downloading (3/5): fluvio-run@0.14.0
info: Downloading (4/5): cdk@0.14.0
info: Downloading (5/5): smdk@0.14.0
done: Installed fluvio version 0.14.0
done: Now using fluvio version 0.14.0

```

If you don't have Fluvio in your machine run:

```
curl -fsS https://hub.infinyon.cloud/install/install.sh | bash
```

If you are enjoying Fluvio please share with your friends!

:::info
Also check out the Stateful Data Flow (SDF) streaming analytics in beta [SDF Examples](https://github.com/infinyon/stateful-dataflows-examples)
:::

## New features
Notable changes in this new version:

- Added graceful shutdown for connectors, ensuring they finish the process of the messages before shutting down.
- Changed the default log level to `info` for CDK connector deployment, providing clearer deployment insights.
- Expanded support for the new organization features on Fluvio Cloud, enhancing functionality for managing organizations.

## Bug fixes
This release resolves important issues:

- Fixed the sorting order in the `fluvio profile list` command output.
- Improved connector deployment by checking for existing connectors and preventing duplicates with the same name.

See the [CHANGELOG] for details

## Good First Issues
We love our open source community contributors. Here are some issues that you could contribute to. All the best.

- [Profiles in alphabetical order by name]
- [Improve fluvio topic describe with additional information]
- [Different default SPU port]


---

Get in touch with us on [GitHub Discussions] or join [our Discord channel] and come say hello!

See some of the interesting community projects, examples, and utilities in the [Fluvio Community] GitHub org.


For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[GitHub Discussions]: https://github.com/infinyon/fluvio/discussions

[this form]: https://infinyon.com/request/ss-early-access/
[CHANGELOG]: https://github.com/infinyon/fluvio/blob/v0.14.0/CHANGELOG.md
[When a topic is deleted, connected clients should have their connection closed]: https://github.com/infinyon/fluvio/issues/3836
[Remove localhost from fluvio in favor of 127.0.0.1]: https://github.com/infinyon/fluvio/issues/3866
[Profiles in alphabetical order by name]: https://github.com/infinyon/fluvio/issues/4246
[Improve fluvio topic describe with additional information]: https://github.com/infinyon/fluvio/issues/3968
[Different default SPU port]: https://github.com/infinyon/fluvio/issues/3739
[Fluvio Community]:  https://github.com/fluvio-community
