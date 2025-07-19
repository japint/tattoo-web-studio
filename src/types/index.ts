export interface ContactInfo {
  phone: string;
  email: string;
  facebook: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface BusinessHours {
  [key: string]: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  startingPrice: number;
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  artist: string;
}

export interface Artist {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  instagram: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}
