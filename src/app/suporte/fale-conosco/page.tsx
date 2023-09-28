'use client'

import Showcase from '@/components/global/Showcase'
import WhereToFind from '@/components/global/WhereToFind'
import ContactForm from '@/components/pages/Suporte/ContactForm'
import styles from './styles.module.scss'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export default function ContactUs() {
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
        title="Fale Conosco"
        category="Suporte"
        image="/images/suporte/faleConosco/hero.jpg"
        catalog={false}
        customStyles={{ height: '464px' }}
        institutionals
      />
      </div>
      <div ref={overlayRef}>
      <div className={styles.container_header}>
        <p>
          Tem alguma dúvida sobre os nosso produtos ou sobre como podemos
          auxiliar no seu projeto? É só preencher o formulário abaixo, assim
          nossa equipe de especialistas entrará em contato com você o quanto
          antes.
        </p>
      </div>
      <div
        className={styles.container_content}
      >
         <ContactForm />
      </div>
      <WhereToFind />
      </div>
     
    </main>
  )
}
