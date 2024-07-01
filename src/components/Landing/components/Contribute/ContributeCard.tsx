import ArrowSquareOut from "../icons/ArrowSquareOut";

export function ContributeCard(props: {
  title: string;
  description: string;
  icon: JSX.Element;
  cta: string;
  ctaUrl: string;
}): JSX.Element {
  return (
    <article className="flex rounded-lg overflow-hidden w-full md:w-1/3 max-w-[360px]">
      <div className="flex justify-center items-start p-2">
        <figure className="text-white flex justify-center items-center bg-purple-600 m-0 overflow-hidden rounded-md h-[42px] w-[42px]">
          {props.icon}
        </figure >
      </div >
      <div className="p-4">
        <span className="text-lg font-bold">{props.title}</span>
        <p className="text-left text-gray-600 dark:text-gray-400 m-0 pb-6">{props.description}</p>
        <a className="flex text-black dark:text-white py-2 rounded-md text-sm" href={props.ctaUrl} target="_blank">
          {props.cta}
          <figure className="ml-2 flex justify-center items-center m-0">
            <ArrowSquareOut className="h-4 w-4" />
          </figure>
        </a>
      </div >
    </article  >
  );
}
