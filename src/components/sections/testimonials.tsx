import SectionLayout from './section-layout'

import TestimonialsList from '../testimonials-list'
import ClientsTestimonials from '../testimonials-list/clients-testimonials'

export default function Testimonials() {
    return (
        <SectionLayout
            newCSSClass="py-40 px-4 xl:px-0 flex flex-col gap-12 items-center justify-center">
            <div className="flex flex-col gap-4 items-center">
                <strong className="text-2xl md:text-3xl xl:text-4xl text-zinc-950 xl:leading-[2.875rem] text-center">
                    Depoimentos de <br className="block md:hidden" />
                    Nossos Clientes 💬
                </strong>

                <p className="w-full xl:w-[70%] text-lg md:text-xl xl:text-2xl text-zinc-700 text-center xl:leading-9">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maiores corrupti vitae voluptates.
                </p>
            </div>

            <TestimonialsList />

            <ClientsTestimonials />
        </SectionLayout>
)
}