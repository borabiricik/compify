import React, { useEffect } from 'react'
import "../../Styles/main.scss"
import { CompifyProviderProps } from '../../Types/Root/CompifyProviderProps'
import "../../Styles/main.scss"
import WebFont from 'webfontloader';

const CompifyProvider = ({ theme,children }: CompifyProviderProps) => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Inter']
          }
        });
       }, []);
    return (
        <div className={`theme-${theme}`}>
            {children}
        </div>
    )
}

export default CompifyProvider