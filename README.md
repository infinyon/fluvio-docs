<div align="center">
  <h1>InfinyOn Documentation</h1>
  <strong>Omni-docs for InfinyOn Solutions</strong>
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

## Documentation Management

### Drafting new Versions

Versions are drafted using the Docusaurus CLI. To create a new version, run the
following command:

```bash
$ npm run docusaurus docs:version <VERSION>
```

This command will:

- Copy the full `docs/` folder contents into a new `versioned_docs/version-[versionName]/` folder.
- Create a versioned sidebars file based from your current sidebar configuration (if it exists) - saved as `versioned_sidebars/version-[versionName]-sidebars.json`.
- Append the new version number to `versions.json`.

Then make sure to update the versions settings under `docusaurus.config.ts` file.

```ts
lastVersion: '0.11.9', // Last Released Version
versions: {
  current: {
    label: '0.11.10', // Current Version (Draft)
    path: '0.11.10',
  },
},
```

> [!IMPORTANT]
> Run this command when a new Fluvio Version is released in order to freeze the
> documentation for the previous version.
