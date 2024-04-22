import { Link } from "@inertiajs/react"
import './Badge.css'

export default function Badge({ href, className = '', color = '', children, size = '', rounded = 'rounded', position = '', ...props }) {

    const colorClass = {
        light: 'badge-light',
        gray: 'badge-gray',
        dark: 'badge-dark',
        primary: 'badge-primary',
        success: 'badge-success',
        danger: 'badge-danger',
        warning: 'badge-warning',
        info: 'badge-info',
        purple: 'badge-purple',
        lightGray: 'badge-light-gray',
        lightDark: 'badge-light-dark',
        lightPrimary: 'badge-light-primary',
        lightSuccess: 'badge-light-success',
        lightDanger: 'badge-light-danger',
        lightWarning: 'badge-light-warning',
        lightInfo: 'badge-light-info',
        lightPurple: 'badge-light-purple',
    }[color];

    const roundedClass = {
        none: 'rounded-none',
        rounded: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    }[rounded];

    const sizeClass = {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
    }[size];

    const positionClass = {
        topRight: 'badge-position-top-right',
        topLeft: 'badge-position-top-left',
        bottomRight: 'badge-position-bottom-right',
        bottomLeft: 'badge-position-bottom-left',
    }[position];

    return (
        href
            ?
            <Link
                {...props}
                href={href}
                className={`badge ${colorClass} ` + className + ` ${roundedClass}` + ` ${sizeClass}` + ` ${position && positionClass}`}
            >
                {children}
            </Link>
            :
            <div
                {...props}
                className={`badge ${colorClass} ` + className + ` ${roundedClass}` + ` ${size && sizeClass}` + ` ${position && positionClass}`}
            >
                {children}
            </div>
    );
}