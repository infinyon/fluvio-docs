import { Card } from "./Card";

export function Products(): JSX.Element {
  return (
    <section className="relative pt-14 dark:text-white">
      <Card imgSrc="/img/landing/fluvio-diagram.png" imgAlt="Fluvio Diagram" />
    </section>
  );
}
