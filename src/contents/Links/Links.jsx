import { Link } from "@inertiajs/react"
import './Links.css'

export default function A({ href, as = 'Link', className = '', color = '', underline = '', underlineOnHover = '', children, ...props }) {

    const colorClass = {
        light: 'link-light',
        gray: 'link-gray',
        dark: 'link-dark',
        primary: 'link-primary',
        success: 'link-success',
        danger: 'link-danger',
        warning: 'link-warning',
        info: 'link-info',
        purple: 'link-purple',
    }[color];

    return (
        <>
            {as === 'Link' &&
                <Link
                    {...props}
                    href={href}
                    className={`${colorClass}` + `${underline && ' underline'}` + `${underlineOnHover && ' hover:underline'}` + `${className && ' ' + className}`}
                >
                    {children}
                </Link>
            }
            {as === 'externalLink' &&
                <a
                    {...props}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${colorClass}` + `${underline && ' underline'}` + `${className && ' ' + className}`}
                >
                    {children}
                </a>
            }
        </>
    )
}