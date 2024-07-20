import Label from "../FormControl/Label"
import './Radio.css'
export default function Checkbox({ id, className = '', color = '', size = '', label, disabled = '', defaultChecked, ...props }) {

    const colorClass = {
        light: 'radio-light',
        gray: 'radio-gray',
        dark: 'radio-dark',
        primary: 'radio-primary',
        success: 'radio-success',
        danger: 'radio-danger',
        warning: 'radio-warning',
        info: 'radio-info',
        purple: 'radio-purple',
    }[color]

    const sizeClass = {
        sm: 'radio-sm',
        lg: 'radio-lg',
    }[size]

    return (
        <div className="form-radio">
            <Label htmlFor={id} value={label} className={`${disabled ? ' pointer-events-none opacity-50' : ' cursor-pointer'}`}>
                <input
                    {...props}
                    type="radio"
                    id={id}
                    className={`form-radio-input` + `${className && ` ` + className}` + `${color && ` ` + colorClass}` + `${size && ` ` + sizeClass}`
                    }
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
            </Label>
        </div>
    )
}