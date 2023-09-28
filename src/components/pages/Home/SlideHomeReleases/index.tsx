import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './swiper.css'
import Button from '@/components/global/Button'

const swiperParams = {
  modules: [Navigation, Pagination, Scrollbar, A11y],
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: true,
  pagination: { clickable: true },
}

interface SlideHomeProps {
  images: string[]
}

export default function SlideHomeReleases({ images }: SlideHomeProps) {
  return (
    <section className={styles.container_slide_home_realeases}
      >
      <div className={`${styles.slide_home_realeases__content}`}
      >
        <div className={styles.slide_home_realeases__header}>
          <span>Lançamento Mekal</span>

          <div className={styles.slide_home_realeases__header__title}>
            <h1>
              A Freestanding apresenta o novo conceito de cozinha como
              equipamento
            </h1>

            <Button onClick={() => { console.log('Clicou') }}>Saiba mais</Button>
          </div>
        </div>
        <Swiper {...swiperParams}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`imagem ${index}`}
                className={styles.image_slide__gallery}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
