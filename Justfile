default:
	just -l

setup:
	cargo binstall hyperlink # install bad link checker

# dev service build for quick preview
start:
	npm start

# this foldoes a full build w/ search plugin index build
build: clean
	npm run build

clean:
	rm -f hyperlink.log
	rm -rf build
	npm run clear
	# note running this need clean to update the status, otherwise docusaurus
	# often does not refresh warnings on cached docs

very-clean: clean
	rm -rf .docusaurus

# should do a build (or npm run build)
linkcheck:
	hyperlink \
	 	--check-anchors \
		./build | tee hyperlink.log

# more info, but sometimes matches up md sources incorrectly
lc2:
	hyperlink \
		--sources ./docs \
		./build/docs | tee hyperlink.log

# alternate view
lc3:
	hyperlink \
	 	--check-anchors \
		--sources ./news \
		./build | tee hyperlink.log

lint: build
	sleep 1
	just linkcheck


resync-ver:
	rm -rf versioned_docs/version-0.11.11
	rsync -aurv docs/ versioned_docs/version-0.11.11

sync-ver:
	rsync -aurv docs/ versioned_docs/version-0.11.11


[Fluvio open source]: https://github.com/infinyon/fluvio
[Kubernetes documentation]: ../docs/fluvio/concepts/advanced/kubernetes
[`eyre`]: https://github.com/yaahc/eyre
[full source code for this example on GitHub]: https://github.com/infinyon/fluvio/tree/d63e3e2569e4d64a098e5c2189ac68e6e9cd2670/crates/fluvio-smartmodule/examples/map_double

[check out our CHANGELOG]: https://github.com/infinyon/fluvio/blob/master/CHANGELOG.md

[owned-builder]: https://docs.rs/derive_builder/0.10.2/derive_builder/#owned-aka-consuming
[mutable-builder]: https://docs.rs/derive_builder/0.10.2/derive_builder/#mutable-aka-non-consuming-recommended
