import { Card } from "./Card";

export function Products(): JSX.Element {
  return (
    <section className="dark:text-white max-w-[1200px] mx-auto">
      <Card imgSrc="/img/landing/fluvio-diagram.png" imgAlt="Fluvio Diagram">
        <h2>Transform, Enrich & Materialize</h2>
        <p>
          Stream data from any source to any destination with Fluvio. Fluvio
          allows you to transform, enrich, and materialize data in real-time.
        </p>
        <div className="space-x-2">
          <a className="home-products-btn" href="/docs/fluvio/quickstart">Go to Fluvio</a>
          <a className="home-products-btn" href="https://infinyon.cloud/ui">Go to Cloud</a>
        </div>
      </Card>
      <Card
        flip
        imgSrc="/img/landing/fluvio-connectors.png"
        imgAlt="Fluvio Connectors"
      >
        <h2>Integrate with any Data Source</h2>
        <p>
          Fluvio Connectors allow you to integrate with any data source. Fluvio
          Connectors are easy to use and can be deployed in minutes.
        </p>
        <a className="home-products-btn" href="/docs/connectors/overview">Go to Connectors</a>
      </Card>
      <Card imgSrc="/img/landing/fluvio-apis.png" imgAlt="Fluvio APIs">
        <h2>Run Everywhere</h2>
        <p>
          Fluvio APIs allow you to run Fluvio on any platform. Fluvio APIs are
          published as packages/crates for Rust, Python, and JavaScript.
        </p>
        <a className="home-products-btn" href="/docs/apis/quickstart">Go to APIs</a>
      </Card>
    </section>
  );
}
