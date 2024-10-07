'use client'

import * as Accordion from '@radix-ui/react-accordion'

import AccordionItem from './accordion-item'

const list = [
    {
        value: 'item-1',
        text: 'Benefício Nº1'
    },
    {
        value: 'item-2',
        text: 'Benefício Nº2'
    },
    {
        value: 'item-3',
        text: 'Benefício Nº3'
    },
    {
        value: 'item-4',
        text: 'Benefício Nº4'
    },
    {
        value: 'item-5',
        text: 'Benefício Nº5'
    },
]

export default function BenefitsList() {
    return (
        <Accordion.Root
            type="single"
            defaultValue="item-1"
            collapsible={true}
            className="mt-6 flex flex-col gap-2 w-full">
            {list.map(item => {
                return (
                    <AccordionItem
                        key={item.value}
                        value={item.value}
                        text={item.text} />
                )
            })}
        </Accordion.Root>
    )
}