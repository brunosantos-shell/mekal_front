import { Navigation, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BtnNextSlide, BtnPrevSlide } from '@/icons'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './swiper.css'

import styles from './styles.module.scss'
import CardSlideAccessoriesAndComposition from '../CardSlideAccessoriesAndComposition'


const Mock = [
  {
    id: 1,
    image: '/images/pageModulares/freestanding/slideTemp/tabuaDeMadeiraTeca.jpg',
    name: 'Nome do acessório lorem ipsum ',
    category: 'Freestanding',
    comprimento: ' Customizável',
    largura: 'Customizável',
    profundidade: '230',
    codigo: '0000000',
  },
  {
    id: 2,
    image: '/images/pageModulares/freestanding/slideTemp/acessorio.jpg',
    name: 'Nome do acessório lorem ipsum ',
    category: 'Freestanding',
    comprimento: ' Customizável',
    largura: 'Customizável',
    profundidade: '230',
    codigo: '0000000',
  },
  {
    id: 3,
    image: '/images/pageModulares/freestanding/slideTemp/acessorio.jpg',
    name: 'Nome do acessório lorem ipsum ',
    category: 'Freestanding',
    comprimento: ' Customizável',
    largura: 'Customizável',
    profundidade: '230',
    codigo: '0000000',
  },
  {
    id: 4,
    image: '/images/pageModulares/freestanding/slideTemp/acessorio.jpg',
    name: 'Nome do acessório lorem ipsum ',
    category: 'Freestanding',
    comprimento: ' Customizável',
    largura: 'Customizável',
    profundidade: '230',
    codigo: '0000000',
  },
]

interface AccessoriesAndCompositionSlideProps {
  type: 'accessories' | 'composition'
}

const swiperParamsAccessoriesAndComposition = {
  modules: [Navigation, Scrollbar, A11y],
  spaceBetween: 10,
  slidesPerView: 2,
  navigation: {
    prevEl: '.swiper-button-prev-accessories',
    nextEl: '.swiper-button-next-accessories',
  },
  loop: true,
}

export default function AccessoriesAndCompositionSlide({
  type,
}: AccessoriesAndCompositionSlideProps) {
  return (
    <div className={styles.container_accessories_and_composition__slide}>
      <div className={styles.title_accessories_and_composition__slide}>
        <h3>
          {type === 'accessories'
            ? 'Acessórios da linha'
            : 'Composição da linha'}
        </h3>
        <div
          className={styles.container_accessories_and_composition__slide__btn}
        >
        <div className="swiper-button-prev-accessories">
          <button onClick={() => {}}>
            <BtnPrevSlide />
          </button>
        </div>
        <div className="swiper-button-next-accessories">
          <button onClick={() => {}}>
            <BtnNextSlide />
          </button>
        </div>
        </div>
        
      </div>
      <div className={styles.container_swiper__slide}>
        <Swiper {...swiperParamsAccessoriesAndComposition}>
          {Mock.map((item) => (
            <SwiperSlide key={item.id}>
              <CardSlideAccessoriesAndComposition
                image={item.image}
                name={item.name}
                category={item.category}
                comprimento={item.comprimento}
                largura={item.largura}
                profundidade={item.profundidade}
                codigo={item.codigo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
