
# Writing recommendations

## Linking Recommendations

Docusaurus has multiple methods to resolve internal links

Using `relative file paths` along with `.mdx filename` references
based upon the doc root are the most robust for internal docs linkages.

This is what Docusaurus link documentation says https://docusaurus.io/docs/markdown-features/links (see versioned doc bullet near the bottom)

This repository has multiple doc roots:  /doc for most docs, and /sdf for sdf docs.

A reference link should be made `without` the doc root, but with the folder tree:

To link the hub http-source connector:

```
In footnote link style:

[http-source 2]

...
bottom of doc
[http-source 2]: hub/connectors/inbound/http.mdx


Inline link style:
[http-source](hub/connectors/inbound/http.mdx)

```

## Doc generation flow

Files in `/doc/...` ->  url `localhost:3000/doc/latest/...`

On version release, the release logic copies, `/doc `-> (copy) -> `versioned_docs/version_x.y.z/doc`

Currently with on release the stable (0.11.11) version maps to the following urls

`/versioned_docs/version_0.11.11/doc/fluvio` -> url  `localhost:3000/doc/fluvio`

With future release versions, non-stable versions map to urls as follows:

`/versioned_docs/version_<version>/doc/fluvio` -> url  `localhost:3000/doc/<version>/fluvio`

