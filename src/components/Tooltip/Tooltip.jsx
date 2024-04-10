import { useState, Fragment } from "react"
import { Transition } from '@headlessui/react'
import './Tooltip.css'

export default function Tooltip({ content, className = '', children, placement = 'top', rounded = 'md', color = 'dark', ...props }) {

    const [show, setShow] = useState(false)
    
    const showTooltip = () => {
        setShow(true)
    }

    const hideTooltip = () => {
        setShow(false);
    }

    const placementClass = {
        top: 'tooltip-top',
        right: 'tooltip-right',
        bottom: 'tooltip-bottom',
        left: 'tooltip-left',
    }[placement]

    const colorClass = {
        light: 'tooltip-light',
        gray: 'tooltip-gray',
        dark: 'tooltip-dark',
        primary: 'tooltip-primary',
        success: 'tooltip-success',
        danger: 'tooltip-danger',
        warning: 'tooltip-warning',
        info: 'tooltip-info',
        custom: '',
    }[color]

    const roundedClass = {
        none: ' rounded-none',
        sm: ' rounded-sm',
        rounded: ' rounded',
        md: ' rounded-md',
        lg: ' rounded-lg',
        full: ' rounded-full',
    }[rounded]

    const translateClass = {
        top: 'translate-y-2',
        right: '-translate-x-2',
        bottom: '-translate-y-2',
        left: 'translate-x-2',
    }[placement]

    return (
        <div className="relative inline"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            <Transition
                as={Fragment}
                show={show}
                enter="ease-in-out duration-200"
                enterFrom={`opacity-0 sm:scale-95 ${translateClass}`}
                enterTo="opacity-100 sm:scale-100 translate-y-0"
                leave="ease-in-out duration-200"
                leaveFrom="opacity-100 sm:scale-100 translate-y-0"
                leaveTo={`opacity-0 sm:scale-95 ${translateClass}`}
            >
                <div className={`tooltip-content ${placementClass}` + `${roundedClass}` + ` ${colorClass}` + className} >
                    {content}
                </div>
            </Transition>
        </div>
    )
}