import { defineField, defineType } from "sanity";

export const CATEGORIES = [
  { title: "Fridge Magnets", value: "fridge-magnets" },
  { title: "Home & Wall Décor", value: "home-wall-decor" },
  { title: "Desk & Office", value: "desk-office" },
  { title: "Kids Collection", value: "kids-collection" },
  { title: "Personalised Gifts", value: "personalized-gifts" },
  { title: "Bags & Accessories", value: "bags-accessories" },
  { title: "Dining & Kitchen", value: "dining-kitchen" },
  { title: "Resin Collection", value: "resin-collection" },
];

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: CATEGORIES,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      description: "One line — shown on the product card in the catalogue grid.",
      type: "string",
      validation: (Rule) => Rule.required().max(90),
    }),
    defineField({
      name: "description",
      title: "Full Description",
      description: "Shown when a customer taps the product for details.",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startingPrice",
      title: "Starting Price (₹)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "materials",
      title: "Materials",
      description: "e.g. Resin, Gold leaf, Magnetic backing — add as many as apply.",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "customizationOptions",
      title: "Customisation Options",
      description: "What can the customer personalise? e.g. Name, Colour, Size.",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "deliveryTimeline",
      title: "Delivery Timeline",
      description: 'e.g. "5–7 working days"',
      type: "string",
    }),
    defineField({
      name: "isCustomizable",
      title: "Customisable?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "isBestseller",
      title: "Mark as Bestseller",
      description: "Shows a 'Bestseller' badge on this product.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isNew",
      title: "Mark as New",
      description: "Shows a 'New' badge on this product.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description: "Optional — helps with search, not shown to customers.",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
});
