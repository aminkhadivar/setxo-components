
import { useState } from 'react'
import Label from "../FormControl/Label"
import './Range.css'
export default function Range({ max = '100', min = '0', step, value, className = '', color = '', label, disabled = '', size = '', reverse = '', ...props }) {

    const [inputValue, setInputValue] = useState(value)

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const percent = ((inputValue - min) * 100) / (max - min)

    const colorClass = {
        default: 'range-default',
        light: 'range-light',
        gray: 'range-gray',
        dark: 'range-dark',
        primary: 'range-primary',
        success: 'range-success',
        danger: 'range-danger',
        warning: 'range-warning',
        info: 'range-info',
        purple: 'range-purple',
        custom: ''
    }[color]

    const sizeClass = {
        sm: 'range-sm',
        lg: 'range-lg',
    }[size]

    return (
        <div className="form-range">
            <Label value={label} className={`${disabled && ' disabled'}`}>
                <div className={`form-range-slider` + `${size && ` ` + sizeClass}`}>
                    <div className={`range-box`}></div>
                    <input
                        {...props}
                        type="range"
                        value={inputValue}
                        min={min}
                        max={max}
                        step={step}
                        onChange={onChangeInput}
                        className={`form-range-input`}
                    />
                    
                    <div className={`form-range-fill` + `${className && ` ` + className}` + `${color ? ` ` + colorClass : ' range-default'}`} style={{ width: `${percent}%` }}></div>
                </div>
            </Label>
        </div>
    )
}