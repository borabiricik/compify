import React from "react";
import { CommonProps } from "../Root/CommonProps";

export interface GridProps{}

export interface RowProps
  extends GridProps,CommonProps {
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
