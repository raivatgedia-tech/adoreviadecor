export type ProductCategory =
  | "fridge-magnets"
  | "home-wall-decor"
  | "desk-office"
  | "kids-collection"
  | "personalized-gifts"
  | "bags-accessories"
  | "dining-kitchen"
  | "resin-collection";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  shortDescription: string;
  startingPrice: number;
  image: string;
  images?: string[];
  isCustomizable: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  materials: string[];
  customizationOptions?: string[];
  deliveryTimeline: string;
  tags: string[];
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  type: "resin" | "kids" | "seasonal";
  includes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
  avatar?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "customization" | "pricing" | "shipping" | "delivery" | "bulk" | "workshops";
}
