import React from 'react'
import { CompifyProviderProps } from '../../Types/Root/CompifyProvider'

const CompifyProvider = ({ theme,children }: CompifyProviderProps) => {
    return (
        <div className={`theme-${theme}`}>
            {children}
        </div>
    )
}

export default CompifyProvider