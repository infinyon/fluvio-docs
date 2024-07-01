export function GitHubRepository(props: {
  owner: string;
  name: string;
}): JSX.Element {
  return (
    <article>
      <figure>
        <img src="" />
      </figure>
      <a href={`https://github.com/${props.owner}/${props.name}`}>
        <span>{props.owner}</span >
        {`/`}
        <span>{props.name}</span>
      </a>
    </article>
  );
}
