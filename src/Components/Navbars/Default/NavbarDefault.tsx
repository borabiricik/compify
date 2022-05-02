import Text from "../../Typography/Texts/Text";
import React from "react";
import { NavbarDefaultProps } from "../../../Types/Navbar/NavbarProps";
const NavbarDefault = (props: NavbarDefaultProps) => {
  
  return (
    <div
      className={`  
      navbar navbar-default     
      ${props.bgColor ? "bg-" + props.bgColor : ""}
      ${props.color ? "text-" + props.color : ""}
     `}
      id="navbarDefault"
    >
      {props.children}
    </div>
  );
};

export default NavbarDefault;
