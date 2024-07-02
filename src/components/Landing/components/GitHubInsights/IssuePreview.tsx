import WarningCircle from "../icons/WarningCircle";

export function IssuePreview(props: {
  id: number;
  title: string;
}): JSX.Element {
  return (
    <article className="flex flex-col justify-between border border-solid border-zinc-200 dark:border-zinc-800 rounded-md p-4 h-32 w-full md:w-1/3 max-w-[300px]">
      <div className="flex">
        <div className="w-14">
          <figure className="m-0 h-6 w-6 text-green-600">
            <WarningCircle className="h-full w-full" />
          </figure>
        </div>
        <div className="text-sm">
          <strong className="pr-2">{props.title}</strong >
          <code>#{props.id}</code>
        </div>
      </div >
      <a className="ml-auto text-sm underline text-black dark:text-white hover:text-black" href={`https://github.com/infinyon/fluvio/issues/${props.id}`} target="_blank">
        Learn more
      </a>
    </article >
  );
}
