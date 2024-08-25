import { Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import CloseButton from "../CloseButton/CloseButton"
import './Modal.css'

export default function Modal({ content, title, footer, id, className = '', show = false, centered = '', bodyScrollable = '', contentScrollable = '', size = 'md', closeable = true, onClose = () => { }, ...props }) {

    const close = () => {
        if (closeable) {
            onClose()
        } else {
            var element = document.querySelector('.modal-dialog');
            element.classList.add("backdrop-effect");
            setTimeout(function(){
                element.classList.remove("backdrop-effect");
            }, 350);
        }
    };

    const closeButton = () => {
        onClose()
    };

    const maxWidthClass = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-lg',
        lg: 'sm:max-w-3xl',
        xl: 'sm:max-w-5xl',
        full: 'w-full h-screen',
    }[size];

    return (
        <Transition show={show} as={Fragment}>
            <Dialog
                as="div"
                id={id}
                className={`modal`}
                onClose={close}
            >
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={`fixed inset-0 bg-gray-800 dark:bg-gray-600 bg-opacity-80 dark:bg-opacity-90 transition-opacity  ${closeable && 'cursor-pointer'}`} />
                </TransitionChild>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className={`fixed inset-0 ${bodyScrollable && 'w-screen overflow-y-auto'}`}>
                        <div className={`flex ${centered && 'min-h-full'} items-center justify-center ${size === 'full' ? '' : 'py-10 px-4'}`}>
                            <DialogPanel
                                className={`modal-dialog ${size === 'full' ? 'rounded-none' : 'rounded-lg'} ${maxWidthClass}`}
                            >
                                {title &&
                                    <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                                        <div className="flex items-center justify-between">
                                            <h4>{title}</h4>
                                            <CloseButton color="transparent" size="md" rounded="full" onClick={closeButton} />
                                        </div>
                                    </div>
                                }
                                <div {...props} className={`p-4 ${contentScrollable && 'modal-scrollable'} ${className}`}>
                                    {content}
                                </div>
                                {footer &&
                                    <div className={`${footer && 'p-4 sm:flex sm:flex-row-reverse border-t border-gray-100 dark:border-gray-800'}`}>
                                        {footer}
                                    </div>
                                }
                            </DialogPanel>
                        </div>
                    </div>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
}