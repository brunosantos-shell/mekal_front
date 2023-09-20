'use client'

import Showcase from '@/components/global/Showcase'
import SlideComeMeet from '@/components/pages/ExperienciaMekal/SlideComeMeet'
import Image from 'next/image'
import styles from './styles.module.scss'
import contentStudioMekal from './content.json'

export default function StudioMekal() {
  function splitIntoParagraphs(text: string) {
    return text.split('\n').filter((paragraph) => paragraph.trim() !== '')
  }

  const paragraphsSectionColumn1 = splitIntoParagraphs(
    contentStudioMekal.section1.column1
  )
  const paragraphsSectionColumn2 = splitIntoParagraphs(
    contentStudioMekal.section1.colums2
  )
  const paragraphsSection2Column1 = splitIntoParagraphs(
    contentStudioMekal.section2.column1
  )
  const paragraphsSection2Column2 = splitIntoParagraphs(
    contentStudioMekal.section2.colums2
  )

  const paragraphsSection2End = splitIntoParagraphs(
    contentStudioMekal.section2.paragraph
  )

  const paragraphsEndSection3 = splitIntoParagraphs(
    contentStudioMekal.section3.textEnd
  )

  const paragraphsSection4Column1 = splitIntoParagraphs(
    contentStudioMekal.section4.column1
  )

  const paragraphsSection4Column2 = splitIntoParagraphs(
    contentStudioMekal.section4.column2
  )

  return (
    <main>
      <Showcase
        title="Especialista em produtos premium de aço inox"
        customStyles={{ height: '464px' }}
        image="/images/experienciaMekal/studioMekal/hero.jpg"
        catalog={false}
        category="Studio Mekal"
      />
      <section className={styles.container}>
        <div className={styles.container_around}>
          <div className={styles.container_header}>
            <div>
              <span>{contentStudioMekal.section1.sub}</span>
              <h2>{contentStudioMekal.section1.title}</h2>
            </div>

            <Image
              src={contentStudioMekal.section1.image1}
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
            <div className={styles.container_content_texto}>
              <div>
                {paragraphsSectionColumn1.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div>
                {paragraphsSectionColumn2.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <Image
              src={contentStudioMekal.section1.image2}
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
      </section>
      <section className={styles.container2}>
        <div className={styles.container_header__section2}>
          <div>
            <span>{contentStudioMekal.section2.sub}</span>
            <h2>{contentStudioMekal.section2.title}</h2>
          </div>
          <div className={styles.container_content_text__section2}>
            <div>
              {paragraphsSection2Column1.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div>
              {paragraphsSection2Column2.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.container_footer__section2}>
          <div className={styles.collumn1__section2}>
            <Image
              src={contentStudioMekal.section2.image1}
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
            <div className={styles.collumn1__section2__text}>
              <h3>{contentStudioMekal.section2.title2}</h3>
              {paragraphsSection2End.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.collumn2__section2}>
            <p>{contentStudioMekal.section2.titleColumn2End}</p>
            <Image
              src={contentStudioMekal.section2.imageColum2End}
              width={849}
              height={727}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '727px',
                maxWidth: '849px',
              }}
              alt={''}
            />
          </div>
        </div>
      </section>
      <section className={styles.container3}>
        <div className={styles.container_header__section3__img}>
          <Image src={contentStudioMekal.section3.imageHero} fill alt={''} />
        </div>
        <div className={styles.container_around}>
          <div className={styles.container_header__section3}>
            <div className={styles.container_header__section3__text}>
              <h1>{contentStudioMekal.section3.title}</h1>
              <div>
                <p>{contentStudioMekal.section3.column1}</p>
                <p>{contentStudioMekal.section3.column2}</p>
              </div>
            </div>
          </div>
          <div className={styles.container_content__section3}>
            <div className={styles.container_content__section3__text}>
              <h2>{contentStudioMekal.section3.titleContent}</h2>
              <p>{contentStudioMekal.section3.textContent}</p>
            </div>
            <div className={styles.container_content__section3__cards}>
              <div className={styles.container_content__section3__cards__items}>
                <div
                  className={styles.container_content__section3__cards__item}
                >
                  <span>{contentStudioMekal.section3.card1.legend}</span>
                  <div
                    className={
                      styles.container_content__section3__cards__item__tradition
                    }
                  >
                    <Image
                      src={contentStudioMekal.section3.card1.image}
                      width={514}
                      height={523}
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '523px',
                        maxWidth: '514px',
                      }}
                      alt={''}
                    />
                  </div>
                </div>
                <div
                  className={styles.container_content__section3__cards__item}
                >
                  <span>{contentStudioMekal.section3.card2.legend}</span>
                  <div
                    className={
                      styles.container_content__section3__cards__item__optimized
                    }
                  >
                    <Image
                      src={contentStudioMekal.section3.card2.image}
                      width={487}
                      height={509}
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '509px',
                        maxWidth: '487px',
                      }}
                      alt={''}
                    />
                  </div>
                </div>
              </div>
              <p>{contentStudioMekal.section3.descriptionCards}</p>
            </div>
            <div className={styles.container_content__section3__text}>
              {paragraphsEndSection3.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container4}>
        <div className={styles.container_header__section4}>
          <Image src={contentStudioMekal.section4.imageHero} fill alt={''} />
        </div>
        <div
          className={styles.container_around}
        >
        <div className={styles.container_content__section4}>
          <div className={styles.container_content__section4__column1}>
            <span>{contentStudioMekal.section4.sub}</span>
            <h1>{contentStudioMekal.section4.title}</h1>
          </div>
          <div className={styles.container_content__section4__column2}>
            <div>
              {paragraphsSection4Column1.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div>
              {paragraphsSection4Column2.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.container_footer__section4}>
          <div className={styles.container_footer__section4__column1}>
            <h2>{contentStudioMekal.section4.titleContent}</h2>

            <div
              className={styles.container_footer__section4__column1__content}
            >
              {contentStudioMekal.section4.cardsOptimized.map((card, index) => (
                <div
                  key={index}
                  className={
                    styles.container_footer__section4__column1__content__item
                  }
                >
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src={contentStudioMekal.section4.imageEnd}
            width={649}
            height={649}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '649px',
              maxWidth: '649px',
            }}
            alt={''}
          />
        </div>
        </div>
      </section>
      <section className={styles.container5}>
        <h1>{contentStudioMekal.section5.title}</h1>
        <div className={styles.container_content__section5}>
          <div className={styles.container_content__section5__column1}>
            <h2>{contentStudioMekal.section5.titleAdress1}</h2>
            <p>{contentStudioMekal.section5.descriptionAdress1}</p>
            <div
              className={styles.container_content__section5__column2__mobile}
            >
              <SlideComeMeet
                imagens={[
                  '/images/experienciaMekal/studioMekal/studioMekalFlagship.jpg',
                ]}
              />
            </div>
            <p>{contentStudioMekal.section5.adress1}</p>
            <div
              className={styles.container_content__section5__column1__contact}
            >
              <span>{contentStudioMekal.section5.operation}</span>
              <span>{contentStudioMekal.section5.days}</span>
            </div>
            <div
              className={styles.container_content__section5__column1__contact}
            >
              <span>{contentStudioMekal.section5.titleService}</span>
              <span>
                {contentStudioMekal.section5.contactNumber} <br></br>{' '}
                {contentStudioMekal.section5.contactEmail}
              </span>
            </div>
          </div>
          <div className={styles.container_content__section5__column2}>
            <SlideComeMeet
              imagens={[
                '/images/experienciaMekal/studioMekal/studioMekalFlagship.jpg',
              ]}
            />
          </div>
        </div>
        <div className={styles.container_content__section5}>
          <div className={styles.container_content__section5__column2}>
            <SlideComeMeet
              imagens={[
                '/images/experienciaMekal/studioMekal/studioMekalLeblon.jpg',
              ]}
            />
          </div>
          <div className={styles.container_content__section5__column1}>
            <h2>{contentStudioMekal.section5.titleAdress2}</h2>
            <p>{contentStudioMekal.section5.descriptionAdress2}</p>
            <div
              className={styles.container_content__section5__column2__mobile}
            >
              <SlideComeMeet
                imagens={[
                  '/images/experienciaMekal/studioMekal/studioMekalLeblon.jpg',
                ]}
              />
            </div>
            <p>{contentStudioMekal.section5.adress2}</p>
            <div
              className={styles.container_content__section5__column1__contact}
            >
              <span>{contentStudioMekal.section5.operation}</span>
              <span>{contentStudioMekal.section5.days}</span>
            </div>
            <div
              className={styles.container_content__section5__column1__contact}
            >
              <span>{contentStudioMekal.section5.titleService}</span>
              <span>
                {contentStudioMekal.section5.contactNumber} <br></br>{' '}
                {contentStudioMekal.section5.contactEmail}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
