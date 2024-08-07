import './Typography.css'

export default function Typography({ href, as = 'p', variant = '', className = '', color = 'primary', children, ...props }) {

    const variantClass = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        lead: 'lead',
    }[variant]

    const CustomTag = `${variant}`

    return (
        <>
            {as === 'heading' &&
                <>
                    {className ?
                        <CustomTag
                            {...props}
                            className={className}
                        >
                            {children}
                        </CustomTag>
                        :
                        <CustomTag
                            {...props}
                        >
                            {children}
                        </CustomTag>
                    }
                </>
            }
            {as === 'p' &&
                <>
                    {variant || className ?
                        <p
                            {...props}
                            className={`${variant && variantClass}` + className}
                        >
                            {children}
                        </p>
                        :
                        <p
                            {...props}
                        >
                            {children}
                        </p>
                    }
                </>
            }
        </>
    )
}