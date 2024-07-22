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
        <div className="text-white p-2 absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-600">
          {props.icon}
        </div>
        <a className="text-gray-900 dark:text-gray-100" href={props.ctaUrl}>
          {props.title}
        </a>
      </dt>
    </article>
  );
}
