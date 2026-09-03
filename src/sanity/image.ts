import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

// Minimal shape of a Sanity image field — avoids depending on the full
// `sanity` package (which requires React 19) just for this one type.
type SanityImageRef = { asset?: { _ref?: string; _id?: string } } | Record<string, unknown>;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/**
 * Products can come from Sanity (image is a Sanity asset reference object)
 * or from the static fallback data (image is already a plain URL string).
 * This handles both so components never need to care which source they got.
 */
export function resolveImageUrl(image: SanityImageRef | string | undefined, width = 600): string {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (!builder) return "";
  return builder.image(image as any).width(width).auto("format").url();
}
