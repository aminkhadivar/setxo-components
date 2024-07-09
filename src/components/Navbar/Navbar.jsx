import { createContext, useContext, useState, Fragment } from 'react'
import { Link } from "@inertiajs/react"
import './Navbar.css'
import { ArrowRight2, HambergerMenu } from 'iconsax-react'
import { Transition } from '@headlessui/react'


const NavbarContext = createContext()

const Navbar = ({ children, className = '', color = 'default', striped = '', divided = '', hoverable = '', rounded = '', ...props }) => {

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen((previousState) => !previousState)
    }

    const colorClass = {
        default: 'bg-default navbar-dark',
        light: 'bg-light navbar-dark',
        gray: 'bg-gray navbar-light',
        dark: 'bg-dark navbar-light',
        primary: 'bg-primary navbar-light',
        success: 'bg-success navbar-light',
        danger: 'bg-danger navbar-light',
        warning: 'bg-warning navbar-light',
        info: 'bg-info navbar-light',
        purple: 'bg-purple navbar-light',
    }[color]

    const roundedClass = {
        none: 'rounded-none',
        rounded: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    }[rounded];

    return (
        <NavbarContext.Provider value={{ className, children, color, open, toggleOpen , colorClass }}>
            <nav {...props} className={`navbar` + `${open ? ' rounded-b-none' : ' '}` + `${color && ` ` + colorClass}` + `${rounded && ` ` + roundedClass}`}>
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

    const { open, setOpen, toggleOpen } = useContext(NavbarContext)

    return (
        <button onClick={toggleOpen} className="navbar-toggle order-2" type="button" aria-expanded={`${open ? true : false}`} aria-label="Toggle navigation">
            <span className="absolute -inset-0.5"></span>
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

    const { open, setOpen, toggleOpen , colorClass , color } = useContext(NavbarContext)

    return (
        <>
            <div className={`navbar-collapse`}>
                <Transition
                    as="div"
                    show={open}
                    className={`navbar-nav transition-all duration-500` + `${color && ` ` + colorClass}`}
                    enter="ease-in-out duration-500"
                    enterFrom={`opacity-0 -translate-y-5`}
                    enterTo="opacity-100 translate-y-0"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo={`opacity-0 -translate-y-5`}
                >
                    <div className="relative">
                        {children}
                    </div>
                </Transition>
                <div className={`relative hidden md:block`}>
                    {children}
                </div>
            </div>
        </>
    )
}

// const TableHeadCell = ({ children, key }) => {

//     const color = useContext(TableContext)
//     let colorValue = color.color

//     const divided = useContext(TableContext)
//     let dividedValue = divided.divided

//     const colorHeadClass = {
//         light: 'table-head-light',
//         gray: 'table-head-gray',
//         dark: 'table-head-dark',
//         primary: 'table-head-primary',
//         success: 'table-head-success',
//         danger: 'table-head-danger',
//         warning: 'table-head-warning',
//         info: 'table-head-info',
//         purple: 'table-head-purple',
//     }[colorValue]

//     return (
//         <th className={`table-head` + `${colorValue && ` ` + colorHeadClass}` + ` ${!colorValue && dividedValue && ' table-head-defualt'}`} key={key}>
//             {children}
//         </th>
//     )
// }

// const TableBody = ({ children }) => {

//     const color = useContext(TableContext)
//     let colorValue = color.color

//     const divided = useContext(TableContext)
//     let dividedValue = divided.divided

//     const colorDivideClass = {
//         default: 'table-divided-default',
//         light: 'table-divided-light',
//         gray: 'table-divided-gray',
//         dark: 'table-divided-dark',
//         primary: 'table-divided-primary',
//         success: 'table-divided-success',
//         danger: 'table-divided-danger',
//         warning: 'table-divided-warning',
//         info: 'table-divided-info',
//         purple: 'table-divided-purple',
//     }[color.color]

//     return (
//         <tbody className={`table-body group/body` + `${colorValue ? (dividedValue && ` ` + colorDivideClass) : (dividedValue && ` table-divided-default`)}`}>
//             {children}
//         </tbody>
//     )
// }
// const TableRow = ({ children, key }) => {

//     return (
//         <tr className={`table-row group/row`} key={key}>
//             {children}
//         </tr>
//     )
// }
// const TableCell = ({ children, key }) => {

//     return (
//         <td className={`table-cell`} key={key}>
//             {children}
//         </td>
//     )
// }

Navbar.Brand = NavbarBrand
Navbar.Collapse = NavbarCollapse
Navbar.Toggle = NavbarToggle

export default Navbar