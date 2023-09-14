import Image from 'next/image'
import styles from './styles.module.scss'

interface CardSlideAccessoriesAndCompositionProps {
  image: string
  name: string
  category: string
  comprimento?: string
  largura?: string
  profundidade?: string
  codigo?: string
  content?: string
}

export default function CardSlideAccessoriesAndComposition({
  image,
  name,
  category,
  comprimento,
  largura,
  profundidade,
  codigo,
  content,
}: CardSlideAccessoriesAndCompositionProps) {
  return (
    <div className={styles.container_card__slide}>
      <div className={styles.container_card__slide__info}>
        <div className={styles.container_card__slide__info__title}>
          <h5>{name}</h5>
          <span>{category}</span>
        </div>
        {comprimento && largura && profundidade && codigo && (
          <div className={styles.container_card__slide__info__dimensions}>
            <div
              className={styles.container_card__slide__info__dimensions__item}
            >
              <p>Comprimento (mm):</p>
              <span>{comprimento}</span>
            </div>
            <div
              className={styles.container_card__slide__info__dimensions__item}
            >
              <p>Largura (mm):</p>
              <span>{largura}</span>
            </div>
            <div
              className={styles.container_card__slide__info__dimensions__item}
            >
              <p>Profundidade (mm):</p>
              <span>{profundidade}</span>
            </div>
            <div
              className={styles.container_card__slide__info__dimensions__item}
            >
              <p>Código:</p>
              <span>{codigo}</span>
            </div>
          </div>
        )}
        {content && (
          <div className={styles.container_card__slide__info__content}>
            <p>{content}</p>
          </div>
        )}
      </div>
      <div className={styles.container_card__slide__image}>
        <Image src={image} alt={name} width={338} height={274} quality={100} />
      </div>
    </div>
  )
}
