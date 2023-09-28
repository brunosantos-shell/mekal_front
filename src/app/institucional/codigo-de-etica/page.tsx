'use client'

import Showcase from '@/components/global/Showcase'
import WhereToFind from '@/components/global/WhereToFind'
import Contact from '@/components/pages/Institucional/Contact'
import styles from './styles.module.scss'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export default function CodigoDeEtica() {
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
      <div
        ref={containerRef}
        className='showcase'
      >
      <Showcase
        title="Código de Ética"
        category="Institucional"
        image="/images/institucional/codigoDeEtica/hero.jpg?v2"
        catalog={false}
        customStyles={{ height: '464px' }}
        institutionals
        customPosition={25}
      />
      </div>
      <section className={styles.container} ref={overlayRef}>
        <div className={styles.container_header}>
          <p>
            A Docol e a Mekal prezam pela integridade, transparência e
            responsabilidade nas relações com todos os seus públicos. Por isso,
            a informação verdadeira e honesta e o cuidado com a conduta ética de
            seus líderes, colaboradores e fornecedores são sempre valorizados.
          </p>
        </div>
        <Contact />
        <WhereToFind />
      </section>
    </main>
  )
}
