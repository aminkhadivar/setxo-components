import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Nav from "../Nav/Nav"
import './Tab.css'

const Tab = ({ className = '', tabs, as = 'nav', rounded }) => {

    const [items, setItems] = useState(tabs)

    const handleClick = (id) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, show: !item.show } : { ...item, show: false }
            )
        )
    }

    return (
        <div className="tab">
            <div className="tab-title">
                <Nav as={as} className={(className && ` ${className}`)} rounded={rounded} role="tablist">
                    {items.map(({ title, show, id, disabled }) => (
                        <Nav.Tab
                            onClick={disabled || show ? null : (() => handleClick(id))}
                            active={show ? 'true' : 'false'}
                            aria-selected={show ? 'true' : 'false'}
                            disabled={disabled ? 'true' : ''}
                            id={id}
                            key={id}
                        >
                            {title}
                        </Nav.Tab>
                    ))}
                </Nav>
            </div>
            <div className="tab-content">
                {items.map(({ content, show, id }) => (
                    <Transition
                        as="div"
                        show={show}
                        key={id}
                        className="transition-all"
                        enter="transition-[max-height] duration-500 ease-in"
                        enterFrom="transform max-h-0 opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition-[max-height] duration-300 ease-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform max-h-0 opacity-0"
                    >
                        <p className="overflow-hidden">
                            {content}
                        </p>
                    </Transition>
                ))}
            </div>
        </div>
    )
}

export default Tab