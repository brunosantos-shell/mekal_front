import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

export const swiperParams = {
  modules: [Navigation, Pagination, Scrollbar, A11y],
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: true,
  pagination: { clickable: true },
}