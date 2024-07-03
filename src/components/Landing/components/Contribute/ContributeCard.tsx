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
        {props.title}
      </dt>
      <dd className="m-0 mt-2 text-base leading-7 text-gray-600">
        {props.description}
      </dd>
    </article>
  );
}
