import { forwardRef, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'

export default function Collapse({ children, title, className, show }) {

    const [openDefaultCollapse, setOpenDefaultCollapse] = useState()

    const defaultToggleOpen = () => {
        setOpenDefaultCollapse((previousState) => !previousState)
    };

    let MyCustomButton = forwardRef(function (props, ref) {
        return <button className={className} ref={ref} {...props} />
    })

    return (
        <>
            <Disclosure>
                <>
                    {title &&
                        <Disclosure.Button as={MyCustomButton} onClick={defaultToggleOpen}>{title}</Disclosure.Button>
                    }
                    <Transition
                        show={title ? openDefaultCollapse : show}
                        className="transition-all duration-300"
                        enter="transition-[max-height] duration-300 ease-in"
                        enterFrom="transform max-h-0 h-0"
                        enterTo="transform max-h-screen h-auto"
                        leave="transition-[max-height] duration-300 ease-out"
                        leaveFrom="transform max-h-screen h-auto"
                        leaveTo="transform max-h-0 h-0"
                    >
                        <p className="overflow-hidden">
                            {children}
                        </p>
                    </Transition>
                </>
            </Disclosure>
        </>
    )
}