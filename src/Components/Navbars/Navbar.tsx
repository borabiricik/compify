import React from 'react'
import "../../Styles/Navbar/_navbar.scss"
import { NavbarProps } from "../../Types/Navbar/NavbarProps"
import NavbarDefault from "./Default/NavbarDefault"

const Navbar = ({ children }: NavbarProps) => {
    return (
        <div className="navbar navbar-default">
            {children ? children : <NavbarDefault />}
        </div>
    )
}

export default Navbar