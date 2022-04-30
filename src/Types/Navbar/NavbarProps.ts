import React from "react";

export interface NavbarProps {
    children?: React.ReactNode | React.ReactNode[] | string | string[] | JSX.Element | JSX.Element[]
    type?: "default" | "drawer"
}