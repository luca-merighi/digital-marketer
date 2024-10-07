'use client'

import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import TestimonialCard from './testimonial-card'

import 'keen-slider/keen-slider.min.css'

const testimonials = [
    {
        id: 123456,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi, provident inventore perferendis maiores enim officiis qui dignissimos quos tempore quaerat nemo molestias unde libero velit consectetur rerum. Minima, est.',
        image: '/profiles/img-1.jpg',
        name: 'Rose Rivera'
    },
    {
        id: 234567,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi, provident inventore perferendis maiores enim officiis qui dignissimos quos tempore quaerat nemo molestias unde libero velit consectetur rerum. Minima, est.',
        image: '/profiles/img-2.jpg',
        name: 'Alfred Lucas'
    },
    {
        id: 345678,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi, provident inventore perferendis maiores enim officiis qui dignissimos quos tempore quaerat nemo molestias unde libero velit consectetur rerum. Minima, est.',
        image: '/profiles/img-3.jpg',
        name: 'Ronald Harrison'
    }
]

export default function TestimonialsList() {
    const [loaded, setLoaded] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 24 },
            },
        },
        slides: {
            perView: 1
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        }
    })

    return (
        <div className="w-[20rem] sm:w-[25rem] md:w-[35rem] xl:w-full flex flex-col gap-4 items-center justify-center">
            <div
                ref={sliderRef}
                className="keen-slider w-full relative">
                {testimonials.map(testimonial => {
                    return (
                        <TestimonialCard
                            key={testimonial.id}
                            description={testimonial.description}
                            image={testimonial.image}
                            name={testimonial.name} />
                    )
                })}
            </div>
            {loaded && instanceRef.current && (
                <div className="py-2 flex gap-2 justify-center">
                    {[...Array(instanceRef.current?.track.details.slides.length! - 1).keys()].map(
                        (index) => {
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => instanceRef.current?.moveToIdx(index)}
                                    data-active={currentSlide === index ? true : false}
                                    className="
                                    w-2.5 h-2.5 bg-zinc-300
                                    cursor-pointer rounded-full
                                    data-[active=true]:bg-zinc-700" />
                            )
                        }
                    )}
                </div>
            )}
        </div>
    )
}