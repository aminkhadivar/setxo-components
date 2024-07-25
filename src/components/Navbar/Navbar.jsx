import { createContext, useContext, useState } from 'react'
import { Link } from "@inertiajs/react"
import './Navbar.css'
import { HambergerMenu } from 'iconsax-react'
import { Transition } from '@headlessui/react'

const NavbarContext = createContext()

const Navbar = ({ children, position = 'relative', navbarTheme = '', className = '', color = 'default', customColor = '', striped = '', divided = '', hoverable = '', rounded = 'md', placement = 'top', ...props }) => {

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen((previousState) => !previousState)
    }

    const navbarThemeClass = {
        light: 'navbar-dark',
        dark: 'navbar-light',
    }[navbarTheme]

    const colorClass = {
        default: 'bg-default',
        light: 'bg-light',
        gray: 'bg-gray',
        dark: 'bg-dark',
        primary: 'bg-primary',
        success: 'bg-success',
        danger: 'bg-danger',
        warning: 'bg-warning',
        info: 'bg-info',
        purple: 'bg-purple',
        custom: customColor,
    }[color]

    const roundedClass = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        rounded: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
    }[rounded]

    const roundedTopClass = {
        none: 'rounded-none',
        sm: 'rounded-t-sm',
        rounded: 'rounded-t',
        md: 'rounded-t-md',
        lg: 'rounded-t-lg',
        xl: 'rounded-t-xl',
    }[rounded]

    const roundedBottomClass = {
        none: 'rounded-none',
        sm: 'rounded-b-sm',
        rounded: 'rounded-b',
        md: 'rounded-b-md',
        lg: 'rounded-b-lg',
        xl: 'rounded-b-xl',
    }[rounded]

    const positionClass = {
        relative: 'relative',
        absolute: 'absolute',
        fixed: 'fixed',
        sticky: 'sticky',
    }[position]

    return (
        <NavbarContext.Provider value={{ className, children, color, open, toggleOpen, colorClass, rounded, roundedBottomClass, roundedClass }}>
            <nav {...props} className={`navbar` + `${open ? ' z-50 backdrop-filter backdrop-blur-md' : ' z-auto'}` + `${color && ` ` + colorClass}` + ` ${open ? ` rounded-b-none ` + roundedTopClass : ` ` + roundedClass}` + `${className && ` ` + className}` + `${navbarTheme && ` ` + navbarThemeClass}` + ` ${position}`}>
                <div className="navbar-container">
                    {children}
                </div>
            </nav>
        </NavbarContext.Provider>
    )
}

const NavbarBrand = ({ children, href, className = '', ...props }) => {

    return (
        <Link
            {...props}
            href={href}
            className={`navbar-brand` + `${className && ' ' + className}`}
        >
            {children}
        </Link>
    )
}

const NavbarToggle = ({ children, className = '', ...props }) => {

    const { open, toggleOpen, rounded, roundedClass } = useContext(NavbarContext)

    return (
        <button onClick={toggleOpen} className={`navbar-toggle order-2` + `${rounded && ` ` + roundedClass}`} type="button" aria-expanded={`${open ? true : false}`} aria-label="Toggle navigation">
            <span className="sr-only">Open main menu</span>
            {open ?
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                :
                <HambergerMenu />
            }
        </button>
    )
}

const NavbarCollapse = ({ children, className = '', ...props }) => {

    const { open, colorClass, color, roundedBottomClass } = useContext(NavbarContext)

    return (
        <div className={`navbar-collapse` + `${className && ` ` + className}`}>
            <Transition
                as="div"
                show={open}
                className={`navbar-nav transition-all` + `${color && ` ` + colorClass}` + ` ${roundedBottomClass}`}
                enter="ease-linear duration-300"
                enterFrom={`opacity-0 -translate-y-5`}
                enterTo="opacity-100 translate-y-0"
                leave="ease-linear duration-300"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo={`opacity-0 -translate-y-5`}
            >
                <div className="relative w-full">
                    {children}
                </div>
            </Transition>
            <div className={`relative hidden md:flex items-center w-full`}>
                {children}
            </div>
        </div>
    )
}

Navbar.Brand = NavbarBrand
Navbar.Collapse = NavbarCollapse
Navbar.Toggle = NavbarToggle

export default Navbar