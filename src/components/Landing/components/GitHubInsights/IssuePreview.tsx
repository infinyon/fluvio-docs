export function IssuePreview(props: {
  id: number;
  title: string;
}): JSX.Element {
  return (
    <article className="border border-solid border-gray-100 rounded-md p-4 h-32 w-full md:w-1/3">
      <strong className="pr-2">{props.title}</strong >
      <code>#{props.id}</code>
    </article >
  );
}
