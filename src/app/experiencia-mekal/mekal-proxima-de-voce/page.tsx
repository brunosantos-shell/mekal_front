'use client'

import Showcase from '@/components/global/Showcase'
import styles from './styles.module.scss'
import Image from 'next/image'
import ExclusiveEvents from '@/components/pages/ExperienciaMekal/ExclusiveEvents'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function MekalProximaDeVoce() {
  const containerRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const overlay = overlayRef.current

    gsap.to(overlay, {
      y: 0,
      ease: 'none',
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
      <div ref={containerRef}
        className='showcase'
      >
      <Showcase
        title="Especialista em produtos premium de aço inox"
        customStyles={{ height: '464px' }}
        image="/images/experienciaMekal/mekalProximaDeVoce/hero.jpg"
        catalog={false}
        category="Mekal próxima de você"
      />
      </div>
      <div ref={overlayRef}>
      <section className={styles.container} >
        <div
          className={styles.container_around}
        >
        <div className={styles.container_header}>
          <div>
            <span>Lorem ipsum dolor</span>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac pharetra sem
            </h2>
          </div>
            <Image
              src="/images/experienciaMekal/mekalProximaDeVoce/image1.jpg"
              width={1080}
              height={480}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '480px',
                maxWidth: '1080px',
              }}
              alt={''}
            />
        </div>
        <div className={styles.container_content}>
            <Image
              src="/images/experienciaMekal/mekalProximaDeVoce/image2.jpg"
              width={617}
              height={426}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '426px',
                maxWidth: '617px',
              }}
              alt={''}
            />
          <div className={styles.container_content_texto}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ac pharetra sem, a aliquet libero. Etiam gravida in dui id
                laoreet. Morbi sed suscipit ligula. Nunc semper erat euismod,
                suscipit justo vel, euismod dui. Suspendisse ac orci erat.
                Nullam efficitur eu eros at dignissim. Nam euismod gravida nibh
                et imperdiet. Integer suscipit ac arcu tincidunt commodo.
                Aliquam maximus varius velit, sed luctus eros aliquet pulvinar.
                Nullam ut semper purus, eu ultricies risus. Nam iaculis
                condimentum nisi et placerat.
              </p>
              <p>
                Etiam euismod tortor tristique iaculis auctor. Proin libero
                nisi, ullamcorper eu nulla sed, blandit molestie ligula.
                Suspendisse in dapibus neque. Donec congue enim eget auctor
                interdum. Sed tempor egestas sapien eget tempus. Nullam
                elementum mauris vel nunc semper aliquet. In id urna condimentum
                purus cursus dapibus sed a odio. Aliquam scelerisque augue nisl,
                in faucibus est tincidunt at. Ut venenatis leo at orci blandit,
                a auctor felis lobortis. Duis et nulla mauris.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container_footer}>
          <div className={styles.container_footer_texto}>
            <div>
              <h2>Nullam elementum mauris vel nunc semper</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ac pharetra sem, a aliquet libero. Etiam gravida in dui id
                laoreet. Morbi sed suscipit ligula. Nunc semper erat euismod,
                suscipit justo vel, euismod dui. Suspendisse ac orci erat.
                Nullam efficitur eu eros at dignissim. Nam euismod gravida nibh
                et imperdiet. Integer suscipit ac arcu tincidunt commodo.
                Aliquam maximus varius velit, sed luctus eros aliquet pulvinar.
                Nullam ut semper purus, eu ultricies risus. Nam iaculis
                condimentum nisi et placerat. Etiam euismod tortor tristique
                iaculis auctor. Proin libero nisi, ullamcorper eu nulla sed,
                blandit molestie ligula. Suspendisse in dapibus neque. Donec
                congue enim eget auctor interdum. Sed tempor egestas sapien eget
                tempus. Nullam elementum mauris vel nunc semper aliquet. In id
                urna condimentum purus cursus dapibus sed a odio. Aliquam
                scelerisque augue nisl, in faucibus est tincidunt at. Ut
                venenatis leo at orci blandit, a auctor felis lobortis. Duis et
                nulla mauris. Donec vestibulum libero non augue pretium, eget
                varius mauris facilisis.
              </p>
            </div>
              <Image
                src="/images/experienciaMekal/mekalProximaDeVoce/image3.jpg"
                width={617}
                height={426}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '426px',
                  maxWidth: '617px',
                }}
                alt={''}
              />
          </div>
        </div>
        </div>
      </section>
      <ExclusiveEvents />
      </div>
    </main>
  )
}
