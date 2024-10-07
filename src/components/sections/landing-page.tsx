import Image from 'next/image'

import SectionLayout from './section-layout'

import { FaArrowDown } from 'react-icons/fa'

export default function LandingPage() {
    return (
        <SectionLayout
            newCSSClass="
                h-full py-40 lg:py-0 px-4 xl:px-0 lg:h-screen
                flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-between">
            <div className="lg:w-[50%] xl:w-[60%] flex flex-col gap-4 items-center lg:items-start">
                <strong className="text-3xl lg:text-[2rem] text-zinc-950 leading-[2.5rem] lg:leading-[3rem] text-center lg:text-start">
                    Descubra como ganhar dinheiro <br className="hidden md:block lg:hidden xl:block" />
                    na Internet com Este Guia Exclusivo! 🤑
                </strong>

                <p className="text-2xl text-zinc-700 leading-9 text-center lg:text-start">
                    Aprenda a faturar R$ 200,00 em três semanas trabalhando <br />
                    de casa e transforme sua vida financeira.
                </p>

                <button
                    type="button"
                    className="
                        mt-4 w-fit py-3 px-4
                        flex gap-2 items-center justify-center
                        bg-sky-500 text-zinc-50 text-2xl font-bold
                        border-2 border-transparent rounded-full shadow-md
                        transition-colors animate-bounce hover:bg-sky-400 focus:outline-none
                        focus-visible:bg-sky-400 focus-visible:border-sky-700">
                    <FaArrowDown size={32} />
                    Saiba Mais
                </button>
            </div>

            <figure className="
                relative flex items-end
                w-full md:w-[70%] lg:w-[50%] xl:w-[40%] h-80 md:h-96 rounded-md
                before:absolute before:top-0 before:right-0 before:z-0
                before:h-80 before:w-[75%]
                before:bg-gradient-to-r before:from-sky-300 before:via-sky-400 before:to-sky-500
                before:rounded-md">
                <Image
                    src="/lp.png" alt="Imagem de uma pessoa digitando em um notebook"
                    width={2070} height={1380} quality={100}
                    className="z-30 h-60 md:h-80 w-full object-cover shadow-md rounded-md rounded-tr-none" />
            </figure>
        </SectionLayout>
    )
}