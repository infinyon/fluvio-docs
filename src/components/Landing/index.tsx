import Layout from '@theme/Layout';

import { Hero } from './components/Hero';
import { Contribute } from './components/Contribute';
import { GitHubInsights } from './components/GitHubInsights';
import { Products } from './components/Products';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Fluvio Community Documentation"
      description="Documentation for Fluvio, InfinyOn Cloud and everything else Fluvio."
    >
      <main>
        <Hero />
        <Products />
        <Contribute />
        <GitHubInsights />
      </main>
    </Layout>
  );
}
