export interface HeritageSite {
  slug: string;
  title: string;
  municipality: string;
  description: string;
  imageSrc: string;
  tag: string;
}

/**
 * Sample content for the showcase. In production this would be
 * fetched from a headless CMS (e.g. via getStaticProps/fetch at
 * build time) to keep the JAMstack architecture — swapping the
 * source is a one-file change since every component consumes this
 * same shape.
 */
export const heritageSites: HeritageSite[] = [
  {
    slug: 'malico-viewpoint',
    title: 'Malico Viewpoint',
    municipality: 'San Nicolas',
    description:
      "Known as the 'Summer Capital of Pangasinan,' Malico sits on the slopes of the Caraballo Mountain Range at around 1,675 meters above sea level. The zigzagging mountain road rewards visitors with panoramic viewpoints, pine-scented cool air, mini waterfalls, and, on clear mornings, a sea of clouds drifting below.",
    imageSrc: '/images/malico.jpg',
    tag: 'Mountain Viewpoint',
  },
  {
    slug: 'maranum-falls',
    title: 'Maranum Falls',
    municipality: 'Natividad',
    description:
      "Tucked in Barangay Batchelor East at the foot of the Caraballo Mountains, Maranum Falls (Pangasinan for 'much water') flows year-round even through the dry season. A short forest trail along the Viray River leads to its cool, clear pools, paired with the nearby Sky Plaza pilgrimage park.",
    imageSrc: '/images/hehe.jpg',
    tag: 'Waterfall',
  },
  {
    slug: 'tondaligan-beach',
    title: 'Tondaligan Beach',
    municipality: 'Dagupan City',
    description:
      "Dagupan City's beloved stretch of shoreline along Lingayen Gulf, complete with a baywalk, picnic cottages, and a lively promenade — a go-to spot for sunset strolls, beach volleyball, and family gatherings just minutes from the city center.",
    imageSrc: '/images/billy.webp',
    tag: 'City Beach',
  },
];