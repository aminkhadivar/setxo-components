import { forwardRef, useRef, useState } from 'react'
import Label from "../Label"
import './Form.css'

export default forwardRef(function ColorInput({ label = '', id, className = '', value, disabled, ...props }, ref) {

    const input = ref ? ref : useRef()

    const [inputValue, setInputValue] = useState(value)

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            {label &&
                <Label htmlFor={disabled ? null : id} value={label} />
            }
            <div className="form-control-color-wrapper">
                <input
                    {...props}
                    type="color"
                    label={label}
                    className="form-control-color"
                    id={id}
                    value={inputValue || ''}
                    onChange={onChangeInput}
                    disabled={disabled}
                    title={label} />
            </div>
        </>
    )
})