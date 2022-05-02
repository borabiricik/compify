import React, { useEffect } from "react";
import { CompifyProviderProps } from "../../Types/Root/CompifyProviderProps";
import "../../Styles/_main.scss"

const CompifyProvider = ({ theme, children }: CompifyProviderProps) => {
  useEffect(() => {
    require("webfontloader").load({
      google: {
        families: ['Inter']
      }
    });
  }, [])
  
  return <div className={`theme-${theme}`}>{children}</div>;
};

export default CompifyProvider;
