export function Card(props: {
  children: React.ReactNode;
  flip?: boolean;
  imgSrc: string;
  imgAlt: string;
}): JSX.Element {
  const cardClass = ['py-8', 'px-4', 'flex', 'flex-col', 'md:flex-row', 'md:gap-6', props.flip ? 'md:flex-row-reverse' : 'md:flex-row'];

  return (
    <article className={cardClass.join(' ')}>
      <figure className="m-0 bg-gray-50 dark:bg-zinc-900 border border-solid border-gray-100 dark:border-zinc-950 rounded flex items-center justify-center my-4 w-11/12 md:max-w-[500px]">
        <img src={props.imgSrc} alt={props.imgAlt} className="w-full" />
      </figure>
      <div className="w-full md:w-/12 p-6">
        {props.children}
      </div>
    </article>
  );
}
