import Image from 'next/image'
import styles from './styles.module.scss'
import { IconPlusButton } from '@/icons'

interface CardProductProps {
    title: string;
    category: string;
    image: string;
}

export default function CardProduct({ title, category, image }: CardProductProps) {
  return (
    <div className={styles.card_product}>
      <h5>{title}</h5>
      <p className="small">{category}</p>
      <div className={styles.image_wrapper__card_product}>
        <Image
          src={image}
          alt="cuba"
          width={540}
          height={313}
        />
      </div>
      <button className={styles.card_product__btn__view_product}>
        <IconPlusButton />
      </button>
    </div>
  )
}
