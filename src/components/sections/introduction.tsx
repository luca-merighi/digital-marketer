import SectionLayout from './section-layout'

export default function Introduction() {
    return (
        <SectionLayout
            newCSSClass="h-full xl:h-[calc(100vh-80px)] px-4 xl:px-0 flex flex-col gap-12 items-center justify-center">
            <div className="w-full md:w-[75%] xl:w-[70%] h-60 md:h-80 lg:h-96 xl:h-[30rem] bg-zinc-200 rounded-md">
                <video controls className="w-full h-full rounded-md">
                    <source src="" type="video/mp4" />
                </video>
            </div>

            <div className="w-full md:w-[75%] xl:w-[70%] flex flex-col gap-4 items-center">
                <strong className="text-2xl md:text-3xl xl:text-4xl text-zinc-950 text-center">
                    Como ganhar dinheiro <br className="hidden md:block lg:hidden" />
                    na Internet? 🤔
                </strong>

                <p className="text-lg md:text-xl xl:text-2xl text-zinc-700 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, officiis molestiae velit atque, placeat vel sed alias tenetur iste et enim adipisci reiciendis commodi ipsam deleniti quibusdam dignissimos quis.
                </p>
            </div>
        </SectionLayout>
    )
}