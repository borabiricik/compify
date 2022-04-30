import React from "react";
import { HeaderProps } from "../../../Types/ParentTypes/Typography/TypographyProps";

const Header = (props: HeaderProps) => {
  if (props.tag && props.children) {
    const elementProps = { ...props };
    delete elementProps.children;
    const CustomTag = `${props.tag}`;
    return (
      <div color={elementProps.color} style={{ color: elementProps.color,fontSize: elementProps.fontSize }}>
        <CustomTag {...elementProps}>{props.children}</CustomTag>
      </div>
    );
  } else {
    return <h2 {...props}>{props.children}</h2>;
  }
};

export default Header;
