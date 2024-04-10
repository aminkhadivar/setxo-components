export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm text-gray-400 dark:text-gray-500 ' + className}>
            {message}
        </p>
    ) : null;
}