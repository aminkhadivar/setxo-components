import { useEffect, useState, createContext, useContext } from 'react'
import { Transition } from '@headlessui/react'
import Nav from "../Nav/Nav"

import './Tab.css'

const TabContext = createContext()

const Tab = ({ children, className = '', multiple = false , data }) => {

    return (
        <TabContext.Provider value={{ className, children, multiple , data }}>
            <div className={'tab' + (className && ` ${className}`)}>
                {children}
            </div>
        </TabContext.Provider>
    )
}

const TabTitle = ({ title, show = { show }, onClick = () => { } }) => {

    const toggleOnClick = () => {
        onClick()
    }

    return (
        <div className="tab-title">
            <Nav className="nav-tabs">
                {show ?
                    <Nav.Link className="cursor-pointer" active aria-selected="true">
                        {title}
                    </Nav.Link>
                    :
                    <Nav.Link className="cursor-pointer" onClick={toggleOnClick} >
                        {title}
                    </Nav.Link>
                }
            </Nav>
        </div>
    )
}

const TabContent = ({ children, show = { show } }) => {

    return (
        <div className="tab-content">
            <Transition
                show={show}
                className="overflow-hidden"
                enter="transition duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {children}
            </Transition>
        </div>
    )
}

Tab.Title = TabTitle
Tab.Content = TabContent

export default Tab