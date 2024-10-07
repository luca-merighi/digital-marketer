import SectionLayout from './section-layout'

import CountdownContainer from '../countdown-container'

export default function Countdown() {
    return (
        <SectionLayout
            newCSSClass="py-40 px-4 xl:px-0 h-full flex flex-col gap-12 items-center justify-center">
                <div className="flex flex-col gap-4 items-center">
                    <strong className="text-2xl md:text-3xl lg:text-4xl text-zinc-950 leading-[2.875rem] text-center">
                        Oferta por Tempo Limitado ⏰
                    </strong>

                    <p className="w-full xl:w-[70%] text-lg md:text-xl lg:text-2xl text-zinc-700 text-center xl:leading-9">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maiores corrupti vitae voluptates.
                    </p>
                </div>

                <CountdownContainer />
        </SectionLayout>
    )
}