default:
	just -l

setup:
	cargo binstall hyperlink # install bad link checker

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
		--sources . \
		./build | tee hyperlink2.log



lint: build
	sleep 1
	just linkcheck


sync-ver:
	rsync -aurv docs/ versioned_docs/version-0.11.11

