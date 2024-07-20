import Label from "../FormControl/Label"
import './Switch.css'
export default function Switch({ id, className = '', color = '', label, disabled = '', size = '', defaultChecked, reverse = '', ...props }) {

    const colorClass = {
        light: 'switch-light',
        gray: 'switch-gray',
        dark: 'switch-dark',
        primary: 'switch-primary',
        success: 'switch-success',
        danger: 'switch-danger',
        warning: 'switch-warning',
        info: 'switch-info',
        purple: 'switch-purple',
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
                    className={`form-switch-input peer` + `${className && ` ` + className}`}
                    role="switch"
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
                <span className={`toggle-switch` + `${color && ` ` + colorClass}` + `${size && ` ` + sizeClass}`}></span>
            </Label>
        </div>
    )
}