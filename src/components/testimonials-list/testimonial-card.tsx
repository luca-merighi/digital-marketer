import Image from 'next/image'

interface TestimonialCardProps {
    description: string,
    image: string,
    name: string
}

export default function TestimonialCard({ description, image, name }: TestimonialCardProps) {
    return (
        <div className="
            keen-slider__slide p-4 bg-zinc-100
            flex flex-col gap-6 justify-between
            cursor-pointer border-2 border-zinc-200 rounded-lg">
            <div className="w-full h-full">
                <p className="text-base text-zinc-500 indent-8">
                    <span className="
                        absolute top-2 -left-4
                        text-6xl text-zinc-900 font-serif">
                        &ldquo;
                    </span>
                    {description}
                </p>
            </div>

            <div className="flex gap-2 items-center">
                <Image
                    src={image} alt={`Foto de perfil de ${name}`}
                    width={50} height={50} quality={100}
                    className="h-12 w-12 object-cover rounded-full" />

                <strong className="text-lg text-zinc-700">
                    {name}
                </strong>
            </div>
        </div>
    )
}