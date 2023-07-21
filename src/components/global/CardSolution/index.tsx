import Image from 'next/image'
import styles from './styles.module.scss'
import { IconPlusButton } from '@/icons'

interface CardSolutionProps {
  title: string;
  image: string;
  alt?: string;
  type: 'seriados' | 'modulados' | 'sob-medida' | 'corporativo' | 'art-e-design';
}

export default function CardSolution({ title, image, alt, type }: CardSolutionProps) {
  let width, height
  switch (type) {
    case 'seriados':
      width = 384
      height = 384
      break
    case 'modulados':
      width = 384
      height = 600
      break
    case 'sob-medida':
    case 'corporativo':
      width = 384
      height = 384
      break
    case 'art-e-design':
      width = 616
      height = 384
      break
    default:
      width = 384
      height = 384
  }

  return (
    <div className={styles.card_solution}
        style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
    >
      <div className={styles.image_wrapper__card_solution}>
        <Image src={image} alt={title} width={width} height={height} />
        <button className={styles.card_product__btn__view_solution}>
        <IconPlusButton />
      </button>
      </div>
      <h4>{title}</h4>
    </div>
  )
}
