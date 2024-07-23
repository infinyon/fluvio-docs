import { ContributeCard } from "./ContributeCard";
import Bug from "./icons/Bug";
import Discord from "./icons/Discord";
import Feature from "./icons/Feature";
import Question from "./icons/Question";

export function Contribute(): JSX.Element {
  return (
    <section className="py-10 max-w-[800px] mx-auto">
      <h2 className="py-8 text-center">Contribute</h2>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:max-w-[1200px] md:grid-cols-2 md:gap-y-16">
        <ContributeCard
          icon={<Feature />}
          title="Request a feature"
          description="Request a feature you would like to see on Fluvio"
          cta="Open an Issue"
          ctaUrl="https://github.com/infinyon/fluvio/issues/new"
        />
        <ContributeCard
          icon={<Bug />}
          title="Report something broken"
          description="Open a bug report you found while using Fluvio"
          cta="File an Issue"
          ctaUrl="https://github.com/infinyon/fluvio/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=%5BBug%5D%3A"
        />
        <ContributeCard
          icon={<Question />}
          title="Share Ideas & Ask Questions"
          description="Create a discussion, ask a question to Fluvio authors"
          cta="Go to Discussions"
          ctaUrl="https://github.com/orgs/infinyon/discussions/new/choose"
        />
        <ContributeCard
          icon={<Discord />}
          title="Chat with us on Discord"
          description="Join our Discord server to chat with the Fluvio community"
          cta="Join Discord Server"
          ctaUrl="https://discordapp.com/invite/bBG2dTz"
        />
      </dl>
    </section>
  );
}
