import React from "react";

export default function Header() {
  return (
    <header
      style={{ borderBottom: "1px solid #ddd" }}
      className="py-2 bg-gray-50 dark:bg-zinc-800 dark:!border-transparent flex justify-between items-center px-4"
    >
      <a
        className="h-full flex flex-col justify-center items-center"
        href="https://infinyon.com"
        target="_blank"
      >
        <img
          src="/img/infinyon-with-text.svg"
          className="dark:hidden"
          height={24}
        />
        <img
          src="/img/infinyon-with-text-white.svg"
          className="hidden dark:inline-block"
          height={24}
        />
      </a>
      <div className="hidden md:inline-block">
        <span className="text-sm">
          Fluvio <strong>v0.11.9</strong> has been released!{" "}
          Update using{" "}<code>fvm update</code>!
        </span>
      </div >
      <a
        className="btn btn-secondary btn-thin"
        target="_blank"
        href="https://infinyon.cloud/ui"
      >
        Login to InfinyOn Cloud
      </a>
    </header>
  );
}
