'use client'

import Showcase from '@/components/global/Showcase'
import FixedSideBarQuestions from '@/components/pages/Suporte/FixedSideBarQuestions'
import styles from './styles.module.scss'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export default function CommonQuestions() {
  const containerRef = useRef(null)
  const overlayRef = useRef(null)

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
    <main>
      <div ref={containerRef} className="showcase">
        <Showcase
          title="Perguntas Frequentes"
          category="Suporte"
          image="/images/suporte/perguntasFrequentes/hero.jpg"
          catalog={false}
          customStyles={{ height: '464px' }}
          institutionals
        />
      </div>
      <div ref={overlayRef}>
        <div className={styles.container_header}>
          <p>
            Reunimos algumas das dúvidas mais frequentes feitas por nossos
            clientes. Caso não encontre o que está procurando, entre em contato
            pelo sac@mekal.com.br. Teremos grande satisfação em atendê-lo(a).
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
      >
      <FixedSideBarQuestions />
      </div>
    </main>
  )
}
