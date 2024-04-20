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
                <img {...props} src={url} alt={alt} className={` ${rounded && roundedClass}`} style={{ height: `${height}px` }} />
            }
            {as === 'responsive' &&
                <img {...props} className={`img-fluid` + ` ${rounded && roundedClass}`} style={{ height: `${height}px` }} src={url} alt={alt} />
            }
            {as === 'thumbnail' &&
                <img {...props} className={`img-thumbnail` + ` ${rounded && roundedClass}`} style={{ height: `${height}px`, width: `${width}px` }} src={url} alt={alt} />
            }
        </>
    )
}