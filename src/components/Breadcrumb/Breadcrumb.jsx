import { Children, Fragment, createContext, useContext } from "react"
import A from "../../contents/Links/Links"
import './Breadcrumb.css'

const BreadcrumbContext = createContext()

const Breadcrumb = ({ active = '', href, className = '', children, color = 'primary', separator = ' ' }) => {

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
    })

    return (
        <BreadcrumbContext.Provider value={{ className, children, active, href, color }}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">{childrenWtihSeperator}</ol>
            </nav>
        </BreadcrumbContext.Provider>
    )
}

const BreadcrumbItem = ({ children, className = '', active = '', href, ...props }) => {

    const { color } = useContext(BreadcrumbContext)

    return (
        <li
            {...props}
            className={'breadcrumb-item' + `${active && ' active'}`}
        >
            {href
                ?
                <A
                    className={className}
                    href={href}
                    color={color}
                >
                    {children}
                </A>
                :
                <div className={className}>
                    {children}
                </div>
            }
        </li>
    );
};

Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb