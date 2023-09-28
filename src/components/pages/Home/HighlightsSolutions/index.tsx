import Button from '@/components/global/Button'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function HighlightsSolutions() {
  return (
    <section className={styles.container_highlights} id="container_highlights">
      <div className={`${styles.container_highlights__content}`}>
        <div className={styles.highlights__line__one}>
          <div className={styles.line_one__column__one}>
            <div className={styles.line_one__column__one__header}>
              <span>Primor em cada detalhe</span>
              <h2>A harmonia perfeita entre tecnologia e arte feita à mão</h2>
              <Button
                onClick={() => {
                  console.log('Clicou')
                }}
              >
                Conheça nossas soluções
              </Button>
            </div>
            <div className={styles.paragraph_column__footer}>
              <p>
                Matéria-prima de alta qualidade e processo inteligente no
                desenvolvimento de peças de aço inoxidável. A Mekal garante
                beleza e sofisticação em peças versáteis e resistentes.
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
              <span className={styles.photo_legend}>Sob Medida</span>
            </div>
            <div className={styles.paragraph_column__footer}>
              <p>
                Transforme sua cozinha em um espaço de elegância e sofisticação.
                A Mekal traz sua expertise em aço inox para transformar seus
                sonhos em realidade, com produtos premium que se ajustam ao seu
                projeto. Materializamos a inventividade humana em soluções
                criativas.
              </p>
            </div>
          </div>
          <div className={styles.line_two__column__two}>
            <div className={styles.line_two__column__two__header}>
              <h2>O mais belo e requintado design de peças em aço inox</h2>
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
