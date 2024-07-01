import { ContributeCard } from "./ContributeCard";
import Bug from "./icons/Bug";
import Feature from "./icons/Feature";
import Question from "./icons/Question";

export function Contribute(): JSX.Element {
  return (
    <section className="flex flex-col justify-center items-center p-6">
      <h3 className="text-2xl font-bold">Contribute</h3>
      <p className="text-center">
        Fluvio is an open-source project and we welcome contributions from the
        anyone who is willing to participate.
        <br />
        We appreciate your help!
      </p >
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 items-center p-4">
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
          title="Share Ideas and Ask Questions"
          description="Create a discussion, ask a question to Fluvio authors"
          cta="Go to Discussions"
          ctaUrl="https://github.com/orgs/infinyon/discussions/new/choose"
        />
      </div >
    </section>
  );
}
