import { forwardRef, useRef, useState } from 'react'
import Label from "../FormControl/Label"
import './Checkbox.css'
export default function Checkbox({ id, className = '', label, disabled = '', defaultChecked, ...props }) {
    return (
        <div className="form-check">
            <Label htmlFor={id} value={label}>
                <input
                    {...props}
                    type="checkbox"
                    id={id}
                    className={`form-check-input` +
                        `${className && ` ` + className}` + `${disabled ? ' pointer-events-none opacity-50' : ' cursor-pointer'}`
                    }
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
            </Label>
        </div>
    )
}