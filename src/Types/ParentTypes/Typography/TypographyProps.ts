import React, { AnchorHTMLAttributes } from "react";

export interface TypographyProps {
  fontSize?: number;
  color?: "primary" | "success" | "danger" | "warning" | "info";
  style?: React.CSSProperties;
}

export interface HeaderProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "color">,
    TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
  href?: string;
}

export interface TextProps
  extends TypographyProps,
    Omit<React.HTMLAttributes<HTMLParagraphElement>, "color"> {
  tag?: keyof JSX.IntrinsicElements;
}

export type LinkProps = TypographyProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export interface CompifyLinkProps extends LinkProps {
  to?: string | string;
}
