import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './swiper.css'

interface SlideGalleryProps {
    images?: string[];
    area?: 'slideProducts';
    customStyles?: React.CSSProperties;
}

const swiperParamsSlideGallery = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
}

export default function SlideGallery({ images, area, customStyles }: SlideGalleryProps) {
    const isSlideProducts = area === 'slideProducts'

    return (
        <div className={`${styles.container_slide__gallery} ${isSlideProducts ? styles.slideProductsContainer : ''}`} style={customStyles}>
            {area !== 'slideProducts' && (
                <h5 className={styles.title_slide__gallery}>Confira outras imagens</h5>
            )}
            <Swiper {...swiperParamsSlideGallery} className={isSlideProducts ? 'slide-products-swiper' : ''}>
                {images?.map((image, index) => (
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
