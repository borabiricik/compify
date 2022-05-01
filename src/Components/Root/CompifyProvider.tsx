import React, { useEffect } from "react";
import { CompifyProviderProps } from "../../Types/Root/CompifyProviderProps";
const WebFont = require("webfontloader")
import "../../Styles/_main.scss"

const CompifyProvider = ({ theme, children }: CompifyProviderProps) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter']
      }
    });
  }, [])
  
  return <div className={`theme-${theme}`}>{children}</div>;
};

export default CompifyProvider;
