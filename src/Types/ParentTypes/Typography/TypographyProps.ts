import React from "react";

export interface TypographyProps {
  fontSize?: number;
  color?: "primary" | "success" | "danger" | "warning" | "info";
  style?: React.CSSProperties;
}

export interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
}

export interface TextProps
  extends TypographyProps,
    Omit<React.HTMLAttributes<HTMLParagraphElement>, "color"> {
  tag?: keyof JSX.IntrinsicElements;
}
