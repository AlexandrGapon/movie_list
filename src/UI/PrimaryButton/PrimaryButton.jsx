import React from 'react'
import cl from './PrimaryButton.module.css'

const PrimaryButton = ({ children, handleClick }) => {
    return (
        <button className={cl.button} onClick={handleClick}>{children}</button>
    )
}

export default PrimaryButton