export function Card(props: {
  imgSrc: string;
  imgAlt: string;
}): JSX.Element {
  return (
    <article>
      <figure className="h-[500px] w-[500px]">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </figure>
    </article>
  );
}
