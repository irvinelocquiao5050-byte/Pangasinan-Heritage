import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';

/**
 * ATOM: Image
 * -----------
 * Usage context: every photo on the site (hero banners, gallery
 * thumbnails, card images) goes through this atom instead of a raw
 * <img>, so lazy-loading, responsive `sizes`, and modern formats
 * (AVIF/WebP, configured in next.config.js) are applied everywhere
 * automatically.
 *
 * Responsive logic: the caller supplies `sizes` describing how much
 * viewport width the image occupies at each breakpoint (e.g. full
 * width on mobile, half on tablet, a third on desktop) so the browser
 * downloads an appropriately-sized file instead of one oversized
 * asset for every screen — the core of the "Lightning-Fast on mobile
 * data" requirement.
 *
 * Accessibility: `alt` is a required prop (not optional) — every
 * image must describe its content or be explicitly marked decorative
 * with `alt=""`, satisfying WCAG 2.1 SC 1.1.1.
 */

interface ImageAtomProps extends Omit<NextImageProps, 'alt'> {
  alt: string;
  rounded?: boolean;
}

export function Image({ alt, className, rounded = true, ...rest }: ImageAtomProps) {
  return (
    <NextImage
      alt={alt}
      className={cn(rounded ? 'rounded-xl' : '', 'object-cover', className)}
      {...rest}
    />
  );
}
