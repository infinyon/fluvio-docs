import { IssuePreview } from "./IssuePreview";

export function GitHubInsights(): JSX.Element {
  return (
    <section className="flex flex-col justify-evenly items-center p-6">
      <div className="flex flex-col items-center justify-center py-6">
        <h3 className="text-2xl font-bold">Help Wanted Issues</h3>
        <div className="p-4 flex justify-center items-center md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-4">
          <IssuePreview id={3975} title="Add BASE OFFSET to show partition list" />
          <IssuePreview id={3968} title="Improve fluvio topic describe with additional information" />
          <IssuePreview id={3866} title="Remove localhost from fluvio in favor of 127.0.0.1" />
        </div >
      </div >
      <figure>
        <img src="https://contrib.rocks/image?repo=infinyon/fluvio" />
      </figure>
    </section >
  );
}
