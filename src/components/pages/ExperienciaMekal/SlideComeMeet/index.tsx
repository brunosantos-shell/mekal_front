import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

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

interface Imagens {
    imagens: string[]
}

export default function SlideComeMeet({
    imagens
}: Imagens){
    return (
        <div className={styles.container_slide__gallery}>
            <Swiper {...swiperParamsSlideGallery}>
                {imagens?.map((image, index) => (
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
    )
}