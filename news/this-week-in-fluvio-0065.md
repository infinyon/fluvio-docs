---
title: "This Week in Fluvio #65"
date: 2024-09-16
weight: 20
---
Fluvio is a distributed, programmable streaming platform written in Rust.

---
We released **Fluvio 0.11.12** last week.

## New release
Fluvio **v0.11.12** is now available!

To update you can run `fvm update`

```bash
$ fvm update

info: Updating fluvio stable to version 0.11.12. Current version is 0.11.9.
info: Downloading (1/5): fluvio@0.11.12
info: Downloading (2/5): fluvio-cloud@0.2.26
info: Downloading (3/5): fluvio-run@0.11.12
info: Downloading (4/5): cdk@0.11.12
info: Downloading (5/5): smdk@0.11.12
done: Installed fluvio version 0.11.12
done: Now using fluvio version 0.11.12

```

If you don't have Fluvio in your machine run:

```
curl -fsS https://hub.infinyon.cloud/install/install.sh | bash
```

If you are enjoying Fluvio please share with your friends!

## New features
Notable changes in this new version:

- You can now use `fluvio cluster upgrade` to seamlessly upgrade local clusters to the latest Fluvio version.
- Enhanced feedback for SPU-to-SPU connections during mirroring, with clearer error reporting on failures.
- Fluvio profile export <profile> now works with FLV_PROFILE_PATH, thanks to open source contributor @PanGan21 for help with this fix, and see docs for how this works.
- `cdk build` now defaults to more compatible native targets

## Bug fixes
This release includes several important bug fixes:

- Fixed a file descriptor leak occurring only on Linux.
- Resolved rare concurrency issues in local clusters under high stress.
- Improved error message for incompatible watch API versions.

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
[CHANGELOG]: https://github.com/infinyon/fluvio/blob/v0.11.12/CHANGELOG.md
[When a topic is deleted, connected clients should have their connection closed]: https://github.com/infinyon/fluvio/issues/3836
[Remove localhost from fluvio in favor of 127.0.0.1]: https://github.com/infinyon/fluvio/issues/3866
[Add topic_producer_with_config to the Python Client]: https://github.com/infinyon/fluvio/issues/4159
[Improve fluvio topic describe with additional information]: https://github.com/infinyon/fluvio/issues/3968
[Different default SPU port]: https://github.com/infinyon/fluvio/issues/3739
