'use client'

import { usePathname } from 'next/navigation'
import Tabs from '@/components/global/Tabs'

import Mocks from '@/mocks/linhas.json'
import SlideGallery from '@/components/global/SlideGallery'
import styles from './styles.module.scss'

interface Product {
  id: number
  name: string
  slug: string
  image: string
}

type TabLine = Record<
  string,
  {
    products: Product[]
    name: string
  }
>

interface MockSolution {
  id: number
  linhas?: TabLine[]
}

const SlideGalleryTemp = [
  '/images/gallerySlide/foto1.jpg',
  '/images/gallerySlide/foto2.jpg',
  '/images/gallerySlide/foto3.jpg',
]

export default function Seriados() {
  const pathname = usePathname()
  const pathElements = pathname
    .split('/')
    .filter((element) => element.trim() !== '')
  const slugToMatch = pathElements[1]

  const matchingSolution = Mocks.solutions.find(
    (solution) => solution.slug === slugToMatch
  ) as MockSolution | undefined

  return (
    <main style={{ position: 'relative' }}>
      {matchingSolution?.linhas !== null &&
        matchingSolution?.linhas !== undefined && (
          <Tabs categories={matchingSolution.linhas} />
        )}

      <div
        className={styles.slide_gallery__wrapper}
      >
        <SlideGallery images={SlideGalleryTemp} />
      </div>
    </main>
  )
}
