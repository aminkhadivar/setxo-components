import './ButtonGroup.css'

export default function ButtonGroup({ className = '', children, ...props }) {
    return (
        <div
            {...props}
            className={
                `btn-group ` + ` ${className}`
            }
        >
            {children}
        </div>
    )
}