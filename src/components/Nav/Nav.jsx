import { createContext } from 'react'
import { Link } from '@inertiajs/react'
import { useEffect, useState } from "react"
import './Nav.css'

const NavContext = createContext();

const Nav = ({ children, className = '', as = 'nav' }) => {

    const asClasses = {
        nav: '',
        tabs: 'nav-tabs',
        pills: 'nav-pills',
        fillTabs: 'nav-tabs nav-fill',
        fillPills: 'nav-pills nav-fill',
    }[as]

    return (
        <NavContext.Provider value={{ className, children }}>
            <nav aria-label="nav">
                <ul className={'nav' + (className && ` ${className}`) + (as && ` ${asClasses}`)}>
                    {children}
                </ul>
            </nav>
        </NavContext.Provider>
    );
};

const NavLink = ({ active, disabled = '', className = '', href, children, ...props }) => {

    const [classNames, setClassNames] = useState('')

    useEffect(() => {
        setClassNames(
            active
                ? 'nav-link active'
                : 'nav-link'
        )
    }, [active]);

    return (
        <li className="nav-item">
            {href ?
                <>
                    {active ?
                        <Link
                            {...props}
                            href={href}
                            className={
                                classNames + (className && ` ${className}`) + (disabled && ' disabled')
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
                                classNames + (className && ` ${className}`) + (disabled && ' disabled')
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
                        classNames + (className && ` ${className}`) + (disabled && ' disabled')
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
            active
                ? 'nav-link active'
                : 'nav-link'
        )
    }, [active]);
    return (
        <li
            className="nav-item"
        >
            {disabled ?
                <div
                    {...props}
                    className={
                        classNames + (className && ` ${className}`) + (disabled && ' disabled')
                    }
                    aria-disabled={disabled ? 'true' : ''}
                >
                    {children}
                </div>
                :
                <div
                    {...props}
                    className={
                        classNames + (className && ` ${className}`)
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

Nav.Link = NavLink;
Nav.Dropdown = NavDropdown;
Nav.Tab = NavTab;

export default Nav;