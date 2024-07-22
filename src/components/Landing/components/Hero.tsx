import ArrowUp from "./icons/ArrowUp";

export function Hero(): JSX.Element {
  return (
    <section className="relative pt-14 dark:text-white">
      <figure
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </figure>
      <article className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-100">
              Fluvio is built from the ground up in Rust and Web Assembly
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Maximum efficiency, minimum infrastructure overhead, and intuitive
              developer experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                className="hover:text-white hover:no-underline rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="https://fluvio-docs.pages.dev/docs/fluvio/overview#installing-the-cli"
                target="_blank"
              >
                Run on InfinyOn Cloud
              </a>
              <a
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200"
                href="/docs/fluvio/quickstart#install-fluvio"
              >
                Get Started Local <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="p-12">
          <div className="bg-indigo-100 dark:bg-indigo-800 border-2 border-solid border-indigo-600 mx-auto rounded-md flex justify-center items-center p-4 w-11/12 md:w-[400px]">
            <a
              className="flex flex-col md:flex-row items-center hover:no-underline"
              href="https://gitHub.com/infinyon/fluvio/"
              target="_blank"
            >
              <span className="mr-2 mb-2 md:mb-0 dark:text-white">
                Give us a start on GitHub!
              </span>
              <img
                src="https://img.shields.io/github/stars/infinyon/fluvio?style=social"
                alt="GitHub stars"
              />
            </a>
          </div>
        </div>
      </article>
      <figure
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </figure>
    </section>
  );
}
