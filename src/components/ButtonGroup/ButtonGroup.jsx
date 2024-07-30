import './ButtonGroup.css'

export default function ButtonGroup({ className = '', children, size = '', ariaLabel = '', vertical = '', ...props }) {

    const sizeClass = {
        sm: 'btn-group-sm',
        md: 'btn-group-md',
        lg: 'btn-group-lg',
        xl: 'btn-group-xl',
    }[size];

    return (
        <div
            {...props}
            className={
                `${vertical ? 'btn-group-vertical' : 'btn-group'}` + `${className && ` ` + className}` + `${size && ` ` + sizeClass}`
            }
        >
            {children}
        </div>
    )
}