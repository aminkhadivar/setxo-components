export default function Checkbox({ className = '', disabled = '', checked, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'bg-transparent rounded-sm border-zinc-300 dark:border-zinc-600 text-blue-600 dark:text-blue-600 cursor-pointer ' +
                className + `${disabled && ' pointer-events-none opacity-50'
                }`
            }
            checked={checked}
        />
    );
}