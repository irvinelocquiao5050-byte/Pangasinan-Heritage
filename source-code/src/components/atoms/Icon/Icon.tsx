import { SVGAttributes } from 'react';

/**
 * ATOM: Icon
 * ----------
 * Usage context: small inline symbols inside molecules/organisms
 * (search field, navigation, card metadata). Implemented as inline
 * SVG paths (no icon-font or third-party icon package) to keep the
 * bundle small and avoid an extra network request — directly
 * supporting the "Lightning-Fast" requirement.
 *
 * Responsive logic: icons are sized in `em` via the `size` prop so
 * they scale automatically with the surrounding text/button size
 * rather than needing separate breakpoints.
 *
 * Accessibility: decorative by default (`aria-hidden`), but accepts
 * a `label` prop to expose an accessible name via `role="img"` +
 * `aria-label` when the icon conveys meaning on its own (e.g. a
 * social link with no visible text).
 */

export type IconName =
  | 'search'
  | 'map-pin'
  | 'menu'
  | 'close'
  | 'chevron-right'
  | 'island'
  | 'landmark'
  | 'nature';

interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  name: IconName;
  size?: number;
  label?: string;
}

const paths: Record<IconName, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 22s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: (
    <>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  close: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </>
  ),
  'chevron-right': <polyline points="9 6 15 12 9 18" />,
  island: (
    <>
      <path d="M2 20c2-3 5-3 7-1s5 2 7 0 5-2 6 1" />
      <circle cx="15" cy="8" r="3" />
    </>
  ),
  landmark: (
    <>
      <path d="M12 2l8 6H4l8-6z" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="6" y1="10" x2="6" y2="20" />
      <line x1="18" y1="10" x2="18" y2="20" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </>
  ),
  nature: (
    <>
      <path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11z" />
      <line x1="12" y1="15" x2="12" y2="22" />
    </>
  ),
};

export function Icon({ name, size = 20, label, className, ...rest }: IconProps) {
  const a11yProps = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': true, focusable: false };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...a11yProps}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
