import './Image.css'

export default function Image({ children ,url, alt , as = 'image', height = '196', width = '196', thumbnailSize = '196', className = '', rounded = 'md', ...props }) {

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
                <img
                    {...props}
                    src={url}
                    className={` ${rounded && roundedClass}` + `${className && ` ` + className}`}
                    style={{ height: `${height}px` }}
                    alt={alt}
                />
            }
            {as === 'responsive' &&
                <img
                    {...props}
                    src={url}
                    height={height}
                    className={`img-fluid` + ` ${rounded && roundedClass}` + `${className && ` ` + className}`}
                    style={{ height: `${height}px` }}
                    alt={alt} />
            }
            {as === 'thumbnail' &&
                <img
                    {...props}
                    src={url}
                    className={`img-thumbnail` + ` ${rounded && roundedClass}` + `${className && ` ` + className}`}
                    style={{ height: `${thumbnailSize}px`, width: `${thumbnailSize}px` }}
                    alt={alt} />
            }
            {as === 'svg' &&
                <div
                    {...props}
                    className={`img-svg` + ` ${rounded && roundedClass}` + `${className && ` ` + className}`}
                    style={{ height: `${height}px` , minWidth: `${height}px`}}
                    alt={alt}
                >
                    {children}
                </div>
            }
        </>
    )
}