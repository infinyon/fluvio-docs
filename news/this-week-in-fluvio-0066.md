---
title: "This Week in Fluvio #66"
date: 2024-11-18
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

---
We released **Fluvio 0.13.0** last week.

## New release
Fluvio **v0.13.0** is now available!

To update you can run `fvm update`

```bash
$ fvm update

info: Updating fluvio stable to version 0.13.0. Current version is 0.12.1.
info: Downloading (1/5): fluvio@0.13.0
info: Downloading (2/5): fluvio-cloud@0.2.26
info: Downloading (3/5): fluvio-run@0.13.0
info: Downloading (4/5): cdk@0.13.0
info: Downloading (5/5): smdk@0.13.0
done: Installed fluvio version 0.13.0
done: Now using fluvio version 0.13.0

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

- The parameter `max-request-size` was added to the produce config and is recommended to use instead of `batch-size` for controlling request sizes.
- Added the `--partition` and `--mirror` arguments to the `fluvio produce` command, enabling you to specify the partition or mirror where records should be produced.

## Bug fixes
This release includes several important bug fixes:

- Resolved an issue where records exceeding the batch size caused unexpected behavior.
- Enhanced the reliability of linking parent objects on local mode to ensure consistent relationships.
- Fixed compatibility issues with older versions of the Fluvio CLI, ensuring seamless usage across versions.

See the [CHANGELOG] for details

## Good First Issues
We love our open source community contributors. Here are some issues that you could contribute to. All the best.

- [Add topic_producer_with_config to the Python Client]
- [Improve fluvio topic describe with additional information]
- [Different default SPU port]


---

Get in touch with us on [Github Discussions] or join [our Discord channel] and come say hello!

For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[Github Discussions]: https://github.com/infinyon/fluvio/discussions

[this form]: https://infinyon.com/request/ss-early-access/
[CHANGELOG]: https://github.com/infinyon/fluvio/blob/v0.13.0/CHANGELOG.md
[When a topic is deleted, connected clients should have their connection closed]: https://github.com/infinyon/fluvio/issues/3836
[Remove localhost from fluvio in favor of 127.0.0.1]: https://github.com/infinyon/fluvio/issues/3866
[Add topic_producer_with_config to the Python Client]: https://github.com/infinyon/fluvio/issues/4159
[Improve fluvio topic describe with additional information]: https://github.com/infinyon/fluvio/issues/3968
[Different default SPU port]: https://github.com/infinyon/fluvio/issues/3739
