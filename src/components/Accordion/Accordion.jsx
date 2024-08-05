import { useEffect, useState, createContext, useContext } from 'react'
import { Transition } from '@headlessui/react'
import { ArrowDown2 } from 'iconsax-react'
import './Accordion.css'

export const AccordionContext = createContext()

const Accordion = ({ children, color = 'lightPrimary', className = '', data = [{}], multiple = '' }) => {

    const colorClass = {
        light: 'accordion-light',
        gray: 'accordion-gray',
        dark: 'accordion-dark',
        primary: 'accordion-primary',
        success: 'accordion-success',
        danger: 'accordion-danger',
        warning: 'accordion-warning',
        info: 'accordion-info',
        purple: 'accordion-purple',
        lightPrimary: 'accordion-light-primary',
        lightSuccess: 'accordion-light-success',
        lightDanger: 'accordion-light-danger',
        lightWarning: 'accordion-light-warning',
        lightInfo: 'accordion-light-info',
        lightPurple: 'accordion-light-purple',
        custom: '',
    }[color];

    const [items, setItems] = useState(data)

    const handleClick = (id) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, show: !item.show } : { ...item, show: false }
            )
        )
    }

    return (
        <AccordionContext.Provider value={{ className, children, multiple, colorClass }}>
            <div className={'accordion'}>
                {children ? children :
                    <>
                        {/* Use data array */}
                        {items.map(({ title, id, show, content }) => (
                            <div className="accordion-item"
                                id={id}
                                key={id}
                                show={show.toString()}
                                onClick={() => handleClick(id)}
                            >
                                <button
                                    className={`accordion-button ${show ? (colorClass + (className && ` ${className}`)) : 'accordion-default'}`}
                                    type="button"
                                    aria-expanded={show ? 'true' : 'false'}
                                >
                                    <div className="font-medium text-base">{title}</div>
                                    <div className="flex items-center ml-2 w-10">
                                        <ArrowDown2
                                            className={`h-5 w-5 ${show ? 'rotate-180' : 'text-gray-500 dark:text-gray-400'} transform duration-300`}
                                        />
                                    </div>
                                </button>
                                <Transition
                                    show={show}
                                    id={id}
                                    key={id}
                                    enter="transition-all duration-700 ease-in"
                                    enterFrom="transform max-h-0 h-0"
                                    enterTo="transform max-h-screen h-auto"
                                    leave="transition-all duration-300 ease-out"
                                    leaveFrom="transform max-h-screen h-auto"
                                    leaveTo="transform max-h-0 h-0"
                                >
                                    <div className="overflow-hidden">
                                        <div className="accordion-body">
                                            {content}
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        ))}
                    </>
                }
            </div>
        </AccordionContext.Provider>
    )
}

const AccordionItem = ({ children, title, id, alwaysOpen }) => {

    const { multiple, colorClass, className } = useContext(AccordionContext)

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (alwaysOpen) {
            setOpen(true)
        }
    }, [])

    const toggleOpen = () => {
        if (multiple) {
            setOpen((previousState) => !previousState)
        } else {
            handleClick()
        }
    }

    return (
        <>
            {/* Multiple props for Accordion component */}
            <div
                className="accordion-item"
                id={id}
                key={id}>
                <button
                    className={`accordion-button ${open ? (colorClass + (className && ` ${className}`)) : 'accordion-default'}`}
                    type="button"
                    aria-expanded={open ? 'true' : 'false'}
                    onClick={toggleOpen}
                >
                    <div className="font-medium text-base">{title}</div>
                    <div className="flex items-center ml-2">
                        <ArrowDown2
                            className={`h-5 w-5 ${open ? 'rotate-180' : 'text-gray-500 dark:text-gray-400'} transform duration-300`}
                        />
                    </div>
                </button>

                <Transition
                    show={open}
                    enter="transition-all duration-700 ease-in"
                    enterFrom="transform max-h-0 h-0"
                    enterTo="transform max-h-screen h-auto"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-screen h-auto"
                    leaveTo="transform max-h-0 h-0"
                >
                    <div className="overflow-hidden">
                        <div className="accordion-body">
                            {children}
                        </div>
                    </div>
                </Transition>
            </div>
        </>
    )
}

Accordion.Item = AccordionItem

export default Accordion