import ListItem from './list-item'

const clientsTestimonials = [
    {
        id: 123456,
        name: 'Rose Rivera'
    },
    {
        id: 234567,
        name: 'Alfred Lucas'
    },
    {
        id: 345678,
        name: 'Ronald Harrison'
    }
]

export default function ClientsTestimonials() {
    return (
        <ul className="mt-16 flex flex-col gap-24 xl:gap-60">
            {clientsTestimonials.map(testimonial => {
                return (
                    <ListItem
                        key={testimonial.id}
                        name={testimonial.name} />
                )
            })}
        </ul>
    )
}