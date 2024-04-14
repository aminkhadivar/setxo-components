import { Link } from "@inertiajs/react"
import './Button.css'

export default function Button({ href, as = 'Link', type = 'button', className = '', disabled = '', size = 'default', color = 'base', borderColor = '', children, rounded = 'rounded', shadow = '', ...props }) {

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
        default: ' btn-outline-default',
        light: ' btn-outline-light',
        gray: ' btn-outline-gray',
        dark: ' btn-outline-dark',
        primary: ' btn-outline-primary',
        success: ' btn-outline-success',
        danger: ' btn-outline-danger',
        warning: ' btn-outline-warning',
        info: ' btn-outline-info',
        purple: ' btn-outline-purple',
    }[borderColor];

    const sizeClass = {
        sm: 'text-sm h-8',
        md: 'h-9',
        default: 'h-10',
        lg: 'text-lg h-11',
        xl: 'text-xl h-12',
    }[size];

    const roundedClass = {
        none: 'rounded-none',
        rounded: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    }[rounded];

    const shodowClass = {
        base: '',
        default: 'shadow-md hover:shadow-gray-400/50',
        light: 'shadow-md hover:shadow-gray-400/50',
        gray: 'shadow-md shadow-gray-500/50 hover:shadow-gray-700/50 dark:shadow-none',
        dark: 'shadow-md shadow-gray-700/50 hover:shadow-gray-900/50 dark:shadow-none',
        primary: 'shadow-md shadow-blue-400/50 hover:shadow-blue-600/50 dark:shadow-none',
        success: 'shadow-md shadow-green-400/50 hover:shadow-green-600/50 dark:shadow-none',
        danger: 'shadow-md shadow-red-400/50 hover:shadow-red-600/50 dark:shadow-none',
        warning: 'shadow-md shadow-amber-400/50 hover:shadow-amber-600/50 dark:shadow-none',
        info: 'shadow-md shadow-cyan-400/50 hover:shadow-cyan-600/50 dark:shadow-none',
        purple: 'shadow-md shadow-setxo-400/50 hover:shadow-setxo-600/50 dark:shadow-none',
    }[color]

    const shodowBorderClass = {
        base: '',
        default: 'shadow-md hover:shadow-gray-400/50',
        light: 'shadow-md hover:shadow-gray-400/50',
        gray: 'shadow-md shadow-gray-500/50 hover:shadow-gray-700/50 dark:shadow-none',
        dark: 'shadow-md shadow-gray-700/50 hover:shadow-gray-900/50 dark:shadow-none',
        primary: 'shadow-md shadow-blue-400/50 hover:shadow-blue-600/50 dark:shadow-none',
        success: 'shadow-md shadow-green-400/50 hover:shadow-green-600/50 dark:shadow-none',
        danger: 'shadow-md shadow-red-400/50 hover:shadow-red-600/50 dark:shadow-none',
        warning: 'shadow-md shadow-amber-400/50 hover:shadow-amber-600/50 dark:shadow-none',
        info: 'shadow-md shadow-cyan-400/50 hover:shadow-cyan-600/50 dark:shadow-none',
        purple: 'shadow-md shadow-setxo-400/50 hover:shadow-setxo-600/50 dark:shadow-none',
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
                        className={`${colorClass} px-2 ` + className + `${disabled && ' pointer-events-none opacity-50'
                            }` + ` ${rounded && roundedClass}` + ` ${shadow && color ? shodowClass : ''}` + ` ${(shadow && borderColor) ? shodowBorderClass : ''}` + ` ${sizeClass}` + `${borderColor ? borderColorClass : ''}`}
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
                        className={`${colorClass} px-2 ` + className + `${disabled && ' pointer-events-none opacity-50'
                            }` + ` ${rounded && roundedClass}` + ` ${shadow && color ? shodowClass : ''}` + ` ${(shadow && borderColor) ? shodowBorderClass : ''}` + ` ${sizeClass}` + `${borderColor ? borderColorClass : ''}`}
                    >
                        {children}
                    </a>
                }
            </>
            :
            <button
                {...props}
                type={type}
                className={`${colorClass} px-2 ` + className + `${disabled && ' pointer-events-none opacity-50'
                    }` + ` ${rounded && roundedClass}` + ` ${shadow && color ? shodowClass : ''}` + ` ${(shadow && borderColor) ? shodowBorderClass : ''}` + ` ${sizeClass}` + `${borderColor ? borderColorClass : ''}`}
            >
                {children}
            </button>
    )
}