import { forwardRef, useEffect, useRef } from 'react'

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, placeholder, disabled = '', ...props }, ref) {

    const input = ref ? ref : useRef()

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [])

    return (
        <input
            {...props}
            type={type}
            className={`
                'h-10 text-sm bg-transparent border-zinc-200 dark:border-zinc-700 focus:border-indigo-300 dark:focus:border-zinc-500 focus:ring focus:ring-indigo-200 dark:focus:ring-zinc-800/60 focus:ring-opacity-50 shadow-sm rounded-md dark:shadow-none duration-300` +
                `${className && ` ` + className}` + `${disabled && ' pointer-events-none opacity-50 !bg-gray-200'
                }`
            }
            ref={input}
            placeholder={placeholder}
        />
    )
})