import React, { AnchorHTMLAttributes } from "react";
import { ColorProps, CommonProps } from "../../Root/CommonProps";

export interface TypographyProps extends ColorProps {
  fontSize?: number;
  style?: React.CSSProperties;
}

export interface HeaderProps extends CommonProps, TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
  href?: string;
}

export interface TextProps
  extends TypographyProps, CommonProps {
  tag?: keyof JSX.IntrinsicElements;
}

export type LinkProps = TypographyProps;

export interface CompifyLinkProps extends LinkProps, CommonProps {
  to?: string | string;
}
