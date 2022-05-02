import React from "react";
import "../../Styles/Navbar/_navbar.scss";
import { NavbarProps } from "../../Types/Navbar/NavbarProps";
import NavbarDefault from "./Default/NavbarDefault";

const Navbar = (props: NavbarProps) => {
  var whichNavbar = (type: string) => {
    switch (type) {
      case "default":
        return <NavbarDefault>{props.children}</NavbarDefault>;

      default:
        break;
    }
  };
  return (
    <>
      {props.type ? (
        whichNavbar(props.type)
      ) : (
        //@ts-ignore
        <NavbarDefault {...props}>{props.children}</NavbarDefault>
      )}
    </>
  );
};

export default Navbar;
