
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

Files in /doc ->  url doc/latest
On version release, the script copies, /doc -> (copy) -> versioned_docs/version_x.y.z/doc
