import { CloseIcon } from "../../../public/Icons"
import './CloseButton.css'

export default function CloseButton({ type = 'button', className = '', disabled = '', size = 'default', children, color = 'default', rounded = 'rounded', ...props }) {

    const colorClass = {
        default: 'btn-close-default',
        transparent: 'btn-close-transparent',
        light: 'btn-close-light',
        gray: 'btn-close-gray',
        dark: 'btn-close-dark',
        primary: 'btn-close-primary',
        success: 'btn-close-success',
        danger: 'btn-close-danger',
        warning: 'btn-close-warning',
        info: 'btn-close-info',
        purple: 'btn-close-purple',
        white: 'btn-close-white',
    }[color]

    const roundedClass = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        rounded: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    }[rounded]

    const sizeClass = {
        sm: 'text-sm h-6 w-6',
        default: 'h-7 w-7',
        md: 'h-8 w-8',
        lg: 'text-lg h-9 w-9',
        xl: 'text-xl h-10 w-10',
    }[size]

    return (
        <button
            {...props}
            type="button"
            className={`btn-close ${color && colorClass}` + `${disabled && ' pointer-events-none opacity-50'
                }` + ` ${rounded && roundedClass}` + ` ${size && sizeClass}` + `${className && ` ` + className}`
            }
            aria-label="Close">
            <CloseIcon />
            {children}
        </button>
    )
}