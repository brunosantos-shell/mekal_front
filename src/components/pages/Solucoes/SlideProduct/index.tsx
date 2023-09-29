import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './swiper.css'

interface SlideProductProps {
    images?: string[];
}

const swiperParamsSlideProduct = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
}


export default function SlideProduct({ images }: SlideProductProps) {

    return (
      <div className={styles.container_slide__product}>
        <Swiper {...swiperParamsSlideProduct}
          className='slideProductsSwiper'
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index} className='swiperSlideProduct'>
              <img
                src={image}
                alt={`imagem ${index}`}
                className={styles.image_slide__product}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  }
  

