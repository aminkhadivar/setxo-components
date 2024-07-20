import Label from "../FormControl/Label"
import './Switch.css'
export default function Switch({ id, className = '', color = '', label, disabled = '', size = '', defaultChecked, reverse = '', ...props }) {

    const colorClass = {
        default: 'switch-default',
        light: 'switch-light',
        gray: 'switch-gray',
        dark: 'switch-dark',
        primary: 'switch-primary',
        success: 'switch-success',
        danger: 'switch-danger',
        warning: 'switch-warning',
        info: 'switch-info',
        purple: 'switch-purple',
        custom: ''
    }[color]

    const sizeClass = {
        sm: 'switch-sm',
        lg: 'switch-lg',
    }[size]

    return (
        <div className="form-switch">
            <Label htmlFor={id} value={label} className={`${reverse && ` flex-row-reverse`}` + `${disabled ? ' pointer-events-none opacity-50' : ' cursor-pointer'}`}>
                <input
                    {...props}
                    type="checkbox"
                    id={id}
                    className={`form-switch-input peer`}
                    role="switch"
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
                <span className={`toggle-switch` + `${className && ` ` + className}` + `${color ? ` ` + colorClass : ' switch-default'}` + `${size && ` ` + sizeClass}`}></span>
            </Label>
        </div>
    )
}