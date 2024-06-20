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
