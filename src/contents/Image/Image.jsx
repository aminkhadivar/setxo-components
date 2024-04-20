import './Image.css'

export default function Image({ url, alt = '...', as = 'image', height = '196', width = '196', className = '', rounded = 'md', ...props }) {

    const roundedClass = {
        none: 'rounded-none',
        rounded: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    }[rounded];

    return (
        <>
            {as === 'image' &&
                <div className={`img-fluid` + ` ${rounded && roundedClass}`} style={{ height: `${height}px` }}>
                    <img src={url} alt={alt} />
                </div>
            }
            {as === 'thumbnail' &&
                <img className={`img-thumbnail` + ` ${rounded && roundedClass}`} style={{ height: `${height}px`, width: `${width}px` }} src={url} alt={alt} />
            }
        </>
    )
}