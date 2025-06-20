---
title: "This Week in Fluvio #76"
date: 2025-06-12
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

---
We released **Fluvio 0.18.0** last week.

## New release
Fluvio **v0.18.0** is now available!

To update you can run `fvm update`

```bash
$ fvm update

info: Updating fluvio stable to version 0.18.0. Current version is 0.17.3.
info: Downloading (1/5): fluvio@0.18.0
info: Downloading (2/5): fluvio-cloud@0.3.9
info: Downloading (3/5): fluvio-run@0.18.0
info: Downloading (4/5): cdk@0.18.0
info: Downloading (5/5): smdk@0.18.0
done: Installed fluvio version 0.18.0
done: Now using fluvio version 0.18.0

```

If you don't have Fluvio in your machine run:

```
curl -fsS https://hub.infinyon.cloud/install/install.sh | bash
```

If you are enjoying Fluvio please share with your friends!

:::info
Also check out the Stateful Data Flow (SDF) streaming analytics in beta [SDF Examples](https://github.com/infinyon/stateful-dataflows-examples)
:::

## New features & Improvements
This release includes several notable enhancements and fixes:  

- Now Fluvio uses Tokio as the default async runtime!
- All Fluvio crates are now unified under version v0.50.0, ensuring consistent dependency management moving forward.
- Increased metrics granularity for SmartModules.


See the [CHANGELOG] for details

## Good First Issues
We love our open source community contributors. Here are some issues that you could contribute to. All the best.

- [Improve fluvio topic describe with additional information]
- [Different default SPU port]
- [Remove localhost from fluvio in favor of 127.0.0.1]
- [When a topic is deleted, connected clients should have their connection closed]


---

Get in touch with us on [GitHub Discussions] or join [our Discord channel] and come say hello!

See some of the interesting community projects, examples, and utilities in the [Fluvio Community] GitHub org.


For the full list of changes this week, be sure to check out [our CHANGELOG].

[Fluvio open source]: https://github.com/infinyon/fluvio
[our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md
[our Discord channel]: https://discordapp.com/invite/bBG2dTz
[GitHub Discussions]: https://github.com/infinyon/fluvio/discussions

[this form]: https://infinyon.com/request/ss-early-access/
[CHANGELOG]: https://github.com/infinyon/fluvio/blob/v0.18.0/CHANGELOG.md
[When a topic is deleted, connected clients should have their connection closed]: https://github.com/infinyon/fluvio/issues/3836
[Remove localhost from fluvio in favor of 127.0.0.1]: https://github.com/infinyon/fluvio/issues/3866
[Improve fluvio topic describe with additional information]: https://github.com/infinyon/fluvio/issues/3968
[Different default SPU port]: https://github.com/infinyon/fluvio/issues/3739
[Fluvio Community]:  https://github.com/fluvio-community
