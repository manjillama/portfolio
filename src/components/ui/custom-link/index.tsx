import { GatsbyLinkProps, Link } from 'gatsby';
import React from 'react';
import {
  btnPrimary,
  btnPrimaryDark,
  btnSecondary,
  btnSecondaryDark,
  btnHoverEffect,
  primaryShadowOnHover,
  primaryDarkShadowOnHover,
  secondaryShadowOnHover,
  secondaryDarkShadowOnHover
} from './Link.module.css';

interface CustomGatsbyLinkProps extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref' | 'to'> {
  text: string;
  href: string;
  isInternalLink?: boolean;
  variant?: 'primary' | 'primary-dark' | 'secondary' | 'secondary-dark';
  showBoxShadowOnHover?: boolean;
}

export const CustomLink = ({
  text,
  href,
  isInternalLink = true,
  variant = 'primary',
  showBoxShadowOnHover = false,
  ...props
}: CustomGatsbyLinkProps) => {
  let className = `border bg-transparent rounded-md px-10 py-3 `;

  if (variant === 'primary')
    className = `${className} ${btnPrimary} ${showBoxShadowOnHover ? `${btnHoverEffect} ${primaryShadowOnHover}` : ''}`;
  if (variant === 'primary-dark')
    className = `${className} ${btnPrimaryDark} ${
      showBoxShadowOnHover ? `${btnHoverEffect} ${primaryDarkShadowOnHover}` : ''
    }`;
  if (variant === 'secondary')
    className = `${className} ${btnSecondary} ${
      showBoxShadowOnHover ? `${btnHoverEffect} ${secondaryShadowOnHover}` : ''
    }`;
  if (variant === 'secondary-dark')
    className = `${className} ${btnSecondaryDark} ${
      showBoxShadowOnHover ? `${btnHoverEffect} ${secondaryDarkShadowOnHover}` : ''
    }`;

  if (isInternalLink)
    return (
      <Link to={href} className={className} {...props}>
        {text}
      </Link>
    );

  return (
    <a href={href} className={className} {...props}>
      {text}
    </a>
  );
};
