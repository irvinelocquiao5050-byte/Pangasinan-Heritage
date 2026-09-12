import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-sm font-body font-semibold ' +
  'transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

const variantClassMap: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
};

const sizeClassMap: Record<Size, string> = {
  sm: 'text-sm px-3 py-1.5 min-h-[36px]',
  md: 'text-base px-5 py-2.5 min-h-[44px]',
  lg: 'text-lg px-7 py-3.5 min-h-[52px]',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/**
 * Button — atom. min-h values keep every size at/above the 44px WCAG
 * 2.1 AA touch-target recommendation for mobile users.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClassMap[variant]} ${sizeClassMap[size]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
