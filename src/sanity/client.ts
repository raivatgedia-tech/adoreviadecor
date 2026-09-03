import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

// `isSanityConfigured` is false until the site owner adds real env vars —
// every data-fetching function checks this and falls back to the bundled
// static product list, so the site works before and after Sanity is set up.
export const isSanityConfigured = Boolean(projectId);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // fast, cached reads — fine for a public catalogue
    })
  : null;
