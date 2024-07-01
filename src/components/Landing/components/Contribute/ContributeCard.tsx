export function ContributeCard(props: {
  title: string;
  description: string;
  image: string;
}): JSX.Element {
  return (
    <article>
      <figure className="flex flex-col justify-center items-center">
        <img alt={`Illustration ${props.title}`} src={props.image} />
        <figcaption className="flex flex-col justify-center items-center py-4">
          <h2>{props.title}</h2>
          <p className="text-center">
            {props.description}
          </p >
        </figcaption >
      </figure >
    </article >
  );
}
