export function GitHubRepository(props: {
  owner: string;
  name: string;
}): JSX.Element {
  return (
    <article className="border border-solid border-gray-100 rounded-md p-4 h-20 w-full md:w-1/3 max-w-[300px]">
      <a href={`https://github.com/${props.owner}/${props.name}`}>
        <span>{props.owner}</span >
        {`/`}
        <span>{props.name}</span>
      </a>
    </article>
  );
}
