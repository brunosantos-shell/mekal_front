import Image from 'next/image'
import styles from './styles.module.scss'
import { IconPlusButton } from '@/icons'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface CardProductProps {
    title: string;
    category: string;
    image: string;
    id: number;
}

export default function CardProduct({ title, category, image, id }: CardProductProps) {
  const pathname = usePathname()

  return (
    <Link href={`${pathname}/${id}`}>
    <div className={styles.card_product}>
      <h5>{title}</h5>
      <p className="small">{category}</p>
      <div className={styles.image_wrapper__card_product}>
        <Image
          src={image}
          alt="cuba"
          width={540}
          height={313}
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '313px',
            maxWidth: '540px',
          }}
        />
      </div>
      <button className={styles.card_product__btn__view_product}>
        <IconPlusButton />
      </button>
    </div>
    </Link>
  )
}
