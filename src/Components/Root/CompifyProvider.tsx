import React from 'react'
import "../../Styles/main.scss"
import { CompifyProviderProps } from '../../Types/Root/CompifyProviderProps'
import "../../Styles/main.scss"

const CompifyProvider = ({ theme,children }: CompifyProviderProps) => {
    return (
        <div className={`theme-${theme}`}>
            {children}
        </div>
    )
}

export default CompifyProvider