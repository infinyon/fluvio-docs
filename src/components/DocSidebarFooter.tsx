import React, { useEffect, useState } from "react";
import { useActiveDocContext } from "@docusaurus/plugin-content-docs/client";

export default function DocSidebarFooter() {
  const [currentPlugin, setCurrentPlugin] = useState('default');
  const [activeProduct, setActiveProduct] = useState('fluvio');

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';

    if (isBrowser) {
      const location = window.location.pathname;

      if (location.startsWith('/sdf')) {
        setCurrentPlugin('sdf');
        setActiveProduct('sdf');
      } else {
        setCurrentPlugin('default');
        setActiveProduct('fluvio');
      }
    }
  }, [currentPlugin]);

  const version = useActiveDocContext(currentPlugin);

  return (
    <footer className="font-mono text-xs py-2 px-5">
      {activeProduct}<span className="font-mono">@</span><span className="font-mono">{version?.activeVersion?.label}</span>
    </footer>
  );
}
