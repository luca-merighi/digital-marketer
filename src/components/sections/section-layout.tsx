import { ReactNode } from 'react'

interface SectionLayoutProps {
    newCSSClass: string,
    children: ReactNode
}

export default function SectionLayout({ newCSSClass, children }: SectionLayoutProps) {
    return (
        <section className={`
            ${newCSSClass}`}>
            {children}
        </section>
    )
}