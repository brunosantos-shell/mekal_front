import CarsExclusiveEvents from "../CarsExclusiveEvents"
import style from './styles.module.scss'

const data = [
    {
        title: "Evento suscipit ligula Nunc semper erat Donec congue enim eget auctor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac pharetra sem, a aliquet libero. Etiam gravida in dui id laoreet. Morbi sed suscipit ligula.",
        image: "/images/experienciaMekal/exclusiveEvents/image1.jpg",
        data: "12.05",
        local: "Lorem ipsum dolor sit amet, consectetur adipiscing elit civamus ac pharetra sem."
    },
    {
        title: "Evento suscipit ligula Nunc semper erat Donec congue enim eget auctor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac pharetra sem, a aliquet libero. Etiam gravida in dui id laoreet. Morbi sed suscipit ligula.",
        image: "/images/experienciaMekal/exclusiveEvents/image2.jpg",
        data: "17.07",
        local: "Lorem ipsum dolor sit amet, consectetur adipiscing elit civamus ac pharetra sem."
    },
    {
        title: "Evento suscipit ligula Nunc semper erat Donec congue enim eget auctor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac pharetra sem, a aliquet libero. Etiam gravida in dui id laoreet. Morbi sed suscipit ligula.",
        image: "/images/experienciaMekal/exclusiveEvents/image3.jpg",
        data: "31.07",
        local: "Lorem ipsum dolor sit amet, consectetur adipiscing elit civamus ac pharetra sem."
    }
]

export default function ExclusiveEvents() {
    return (
        <section
            className={style.container}
        >
            <div
                className={style.container_header}
            >
                <span>
                    Fique pode dentro
                </span>
                <h1>
                    Eventos exclusivos
                </h1>
            </div>
            {
                data.map((item, index) => (
                    <CarsExclusiveEvents
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        data={item.data}
                        local={item.local}
                    />
                ))
            }
        </section>
    )
}