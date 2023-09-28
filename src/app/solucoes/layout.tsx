'use client'

import BenefitsMekal from '@/components/global/BenefitsMekal'
import HeroSolutions from '@/components/global/HeroSolutions'
import Showcase from '@/components/global/Showcase'
import WhereToFind from '@/components/global/WhereToFind'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface LayoutSolucoesProps {
  children: React.ReactElement<ShowcaseData>
}

interface ShowcaseData {
  title: string
  image: string
  catalog: boolean
}

interface HeroData {
  image: string
}

gsap.registerPlugin(ScrollTrigger)

export default function LayoutSolucoes({ children }: LayoutSolucoesProps) {
  const pathname = usePathname()
  const pathElements = pathname
    .split('/')
    .filter((element) => element.trim() !== '')
  const secondItem = pathElements[1]

  const lastElement = pathElements[pathElements.length - 1]
  const isNumeric = /^\d+$/.test(lastElement)

  const containerRef = useRef(null)
  const overlayRef = useRef(null)

  const getShowCaseData = (pathname: string) => {
    switch (secondItem) {
      case 'seriados':
        return {
          title: 'Em sincronia com as novas tendências do morar',
          image: '/images/pageSeriados/showCase.jpg',
          catalog: true,
        }
      case 'corporativo':
        return {
          title: 'a qualidade industrial que o mercado já conhece',
          image: '/images/pageCorporativo/showCase.jpg',
          catalog: false,
        }
      case 'modulares':
        return {
          title: 'O melhor formato para você É aquele exclusivo',
          image: '/images/pageModulares/showCase.jpg',
          catalog: false,
        }
      case 'sob-medida':
        return {
          title: 'A CADA NOVO PROJETO, UM LEQUE DE POSSIBILIDADES',
          image: '/images/pageSobMedida/showCase.jpg',
          catalog: false,
        }
      case 'arte-e-design':
        return {
          title: 'A Mekal existe para materializar a inventividade humana',
          image: '/images/pageArteEDesign/showCase.jpg',
          catalog: false,
        }
    }
  }

  const getHeroData = (pathname: string) => {
    let subCategory = ''

    switch (secondItem) {
      case 'seriados':
        return {
          image: '/images/pageSeriados/hero.jpg?v2',
        }
      case 'corporativo':
        return {
          image: '/images/pageCorporativo/hero.jpg?v2',
        }
      case 'sob-medida':
        return {
          image: '/images/pageSobMedida/hero.jpg?v2',
        }
      case 'modulares':
        subCategory = secondItem === 'modulares' ? pathElements[2] : ''

        switch (subCategory) {
          case 'smart-kit':
            return {
              image: '/images/pageModulares/smartKit/hero.jpg?v2',
            }
          case 'freestanding':
            return {
              image: '/images/pageModulares/freestanding/hero.jpg?v2',
            }
          case 'smart-premium':
            return {
              image: '/images/pageModulares/smartPremium/hero.jpg?v2',
            }
          default:
            return null
        }
      default:
        return null
    }
  }

  const showcaseData = getShowCaseData(pathname) as ShowcaseData
  const heroData = getHeroData(pathname) as HeroData

  console.log(secondItem)

  useEffect(() => {
    const overlay = overlayRef.current

    gsap.to(overlay, {
      y: 0,
      ease: 'ease-in-out',
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to('.showcase', {
      y: 300,
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: false,
      },
    })
  }, [])

  return (
    <div>
      <div ref={containerRef} className="showcase">
        {isNumeric ? null : (
          <Showcase
            key={secondItem}
            title={showcaseData.title}
            image={showcaseData.image}
            catalog={showcaseData.catalog}
            category={secondItem}
          />
        )}
      </div>
      <div
        className="sessao-por-cima"
        ref={overlayRef}
        style={{
          zIndex: 2,
        }}
      >
        {children}
        {secondItem === 'arte-e-design' ? null : <BenefitsMekal />}
        {heroData ? <HeroSolutions image={heroData.image} /> : null}
        {secondItem === 'arte-e-design' ? null : <WhereToFind />}
      </div>
    </div>
  )
}
