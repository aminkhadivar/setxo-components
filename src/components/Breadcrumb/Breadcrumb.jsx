import { Children, Fragment , createContext } from "react"
import { Link } from "@inertiajs/react"
import './Breadcrumb.css'

const BreadcrumbContext = createContext()

const Breadcrumb = ({ active = '', href, className = '', children, separator = ' ' }) => {

    const childrenArray = Children.toArray(children);

    const childrenWtihSeperator = childrenArray.map((child, index) => {
        if (index !== childrenArray.length - 1) {
            return (
                <Fragment key={index}>
                    {child}
                    {separator && <div className="breadcrumb-separator">{separator}</div>}
                </Fragment>
            );
        }
        return child
    });

    return (
        <BreadcrumbContext.Provider value={{ className, children, active, href }}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">{childrenWtihSeperator}</ol>
            </nav>
        </BreadcrumbContext.Provider>
    );
};

const BreadcrumbItem = ({ children, className = '', active = '', href, ...props }) => {
    return (
        <li
            {...props}
            className={'breadcrumb-item' + `${active && ' active'}`}
        >
            {href
                ?
                <>
                    <Link
                        className={'breadcrumb-link ' + className}
                        href={href}
                    >
                        {children}
                    </Link>
                </>
                :
                <>
                    <div className={className}>
                        {children}
                    </div>
                </>
            }
        </li>
    );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;