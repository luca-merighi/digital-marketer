import Image from 'next/image'
import Link from 'next/link'

import SectionLayout from './section-layout'

import { FaArrowRight } from 'react-icons/fa6'

export default function UpSell() {
    return (
        <SectionLayout
            newCSSClass="py-40 px-4 flex flex-col gap-12 lg:gap-20 xl:gap-32 items-center justify-between">
            <div className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-between">
                <div className="w-full lg:w-[60%] xl:w-[50%] flex flex-col gap-4 items-center lg:items-start">
                    <strong className="text-2xl md:text-3xl lg:text-4xl text-zinc-950 leading-[2.875rem]">
                        Bônus Especial 😱
                    </strong>

                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-700 leading-9 text-center lg:text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, maiores corrupti vitae voluptates.
                    </p>

                    <div className="flex gap-2 items-center">
                        <span className="text-4xl xl:text-6xl leading-none">👉</span>
                        <div className="py-2 px-3 w-fit bg-emerald-100 rounded-md">
                            <strong className="text-4xl xl:text-6xl text-emerald-500 font-bold">
                                R$ 199,90
                            </strong>
                        </div>
                    </div>
                </div>

                <figure className="w-full md:w-[70%] lg:w-[40%] xl:w-[50%] h-[50%] flex items-center justfy-center">
                    <Image
                        src="/up-sell.png" alt=""
                        width={500} height={500} quality={100}
                        className="w-full h-full object-contain" />
                </figure>
            </div>

            <Link
                href=""
                className="
                    flex gap-2 items-center justify-center
                    px-4 py-3 bg-sky-500
                    text-xl text-zinc-50 font-bold
                    border-2 border-transparent rounded-full
                    transition-colors hover:bg-sky-600 focus:outline-none
                    focus-visible:bg-sky-600 focus-visible:border-sky-700">
                Adquira Agora
                <FaArrowRight />
            </Link>
        </SectionLayout>
    )
}