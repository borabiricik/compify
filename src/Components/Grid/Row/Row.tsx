import React from "react";
import { RowProps } from "../../../Types/Grid/GridProps";
import "../../../Styles/Grid/_grid.scss";

const Row = (props: RowProps) => {
  return (
    <div
      className={`
      row 
      ${props.alignItems ? "align-items-" + props.alignItems : ""} 
      ${props.justifyContent ? "justify-content-" + props.justifyContent : ""}
      ${props.w ? "w-" + props.w : ""}
      ${props.bgColor ? "bg-" + props.bgColor : ""}
      ${props.className && props.className}
      `}
    >
      {props.children}
    </div>
  );
};

export default Row;
