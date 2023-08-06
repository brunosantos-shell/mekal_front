'use client'

import HighlightsProducs from '@/components/pages/Home/HighlightsProducts'
import HighlightsSolutions from '@/components/pages/Home/HighlightsSolutions'
import HighlightsHappen from '@/components/pages/Home/HighligthsHappen'
import ShowcaseHome from '@/components/pages/Home/ShowcaseHome'
import SlideHomeReleases from '@/components/pages/Home/SlideHomeReleases'

const MockSlideGallery = [
  '/images/gallerySlide/foto1.jpg',
  '/images/gallerySlide/foto2.jpg',
  '/images/gallerySlide/foto3.jpg',
]

export default function Home() {
  return (
    <main
      style={{
        position: 'relative',
      }}
    >
      <ShowcaseHome />
      <HighlightsSolutions />
      <SlideHomeReleases images={MockSlideGallery} />
      <HighlightsProducs />
      <HighlightsHappen />
    </main>
  )
}
