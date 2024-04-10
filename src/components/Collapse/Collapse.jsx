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
                        className="overflow-hidden"
                        enter="transition transition-[max-height] duration-700 ease-in"
                        enterFrom="transform max-h-0"
                        enterTo="transform max-h-screen"
                        leave="transition transition-[max-height] duration-500 ease-out"
                        leaveFrom="transform max-h-screen"
                        leaveTo="transform max-h-0"
                    >
                        {children}
                    </Transition>
                </>
            </Disclosure>
        </>
    )
}