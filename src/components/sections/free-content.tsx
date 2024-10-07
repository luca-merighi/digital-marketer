import Link from 'next/link'
import Image from 'next/image'

import { FaArrowRight } from 'react-icons/fa'

import SectionLayout from './section-layout'

export default function FreeContent() {
    return (
        <SectionLayout
            newCSSClass="xl:py-40 px-4 xl:px-0 flex flex-col xl:flex-row gap-12 items-center justify-between">
            <div className="w-full xl:w-[60%] flex flex-col gap-4">
                <strong className="text-2xl md:text-3xl xl:text-4xl text-zinc-950">
                    Sem Capacidade Financeira?
                </strong>

                <p className="text-lg md:text-xl xl:text-2xl text-zinc-700 leading-9">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maiores corrupti vitae voluptates esse nobis enim odit, quaerat sit, inventore beatae ipsam ipsum voluptate? Nobis, dolores eos.
                </p>

                <Link
                    href=""
                    className="
                        px-4 py-2 bg-sky-500 w-fit
                        flex gap-2 items-center justify-center
                        text-xl text-zinc-50 font-bold
                        border-2 border-sky-500 rounded-full animate-pulse
                        transition-colors hover:bg-sky-600 hover:border-sky-600 focus:outline-none
                        focus-visible:border-sky-700">
                    Acesse Agora!
                    <FaArrowRight />
                </Link>
            </div>

            <figure className="hidden w-full xl:w-[30%] h-[50%] xl:flex items-center justfy-center">
                <Image
                    src="/free-content.png" alt=""
                    width={400} height={400} quality={100}
                    className="w-full h-full object-contain rounded-md shadow-md" />
            </figure>
        </SectionLayout>
    )
}