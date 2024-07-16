import { forwardRef, useEffect, useRef, useState } from 'react'
import './Input.css'

export default forwardRef(function Input({ type = 'text', className = '', rounded = 'rounded', size = 'default', isFocused = false, placeholder, value, disabled = '', ...props }, ref) {

    const [inputValue, setInputValue] = useState(value)

    const input = ref ? ref : useRef()

    useEffect(() => {
        if (isFocused) {
            input.current.focus()
        }
    }, [])

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
        default: '',
        lg: 'form-control-lg',
    }[size]

    return (
        <input
            {...props}
            type={type}
            className={`form-control` + `${size && ` ` + sizeClass}` +
                `${className && ` ` + className}` + ` ${roundedClass}` + `${disabled && ' pointer-events-none opacity-50 !bg-gray-200'
                }`
            }
            ref={input}
            value={inputValue || ''}
            onChange={e => setInputValue(e.target.value)}
            placeholder={placeholder}
        />
    )
})