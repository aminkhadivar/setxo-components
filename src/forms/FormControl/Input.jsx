import { forwardRef, useEffect, useRef, useState } from 'react'
import './Form.css'

export default forwardRef(function Input({ as = 'text', type = 'text', className = '', rounded = 'rounded', size = 'default', isFocused = false, placeholder, value, disabled = '', readOnly = '', ...props }, ref) {

    const asClass = {
        text: 'form-control',
        plaintext: 'form-control-plaintext',
    }[as]

    const input = ref ? ref : useRef()

    useEffect(() => {
        if (isFocused) {
            input.current.focus()
        }
    }, [])

    const [inputValue, setInputValue] = useState(value)

    const onChangeInput = (e) => {
        if (!readOnly) {
            setInputValue(e.target.value)
        }
    }

    const roundedClass = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        rounded: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    }[rounded]

    const sizeClass = {
        sm: 'form-control-sm',
        default: 'form-control-default',
        lg: 'form-control-lg',
    }[size]

    return (
        <input
            {...props}
            type={type}
            className={`${asClass}` + `${size && ` ` + sizeClass}` +
                `${className && ` ` + className}` + ` ${roundedClass}` + `${disabled && `${readOnly ? ' disabled-readonly' : ' disabled'}`}`
            }
            ref={input}
            value={inputValue || ''}
            onChange={onChangeInput}
            placeholder={placeholder}
        />
    )
})