import { createContext, useContext } from 'react'
import { Link } from '@inertiajs/react'
import { useEffect, useState } from "react"
import './Nav.css'

const NavContext = createContext()

const Nav = ({ children, rounded = 'rounded', className = '', as = 'nav' }) => {

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
    }[rounded];

    return (
        <NavContext.Provider value={{ className, children, rounded, roundedClass, as }}>
            <nav aria-label="nav">
                <ul className={(as && `${asClasses}`) + (className && ` ${className}`)}>
                    {children}
                </ul>
            </nav>
        </NavContext.Provider>
    )
}

const NavLink = ({ active, disabled = '', className = '', href, children, ...props }) => {

    const [classNames, setClassNames] = useState('')

    const { rounded, roundedClass, as } = useContext(NavContext)

    useEffect(() => {
        setClassNames(
            active
                ? 'nav-link active'
                : 'nav-link'
        )
    }, [active])

    return (
        <li className="nav-item">
            {href ?
                <>
                    {active ?
                        <Link
                            {...props}
                            href={href}
                            className={
                                classNames + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '') + (disabled && ' disabled')
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
                                classNames + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '') + (disabled && ' disabled')
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
                        classNames + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '') + (disabled && ' disabled')
                    }
                >
                    {children}
                </div>
            }
        </li>
    )
}

const NavTab = ({ children, active, disabled = '', className = '', ...props }) => {

    const [classNames, setClassNames] = useState('')

    useEffect(() => {
        setClassNames(
            active == 'true'
                ? 'nav-link active'
                : 'nav-link'
        )
    }, [active])

    const { rounded, roundedClass, as } = useContext(NavContext)

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
                    aria-disabled={disabled ? 'true' : ''}
                >
                    {children}
                </div>
                :
                <div
                    className={
                        classNames + (className && ` ${className}`) + (rounded && (as == 'pills' || as == 'fillPills') ? ` ${roundedClass}` : '')
                    }
                >
                    {children}
                </div>
            }
        </li >
    )
}

const NavDropdown = ({ children }) => {
    return (
        <li className="nav-item">
            {children}
        </li>
    )
}

Nav.Link = NavLink
Nav.Dropdown = NavDropdown
Nav.Tab = NavTab

export default Nav