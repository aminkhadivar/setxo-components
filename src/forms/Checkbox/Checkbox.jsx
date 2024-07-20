import Label from "../FormControl/Label"
import './Checkbox.css'
export default function Checkbox({ id, className = '', color = '', label, disabled = '', size = '', defaultChecked, darkTick = '', ...props }) {

    const colorClass = {
        light: 'checkbox-light',
        gray: 'checkbox-gray',
        dark: 'checkbox-dark',
        primary: 'checkbox-primary',
        success: 'checkbox-success',
        danger: 'checkbox-danger',
        warning: 'checkbox-warning',
        info: 'checkbox-info',
        purple: 'checkbox-purple',
    }[color]

    const sizeClass = {
        sm: 'checkbox-sm',
        lg: 'checkbox-lg',
    }[size]

    return (
        <div className="form-check">
            <Label htmlFor={id} value={label} className={`${disabled ? ' pointer-events-none opacity-50' : ' cursor-pointer'}`}>
                <input
                    {...props}
                    type="checkbox"
                    id={id}
                    className={`form-check-input` + `${className && ` ` + className}` + `${color && ` ` + colorClass}` + `${size && ` ` + sizeClass}` + `${darkTick && ` form-tick-black`}`}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
            </Label>
        </div>
    )
}