import { GitHubRepository } from "./GitHubRepository";

export function Projects(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center p-6">
      <h3 className="text-2xl font-bold">Projects Using Fluvio</h3>
      <div className="flex justify-center items-center md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-4">
        <GitHubRepository owner="Hearth-Industries" name="Hearth" />
        <GitHubRepository owner="Hearth-Industries" name="Hearth" />
        <GitHubRepository owner="Hearth-Industries" name="Hearth" />
      </div>
    </section>
  );
}
