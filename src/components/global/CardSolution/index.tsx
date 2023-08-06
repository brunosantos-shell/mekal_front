import Image from 'next/image'
import styles from './styles.module.scss'
import { IconPlusButton } from '@/icons'
import Link from 'next/link'

interface CardSolutionProps {
  title: string;
  image: string;
  alt?: string;
  type?: 'seriados' | 'modulados' | 'sob-medida' | 'corporativo' | 'art-e-design';
  numeric?: string;
  width?: number;
  height?: number;
  tablet?: boolean;
  responsive?: boolean;
  url?: string;
}

export default function CardSolution({
  title,
  image,
  alt,
  type,
  numeric,
  width,
  height,
  tablet,
  responsive,
  url
}: CardSolutionProps) {
  let defaultWidth, defaultHeight

  switch (type) {
    case 'seriados':
      defaultWidth = 384
      defaultHeight = 384
      break
    case 'modulados':
      defaultWidth = 384
      defaultHeight = 600
      break
    case 'sob-medida':
    case 'corporativo':
      defaultWidth = 384
      defaultHeight = 384
      break
    case 'art-e-design':
      defaultWidth = 616
      defaultHeight = 384
      break
    default:
      defaultWidth = 384
      defaultHeight = 384
  }

  const finalWidth = width !== undefined ? width : defaultWidth
  const finalHeight = height !== undefined ? height : defaultHeight

  return (

      <div className={`${styles.container_card_solution} ${(responsive ?? false) ? 'responsive' : ''}`}>
        <Link
        href={url ?? '#'}
      >
      <div className={styles.card_solution__numeric}>
        <span>{numeric}</span>
      </div>
        <div className={`${styles.card_solution} ${styles[type ?? '']} ${(responsive ?? false) ? styles.responsive : ''}`} style={{ maxWidth: `${finalWidth}px`, maxHeight: `${finalHeight}px` }}>
        <div className={styles.image_wrapper__card_solution}>
          <Image src={image} alt={title} width={finalWidth} height={finalHeight} quality={100}/>
          <button className={styles.card_product__btn__view_solution}>
            <IconPlusButton />
          </button>
        </div>
      </div>
      <h4 className={styles.card_solution__title}>{title}</h4>
      </Link>
    </div>
   
  )
}
