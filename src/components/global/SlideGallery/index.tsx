import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './swiper.css'


const swiperParams = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
}

interface SlideGalleryProps {
    images: string[];
}


export default function SlideGallery ({ images } : SlideGalleryProps) {
  return (
    <>
    <h5
        className={styles.title_slide__gallery}
    >Confira outras imagens</h5>
    <Swiper
        {...swiperParams}
    >
        {images.map((image, index) => (
            <SwiperSlide key={index}>
                <img 
                    src={image} alt={`imagem ${index}`} className={styles.image_slide__gallery}/>
            </SwiperSlide>
        ))}
    </Swiper>
    </>
  )
};

