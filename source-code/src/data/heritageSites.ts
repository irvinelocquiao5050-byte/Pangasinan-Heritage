import type { HeritageSite } from '@/types';

/**
 * Content is decoupled from presentation (Maintainable requirement):
 * components never hard-code site facts — they render whatever this
 * array provides, so new heritage sites can be added here without
 * touching any component.
 */
export const heritageSites: HeritageSite[] = [
  {
    slug: 'hundred-islands',
    name: 'Hundred Islands National Park',
    municipality: 'Alaminos City',
    category: 'island',
    shortDescription:
      "A UNESCO-recognized cluster of 124 islands and islets scattered across Lingayen Gulf, famous for snorkeling, cave exploration, and postcard sunsets.",
    fullDescription:
      "Hundred Islands National Park is the Philippines' first national park, declared in 1940. Spread across Lingayen Gulf, the park's islands range from tiny sandbars to larger islands with hiking trails, viewing decks, and marine sanctuaries. Governor's Island, Quezon Island, and Children's Island are the most visited, offering swimming lagoons, zipline stations, and boardwalks connecting neighboring islets.",
    heroImage: {
      src: '/images/77.jpg',
      alt: 'Aerial view of the limestone islands of Hundred Islands National Park at sunset',
    },
    gallery: [
      { src: '/images/90.jpg', alt: 'Boats docked at Governor Island' },
      { src: '/images/91.jpg', alt: 'Snorkelers near a coral reef' },
      { src: '/images/93.jpg', alt: 'Viewing deck overlooking the island cluster' },
    ],
    highlights: [
      'Island hopping tours to Governor, Quezon, and Children\'s Island',
      'Snorkeling and marine sanctuary tours',
      'Cave exploration at Quezon Island',
    ],
    travelTips: [
      'Book boats at the Lucap Wharf terminal; fixed rates are posted.',
      'Best visited early morning to avoid peak tourist traffic.',
    ],
    coordinates: { lat: 16.1806, lng: 119.9167 },
  },
  {
    slug: 'bolinao-lighthouse',
    name: 'Cape Bolinao Lighthouse',
    municipality: 'Bolinao',
    category: 'landmark',
    shortDescription:
      'The second-tallest lighthouse in the Philippines, standing atop Punta Piedra Point since 1905 with sweeping views of the West Philippine Sea.',
    fullDescription:
      "Built by the Americans in 1905, the Cape Bolinao Lighthouse rises about 101 feet above sea level atop a rocky promontory. Visitors climb a spiral staircase to the lantern room for panoramic views of Bolinao's coastline, fishing villages, and the open sea. The lighthouse remains an active navigational aid maintained by the Philippine Coast Guard.",
    heroImage: {
      src: '/images/66.jpg',
      alt: 'Cape Bolinao Lighthouse standing on a cliff overlooking the sea',
    },
    gallery: [
      { src: '/images/94.avif', alt: 'Spiral staircase inside the lighthouse' },
      { src: '/images/96.jpg', alt: 'View of the coastline from the lantern room' },
    ],
    highlights: [
      'Panoramic sea views from the lantern room',
      'Historic 1900s American colonial-era architecture',
      'Nearby Patar Beach and Bolinao Falls',
    ],
    travelTips: [
      'Wear sturdy footwear — the climb involves narrow spiral stairs.',
      'Pair the visit with a sunset stop at Patar Beach nearby.',
    ],
    coordinates: { lat: 16.4497, lng: 119.8917 },
  },
  {
    slug: 'balungao-hot-spring',
    name: 'Balungao Hot Spring',
    municipality: 'Balungao',
    category: 'nature',
    shortDescription:
      'A forested eco-park at the foot of Mt. Balungao featuring warm mineral pools, ziplines, and a canopy walk through native trees.',
    fullDescription:
      "Nestled at the base of Mt. Balungao, this eco-tourism park channels natural warm springs into a series of pools set among mahogany and narra trees. Beyond the springs, the park offers a canopy walkway, zipline, and trails leading toward Mt. Balungao itself, making it a popular day-trip for families and adventure travelers alike.",
    heroImage: {
      src: '/images/67.webp',
      alt: 'Warm mineral pools surrounded by trees at Balungao Hot Spring',
    },
    gallery: [
      { src: '/images/97.jpeg', alt: 'Canopy walkway through the forest' },
      { src: '/images/98.jpg', alt: 'Visitors relaxing in the mineral pools' },
    ],
    highlights: [
      'Natural warm mineral pools',
      'Forest canopy walk and zipline',
      'Trailhead for Mt. Balungao day hikes',
    ],
    travelTips: [
      'Weekdays are quieter than weekends and holidays.',
      'Bring extra clothes — the pools and canopy walk both get you wet or muddy.',
    ],
    coordinates: { lat: 15.9394, lng: 120.6183 },
  },
];

export function getHeritageSiteBySlug(slug: string): HeritageSite | undefined {
  return heritageSites.find((site) => site.slug === slug);
}
