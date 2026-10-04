/**
 * Run once, after Sanity is connected, to populate the dataset with the
 * products already on the site — so switching to Sanity doesn't start
 * from an empty catalogue.
 *
 * Usage:
 *   1. Fill in .env.local (see .env.local.example) — this needs
 *      SANITY_API_TOKEN specifically (an Editor token from
 *      sanity.io/manage → your project → API → Tokens), not just the
 *      public project ID.
 *   2. npm run seed
 *
 * Safe to re-run — it skips any product whose name already exists in
 * the dataset instead of creating duplicates.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@sanity/client";
import { products } from "../src/data/products";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local — see .env.local.example."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function uploadImageFromUrl(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch image: ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  return client.assets.upload("image", buffer, {
    filename: url.split("/").pop()?.split("?")[0] || "product.jpg",
  });
}

async function seed() {
  const existing = await client.fetch<string[]>(`*[_type == "product"].name`);
  const existingSet = new Set(existing);

  let created = 0;
  let skipped = 0;

  for (const p of products) {
    if (existingSet.has(p.name)) {
      skipped++;
      continue;
    }

    console.log(`Uploading image for "${p.name}"...`);
    const asset = await uploadImageFromUrl(p.image);

    await client.create({
      _type: "product",
      name: p.name,
      category: p.category,
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
      shortDescription: p.shortDescription,
      description: p.description,
      startingPrice: p.startingPrice,
      materials: p.materials,
      customizationOptions: p.customizationOptions || [],
      deliveryTimeline: p.deliveryTimeline,
      isCustomizable: p.isCustomizable,
      isBestseller: p.isBestseller || false,
      isNew: p.isNew || false,
      tags: p.tags,
    });

    created++;
    console.log(`Created "${p.name}"`);
  }

  console.log(`\nDone. Created ${created}, skipped ${skipped} (already existed).`);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
