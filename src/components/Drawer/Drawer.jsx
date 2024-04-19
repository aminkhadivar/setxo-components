import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CloseButton from "../CloseButton/CloseButton"
import './Drawer.css'

export default function Drawer({ children, title, content, footer, show = false, width, placement, closeable = true, onClose = () => { }, ...props }) {
    const close = () => {
        if (closeable) {
            onClose();
        } else {
            var element = document.querySelector('.drawer-dialog');
            element.classList.add("backdrop-effect");
            setTimeout(function () {
                element.classList.remove("backdrop-effect");
            }, 350);
        }
    };

    const closeButton = () => {
        onClose();
    };

    const alignClass = {
        default: {
            enter: "ease-out duration-200",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        },
        top: {
            enter: "ease-out duration-200",
            enterFrom: "opacity-0 -translate-y-full",
            enterTo: "opacity-100 translate-y-0",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 -translate-y-full"
        }
        ,
        bottom: {
            enter: "ease-out duration-200",
            enterFrom: "opacity-0 translate-y-full",
            enterTo: "opacity-100 translate-y-0",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-full"
        },
        left: {
            enter: "ease-out duration-200",
            enterFrom: "opacity-0 -translate-x-full",
            enterTo: "opacity-100 translate-x-0",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-x-0",
            leaveTo: "opacity-0 -translate-x-full"
        }
        ,
        right: {
            enter: "ease-out duration-200",
            enterFrom: "opacity-0 translate-x-full",
            enterTo: "opacity-100 translate-x-0",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-x-0",
            leaveTo: "opacity-0 translate-x-full"
        }
        ,
    }[placement];

    return (
        <Transition show={show} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50"
                onClose={close}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={`fixed inset-0 overflow-hidden bg-gray-500 bg-opacity-20 transition-opacity backdrop-filter backdrop-blur-md ${closeable ? 'cursor-pointer' : ''}`} />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    placement={placement}
                    enter={`${alignClass.enter}`}
                    enterFrom={`${alignClass.enterFrom}`}
                    enterTo={`${alignClass.enterTo}`}
                    leave={`${alignClass.leave}`}
                    leaveFrom={`${alignClass.leaveFrom}`}
                    leaveTo={`${alignClass.leaveTo}`}
                >
                    <Dialog.Panel {...props}
                        className={`drawer-dialog bg-white dark:bg-gray-900 overflow-y-auto shadow-lg transform transition-all rounded-lg ${width} ${props.className}`}
                    >
                        <div className="p-4">
                            <div className="text-lg">
                                {title &&
                                    <div className="flex items-center justify-between">
                                        <h4>{title}</h4>
                                        <CloseButton color="transparent" size="md" rounded="full" onClick={closeButton} />
                                    </div>
                                }
                            </div>
                            <div className="mt-6">
                                {content}
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}