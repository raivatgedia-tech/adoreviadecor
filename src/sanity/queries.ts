import { sanityClient, isSanityConfigured } from "./client";
import { resolveImageUrl } from "./image";
import { products as fallbackProducts } from "@/data/products";
import { Product } from "@/types";

const PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt desc) {
  "id": _id,
  name,
  category,
  description,
  shortDescription,
  startingPrice,
  image,
  isCustomizable,
  isBestseller,
  isNew,
  materials,
  customizationOptions,
  deliveryTimeline,
  tags
}`;

type SanityProduct = Omit<Product, "materials" | "tags"> & {
  materials?: string[] | string;
  tags?: string[];
};

/**
 * Products live in Sanity once the site owner connects it (see
 * SANITY_SETUP.md). Until then — or if the fetch ever fails — this falls
 * back to the bundled product list so the site never breaks.
 */
export async function getProducts(): Promise<Product[]> {
  if (!isSanityConfigured || !sanityClient) {
    return fallbackProducts;
  }

  try {
    const data: SanityProduct[] = await sanityClient.fetch(PRODUCTS_QUERY);
    if (!data || data.length === 0) {
      return fallbackProducts;
    }
    return data.map((p) => ({
      ...p,
      image: resolveImageUrl(p.image as any, 600),
      materials: Array.isArray(p.materials) ? p.materials : p.materials ? [p.materials] : [],
      tags: p.tags ?? [],
    })) as Product[];
  } catch (err) {
    console.error("Sanity fetch failed, using fallback product data:", err);
    return fallbackProducts;
  }
}
