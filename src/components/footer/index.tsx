import Link from 'next/link'

import SocialMediaList from './social-media-list'

import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] })

export default function Footer() {
    return (
        <footer className="w-full px-4 xl:px-0 flex items-center justify-center bg-sky-950">
            <div className="flex flex-col md:flex-row gap-12 xl:gap-0 items-start justify-between w-full max-w-7xl py-12">
                <div className="flex flex-col gap-4">
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

                    <div className="flex flex-col gap-1">
                        <span className="text-zinc-400 text-sm md:text-base lg:text-lg">
                            © Todos os direitos reservados.
                        </span>

                        <span className="text-zinc-400 text-sm md:text-base lg:text-lg">
                            Campinas, São Paulo.
                        </span>
                    </div>
                </div>

                <SocialMediaList />
            </div>
        </footer>
    )
}