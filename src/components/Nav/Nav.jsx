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

const NavLink = ({ active, disabled = '', className = '', children, ...props }) => {

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
        </li>
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

export default Nav;