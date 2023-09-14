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

interface dataProps {
  image: string;
  name: string;
  category: string;
  comprimento?: string;
  largura?: string;
  profundidade?: string;
  codigo?: string;
  content?: string;
}


interface AccessoriesAndCompositionSlideProps {
  type: 'accessories' | 'composition'
  data : dataProps[]
  customStyles?: React.CSSProperties;
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
  data,
  customStyles
}: AccessoriesAndCompositionSlideProps) {

  return (
    <div className={styles.container_accessories_and_composition__slide} style={customStyles}>
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
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <CardSlideAccessoriesAndComposition
                image={item.image}
                name={item.name}
                category={item.category}
                comprimento={item.comprimento}
                largura={item.largura}
                profundidade={item.profundidade}
                codigo={item.codigo}
                content={item.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
