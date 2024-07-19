import React from "react";
import Logo from "@theme/Logo";

export default function NavbarLogo(): JSX.Element {
  return (
    <div className="flex items-center mr-4">
      <Logo
        className="navbar__brand mr-0"
        imageClassName="navbar__logo"
        titleClassName="navbar__title text--truncate"
      />
      <span className="text-red text-xs border border-solid py-0.5 px-1 rounded-md">
        Docs
      </span>
    </div>
  );
}
