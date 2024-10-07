interface ListItemProps {
    name: string
}

export default function ListItem({ name }: ListItemProps) {
    return (
        <li className="
            group w-full flex flex-col xl:flex-row xl:even:flex-row-reverse gap-24
            md:even:items-end xl:even:items-center xl:items-center xl:justify-between">
            <div className="
                relative w-full md:w-[70%] lg:w-[60%] xl:w-[50%]
                h-60 md:h-80 xl:h-96
                flex items-center group-even:justify-end">
                <div className="
                    w-[70%] xl:w-full h-full bg-gradient-to-r group-even:bg-gradient-to-l
                    from-sky-500 via-sky-400 to-sky-300 rounded-md" />

                <video
                    controls={true}
                    className="
                        absolute top-12 left-0 xl:left-12 xl:group-even:-left-12
                        w-full h-full rounded-md rounded-tl-none xl:rounded-md xl:group-even:rounded-md
                        group-even:rounded-tr-none group-even:rounded-tl-md shadow-md">
                    <source src="" type="video/mp4" />
                </video>
            </div>

            <div className="w-full lg:w-[60%] xl:w-[50%] flex flex-col gap-4 md:group-even:items-center lg:group-even:items-start">
                <strong className="text-2xl text-zinc-950 md:group-even:text-center lg:group-even:text-left">
                    {name}
                </strong>

                <p className="text-xl text-zinc-700 leading-9 md:group-even:text-center lg:group-even:text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cum ut sint sapiente consequatur voluptatum autem, harum perferendis possimus aspernatur fuga, fugit non reprehenderit! Qui porro officia quibusdam voluptas expedita.
                </p>
            </div>
        </li>
    )
}