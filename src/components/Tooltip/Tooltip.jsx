import { useState, Fragment } from "react"
import { Transition } from '@headlessui/react'
import './Tooltip.css'

export default function Tooltip({ content, trigger = 'hover', className = '', children, placement = 'top', rounded = 'rounded', color = 'gray', ...props }) {

    const [show, setShow] = useState(false)

    const showTooltip = () => {
        setShow(true)
    }

    const hideTooltip = () => {
        setShow(false)
    }

    const placementClass = {
        top: 'tooltip-top',
        'top-start': 'tooltip-top-start',
        'top-end': 'tooltip-top-end',
        right: 'tooltip-right',
        'right-start': 'tooltip-right-start',
        'right-end': 'tooltip-right-end',
        bottom: 'tooltip-bottom',
        'bottom-start': 'tooltip-bottom-start',
        'bottom-end': 'tooltip-bottom-end',
        left: 'tooltip-left',
        'left-start': 'tooltip-left-start',
        'left-end': 'tooltip-left-end'
    }[placement]

    const colorClass = {
        white: 'tooltip-white',
        light: 'tooltip-light',
        gray: 'tooltip-gray',
        dark: 'tooltip-dark',
        primary: 'tooltip-primary',
        success: 'tooltip-success',
        danger: 'tooltip-danger',
        warning: 'tooltip-warning',
        info: 'tooltip-info',
        purple: 'tooltip-purple',
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
        <div className="tooltip"
            onMouseEnter={trigger == 'hover' ? showTooltip : null}
            onMouseLeave={trigger == 'hover' ? hideTooltip : null}
            onFocus={trigger == 'click' ? showTooltip : null}
            onBlur={trigger == 'click' ? hideTooltip : null}
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
                <div {...props} className={`tooltip-content ${placementClass}` + `${roundedClass}` + ` ${colorClass}` + ` ${className}`} >
                    {content}
                </div>
            </Transition>
        </div>
    )
}