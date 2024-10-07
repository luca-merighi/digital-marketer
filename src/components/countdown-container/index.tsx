import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['700'] })

export default function CountdownContainer() {
    return (
        <div className={`
            ${robotoMono.className}
            flex gap-2 items-center`}>
            <div className="number-container">
                <strong className="number">7</strong>
            </div>
            <div className="number-container">
                <strong className="number">2</strong>
            </div>
            <strong className="text-6xl md:text-7xl xl:text-[10rem] leading-[8rem] text-sky-500 font-bold">:</strong>
            <div className="number-container">
                <strong className="number">0</strong>
            </div>
            <div className="number-container">
                <strong className="number">0</strong>
            </div>
        </div>
    )
}