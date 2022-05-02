import React from "react";
import {
  CompifyLinkProps,
  LinkProps,
} from "../../../Types/ParentTypes/Typography/TypographyProps";

const Link = (props: CompifyLinkProps) => {
  return (
    <a
      className={`
  link 
  
  text-${props.color}
  ${props.w && "w-" + props.w}
  `}
      href={props.to ? props.to : "!#"}
      {...props}
    >
      {props.children}
    </a>
  );
};

export default Link;
