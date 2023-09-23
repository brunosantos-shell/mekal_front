'use client'

import { BtnNextSlide, BtnPrevSlide } from '@/icons'
import styles from './styles.module.scss'
import { Navigation, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './swiper.css'
import CardSlideTheJourneyOfSteel from '../CardSlideTheJourneyOfSteel'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SlideData {
  ano: string
  image: string
  description: string
}

const swiperParamsTheJourneyOfSteel = {
  modules: [Navigation, Scrollbar, A11y],
  spaceBetween: 80,
  slidesPerView: "auto",
  navigation: {
    prevEl: '.swiper-button-prev-the_journey',
    nextEl: '.swiper-button-next-the_journey',
  },
  loop: true,
}

export default function TheJourneyOfSteel({ slides }: { slides: SlideData[] }) {
  return (
    <div className={styles.container_the_journey_of_steel}>
      <div className={styles.container__header}>
        <span>Trajetória</span>

        <div className={styles.container}>
          <h2>A jornada do aço Mekal pelos anos</h2>
          <div className={styles.container__slide__btn}>
            <div className="swiper-button-prev-the_journey">
              <button onClick={() => {}}>
                <BtnPrevSlide />
              </button>
            </div>
            <div className="swiper-button-next-the_journey">
              <button onClick={() => {}}>
                <BtnNextSlide />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container__slide}>
        <Swiper {...swiperParamsTheJourneyOfSteel}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <CardSlideTheJourneyOfSteel
                ano={slide.ano}
                image={slide.image}
                description={slide.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
