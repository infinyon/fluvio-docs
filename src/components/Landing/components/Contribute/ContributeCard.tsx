import ArrowSquareOut from "../icons/ArrowSquareOut";

export function ContributeCard(props: {
  title: string;
  description: string;
  icon: JSX.Element;
  cta: string;
  ctaUrl: string;
}): JSX.Element {
  return (
    <article className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="text-white p-2 absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          {props.icon}
        </div>
        <span className="text-gray-900 dark:text-gray-100">
          {props.title}
        </span>
      </dt>
      <dd className="m-0 mt-2 text-base leading-7 text-gray-600">
        <p className="text-gray-600 dark:text-gray-300">
          {props.description}
        </p >
        <a
          href={props.ctaUrl}
          className="text-sm underline text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 hover:text-indigo-900 flex items-center mt-2">
          {props.cta}
        </a>
      </dd>
    </article>
  );
}
