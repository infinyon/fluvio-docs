import ArrowSquareOut from "../icons/ArrowSquareOut";

export function ContributeCard(props: {
  title: string;
  description: string;
  icon: JSX.Element;
  cta: string;
  ctaUrl: string;
}): JSX.Element {
  return (
    <article className="px-4 flex justify-center items-center">
      <dt className="grid grid-cols-[100px,auto] w-full md:w-[280px]">
        <figure className="mx-auto m-0 col-start-1 col-end-1 text-white p-2 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-600">
          {props.icon}
        </figure>
        <a className="flex items-center col-start-2 col-end-2 text-gray-900 dark:text-gray-100" href={props.ctaUrl}>
          {props.title}
        </a>
      </dt>
    </article>
  );
}
