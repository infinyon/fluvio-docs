import { GitHubRepository } from "./GitHubRepository";

export function Projects(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <h3>Projects using Fluvio</h3>
      <div className="flex justify-evenly items-center">
        <GitHubRepository owner="Hearth-Industries" name="Hearth" />
        <GitHubRepository owner="Hearth-Industries" name="Hearth" />
        <GitHubRepository owner="Hearth-Industries" name="Hearth" />
      </div>
    </section>
  );
}
