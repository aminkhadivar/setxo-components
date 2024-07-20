import Label from "../FormControl/Label"
import './Radio.css'
export default function Checkbox({ id, className = '', label, disabled = '', defaultChecked, ...props }) {
    return (
        <div className="form-check">
            <Label htmlFor={id} value={label} className={`${disabled ? ' pointer-events-none opacity-50' : ' cursor-pointer'}`}>
                <input
                    {...props}
                    type="radio"
                    id={id}
                    className={`form-radio-input` +
                        `${className && ` ` + className}`
                    }
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                />
            </Label>
        </div>
    )
}