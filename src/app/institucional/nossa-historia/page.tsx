import Image from 'next/image'
import styles from './styles.module.scss'

import contentnossaHistoria from './content.json'
import TheJourneyOfSteel from '@/components/pages/Institucional/TheJourneyOfSteel'
import Showcase from '@/components/global/Showcase'

export interface SlideData {
  ano: string
  image: string
  description: string
}

export interface NossaHistoriaData {
  url: string

  section1: {
    sub: string
    title: string
    imagem: string
  }

  section2: {
    imagem: string
    textoColuna1: string
    textoColuna2: string
  }

  section3: {
    title: string
    sub: string
    subTitle: string
    imagem: string
    textoColuna1: string
    textoColuna2: string
  }

  slideNossaHistoria: {
    slides: SlideData[]
  }
}

export default function nossaHistoria() {
  const data: NossaHistoriaData = contentnossaHistoria

  function splitIntoParagraphs(text: string) {
    return text.split('\n').filter((paragraph) => paragraph.trim() !== '')
  }

  const paragraphsColumn1Section2 = splitIntoParagraphs(
    data.section2.textoColuna1
  )

  const paragraphsColumn2Section2 = splitIntoParagraphs(
    data.section2.textoColuna2
  )

  return (
    <main>
      <Showcase
        title="Inovando na arte do aço inoxidável há mais de meio século"
        category="Institucional"
        image="/images/institucional/nossaHistoria/hero.jpg?v2"
        catalog={false}
        customStyles={{ height: '464px' }}
      />
      <section className={styles.container}>
        <div className={styles.container_header}>
          <div>
            <span>{data.section1 && <span>{data.section1.sub}</span>}</span>
            <h2>{data.section1.title}</h2>
          </div>
          <Image
            src={data.section1.imagem}
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
            src={data.section2.imagem}
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
                {paragraphsColumn1Section2.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div>
                {paragraphsColumn2Section2.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
        </div>

        <div className={styles.container_footer}>
          <h1>{data.section3.title}</h1>
          <div className={styles.container_footer_texto}>
            <div>
              <span>{data.section3.sub}</span>
              <h2>{data.section3.subTitle}</h2>

              <div>
                <p>{data.section3.textoColuna1}</p>
                <p>{data.section3.textoColuna2}</p>
              </div>
            </div>
              <Image src={data.section3.imagem}
                 width={618}
                 height={928}
                 sizes="100vw"
                 style={{
                   width: '100%',
                   height: 'auto',
                   maxHeight: '928px',
                   maxWidth: '618px',
                 }}
                 alt={''}
              />
          </div>
        </div>
      </section>
      <div className={styles.container_img__hero}>
        <Image
          src="/images/pageNossaHistoria/hero.jpg"
          alt={''}
          fill
          quality="100"
        />
      </div>
      <TheJourneyOfSteel slides={data.slideNossaHistoria.slides} />
    </main>
  )
}
