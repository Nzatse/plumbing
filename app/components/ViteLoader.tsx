"use client";

import { useEffect } from "react";

/**
 * Loads both the Vite-built React SPA bundle and modernize.js after
 * Next.js hydration completes. This prevents hydration mismatches caused
 * by either script modifying <div id="root"> before React finishes hydrating.
 */
export default function ViteLoader() {
  useEffect(() => {
    if (!document.querySelector('script[data-modernize]')) {
      const modernize = document.createElement("script");
      modernize.src = "/assets/modernize.js";
      modernize.setAttribute("data-modernize", "1");
      document.body.appendChild(modernize);
    }

    if (!document.querySelector('script[data-vite-bundle]')) {
      const vite = document.createElement("script");
      vite.type = "module";
      vite.crossOrigin = "";
      vite.src = "/assets/index-DjIqP1yX.js";
      vite.setAttribute("data-vite-bundle", "1");
      document.head.appendChild(vite);
    }
  }, []);

  return null;
}
