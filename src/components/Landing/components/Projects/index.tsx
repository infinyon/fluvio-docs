import { GitHubRepository } from "./GitHubRepository";

export function Projects(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center p-6">
      <h3 className="text-2xl font-bold">Projects Using Fluvio</h3>
      <div className="p-4 flex flex-wrap justify-center items-center md:flex-row flex-col gap-6">
        <GitHubRepository owner="Hearth-Industries" name="Hearth" description="Hearth is a LavaLink Alternative written in Rust. That uses 30X less memory, and is almost in a state of feature parity." />
        <GitHubRepository owner="Hearth-Industries" name="Hearth" description="Hearth is a LavaLink Alternative written in Rust. That uses 30X less memory, and is almost in a state of feature parity." />
        <GitHubRepository owner="Hearth-Industries" name="Hearth" description="Hearth is a LavaLink Alternative written in Rust. That uses 30X less memory, and is almost in a state of feature parity." />
        <GitHubRepository owner="Hearth-Industries" name="Hearth" description="Hearth is a LavaLink Alternative written in Rust. That uses 30X less memory, and is almost in a state of feature parity." />
        <GitHubRepository owner="Hearth-Industries" name="Hearth" description="Hearth is a LavaLink Alternative written in Rust. That uses 30X less memory, and is almost in a state of feature parity." />
        <GitHubRepository owner="Hearth-Industries" name="Hearth" description="Hearth is a LavaLink Alternative written in Rust. That uses 30X less memory, and is almost in a state of feature parity." />
      </div>
    </section>
  );
}
