import NextImage, { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends Omit<NextImageProps, 'alt'> {
  alt: string; // required — never optional, for WCAG 2.1 AA compliance
  ratio?: '16/9' | '4/3' | '1/1';
}

const ratioClassMap: Record<NonNullable<ImageProps['ratio']>, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
};

/**
 * Image — atom. Thin wrapper around next/image that (1) forces every
 * image to have real alt text, (2) locks an aspect ratio so layout
 * never shifts while the image streams in on slow mobile data, and
 * (3) defaults to lazy loading except when explicitly marked
 * `priority` (e.g. the hero image).
 */
export default function Image({
  alt,
  ratio = '4/3',
  className = '',
  loading,
  ...rest
}: ImageProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-card ${ratioClassMap[ratio]} ${className}`}>
      <NextImage
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        loading={rest.priority ? undefined : loading ?? 'lazy'}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...rest}
      />
    </div>
  );
}
