import { ElementType } from 'react'

interface ListItemProps {
    bgColor: string,
    icon: ElementType,
    text: string
}

export default function ListItem({ bgColor, icon: Icon, text }: ListItemProps) {
    return (
        <li className="flex gap-2 md:gap-4 items-center">
            <div className={`
                    ${bgColor}
                    h-8 md:h-10 w-8 md:w-10 flex items-center justify-center rounded-full`}>
                <Icon className="text-base md:text-lg text-zinc-50" />
            </div>

            <span className="text-xl md:text-2xl text-zinc-800 font-medium">
                {text}
            </span>
        </li>
    )
}