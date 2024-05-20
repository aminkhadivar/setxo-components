import Image from "../../contents/Image/Image"
import './Avatar.css'

export default function Avatar({ url, alt = '...', as = 'image', size = '40', className = '', rounded = 'rounded', ...props }) {

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
                <Image
                    {...props}
                    url={url}
                    className={className}
                    alt={alt}
                    rounded={roundedClass}
                    as="thumbnail"
                    thumbnailSize={size} />
            }
            {as === 'svg' &&
                <Image
                    {...props}
                    className={`bg-gray-200` + ` ${className && className}`}
                    alt={alt}
                    rounded={roundedClass}
                    as="svg"
                    url={url}
                    thumbnailSize={size} />
            }
        </>
    )
}