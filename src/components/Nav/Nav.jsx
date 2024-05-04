import { createContext } from 'react'
import { Link } from '@inertiajs/react'
import { useEffect, useState } from "react"
import './Nav.css'

const NavContext = createContext();

const Nav = ({ children, className = '' }) => {
    return (
        <NavContext.Provider value={{ className, children }}>
            <nav aria-label="nav">
                <ul className={'nav' + (className && ` ${className}`)}>
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

const NavTab = ({ children,active, disabled = '', className = '', ...props }) => {
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
            {...props}
            className="nav-item"
        >
            <div
                className={
                    classNames + (className && ` ${className}`) + (disabled && ' disabled')
                }
            >
                {children}
            </div>
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