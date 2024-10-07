import * as Accordion from '@radix-ui/react-accordion'

import { IoChevronDown } from 'react-icons/io5'

interface AccordionItemProps {
    value: string,
    text: string
}

export default function AccordionItem({ value, text }: AccordionItemProps) {
    return (
        <Accordion.Item
            value={value}
            className="bg-[#ececee] rounded-md transition-colors hover:bg-zinc-200">
            <Accordion.Header className="flex">
                <Accordion.Trigger
                    className="
                        group w-full flex items-center justify-between
                        p-4 text-lg xl:text-xl text-zinc-800 text-left font-bold rounded-md">
                    {text}

                    <IoChevronDown
                        size={28}
                        className="
                        transition-transform duration-300
                        text-zinc-800
                        group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
                className="
                    pt-0
                    overflow-hidden data-[state=open]:animate-slideDown
                    data-[state=closed]:animate-slideUp">
                <div className="p-4 text-base text-zinc-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, nisi! Odit consequuntur ipsa repellendus consectetur ut, accusantium quia laboriosam maiores molestiae quasi nulla. Enim laboriosam quasi sunt magni cupiditate! Voluptates!
                </div>
            </Accordion.Content>
        </Accordion.Item>
    )
}