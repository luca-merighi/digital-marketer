'use client'

import { FaCalendarCheck, FaMedal, FaMoneyBill } from 'react-icons/fa'

import ListItem from './list-item'

const list = [
    {
        id: 1,
        bgColor: 'bg-blue-500',
        icon: FaCalendarCheck,
        text: 'Atua no Marketing Digital há 5 anos.'
    },
    {
        id: 2,
        bgColor: 'bg-rose-500',
        icon: FaMedal,
        text: 'Certificado em educação financeira.'
    },
    {
        id: 3,
        bgColor: 'bg-emerald-500',
        icon: FaMoneyBill,
        text: 'Três digitos em 1 mês.'
    }
]

export default function AboutList() {
    return (
        <ul className="mt-0 md:mt-6 flex flex-col gap-4">
            {list.map(item => {
                return (
                    <ListItem
                        key={item.id}
                        bgColor={item.bgColor}
                        icon={item.icon}
                        text={item.text} />
                )
            })}
        </ul>
    )
}