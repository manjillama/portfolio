import { GatsbyLinkProps, Link } from "gatsby";
import React from "react";
import {
  btnPrimary,
  btnSecondary,
  btnHoverEffect,
  primaryShadowOnHover,
  secondaryShadowOnHover,
} from "./Link.module.css";

interface CustomGatsbyLinkProps
  extends Omit<GatsbyLinkProps<Record<string, unknown>>, "ref" | "to"> {
  text: string;
  href: string;
  isInternalLink?: boolean;
  variant?: "primary" | "secondary";
  showBoxShadowOnHover?: boolean;
}

export const CustomLink = ({
  text,
  href,
  isInternalLink = true,
  variant = "primary",
  showBoxShadowOnHover = false,
  ...props
}: CustomGatsbyLinkProps) => {
  let className = `border bg-transparent rounded-sm px-10 py-3 `;

  if (variant === "primary")
    className = `${className} ${btnPrimary} ${
      showBoxShadowOnHover ? `${btnHoverEffect} ${primaryShadowOnHover}` : ""
    }`;
  if (variant === "secondary")
    className = `${className} ${btnSecondary} ${
      showBoxShadowOnHover ? `${btnHoverEffect} ${secondaryShadowOnHover}` : ""
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
