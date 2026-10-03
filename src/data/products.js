// ============================================================
// S.S.T. DOORS — Central Product Catalog
// ============================================================
// To add a product: add a new object to the products array.
// To remove a product: delete the object.
// Images: place files in /public/images/products/ and reference by filename.
// ============================================================

export const WHATSAPP_NUMBER = "917942869890"; // No spaces, country code included
export const PHONE_NUMBER = "+917942869890";
export const PHONE_DISPLAY = "+91 79428 69890";
export const BUSINESS_NAME = "S.S.T. Doors";
export const BUSINESS_LOCATION = "Erode, Tamil Nadu";
export const BUSINESS_TYPE = "Manufacturer & Wholesaler";
export const ESTABLISHED = "2021";

// ─── WhatsApp URL generator ────────────────────────────────
export function getWhatsAppUrl(productName = null) {
  const message = productName
    ? `Hello S.S.T. Doors,\n\nI am interested in the following product:\n\n*${productName}*\n\nI would like to know the latest price, availability and other details.\n\nThank you.`
    : `Hello S.S.T. Doors,\n\nI would like to make an enquiry about your door products.\n\nThank you.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── Product Categories ─────────────────────────────────────
export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "wooden", label: "Wooden" },
  { id: "teak", label: "Teak Wood" },
  { id: "flush", label: "Flush" },
  { id: "membrane", label: "Membrane" },
  { id: "plywood", label: "Plywood" },
  { id: "interior", label: "Interior" },
  { id: "exterior", label: "Exterior" },
];

// ─── Home Categories (displayed on homepage) ───────────────
export const HOME_CATEGORIES = [
  {
    id: "wooden",
    label: "Wooden Doors",
    description: "Classic and timeless wooden doors for every application.",
    color: "#8B5E3C",
  },
  {
    id: "teak",
    label: "Teak Wood Doors",
    description: "Premium teak wood doors known for durability and beauty.",
    color: "#6B4628",
  },
  {
    id: "flush",
    label: "Flush Doors",
    description: "Modern flush doors with clean lines and smooth finishes.",
    color: "#3B2418",
  },
  {
    id: "membrane",
    label: "Membrane Doors",
    description: "Contemporary membrane doors with stylish surface textures.",
    color: "#5C3D2E",
  },
  {
    id: "plywood",
    label: "Plywood Doors",
    description: "Sturdy plywood doors for interior and exterior applications.",
    color: "#7A5230",
  },
  {
    id: "interior",
    label: "Interior Doors",
    description: "Beautifully crafted doors designed for interior spaces.",
    color: "#4A3728",
  },
  {
    id: "exterior",
    label: "Exterior Doors",
    description: "Weather-resistant exterior doors built to last.",
    color: "#2E1C0E",
  },
];

// ─── Product Catalog ────────────────────────────────────────
export const products = [
  {
    id: "p001",
    slug: "grey-laminated-flush-door",
    name: "Grey Laminated Flush Door",
    category: "flush",
    categoryLabel: "Flush Door",
    featured: true,
    image: null, // Will show branded placeholder
    gallery: [],
    shortDescription: "Modern laminated flush door in elegant grey, suitable for home applications.",
    description:
      "A clean and contemporary grey laminated flush door that brings a modern touch to any interior space. Finished with a laminated surface for easy maintenance and a sleek appearance. Suitable for residential applications.",
    specifications: {
      thickness: "32 mm",
      coating: "Laminated",
      "usage / application": "Home",
      material: "Solid Wood Core",
      "design type": "Modern",
      size: "81 × 33 Inch (L × W)",
      color: "Grey",
    },
  },
  {
    id: "p002",
    slug: "brown-interior-wooden-flush-door",
    name: "Brown Interior Wooden Flush Door",
    category: "flush",
    categoryLabel: "Flush Door",
    featured: true,
    image: null,
    gallery: [],
    shortDescription: "A rich brown interior wooden flush door for residential spaces.",
    description:
      "Crafted from quality wood materials, this brown interior flush door offers warmth and durability for home interiors. Clean flush surface with natural brown tones that complement a wide range of interior styles.",
    specifications: {
      "usage / application": "Interior",
      color: "Brown",
      "design type": "Modern",
      material: "Wood",
    },
  },
  {
    id: "p003",
    slug: "dark-brown-teak-wood-door",
    name: "Dark Brown Teak Wood Door",
    category: "teak",
    categoryLabel: "Teak Wood Door",
    featured: true,
    image: null,
    gallery: [],
    shortDescription: "Premium dark brown teak wood door with natural grain character.",
    description:
      "A statement-making dark brown teak wood door that brings the natural elegance of teak into your home. The distinctive grain pattern and deep brown tones create a lasting impression at any entrance.",
    specifications: {
      material: "Teak Wood",
      color: "Dark Brown",
      "usage / application": "Home",
      "design type": "Traditional / Classic",
    },
  },
  {
    id: "p004",
    slug: "brown-teak-wood-door",
    name: "Brown Teak Wood Door",
    category: "teak",
    categoryLabel: "Teak Wood Door",
    featured: true,
    image: null,
    gallery: [],
    shortDescription: "Classic brown teak wood door — a timeless choice for any entrance.",
    description:
      "A classic teak wood door in warm brown, showcasing the natural beauty and strength of teak. Ideal for main entrances and interior spaces where quality and appearance matter.",
    specifications: {
      material: "Teak Wood",
      color: "Brown",
      "usage / application": "Home / Office",
    },
  },
  {
    id: "p005",
    slug: "interior-wooden-membrane-door",
    name: "Interior Wooden Membrane Door",
    category: "membrane",
    categoryLabel: "Membrane Door",
    featured: true,
    image: null,
    gallery: [],
    shortDescription: "Contemporary membrane door designed for modern interior spaces.",
    description:
      "A stylish wooden membrane door offering contemporary design with a smooth surface texture. Perfect for modern interior applications where aesthetics and functionality come together.",
    specifications: {
      "usage / application": "Interior",
      "design type": "Modern",
      material: "Wood with Membrane Finish",
    },
  },
  {
    id: "p006",
    slug: "35mm-brown-exterior-plywood-door",
    name: "35 mm Brown Exterior Plywood Door",
    category: "exterior",
    categoryLabel: "Exterior Door",
    featured: true,
    image: null,
    gallery: [],
    shortDescription: "Durable 35 mm brown plywood door for exterior applications.",
    description:
      "A robust 35 mm plywood door built for exterior use. The brown finish and solid construction make it suitable for areas that require extra durability and weather resistance.",
    specifications: {
      thickness: "35 mm",
      material: "Plywood",
      color: "Brown",
      "usage / application": "Exterior",
    },
  },
  {
    id: "p007",
    slug: "40mm-brown-exterior-plywood-door",
    name: "40 mm Brown Exterior Plywood Door",
    category: "exterior",
    categoryLabel: "Exterior Door",
    featured: false,
    image: null,
    gallery: [],
    shortDescription: "Heavy-duty 40 mm brown plywood door for exterior use.",
    description:
      "A heavy-duty 40 mm plywood door designed for exterior applications where extra thickness provides improved security and durability. The brown finish provides a clean and professional look.",
    specifications: {
      thickness: "40 mm",
      material: "Plywood",
      color: "Brown",
      "usage / application": "Exterior",
    },
  },
  {
    id: "p008",
    slug: "40mm-interior-plywood-door",
    name: "40 mm Interior Plywood Door",
    category: "plywood",
    categoryLabel: "Plywood Door",
    featured: false,
    image: null,
    gallery: [],
    shortDescription: "Solid 40 mm plywood door for interior room applications.",
    description:
      "A 40 mm plywood door designed specifically for interior applications. Provides reliable performance and a clean appearance for bedrooms, offices and other interior spaces.",
    specifications: {
      thickness: "40 mm",
      material: "Plywood",
      "usage / application": "Interior",
    },
  },
  {
    id: "p009",
    slug: "black-teak-wood-door",
    name: "Black Teak Wood Door",
    category: "teak",
    categoryLabel: "Teak Wood Door",
    featured: false,
    image: null,
    gallery: [],
    shortDescription: "Bold black-finish teak wood door for a contemporary look.",
    description:
      "A contemporary teak wood door with a striking black finish. Perfect for modern homes and commercial spaces looking for a bold design statement without compromising on the natural quality of teak.",
    specifications: {
      material: "Teak Wood",
      color: "Black",
      "usage / application": "Home / Commercial",
      "design type": "Contemporary",
    },
  },
  {
    id: "p010",
    slug: "wooden-interior-door",
    name: "Wooden Interior Door",
    category: "interior",
    categoryLabel: "Interior Door",
    featured: false,
    image: null,
    gallery: [],
    shortDescription: "Quality wooden door crafted for interior spaces.",
    description:
      "A well-crafted wooden interior door offering durability and visual appeal. Suitable for bedrooms, bathrooms and other interior spaces that demand quality construction and a clean finish.",
    specifications: {
      material: "Wood",
      "usage / application": "Interior",
    },
  },
  {
    id: "p011",
    slug: "natural-teak-wood-door",
    name: "Natural Teak Wood Door",
    category: "wooden",
    categoryLabel: "Wooden Door",
    featured: false,
    image: null,
    gallery: [],
    shortDescription: "Natural-finish teak wood door with authentic wood grain.",
    description:
      "Showcasing the natural beauty of teak wood in its most authentic form, this door brings warmth and character to any space. The natural grain pattern gives each door a unique appearance.",
    specifications: {
      material: "Teak Wood",
      "design type": "Natural",
      "usage / application": "Home",
    },
  },
  {
    id: "p012",
    slug: "decorative-wooden-door",
    name: "Decorative Wooden Door",
    category: "wooden",
    categoryLabel: "Wooden Door",
    featured: false,
    image: null,
    gallery: [],
    shortDescription: "Elegant wooden door with decorative detailing.",
    description:
      "An elegant wooden door featuring decorative detailing that adds architectural character to entrances and interiors. Crafted with attention to detail for homes and spaces that value aesthetics.",
    specifications: {
      material: "Wood",
      "design type": "Decorative",
      "usage / application": "Home / Villa",
    },
  },
];

// ─── Featured Products ──────────────────────────────────────
export const featuredProducts = products.filter((p) => p.featured);

// ─── Get product by slug ────────────────────────────────────
export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

// ─── Get products by category ──────────────────────────────
export function getProductsByCategory(categoryId) {
  if (categoryId === "all") return products;
  return products.filter((p) => p.category === categoryId);
}
