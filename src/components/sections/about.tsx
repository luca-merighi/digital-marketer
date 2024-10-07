import Image from 'next/image'

import SectionLayout from './section-layout'
import AboutList from '../about-list'

export default function About() {
    return (
        <SectionLayout
            newCSSClass="
                h-full xl:h-[calc(100vh-80px)] py-40 xl:py-0 px-4 xl:px-0
                flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-between">
            <div className="w-full lg:w-[50%] flex flex-col gap-4">
                <strong className="text-2xl md:text-3xl xl:text-4xl text-zinc-950">
                    Nome do Criador
                </strong>

                <p className="text-lg md:text-xl xl:text-2xl text-zinc-700 xl:leading-9">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maiores corrupti vitae voluptates esse nobis enim odit, quaerat sit, inventore beatae ipsam ipsum voluptate? Nobis, dolores eos.
                </p>

                <AboutList />
            </div>

            <figure className="w-full md:w-[70%] lg:w-[50%] md:h-[70%] h-full lg:h-[50%] flex items-center justfy-center">
                <Image
                    src="/about.png" alt=""
                    width={500} height={500} quality={100}
                    className="w-full h-full object-contain" />
            </figure>
        </SectionLayout>
    )
}