import Button from '@/components/global/Button'
import Image from 'next/image'
import styles from './styles.module.scss'
import contentHighlightsSolutions from './content.json'

export default function HighlightsSolutions() {
  return (
    <section className={styles.container_highlights} id="container_highlights">
      <div className={`${styles.container_highlights__content}`}>
        <div className={styles.highlights__line__one}>
          <div className={styles.line_one__column__one}>
            <div className={styles.line_one__column__one__header}>
              <span>{contentHighlightsSolutions.header1}</span>
              <h2>{contentHighlightsSolutions.subHeader1}</h2>
              <Button
                onClick={() => {
                  console.log('Clicou')
                }}
              >
                {contentHighlightsSolutions.button1}
              </Button>
            </div>
            <div className={styles.paragraph_column__footer}>
              <p>
                {contentHighlightsSolutions.paragraph1}
              </p>
            </div>
          </div>
          <div className={styles.line_one__column__two}>
            <div className={styles.column__two__image_container__line_one}>
              <Image
                src={'/images/highlightsSolutions/smartPremium.jpg'}
                layout="fill"
                sizes="(max-width: 1400px) 608px, 100vw"
                alt="Smart Premium"
              />
            </div>
            <span className={styles.photo_legend}>Smart Premium</span>
          </div>
        </div>
        <div className={styles.highlights__line__two} >
          <div className={styles.line_two__column__one}>
            <div className={styles.line_two__column__one__header}>
              <div className={styles.header__image_container}>
                <Image
                  src={'/images/highlightsSolutions/sobMedida.jpg'}
                  layout="fill"
                  sizes="(max-width: 1400px) 613px, 100vw"
                  alt="Smart Premium"
                />
              </div>
              <span className={styles.photo_legend}>{contentHighlightsSolutions.header2}</span>
            </div>
            <div className={styles.paragraph_column__footer}>
              <p>
                {contentHighlightsSolutions.paragraph2}
              </p>
            </div>
          </div>
          <div className={styles.line_two__column__two}>
            <div className={styles.line_two__column__two__header}>
              <h2>{contentHighlightsSolutions.subheader3}</h2>
            </div>
            <div className={styles.line_two__column__two__footer}>
              <div
                className={
                  styles.line_two__column__two__footer__image_container
                }
              >
                <Image
                  src={'/images/highlightsSolutions/farmhouseSink.jpg'}
                  layout="fill"
                  sizes="(max-width: 1400px) 848px, 100vw"
                  alt="Farmhouse Sink"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
