export function Card(props: {
  children: React.ReactNode;
  flip?: boolean;
  imgSrc: string;
  imgAlt: string;
}): JSX.Element {
  const cardClass = ['py-8', 'flex', 'flex-col', 'md:flex-row', 'md:gap-6', props.flip ? 'md:flex-row-reverse' : 'md:flex-row'];

  return (
    <article className={cardClass.join(' ')}>
      <figure className="bg-gray-50 dark:bg-zinc-900 border border-solid border-gray-100 dark:border-zinc-950 rounded flex items-center justify-center p-6 md:py-12 w-full md:w-[500px]">
        <img src={props.imgSrc} alt={props.imgAlt} />
      </figure>
      <div className="w-full md:w-8/12 p-6">
        {props.children}
      </div>
    </article>
  );
}
