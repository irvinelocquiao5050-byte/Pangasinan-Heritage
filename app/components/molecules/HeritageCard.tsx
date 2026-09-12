import Link from 'next/link';
import Image from '../atoms/Image';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

export interface HeritageCardProps {
  slug: string;
  title: string;
  municipality: string;
  description: string;
  imageSrc: string;
  tag: string;
  priority?: boolean;
}

/**
 * HeritageCard — molecule (Image + Typography + Icon atoms).
 * Used exclusively for displaying tourist-site previews inside the
 * responsive HeritageGrid organism. Not used as a generic card
 * elsewhere in the app — a different molecule should be created for
 * other list contexts so this one's markup can stay specialized.
 */
export default function HeritageCard({
  slug,
  title,
  municipality,
  description,
  imageSrc,
  tag,
  priority = false,
}: HeritageCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card bg-white shadow-sm ring-1 ring-neutral-300/60 transition-shadow hover:shadow-md">
      <Image
        src={imageSrc}
        alt={`Illustration of ${title} in ${municipality}, Pangasinan`}
        ratio="4/3"
        priority={priority}
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded-full bg-accent/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-accent">
          {tag}
        </span>
        <Typography variant="h4">{title}</Typography>
        <p className="flex items-center gap-1 font-body text-sm text-neutral-600">
          <Icon name="location" size={16} />
          {municipality}
        </p>
        <Typography variant="body" className="text-neutral-600 line-clamp-3">
          {description}
        </Typography>
        <Link
          href={`/sites/${slug}`}
          className="mt-auto inline-flex items-center gap-1 pt-2 font-body font-semibold text-primary hover:text-primary-dark"
        >
          Explore
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </article>
  );
}
