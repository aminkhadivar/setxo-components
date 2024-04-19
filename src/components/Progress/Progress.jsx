import './Progress.css'

export default function Progress({ className = '', disabled = '', height = '16', children, withLable = false, striped = '', animated = '', color = 'primary', rounded = 'full', value = '60', ...props }) {

    const colorClass = {
        light: 'progress-bar-light',
        gray: 'progress-bar-gray',
        dark: 'progress-bar-dark',
        primary: 'progress-bar-primary',
        success: 'progress-bar-success',
        danger: 'progress-bar-danger',
        warning: 'progress-bar-warning',
        info: 'progress-bar-info',
        purple: 'progress-bar-purple',
    }[color];

    const roundedClass = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        rounded: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    }[rounded];

    return (
        <div className={`progress ${value == null ? 'progress-indeterminate' : ''}` + ` ${roundedClass}`}
            style={{ height: `${height}px` }}
        >
            <div
                {...props}
                className={
                    className + `progress-bar ${color && colorClass} ${striped && 'progress-bar-striped'} ${animated && 'progress-bar-animated'}` + ` ${roundedClass} `
                }
                style={{ width: `${value}%`, height: `${height}px`, maxWidth: '100%' }}
                role="progressbar"
            >
                {withLable &&
                    <div className="progress-lable">
                        {`${value}%`}
                    </div>
                }
            </div>
        </div>
    )
}