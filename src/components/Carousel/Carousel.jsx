import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import { useState, useEffect } from 'react'
import './Carousel.css'

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
        <div className="carousel">
            <div className='carousel-inner' style={{ transform: `translateX(-${current * 100}%)`, height: `${height}px` }}>
                {slides.map((s, i) => {
                    return <div className={`carousel-item`} style={{ backgroundImage: `url(${s})` }} key={"slide" + i} />
                })}
            </div>
            {controls &&
            <div className="carousel-control">
                <button onClick={prev} className='carousel-control-prev'>
                    <ArrowLeft2 size={24} />
                </button>
                <button onClick={next} className='carousel-control-next'>
                    <ArrowRight2 size={24} />
                </button>
            </div>
            }
            {indicators &&
                <div className='carousel-indicators'>
                    <div className='carousel-indicators-inner'>
                        {slides.map((s, i) => (
                            <button key={"circle" + i} onClick={() => {
                                setCurrent(i);
                            }} className={`carousel-indicator-item ${current === i ? "p-2" : "bg-opacity-50 p-0"}`} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Carousel