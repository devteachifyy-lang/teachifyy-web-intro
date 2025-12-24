import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error';
}

const Badge = ({ className, variant = 'default', children, ...props }: BadgeProps) => {
  const variants = {
    default: 'bg-primary text-dark',
    success: 'bg-green-500 text-white',
    warning: 'bg-orange-500 text-white',
    error: 'bg-red-500 text-white',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
