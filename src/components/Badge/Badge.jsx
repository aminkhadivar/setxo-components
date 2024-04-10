import { Link } from "@inertiajs/react"
import './Badge.css'

export default function Badge({ href, className = '', color = '', children, size = '', rounded = 'rounded', ...props }) {

    const colorClass = {
        light: 'badge-light',
        gray: 'badge-gray',
        dark: 'badge-dark',
        primary: 'badge-primary',
        success: 'badge-success',
        danger: 'badge-danger',
        warning: 'badge-warning',
        info: 'badge-info',
        lightGray: 'badge-light-gray',
        lightDark: 'badge-light-dark',
        lightPrimary: 'badge-light-primary',
        lightSuccess: 'badge-light-success',
        lightDanger: 'badge-light-danger',
        lightWarning: 'badge-light-warning',
        lightInfo: 'badge-light-info',
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

    return (
        href
            ?
            <Link
                {...props}
                href={href}
                className={`badge ${colorClass} ` + className + ` ${roundedClass}` + ` ${sizeClass}`}
            >
                {children}
            </Link>
            :
            <div
                {...props}
                className={`badge ${colorClass} ` + className + ` ${roundedClass}` + ` ${size && sizeClass}`}
            >
                {children}
            </div>
    );
}