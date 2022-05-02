import React from "react";
import { CommonProps } from "../Root/CommonProps";

export interface NavbarProps extends CommonProps {
    type?: "default" | "drawer"
}

export interface NavbarDefaultProps extends NavbarProps{
    
}