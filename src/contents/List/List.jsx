import { Children, Fragment, createContext, useContext } from "react"
import { Link } from "@inertiajs/react"
import './List.css'

const ListContext = createContext()

const List = ({ active = '', href, className = '', children, separator = ' ' }) => {

    return (
        <ListContext.Provider value={{ className, children, active, href, separator }}>
            <nav aria-label="list">
                <ul className={'list ' + className}>{children}</ul>
            </nav>
        </ListContext.Provider>
    );
};

const ListItem = ({ children, className = '', active = '', href, ...props }) => {
    const separator = useContext(ListContext)

    let separatorValue = separator.separator

    return (
        <li
            {...props}
            className={'list-item' + `${active && ' active'}`}
        >
            {href
                ?
                <>
                    <Link
                        className={'list-link ' + className}
                        href={href}
                    >
                        {children}
                    </Link>
                </>
                :
                <>
                    {separatorValue && <div className="list-separator">{separatorValue}</div>}
                    <div>
                        {children}
                    </div>
                </>
            }
        </li>
    );
};

List.Item = ListItem

export default List