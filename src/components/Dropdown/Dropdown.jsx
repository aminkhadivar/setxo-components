import { useState, useRef, useEffect, createContext, useContext, Fragment } from 'react'
import { Link } from '@inertiajs/react'
import { Transition } from '@headlessui/react'
import './Dropdown.css'

const DropDownContext = createContext()

const Dropdown = ({ children, placement = 'bottom', className = '', autoClose = true, dropdownBgColor = 'light' }) => {

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

    const placementClass = {
        top: 'dropup-start',
        'top-center': 'dropup-center',
        'top-end': 'dropup-end',
        right: 'dropend-start',
        'right-center': 'dropend-center',
        'right-end': 'dropend-end',
        bottom: 'dropdown-start',
        'bottom-center': 'dropdown-center',
        'bottom-end': 'dropdown-end',
        left: 'dropstart-start',
        'left-center': 'dropstart-center',
        'left-end': 'dropstart-end'
    }[placement]

    return (
        <DropDownContext.Provider value={{ open, setOpen, hideDropdownOnHover, showDropdownOnHover, toggleOpen, autoClose, dropdownBgColor, placement, placementClass }}>
            <div
                onMouseEnter={autoClose == 'hover' ? showDropdownOnHover : () => null} onMouseLeave={autoClose == 'hover' ? hideDropdownOnHover : () => null} className={'relative' + `${className && ` ` + className}`} ref={ref}
            >{children}</div>
        </DropDownContext.Provider>
    )
}

const Trigger = ({ className = '', children, ...props }) => {

    const { toggleOpen, open } = useContext(DropDownContext)

    const autoClose = useContext(DropDownContext)

    return (
        <div
            {...props}
            className={'drop-trigger' + `${className && ` ` + className}`}
            onClick={autoClose.autoClose == 'hover' ? null : toggleOpen}
        >
            {children}
        </div>
    )
}

const Content = ({ width = '192', contentClasses = 'bg-white', children }) => {

    const { open, setOpen, autoClose, dropdownBgColor, placement, placementClass } = useContext(DropDownContext)

    let widthClasses = ''
    const customWidth = `${width}px`

    if (width === '48') {
        widthClasses = 'w-48'
    } else {
        widthClasses = customWidth
    }

    const dropdownBgcolorClass = {
        light: 'bg-white dark:bg-zinc-800',
        dark: 'bg-zinc-800 dark',
    }[dropdownBgColor]

    const translateClass = {
        top: 'translate-y-5',
        'top-center': 'translate-y-5',
        'top-end': 'translate-y-5',
        right: '-translate-x-5',
        'right-center': '-translate-x-5',
        'right-end': '-translate-x-5',
        bottom: '-translate-y-5',
        'bottom-center': '-translate-y-5',
        'bottom-end': '-translate-y-5',
        left: 'translate-x-5',
        'left-center': 'translate-x-5',
        'left-end': 'translate-x-5'
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
                className={`dropmenu ${placementClass} ${(dropdownBgColor == 'dark') ? 'border border-transparent dark:border-zinc-700' : 'border border-zinc-300 dark:border-zinc-700 '}`}
                onClick={(autoClose == true || autoClose == 'inside' || autoClose == 'hover') ? () => setOpen(false) : () => null}
                style={{ width: customWidth }}
            >
                <div className={`drop-content ${dropdownBgcolorClass} ` + contentClasses}>{children}</div>
            </div>
        </Transition>
    )
}

const DropdownLink = ({ className = '', children, ...props }) => {

    const { setOpen, autoClose } = useContext(DropDownContext)

    return (
        <div onClick={(autoClose == true || autoClose == 'inside' || autoClose == 'hover') ? () => setOpen(false) : () => null}>
            <Link
                preserveState
                preserveScroll
                {...props}
                className={
                    'dropdown-link' + `${className && ' ' + className}`
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