import Layout from '@theme/Layout';

import { Hero } from './components/Hero';
import { WhyFluvio } from './components/WhyFluvio';
import { Contribute } from './components/Contribute';
import { GitHubInsights } from './components/GitHubInsights';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Fluvio Community Documentation"
      description="Documentation for Fluvio, InfinyOn Cloud and everything else Fluvio."
    >
      <main>
        <Hero />
        <WhyFluvio />
        <Contribute />
        <GitHubInsights />
      </main>
    </Layout>
  );
}
