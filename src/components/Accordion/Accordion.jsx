import { useEffect, useState, createContext, useContext } from 'react'
import { Transition } from '@headlessui/react'
import { ArrowDown2 } from 'iconsax-react'
import './Accordion.css'

const AccordionContext = createContext()

const Accordion = ({ children, className = '', multiple = false }) => {
    return (
        <AccordionContext.Provider value={{ className, children, multiple }}>
            <div className={'accordion' + (className && ` ${className}`)}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

const AccordionItem = ({ children, title, show = false, alwaysOpen, onClick = () => { } }) => {

    const multiple = useContext(AccordionContext)

    let multipleValue = multiple.multiple

    const [open, setOpen] = useState(false)

    const toggleOnClick = () => {
        onClick()
    }

    useEffect(() => {
        if (alwaysOpen) {
            setOpen(true)
        }
    }, [])

    const toggleOpen = () => {
        if (multipleValue) {
            setOpen((previousState) => !previousState)
        } else {
            toggleOnClick()
        }
    }

    return (
        <div className="accordion-item">
            <button
                className={`accordion-button ${(show ? show : open) ? 'bg-blue-100 dark:bg-gray-600 text-blue-900 dark:text-gray-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'}`}
                type="button"
                aria-expanded={(show ? show : open) ? 'true' : 'false'}
                onClick={toggleOpen}
            >
                <h6 className="font-medium text-inherit">{title}</h6>
                <ArrowDown2
                    className={`h-5 w-5 ${(show ? show : open) ? 'rotate-180 text-blue-600 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'} transform duration-300`}
                />
            </button>
            <Transition
                show={show ? show : open}
                className="overflow-hidden"
                enter="transition transition-[max-height] duration-700 ease-in"
                enterFrom="transform max-h-0"
                enterTo="transform max-h-screen"
                leave="transition transition-[max-height] duration-300 ease-out"
                leaveFrom="transform max-h-screen"
                leaveTo="transform max-h-0"
            >
                {children}
            </Transition>
        </div>
    )
}

Accordion.Item = AccordionItem

export default Accordion