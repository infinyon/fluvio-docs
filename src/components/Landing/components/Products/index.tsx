import { Card } from "./Card";

export function Products(): JSX.Element {
  return (
    <section className="dark:text-white max-w-[1200px] mx-auto">
      <Card imgSrc="/img/landing/fluvio-diagram.png" imgAlt="Fluvio Diagram">
        <h2>Transform, Enrich & Materialize</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="space-x-2">
          <button>Read Fluvio Docs</button>
          <button>Read Fluvio Docs</button>
        </div>
      </Card>
      <Card
        flip
        imgSrc="/img/landing/fluvio-connectors.png"
        imgAlt="Fluvio Connectors"
      >
        <h2>Integrate with any Data Source</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button>Read Connectors Docs</button>
      </Card>
      <Card imgSrc="/img/landing/fluvio-apis.png" imgAlt="Fluvio APIs">
        <h2>Run Everywhere</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button>Read APIs Docs</button>
      </Card>
    </section>
  );
}
