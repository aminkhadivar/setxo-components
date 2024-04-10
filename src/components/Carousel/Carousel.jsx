import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import { useState, useEffect } from 'react'

const Carousel = ({ slides, height = '384', autoSlide = false, indicators = false, controls = true, autoSlideInterval = 5000 }) => {

    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))

    const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className='overflow-hidden relative rounded-lg'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${current * 100}%)`, height: `${height}px` }}>
                {slides.map((s, i) => {
                    return <div className={`w-full flex-none bg-no-repeat bg-center bg-cover`} style={{ backgroundImage: `url(${s})` }} key={"slide" + i} />
                })}
            </div>
            {controls &&
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 rounded-full bg-white/60 text-gray-800 dark:text-gray-800 hover:bg-white/90'>
                    <ArrowLeft2 size={24} />
                </button>
                <button onClick={next} className='p-1 rounded-full bg-white/60 text-gray-800 dark:text-gray-800 hover:bg-white/90'>
                    <ArrowRight2 size={24} />
                </button>
            </div>
            }
            {indicators &&
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {slides.map((s, i) => (
                            <button key={"circle" + i} onClick={() => {
                                setCurrent(i);
                            }} className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50 p-0"}`} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Carousel