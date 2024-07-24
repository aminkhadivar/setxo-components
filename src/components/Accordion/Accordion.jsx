import { useEffect, useState, createContext, useContext } from 'react'
import { Transition } from '@headlessui/react'
import { ArrowDown2 } from 'iconsax-react'
import './Accordion.css'

const AccordionContext = createContext()

const Accordion = ({ children, className = '', data = [], multiple = false }) => {

    const [items, setItems] = useState(data)

    const handleClick = (id) => {
        setItems(
            items.map((d) =>
                d.id === id ? { ...d, show: !d.show } : { ...d, show: false }
            )
        )
    }

    return (
        <AccordionContext.Provider value={{ className, children, multiple }}>
            <div className={'accordion' + (className && ` ${className}`)}>

                {children}

                {/* Use data array from another components */}
                {items.map(({ title, id, show, content }) => (
                    <div className="accordion-item"
                        id={id}
                        key={id}
                        show={show.toString()}
                        onClick={() => handleClick(id)}
                    >
                        <button
                            className={`accordion-button ${show ? 'bg-blue-100 dark:bg-gray-600 text-blue-900 dark:text-gray-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'}`}
                            type="button"
                            aria-expanded={show ? 'true' : 'false'}
                        >
                            <h6 className="font-medium text-inherit">{title}</h6>
                            <div className="flex items-center ml-2">
                                <ArrowDown2
                                    className={`h-5 w-5 ${show ? 'rotate-180 text-blue-600 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'} transform duration-300`}
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
                                <div className="accordion-content">
                                    {content}
                                </div>
                            </div>
                        </Transition>
                    </div>
                ))}
            </div>
        </AccordionContext.Provider>
    )
}

const AccordionItem = ({ children, title, id, alwaysOpen }) => {

    const { multiple } = useContext(AccordionContext)

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
                    className={`accordion-button ${open ? 'bg-blue-100 dark:bg-gray-600 text-blue-900 dark:text-gray-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'}`}
                    type="button"
                    aria-expanded={open ? 'true' : 'false'}
                    onClick={toggleOpen}
                >
                    <h6 className="font-medium text-inherit">{title}</h6>
                    <ArrowDown2
                        className={`h-5 w-5 ${open ? 'rotate-180 text-blue-600 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'} transform duration-300`}
                    />
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
                        <div className="accordion-content">
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