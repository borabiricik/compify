import React from "react";
import { HeaderProps } from "../../../Types/ParentTypes/Typography/TypographyProps";

const Header = (props: HeaderProps) => {
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
        <CustomTag {...elementProps}>{props.children}</CustomTag>
      </div>
    );
  } else {
    return (
      <h2
        className={`${props.color && "text-" + props.color}`}
        {...elementProps}
      >
        {props.children}
      </h2>
    );
  }
};

export default Header;
