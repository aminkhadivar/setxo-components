export default function InputError({ message, className = '', ...props }) {
    return message &&
        <p
            {...props}
            className={`text-sm text-gray-500 dark:text-gray-400` + `${className && ` ` + className}`}>
            {message}
        </p>
}