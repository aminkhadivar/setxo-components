import { useState, useRef, useEffect, createContext, useContext, Fragment } from 'react'
import { Link } from '@inertiajs/react'
import { Transition } from '@headlessui/react'
import './Dropdown.css'

const DropDownContext = createContext()

const Dropdown = ({ children, autoClose = true, dropdownBgColor = 'light' }) => {

    const autoCloseClass = {
        true: true,
        false: false,
        inside: false,
        outside: true,
        hover: true,
    }[autoClose]

    const ref = useRef()

    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen((previousState) => !previousState)
    }

    const showDropdownOnHover = () => {
        setOpen(true)
    }

    const hideDropdownOnHover = () => {
        setOpen(false);
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if ((autoCloseClass == true || autoCloseClass == 'outside') && open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open])

    return (
        <DropDownContext.Provider value={{ open, setOpen, hideDropdownOnHover, showDropdownOnHover, toggleOpen, autoClose, dropdownBgColor }}>
            <div
                onMouseEnter={autoClose == 'hover' ? showDropdownOnHover : () => null} onMouseLeave={autoClose == 'hover' ? hideDropdownOnHover : () => null} className="relative" ref={ref}
            >{children}</div>
        </DropDownContext.Provider>
    )
}

const Trigger = ({ className = '', children, ...props }) => {

    const { toggleOpen } = useContext(DropDownContext)

    const autoClose = useContext(DropDownContext)

    return (
        <div
            {...props}
            className={className}
            onClick={autoClose.autoClose == 'hover' ? null : toggleOpen}
        >
            {children}
        </div>
    )
}

const Content = ({ align = 'left', width = '48', placement = 'bottom', contentClasses = 'bg-white', children }) => {

    const { open, setOpen , autoClose } = useContext(DropDownContext)

    const alignmentClasses = {
        right: 'dropdown-menu-end',
        left: 'dropdown-menu-start',
        center: 'dropdown-menu-center',
    }[align]

    let widthClasses = ''

    if (width === '48') {
        widthClasses = 'w-48'
    } else {
        widthClasses = `w-${width}`
    }

    const dropdownBgColor = useContext(DropDownContext)

    const dropdownBgcolorClass = {
        light: 'bg-white dark:bg-zinc-800',
        dark: 'bg-zinc-800 dark',
    }[dropdownBgColor.dropdownBgColor]

    const placementClass = {
        top: 'dropdown-top',
        right: 'dropdown-right',
        bottom: 'dropdown-bottom',
        left: 'dropdown-left',
    }[placement]

    const translateClass = {
        top: 'translate-y-5',
        right: '-translate-x-5',
        bottom: '-translate-y-5',
        left: 'translate-x-5',
    }[placement]

    return (
        <Transition
            as={Fragment}
            show={open}
            enter="ease-in-out duration-200"
            enterFrom={`opacity-0 sm:scale-95 ${autoClose == 'hover' ? '' : translateClass}`}
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in-out duration-100"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo={`opacity-0 sm:scale-95 ${autoClose == 'hover' ? '' : translateClass}`}
        >
            <div
                className={`dropdown ${placementClass} ${(placement == 'right') ? '' : (placement == 'left') ? '' : alignmentClasses} ${widthClasses} ${(dropdownBgColor.dropdownBgColor == 'dark') ? 'border border-transparent dark:border-zinc-700' : 'border border-zinc-200 dark:border-zinc-700 '}`}
                onClick={(autoClose == true || autoClose == 'inside' || autoClose == 'hover') ? () => setOpen(false) : () => null}
            >
                <div className={`dropdown-content ${dropdownBgcolorClass} ` + contentClasses}>{children}</div>
            </div>
        </Transition>
    )
}

const DropdownLink = ({ className = '', children, ...props }) => {

    const { setOpen , autoClose } = useContext(DropDownContext)

    return (
        <div onClick={(autoClose == true || autoClose == 'inside' || autoClose == 'hover') ? () => setOpen(false) : () => null}>
            <Link
                preserveState
                preserveScroll
                {...props}
                className={
                    'dropdown-link ' +
                    className
                }
            >
                {children}
            </Link>
        </div>
    )
}

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Link = DropdownLink

export default Dropdown