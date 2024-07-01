import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { Hero } from './components/Hero';
import { WhyFluvio } from './components/WhyFluvio';
import { Contribute } from './components/Contribute';
import { Projects } from './components/Projects';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Fluvio Community Documentation"
      description="Documentation for Fluvio, InfinyOn Cloud and everything else Fluvio."
    >
      <main>
        <Hero />
        <WhyFluvio />
        <Contribute />
        <Projects />
      </main>
    </Layout>
  );
}
