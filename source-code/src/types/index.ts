export type HeritageCategory = 'island' | 'landmark' | 'nature';

export interface HeritageSite {
  slug: string;
  name: string;
  municipality: string;
  category: HeritageCategory;
  shortDescription: string;
  fullDescription: string;
  heroImage: {
    src: string;
    alt: string;
  };
  gallery: { src: string; alt: string }[];
  highlights: string[];
  travelTips: string[];
  coordinates: { lat: number; lng: number };
}

export interface NavLink {
  label: string;
  href: string;
}
