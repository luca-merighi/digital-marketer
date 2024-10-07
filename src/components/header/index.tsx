import Link from 'next/link'

import { Poppins } from 'next/font/google'
import { FaHourglassStart } from 'react-icons/fa6'

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] })

export default function Header() {
    return (
        <header className="
            fixed top-0 left-0 right-0 z-50
            w-full h-20 bg-sky-500
            flex items-center justify-center px-4 xl:px-0
            shadow-md">
            <div className="
                w-full max-w-7xl h-full
                flex items-center justify-between">
                <Link
                    href="/"
                    className="flex gap-1 items-center focus:outline-none">
                    <strong className={`${poppins.className} text-4xl md:text-5xl lg:text-6xl text-zinc-50`}>
                        DM
                    </strong>

                    <div className="flex flex-col items-center justify-center">
                        <span className="text-sm md:text-lg lg:text-2xl text-zinc-50 font-extrabold uppercase leading-4 md:leading-5 lg:leading-6">
                            Digital
                        </span>
                        <span className="text-xs md:text-base lg:text-xl text-zinc-50 font-medium tracking-wider">
                            Marketer
                        </span>
                    </div>
                </Link>

                <Link
                    href="/"
                    className="
                        w-fit px-4 py-2 bg-sky-600
                        flex gap-1 items-center justify-center
                        text-base lg:text-xl text-zinc-200 font-medium
                        border-2 border-transparent rounded-full
                        transition-colors hover:bg-sky-700 focus:outline-none
                        focus-visible:bg-sky-700 focus-visible:border-zinc-200">
                    <FaHourglassStart />
                    Oferta Limitada!
                </Link>
            </div>
        </header>
    )
}