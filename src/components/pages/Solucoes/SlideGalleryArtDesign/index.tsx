import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './swiper.css'

const swiperParamsSlideGallery = {
  modules: [Navigation, Pagination, Scrollbar, A11y],
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: true,
  pagination: { clickable: true },
}

interface Album {
  name: string
  image: string
}

interface SlideGalleryProps {
  images: Album[]
}

export default function SlideGalleryArtDesign({ images }: SlideGalleryProps) {
  return (
    <div className={styles.container_slide__gallery}>
      <Swiper {...swiperParamsSlideGallery}>
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <h5 className={styles.title_slide__gallery}>{image.name}</h5>
            <img
              src={image.image}
              alt={`imagem ${index}`}
              className={styles.image_slide__gallery}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
