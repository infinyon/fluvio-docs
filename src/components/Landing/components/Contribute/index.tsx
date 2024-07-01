import { ContributeCard } from "./ContributeCard";

export function Contribute(): JSX.Element {
  return (
    <section className="flex flex-col md:flex-row justify-evenly items-center px-6">
      <ContributeCard title="Request a Feature" description="lorem" image="https://via.placeholder.com/150" />
      <ContributeCard  title="File an Issue" description="lorem" image="https://via.placeholder.com/150" />
      <ContributeCard  title="Ask a Question" description="lorem" image="https://via.placeholder.com/150"/>
    </section >
  );
}
