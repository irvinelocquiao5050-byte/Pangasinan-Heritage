import { SVGProps } from 'react';

export type IconName = 'search' | 'menu' | 'close' | 'location' | 'arrow-right';

const paths: Record<IconName, ReactNodePath> = {
  search: 'M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.15 6.15a7.5 7.5 0 0 0 10.5 10.5Z',
  menu: 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5',
  close: 'M6 6l12 12M18 6L6 18',
  location:
    'M12 21.75s7.5-6.44 7.5-11.83A7.5 7.5 0 1 0 4.5 9.92c0 5.39 7.5 11.83 7.5 11.83Zm0-8.83a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  'arrow-right': 'M4.5 12h15m0 0-6-6m6 6-6 6',
};

// Type alias kept local so this file has no external type dependency.
type ReactNodePath = string;

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  title?: string;
}

/**
 * Icon — atom. Renders as decorative (aria-hidden) by default; pass a
 * `title` for icons that carry meaning on their own (e.g. an
 * icon-only button) so screen reader users get a label.
 */
export default function Icon({ name, size = 24, title, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title && <title>{title}</title>}
      <path d={paths[name]} />
    </svg>
  );
}
