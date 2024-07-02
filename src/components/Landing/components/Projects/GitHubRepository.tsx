import GitHub from "../icons/GitHub";

export function GitHubRepository(props: {
  owner: string;
  name: string;
  description: string;
}): JSX.Element {
  return (
    <article className="bg-zinc-100 dark:bg-zinc-800 border border-solid border-zinc-200 dark:border-zinc-800 rounded-md p-4 max-h-48 w-full md:w-1/3 max-w-[300px]">
      <div className="flex items-center">
        <figure className="flex justify-center items-center h-6 w-6 m-0 mr-2">
          <GitHub className="text-black dark:text-white" />
        </figure>
        <a className="text-black dark:text-white hover:text-black hover:underline text-lg" href={`https://github.com/${props.owner}/${props.name}`}>
          <span>{props.owner}</span>
          {`/`}
          <span className="font-semibold">{props.name}</span >
        </a >
      </div >
      <p className="truncate">{props.description}</p >
    </article>
  );
}
