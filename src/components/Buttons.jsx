import React from 'react'
import ReactDOM from 'react-dom'
import './Button.css'
const STYLES = ['btn','btn-primary','btn-primary-hover','btn-primary-dis','btn-primary-icon','btn-danger','btn-danger-hover','btn-default','btn-default-hover','btn-text','btn-text-hover','btn-secondary','btn-secondary-hover','btn-outline','btn-outline-hover','btn-disabled','btn-disabled-text']
const SIZES = ['btn-md','btn-sm','btn-lg']
const DISAB = ['','true']
export const Buttons = ({children , type , buttonStyle, isDisabled , buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkDisabled = DISAB.includes(isDisabled) ? 'disabled' : DISAB[0]
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} type={type} disabled={checkDisabled}>
            {children}
        </button>
    )
}