<div align="center">
  <h1>InfinyOn Documentation</h1>
  <a href="https://fluvio.io" target="_blank">
    <strong>Omni-docs for InfinyOn Solutions</strong>
  </a>
</div>

## Contributing

### Prerequisites

- NodeJS (v20.11.1 or higher)

### Installation

```bash
$ npm install
```

### Development

Use `npm start` command to run the development server.

```bash
$ npm start
```

> [!NOTE]
> The Search support is not available when running for development, if you want
> to test the search functionality, you need to run the build and serve the
> build directory.

**Build Test**

Build the solution for publishing and then serve bundle files using a static server.

```bash
$ npm run build && npm run serve
```

The `build` command generates static content into the `build` directory and
can be served using any static contents hosting service.

### Create Versions

Theres 2 sets of docs available in this repo that are versioned:

- `fluvio`: The main documentation for Fluvio, which lives on `docs` dir
- `sdf`: The documentation for SDF, which lives on `sdf` dir

Doc | Version Command
--- | ---
`fluvio` | `npm run docusaurus docs:version <VERSION>`
`sdf` | `npm run docusaurus docs:version:sdf <VERSION>`

## Release and Publish

In order to release a version and publish it you need to run:

```bash
./bin/release
```

This will tag current version, push the tag to the repository, which triggers a
Release process and a Publish process.

### Environments

Theres two environments for the documentation:

1. `Production`: The production environment is the default environment, it
   contains the latest stable version of the documentation. This environment is
   released when tagging a version.

2. `Nightly`: The nightly environment is the development environment, it
   contains the latest changes merged into the `main` branch.

## Dev tooling

If you are analyzing broken links, you can optionally use some external
link analyzers.  The staps are tasks in the `Justfile`.  This uses
the just task runner.

On macos: `brew install just`, on debian/ubuntu based linux: `apt install just`
Other environments https://github.com/casey/just#packages

`just` will list targets,

`just lint` will build the full static site and generate a hyperlink.log file containing broken links.