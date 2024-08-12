import { useEffect, useState } from "react"
import { Link } from "@inertiajs/react"
import './Button.css'

export default function Button({ href, as = 'Link', type = 'button', className = '', active = '', disabled = '', size = '', color = 'base', borderColor = '', children, rounded = 'rounded', shadow = '', ...props }) {

    const [activeButton, setActiveButton] = useState('')

    useEffect(() => {
        setActiveButton(
            active ? ' active' : ''
        )
    }, [active])

    const colorClass = {
        base: 'btn',
        default: 'btn btn-default',
        light: 'btn btn-light',
        gray: 'btn btn-gray',
        dark: 'btn btn-dark',
        primary: 'btn btn-primary',
        success: 'btn btn-success',
        danger: 'btn btn-danger',
        warning: 'btn btn-warning',
        info: 'btn btn-info',
        purple: 'btn btn-purple',
    }[color];

    const borderColorClass = {
        base: '',
        default: 'btn btn-outline-default',
        light: 'btn btn-outline-light',
        gray: 'btn btn-outline-gray',
        dark: 'btn btn-outline-dark',
        primary: 'btn btn-outline-primary',
        success: 'btn btn-outline-success',
        danger: 'btn btn-outline-danger',
        warning: 'btn btn-outline-warning',
        info: 'btn btn-outline-info',
        purple: 'btn btn-outline-purple',
    }[borderColor];

    const sizeClass = {
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg',
        xl: 'btn-xl',
    }[size];

    const roundedClass = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        rounded: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    }[rounded];

    const shodowClass = {
        base: '',
        default: 'shadow-default',
        light: 'shadow-light',
        gray: 'shadow-gray',
        dark: 'shadow-dark',
        primary: 'shadow-primary',
        success: 'shadow-success',
        danger: 'shadow-danger',
        warning: 'shadow-warning',
        info: 'shadow-info',
        purple: 'shadow-purple',
    }[color]

    const shodowBorderClass = {
        base: '',
        default: 'shadow-default',
        light: 'shadow-light',
        gray: 'shadow-gray',
        dark: 'shadow-dark',
        primary: 'shadow-primary',
        success: 'shadow-success',
        danger: 'shadow-danger',
        warning: 'shadow-warning',
        info: 'shadow-info',
        purple: 'shadow-purple',
    }[borderColor]

    return (
        href
            ?
            <>
                {as === 'Link' &&
                    <Link
                        {...props}
                        href={href}
                        role="button"
                        className={`${colorClass} px-2` + `${className && ` ` + className}` + `${disabled && ' disabled'}` + `${rounded && ` ` + roundedClass}` + `${shadow && color && ` ` + shodowClass}` + `${(shadow && borderColor) && ` ` + shodowBorderClass}` + `${size && ` ` + sizeClass}` + `${borderColor && ` ` + borderColorClass}` + `${active && activeButton}`}
                    >
                        {children}
                    </Link>
                }
                {as === 'externalLink' &&
                    <a
                        {...props}
                        href={href}
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                        className={`${colorClass} px-2` + `${className && ` ` + className}` + `${disabled && ' disabled'}` + `${rounded && ` ` + roundedClass}` + `${shadow && color && ` ` + shodowClass}` + `${(shadow && borderColor) && ` ` + shodowBorderClass}` + `${size && ` ` + sizeClass}` + `${borderColor && ` ` + borderColorClass}` + `${active && activeButton}`}
                    >
                        {children}
                    </a>
                }
            </>
            :
            <button
                {...props}
                type={type}
                className={`${colorClass} px-2` + `${className && ` ` + className}` + `${disabled && ' disabled'}` + `${rounded && ` ` + roundedClass}` + `${shadow && color && ` ` + shodowClass}` + `${(shadow && borderColor) && ` ` + shodowBorderClass}` + `${size && ` ` + sizeClass}` + `${borderColor && ` ` + borderColorClass}` + `${active && activeButton}`}
            >
                {children}
            </button>
    )
}