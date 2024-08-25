import { forwardRef, useState } from 'react'
import { Disclosure, DisclosureButton, Transition } from '@headlessui/react'

export default function Collapse({ children, title, className, show }) {

    const [openDefaultCollapse, setOpenDefaultCollapse] = useState()

    const defaultToggleOpen = () => {
        setOpenDefaultCollapse((previousState) => !previousState)
    }

    let MyCustomButton = forwardRef(function (props, ref) {
        return <button className={className} ref={ref} {...props} />
    })

    return (
        <>
            <Disclosure>
                <>
                    {title &&
                        <DisclosureButton as={MyCustomButton} onClick={defaultToggleOpen}>{title}</DisclosureButton>
                    }
                    <Transition
                        show={title ? openDefaultCollapse : show}
                        className="transition-all duration-300"
                        enter="transition-[max-height] duration-500 ease-in"
                        enterFrom="transform max-h-0"
                        enterTo="transform max-h-screen"
                        leave="transition-[max-height] duration-300 ease-out"
                        leaveFrom="transform max-h-screen"
                        leaveTo="transform max-h-0"
                    >
                        <div className="overflow-hidden">
                            {children}
                        </div>
                    </Transition>
                </>
            </Disclosure>
        </>
    )
}