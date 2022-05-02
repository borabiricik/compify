import React, { StyleHTMLAttributes } from "react";

export interface GridProps {}

export interface RowProps
  extends GridProps,
    React.HTMLAttributes<HTMLDivElement> {
  alignItems?:
    | "center"
    | "baseline"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "stretch"
    | "unset";
  justifyContent?:
    | "baseline"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "start"
    | "left"
    | "right"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start";
}
