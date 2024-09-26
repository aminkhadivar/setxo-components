import { Fragment } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import CloseButton from "../CloseButton/CloseButton"
import './Drawer.css'

export default function Drawer({ children, title, content, footer, show = false, width, placement = 'top', closeable = true, onClose = () => { }, ...props }) {

    const close = () => {
        if (closeable) {
            onClose()
        } else {
            var element = document.querySelector('.drawer-dialog');
            element.classList.add("backdrop-effect");
            setTimeout(function () {
                element.classList.remove("backdrop-effect");
            }, 250)
        }
    }

    const closeButton = () => {
        onClose()
    }

    const alignClass = {
        default: {
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-300",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        },
        top: {
            enter: "ease-out duration-300",
            enterFrom: "-translate-y-full",
            enterTo: "translate-y-0",
            leave: "ease-in duration-300",
            leaveFrom: "translate-y-0",
            leaveTo: "-translate-y-full"
        }
        ,
        bottom: {
            enter: "ease-out duration-300",
            enterFrom: "translate-y-full",
            enterTo: "translate-y-0",
            leave: "ease-in duration-300",
            leaveFrom: "translate-y-0",
            leaveTo: "translate-y-full"
        },
        left: {
            enter: "ease-out duration-300",
            enterFrom: "-translate-x-full",
            enterTo: "translate-x-0",
            leave: "ease-in duration-300",
            leaveFrom: "translate-x-0",
            leaveTo: "-translate-x-full"
        },
        right: {
            enter: "ease-out duration-300",
            enterFrom: "translate-x-full",
            enterTo: "translate-x-0",
            leave: "ease-in duration-300",
            leaveFrom: "translate-x-0",
            leaveTo: "translate-x-full"
        },
    }[placement]

    const placementClass = {
        top: 'drawer-dialog-top',
        bottom: 'drawer-dialog-bottom',
        left: 'drawer-dialog-left',
        right: 'drawer-dialog-right',
    }[placement]

    return (
        <Transition show={show} as={Fragment} onClose={close}>
            <Dialog
                as="div"
                className="drawer"
                onClose={close}
            >
                <TransitionChild
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={`drawer-backdrop ${closeable && ' cursor-pointer'}`} />
                </TransitionChild>

                <TransitionChild
                    as={Fragment}
                    placement={placement}
                    enter={`${alignClass.enter}`}
                    enterFrom={`${alignClass.enterFrom}`}
                    enterTo={`${alignClass.enterTo}`}
                    leave={`${alignClass.leave}`}
                    leaveFrom={`${alignClass.leaveFrom}`}
                    leaveTo={`${alignClass.leaveTo}`}
                >
                    <DialogPanel {...props}
                        className={`drawer-dialog ${placementClass} ${width} ${props.className}`}
                    >
                        {title &&
                            <div className="drawer-title">
                                <h4>{title}</h4>
                                <CloseButton color="transparent" size="lg" rounded="full" onClick={closeButton} />
                            </div>
                        }
                        {content}
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </Transition>
    )
}