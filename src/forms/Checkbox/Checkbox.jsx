import './Checkbox.css'
export default function Checkbox({ id, className = '', label, disabled = '', defaultChecked, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            id={id}
            className={`form-check-input` +
                `${className && ` ` + className}` + `${disabled ? ' pointer-events-none opacity-50' : ' cursor-pointer'}`
            }
            defaultChecked={defaultChecked}
            disabled={disabled}
        />
    )
}