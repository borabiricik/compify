import React from "react";
import { TextProps } from "../../../Types/ParentTypes/Typography/TypographyProps";

const Text = (props: TextProps) => {
  const elementProps = { ...props };
  const elementStyle = {
    color: elementProps.color,
    fontSize: elementProps.fontSize,
  };
  if (props.tag && props.children) {
    delete elementProps.children;
    const CustomTag = `${props.tag}`;

    return (
      <div className={`${props.color && "text-" + props.color}`}>
        {/* @ts-ignore */}
        <CustomTag {...elementProps}>{props.children}</CustomTag>
      </div>
    );
  } else {
    return (
      <p
        className={`${props.color && "text-" + props.color}`}
        {...elementProps}
      >
        {props.children}
      </p>
    );
  }
};

export default Text;
