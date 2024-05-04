import { useState, useContext } from 'react'
import { Transition } from '@headlessui/react'
import Nav from "../Nav/Nav"

import './Tab.css'

const Tab = ({ className = '', tabs }) => {

    const [items, setItems] = useState(tabs)

    const handleClick = (id) => {
        setItems(
            items.map((d) =>
                d.id === id ? { ...d, show: !d.show } : { ...d, show: false }
            )
        );
    }

    return (

        <div className={'tab' + (className && ` ${className}`)}>
            <div className="flex">
                <Nav className="nav-tabs">
                    {items.map(({ title, show, id }) => (
                        <div
                            id={id}
                            key={id}
                        >
                            {show ?
                                <Nav.Tab
                                    className="cursor-pointer" active aria-selected="true"
                                >
                                    {title}
                                </Nav.Tab>
                                :
                                <Nav.Tab
                                    onClick={() => handleClick(id)}
                                    className="cursor-pointer"
                                >
                                    {title}
                                </Nav.Tab>
                            }
                        </div>
                    ))}
                </Nav>
            </div>

            <div className="overflow-hidden h-32">
                {items.map(({ content, show, id }) => (
                    <Transition
                        show={show}
                        id={id}
                        key={id}
                        className=""
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {content}
                    </Transition>
                ))}
            </div>
        </div>
    )
}

export default Tab