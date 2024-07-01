import ArrowUp from "./icons/ArrowUp";

export function Hero(): JSX.Element {
  return (
    <div className="py-12">
      <div className="p-6">
        <strong className="text-center text-4xl block">
          The backbone of user facing analytics,
          <br />
          operational analytics, and real-time AI/ML
        </strong>
        <p className="text-center py-6">
          Fluvio is a lean and mean distributed streaming engine to build edge
          to core event streaming data flows.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto space-y-6 md:space-y-0 md:space-x-6">
          <a
            href="/docs/fluvio/overview#installing-the-cli"
            className="bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Run on InfinyOn Cloud
          </a>
          <a className="flex text-black dark:text-white px-4 py-2 rounded-md" href="/docs/fluvio/quickstart#install-fluvio">
            Get Started Local
            <figure className="ml-2 flex justify-center items-center m-0 rotate-90">
              <ArrowUp className="h-4 w-4" />
            </figure>
          </a>
        </div>
      </div>
    </div >
  );
}
