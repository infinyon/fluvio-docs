import Cloud from "./icons/Cloud";
import Local from "./icons/Local";

export function Hero(): JSX.Element {
  return (
    <section className="relative pt-4 dark:text-white">
      <article className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-gray-100">
              Fluvio is a distributed streaming system powered by Rust & WASM
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Maximum efficiency, minimum infrastructure overhead, and intuitive
              developer experience.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <span className="text-lg">Get Started<span aria-hidden="true" className="mx-4">→</span></span>
              <div className="flex justify-between space-x-6">
                <a
                  className="p-2 rounded hover:bg-purple-200 dark:hover:bg-purple-800 hover:text-purple-800 transition-colors delay-75 flex flex-col justify-center items-center text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 dark:hover:text-gray-200"
                  href="/docs/cloud/overview"
                >
                  <Cloud className="w-6 h-6" />
                  Cloud
                </a>
                <a
                  className="p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-800 hover:text-cyan-800 transition-colors delay-75 flex flex-col justify-center items-center text-sm font-semibold text-gray-900 dark:text-gray-200 dark:hover:text-gray-200"
                  href="/docs/fluvio/quickstart#install-fluvio"
                >
                  <Local className="w-6 h-6" />
                  Local
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
