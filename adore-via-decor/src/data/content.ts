import { Testimonial, Workshop, FAQ } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t-001",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review:
      "Suhani made a floral resin name plate for our new home and it is absolutely breathtaking. The quality is outstanding — every single flower is placed so thoughtfully. Our neighbours stop to admire it every time. Will definitely be ordering again!",
    product: "Floral Resin Name Plate",
  },
  {
    id: "t-002",
    name: "Rahul & Ananya Mehta",
    location: "Pune",
    rating: 5,
    review:
      "We ordered our wedding welcome board and the Mr & Mrs set together. Both came out even more beautiful than we imagined. The calligraphy was flawless. Suhani was so patient with our customization requests. Every guest at our wedding wanted to know where it came from!",
    product: "Wedding Welcome Board",
  },
  {
    id: "t-003",
    name: "Kavitha Nair",
    location: "Bengaluru",
    rating: 5,
    review:
      "I gifted a photo resin keepsake to my mother on her birthday and she burst into tears — happy ones! The clarity of the resin, the way the photo looks inside it… it's magical. Suhani delivered it a day early too. Perfect in every way.",
    product: "Photo Resin Keepsake",
  },
  {
    id: "t-004",
    name: "Aishwarya Pillai",
    location: "Chennai",
    rating: 5,
    review:
      "The resin coaster set I ordered is genuinely gallery-worthy. I put them on my coffee table and every single visitor picks them up to admire them. The ocean theme is so serene and the quality is unlike anything I've seen on Instagram shops.",
    product: "Resin Coasters Set",
  },
  {
    id: "t-005",
    name: "Neha & Arjun Singhania",
    location: "Delhi",
    rating: 5,
    review:
      "Ordered 80 wedding favours for our reception — each guest got a personalised mini resin piece. Suhani handled the entire bulk order so professionally, kept us updated at every step, and delivered ahead of schedule. All 80 pieces were PERFECT. Highly recommend for wedding orders.",
    product: "Wedding Guest Favour Set",
  },
  {
    id: "t-006",
    name: "Ritika Agarwal",
    location: "Mumbai",
    rating: 5,
    review:
      "Attended the resin art workshop and it was the best Saturday I've had in years! Suhani is an incredible teacher — patient, encouraging, and so knowledgeable. I came home with my own resin tray that I'm genuinely proud of. Already signed up my friends for the next one.",
    product: "Resin Workshop",
  },
  {
    id: "t-007",
    name: "Smita Joshi",
    location: "Thane",
    rating: 5,
    review:
      "I ordered the Diwali diya set last festive season and they sold out so fast this year — I made sure to pre-order much earlier! The shimmer in these diyas is just gorgeous when lit. Makes the entire home feel so festive and premium. A regular annual order from my side.",
    product: "Diwali Resin Diya Set",
  },
  {
    id: "t-008",
    name: "Deepak Verma",
    location: "Hyderabad",
    rating: 5,
    review:
      "Placed a corporate gifting order for Diwali — 50 personalised resin name plates for our team. The quality was exceptional, the turnaround was fast despite the bulk, and the packaging was premium. Our employees loved their gifts. Will definitely be Adore via Décor's corporate partner going forward.",
    product: "Bulk Corporate Order",
  },
];

export const workshops: Workshop[] = [
  {
    id: "w-001",
    title: "Resin Art Workshop",
    description:
      "Learn the fundamentals of resin art in this hands-on 3-hour workshop. Create your own serving tray or wall art from scratch. All materials provided — no experience needed!",
    duration: "3 hours",
    price: 1499,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80",
    type: "resin",
    includes: [
      "All resin materials & tools",
      "Guided instruction by Suhani",
      "Take-home artwork",
      "Refreshments",
      "Certificate of participation",
    ],
  },
  {
    id: "w-002",
    title: "Kids DIY Decor Workshop",
    description:
      "A fun, safe, and creative workshop for kids aged 6–14. They'll paint, decorate, and create their own personalised home décor piece to take home and treasure.",
    duration: "2 hours",
    price: 799,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    type: "kids",
    includes: [
      "All child-safe craft materials",
      "Personalised activity kit",
      "Guided by our art educators",
      "Take-home craft piece",
      "Snacks",
    ],
  },
  {
    id: "w-003",
    title: "Seasonal Festive Workshop",
    description:
      "Special limited-edition workshops for Diwali, Christmas, and other festivals. Create festive resin décor, diyas, ornaments, and gift items in a celebratory atmosphere.",
    duration: "2.5 hours",
    price: 1199,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
    type: "seasonal",
    includes: [
      "Festive resin materials",
      "2 take-home creations",
      "Festive snacks & drinks",
      "Gift wrapping for your pieces",
    ],
  },
];

export const faqs: FAQ[] = [
  {
    id: "f-001",
    question: "Can I fully customise a product?",
    answer:
      "Absolutely! Almost every product we offer is fully customisable. You can customise the name, color palette, design elements, size, and more. Once you reach out on WhatsApp, Suhani will discuss your vision and suggest the best options to bring it to life.",
    category: "customization",
  },
  {
    id: "f-002",
    question: "Do you share mockups before production?",
    answer:
      "Yes — for personalised and custom orders, we share a digital mockup or design preview for your approval before we begin production. We only proceed once you're 100% happy with the design.",
    category: "customization",
  },
  {
    id: "f-003",
    question: "What is the starting price for name plates?",
    answer:
      "Name plates start from ₹549. Pricing varies based on size, design complexity, materials used, and customisation level. We'll provide an exact quote once you share your requirements on WhatsApp.",
    category: "pricing",
  },
  {
    id: "f-004",
    question: "Do you offer bulk discounts?",
    answer:
      "Yes! We offer attractive bulk pricing for corporate orders, wedding favours, and large event gifting. The more you order, the better the per-piece price. Contact us on WhatsApp with your quantity and requirements for a custom quote.",
    category: "pricing",
  },
  {
    id: "f-005",
    question: "Do you ship across India?",
    answer:
      "Yes, we ship pan-India via trusted courier partners. Shipping charges and timelines depend on your location. Most metros receive orders within 2–3 business days after dispatch.",
    category: "shipping",
  },
  {
    id: "f-006",
    question: "How is the product packaged for shipping?",
    answer:
      "We take packaging very seriously. All products are individually bubble-wrapped, packed in padded boxes, and sealed securely for safe transit. Gifting orders also get premium decorative packaging.",
    category: "shipping",
  },
  {
    id: "f-007",
    question: "How long does a custom order take?",
    answer:
      "Delivery timelines depend on the product and order complexity. Simple personalised items take 3–5 working days. Complex custom pieces take 7–14 working days. Bulk orders may take 10–21 days. All timelines are communicated upfront before you confirm your order.",
    category: "delivery",
  },
  {
    id: "f-008",
    question: "Can I place a bulk corporate gifting order?",
    answer:
      "Absolutely! Corporate gifting is one of our specialities. We handle everything from design to delivery for employee appreciation gifts, client gifts, Diwali hampers, and event giveaways. Reach out with your quantity, budget, and occasion for a complete proposal.",
    category: "bulk",
  },
  {
    id: "f-009",
    question: "Where are workshops held?",
    answer:
      "Workshops are currently held at our studio in Mumbai. We also offer private group workshops that can be arranged at your preferred venue for parties, corporate team-building events, and kitty parties.",
    category: "workshops",
  },
  {
    id: "f-010",
    question: "Do I need prior experience for the resin workshop?",
    answer:
      "No experience is required at all! Our workshops are beginner-friendly and Suhani guides you through every step. You'll leave with a beautiful finished piece regardless of your skill level.",
    category: "workshops",
  },
];
