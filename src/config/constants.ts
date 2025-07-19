// Business Information
export const BUSINESS_INFO = {
  name: "Ink Rebellion",
  tagline: "Premium Tattoo Studio",
  description:
    "Professional tattoo artists creating custom designs and exceptional art. Book your consultation at Ink Rebellion today.",

  contact: {
    phone: "0954-048-9964",
    email: "lnpc.idealhubstd@gmail.com",
    facebook: "https://www.facebook.com/ideahubstudio/",
    address: {
      street: "123 Art Street",
      city: "Creative District",
      state: "NY",
      zipCode: "10001",
    },
  },

  hours: {
    tuesday: "11am - 8pm",
    wednesday: "11am - 8pm",
    thursday: "11am - 8pm",
    friday: "11am - 8pm",
    saturday: "10am - 6pm",
    sunday: "Closed",
    monday: "Closed",
  },
} as const;

// Services
export const SERVICES = [
  {
    id: "custom-tattoo",
    name: "Custom Tattoo",
    description: "Unique designs tailored to your vision and style.",
    icon: "🎨",
    startingPrice: 150,
  },
  {
    id: "cover-up",
    name: "Cover-up",
    description: "Transform old tattoos into stunning new artwork.",
    icon: "🔄",
    startingPrice: 200,
  },
  {
    id: "piercing",
    name: "Piercing",
    description: "Professional body piercing with sterile techniques.",
    icon: "💎",
    startingPrice: 50,
  },
  {
    id: "consultation",
    name: "Consultation",
    description: "Discuss your ideas with our experienced artists.",
    icon: "💭",
    startingPrice: 0,
  },
] as const;

// Navigation Menu
export const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#artists", label: "Artists" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;
