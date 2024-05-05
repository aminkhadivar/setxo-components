import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Nav from "../Nav/Nav"
import './Tab.css'

const Tab = ({ className = '', tabs, type = 'nav-tabs' }) => {

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
            <div className="flex flex-wrap">
                <Nav className={`${type}`}>
                    {items.map(({ title, show, id, disabled }) => (
                        <div
                            id={tabs + id}
                            key={id}
                        >
                            {show ?
                                <Nav.Tab
                                active
                                aria-selected="true"
                                role="tab"
                                >
                                    {title}
                                </Nav.Tab>
                                :
                                <Nav.Tab
                                    onClick={disabled ? null : (() => handleClick(id))}
                                    aria-selected="false"
                                    role="tab"
                                    disabled={disabled ? 'true' : ''}
                                >
                                    {title}
                                </Nav.Tab>
                            }
                        </div>
                    ))}
                </Nav>
            </div>

            <div className="overflow-hidden">
                {items.map(({ content, show, id }) => (
                    <Transition
                        show={show}
                        id={id}
                        key={id}
                        className="h-full"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {content}
                    </Transition>
                ))}
            </div>
        </div>
    )
}

export default Tab