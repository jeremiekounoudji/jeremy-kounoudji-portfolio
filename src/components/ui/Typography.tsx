import React, { type JSX } from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' |
            'body-large' | 'body-base' | 'body-small' | 'caption' | 'code';
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  glow?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body-base',
  children,
  className = '',
  gradient = false,
  glow = false,
  as,
}) => {
  const variantClasses: Record<NonNullable<TypographyProps['variant']>, string> = {
    h1: 'heading-1',
    h2: 'heading-2',
    h3: 'heading-3',
    h4: 'heading-4',
    h5: 'heading-5',
    h6: 'heading-6',
    'body-large': 'body-large',
    'body-base': 'body-base',
    'body-small': 'body-small',
    caption: 'caption',
    code: 'code',
  };

  const defaultElements: Record<NonNullable<TypographyProps['variant']>,
   keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    'body-large': 'p',
    'body-base': 'p',
    'body-small': 'p',
    caption: 'span',
    code: 'code',
  };

  const Component: keyof JSX.IntrinsicElements = as ?? defaultElements[variant];

  const classes = [
    variantClasses[variant],
    gradient && 'gradient-text',
    glow && 'text-glow',
    className,
  ].filter(Boolean).join(' ');

  return React.createElement(Component, { className: classes }, children);
};

export default Typography;
