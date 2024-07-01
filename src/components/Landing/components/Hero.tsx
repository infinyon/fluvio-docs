export function Hero(): JSX.Element {
  return (
    <div>
      <div className="p-6">
        <p className="text-2xl text-center">
          Fluvio is a lean and mean distributed streaming engine to build edge
          to core event streaming data flows.
          <br />
          It's the backbone of user facing analytics, operational analytics,
          and real-time AI/ML
        </p>
        <div className="flex justify-center items-center mx-auto space-x-6">
          <a className="bg-purple-500 text-white px-4 py-2 rounded-md" href="/docs/fluvio/quickstart#install-fluvio">
            Get Started Local
          </a>
          <a
            href="/docs/fluvio/overview#installing-the-cli"
            className="bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Run on InfinyOn Cloud
          </a>
        </div>
      </div>
    </div>
  );
}
