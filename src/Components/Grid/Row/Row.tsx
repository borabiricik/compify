import React from "react";
import { RowProps } from "../../../Types/Grid/GridProps";
import "../../../Styles/Grid/_grid.scss";

const Row = (props: RowProps) => {
  return (
    <div
      className={`row ${"align-items-" + props.alignItems} ${
        "justify-content-" + props.justifyContent
      }`}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Row;
