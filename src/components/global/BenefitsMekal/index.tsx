import CardBenefits from './components/CardBenefits'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './swiper.css'


const benefits = [
    {
        image: "/images/benefitsMekal/maisAco.jpg",
        title: "Mais Aço",
        description: "A Mekal sempre utiliza o aço inoxidável ideal com a espessura mais recomendada para cada projeto. O resultado disso são produtos com mais qualidade e resistência, feitos a partir de uma das ligas mais nobres."
    },
    {
        image: "/images/benefitsMekal/semRuidos.jpg",
        title: "Sem ruídos ou estalos",
        description: "Garantimos a qualidade das cubas de aço inox por meio de vários processos, resultando em produtos que não emitem ruídos ou estalos metálicos ao serem manuseados. Isso evita a necessidade de usar mantas anti-ruído na parte externa das cubas, o que é comum em outros produtos do mercado."
    },
    {
        image: "/images/benefitsMekal/sustentavel.jpg",
        title: "Sustentável",
        description: "O aço inox da Mekal é sustentável, sendo 70% composto por matéria-prima reciclada e produzido com fontes renováveis de energia, como a biomassa de eucalipto reflorestado."
    },
    {
        image: "/images/benefitsMekal/handmade.jpg",
        title: "Handmade tech",
        description: "A Mekal utiliza um processo de solda e acabamento único, com soldagem manual por dentro e por fora, que garante junções imperceptíveis entre as chapas de inox e um acabamento perfeito, inatingível em produções de grande escala."
    },
    {
        image: "/images/benefitsMekal/livreBacterias.jpg",
        title: "Livre de bactérias",
        description: "Uma das características do aço inox é a camada passiva (Óxido de Cromo) que é invisível a olho nu, mas eficaz contra agentes corrosivos e impede a proliferação de bactérias. Por isso, é ideal para cozinhas em ambientes residenciais e comerciais, além de ser fundamental em hospitais, laboratórios e indústrias alimentícias."
    },
    {
        image: "/images/benefitsMekal/acabamento.jpg",
        title: "Acabamento auto recuperável",
        description: "A Mekal tem um acabamento escovado exclusivo chamado hairline finishing, que permite a eliminação de riscos superficiais e suavização de riscos profundos de forma simples e eficaz. Esse acabamento é resultado da combinação entre tecnologia e trabalho artesanal, permitindo que os próprios clientes possam recuperar a peça e obter um acabamento quase perfeito."
    },
    {
        image: "/images/benefitsMekal/altasTemperaturas.jpg",
        title: "Resistência a altas temperaturas",
        description: "Utilizamos em nosso portfólio uma das ligas mais nobres de aço inox. Um de seus inúmeros benefícios é a elevada resistência ao calor. Assim, você poderá utilizar nossos produtos sem se preocupar com danos e possíveis acidentes."
    },
    {
        image: "/images/benefitsMekal/facilLimpeza.jpg",
        title: "Fácil limpeza e manutenção",
        description: "A limpeza e manutenção das peças Mekal é fácil e eficiente, exigindo apenas água e detergente. Além disso, esses produtos têm longa durabilidade e qualidade consistente, podendo ser mantidos em bom estado por várias gerações com a rotina correta de limpeza e uso de produtos recomendados para o aço inoxidável."
    },
    {
        image: "/images/benefitsMekal/custoBeneficio.jpg",
        title: "Melhor custo benefício",
        description: "A Mekal oferece o melhor custo-benefício do mercado com produtos resistentes, eficientes, duráveis, higiênicos e ergonômicos. Sua liga de aço inoxidável é ideal para cada uso, fácil de limpar e com design sofisticado."
    },
]

const swiperParamsBenefitsMekal = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
}


export default function BenefitsMekal(){
    return(
        <section className={styles.container_benefits_mekal}>
            <div className={styles.benefits_mekal__header}>
                <span>Qualidade e Design a mais de 50 anos</span>
            </div>
            <div className={styles.benefits_mekal__content}>
                    <h2>
                    Vantagens e benefícios Mekal
                    </h2>
                <div className={
                    styles.benefits_mekal__content__cards
                }>
                    {
                        benefits.map((benefit, index) => (
                            <CardBenefits
                                key={index}
                                title={benefit.title}
                                description={benefit.description}
                                image={benefit.image}
                            />
                        ))
                    }
                </div> 
                <div
                    className={styles.benefits_mekal__content__swiper_container}
                >
                    <Swiper {...swiperParamsBenefitsMekal} className={styles.benefits_mekal__content__swiper}>
                        {benefits.map((benefit, index) => (
                            <SwiperSlide key={index}>
                                <CardBenefits
                                    key={index}
                                    title={benefit.title}
                                    description={benefit.description}
                                    image={benefit.image}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>   
                </div>  
            </div>
        </section>
    )
}