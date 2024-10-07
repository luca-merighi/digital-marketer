import Image from 'next/image'

import SectionLayout from './section-layout'

import BenefitsList from '../benefits-list'

export default function Benefits() {
    return (
        <SectionLayout
            newCSSClass="
                h-full xl:h-[calc(100vh-80px)] px-4 xl:px-0
                flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-between">
                <div className="w-full lg:w-[60%] xl:w-[40%] flex flex-col gap-4 items-center lg:items-start">
                    <strong className="text-2xl md:text-3xl xl:text-4xl text-zinc-950 xl:leading-[2.875rem] text-center lg:text-start">
                        O que Vou Aprender <br className="block md:hidden lg:block xl:hidden" />
                        com esse E-book? 📘
                    </strong>

                    <p className="text-lg md:text-xl xl:text-2xl text-zinc-700 xl:leading-9 text-center lg:text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maiores corrupti vitae voluptates esse nobis enim odit, quaerat sit, inventore beatae ipsam ipsum voluptate? Nobis, dolores eos.
                    </p>

                    <BenefitsList />
                </div>

                <figure className="w-full md:w-[40%] xl:w-[40%] flex items-center justfy-center">
                    <Image
                        src="/benefits.png" alt=""
                        width={500} height={500} quality={100}
                        className="w-full h-full object-contain" />
            </figure>
        </SectionLayout>
    )
}