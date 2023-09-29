import { Navigation, Scrollbar, A11y } from 'swiper/modules'

export const swiperParamsTheJourneyOfSteel = {
  modules: [Navigation, Scrollbar, A11y],
  spaceBetween: 80,
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  slidesPerView: 'auto' as 'auto',
  navigation: {
    prevEl: '.swiper-button-prev-the_journey',
    nextEl: '.swiper-button-next-the_journey',
  },
  loop: true,
}
