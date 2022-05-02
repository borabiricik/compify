import React from "react";

export interface WidthProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement> &
      React.AllHTMLAttributes<HTMLAnchorElement>,
    "children" | "color"
  > {
  w?: "0" | "25" | "50" | "75" | "100";
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export interface ColorProps {
  bgColor?: "primary" | "success" | "danger" | "warning" | "info";
  color?: "primary" | "success" | "danger" | "warning" | "info";
}

export interface SizingProps {
}

export interface CommonProps extends WidthProps, ColorProps,SizingProps {}
