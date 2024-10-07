import Link from 'next/link'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'

const list = [
    {
        id: 'facebook',
        icon: <FaFacebookSquare />,
        url: 'https://www.facebook.com',
        cssClass: 'text-blue-500'
    },
    {
        id: 'instagram',
        icon: <FaInstagramSquare />,
        url: 'https://www.instagram.com',
        cssClass: 'text-fuchsia-500'
    }
]

export default function SocialMediaList() {
    return (
        <ul className="flex gap-2 items-center justify-center">
            {list.map(item => {
                return (
                    <li
                        key={item.id}
                        className="flex items-center justify-center">
                        <Link
                            href={item.url}
                            target="_blank"
                            className={`
                            ${item.cssClass} text-3xl md:text-4xl lg:text-5xl
                            transition-all hover:scale-105 focus:outline-none
                            focus-visible:scale-105`}>
                            {item.icon}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}