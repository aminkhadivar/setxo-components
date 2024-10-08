import { createContext, useContext } from 'react'
import { Link } from '@inertiajs/react'
import { useEffect, useState } from "react"
import './Nav.css'

const NavContext = createContext()

const Nav = ({ children, rounded = 'rounded', className = '', as = 'nav', color = 'primary', theme = '', ...props }) => {

    const asClasses = {
        nav: 'nav',
        tabs: 'nav nav-tabs',
        pills: 'nav nav-pills',
        fillTabs: 'nav nav-tabs nav-fill',
        fillPills: 'nav nav-pills nav-fill',
    }[as]

    const roundedClass = {
        none: 'rounded-none',
        rounded: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    }[rounded]

    const colorClass = {
        light: 'nav-link-light',
        gray: 'nav-link-gray',
        dark: 'nav-link-dark',
        primary: 'nav-link-primary',
        success: 'nav-link-success',
        danger: 'nav-link-danger',
        warning: 'nav-link-warning',
        info: 'nav-link-info',
        purple: 'nav-link-purple',
        custom: '',
    }[color]

    return (
        <NavContext.Provider value={{ className, children, rounded, roundedClass, as, color, colorClass }}>
            <nav aria-label="nav">
                <ul className={(as && `${asClasses}`) + (className && ` ${className}`) + (theme == 'dark' ? ` nav-dark` : '')} {...props}>
                    {children}
                </ul>
            </nav>
        </NavContext.Provider>
    )
}

const NavLink = ({ active, disabled = '', className = '', href, children, ...props }) => {

    const { rounded, roundedClass, as, colorClass } = useContext(NavContext)

    return (
        <li className="nav-item">
            {href ?
                <>
                    {active ?
                        <Link
                            {...props}
                            href={href}
                            className={
                                'nav-link active' + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '') + (disabled && ' disabled') + ` ${colorClass}`
                            }
                            aria-current="page"
                        >
                            {children}
                        </Link>
                        :
                        <Link
                            {...props}
                            href={href}
                            className={
                                'nav-link' + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '') + (disabled && ' disabled')
                            }
                        >
                            {children}
                        </Link>
                    }
                </>
                :
                <div
                    {...props}
                    className={
                        'nav-link' + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '') + (disabled && ' disabled')
                    }
                >
                    {children}
                </div>
            }
        </li>
    )
}

const NavTab = ({ children, active = false, disabled = '', className = '', ...props }) => {

    const [classNames, setClassNames] = useState('')

    useEffect(() => {
        setClassNames(
            active == 'true'
                ? 'nav-link active'
                : 'nav-link'
        )
    }, [active])

    const { rounded, roundedClass, as, colorClass } = useContext(NavContext)

    return (
        <li
            {...props}
            className="nav-item"
        >
            {disabled ?
                <div
                    className={
                        classNames + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '') + (disabled && ' disabled')
                    }
                    aria-disabled={disabled && 'true'}
                    tabIndex="-1"
                >
                    {children}
                </div>
                :
                <div
                    className={
                        classNames + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '') + (active == 'true' ? ` ${colorClass}` : '')
                    }
                >
                    {children}
                </div>
            }
        </li >
    )
}

const NavDropdown = ({ children, className = '', active = '', disabled = '', ...props }) => {

    const [classNames, setClassNames] = useState('')

    useEffect(() => {
        setClassNames(
            active
                ? 'nav-link active'
                : 'nav-link'
        )
    }, [active])

    const { rounded, roundedClass, as, colorClass } = useContext(NavContext)

    return (
        <li {...props} className="nav-item">
            <div
                className={
                    classNames + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '') + (active ? ` ${colorClass}` : '') + (disabled && ' disabled')
                }
            >
                {children}
            </div>
        </li>
    )
}

Nav.Link = NavLink
Nav.Dropdown = NavDropdown
Nav.Tab = NavTab

export default Nav