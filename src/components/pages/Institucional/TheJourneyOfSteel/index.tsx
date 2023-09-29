'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { BtnNextSlide, BtnPrevSlide } from '@/icons'
import styles from './styles.module.scss'
import { swiperParamsTheJourneyOfSteel } from './TheJourneyOfSteelSwiperConfig'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './swiper.css'
import CardSlideTheJourneyOfSteel from '../CardSlideTheJourneyOfSteel'

interface SlideData {
  ano: string
  image: string
  description: string
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
            <SwiperSlide key={index}
              className='swiperSlideTheJourney'
            >
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
