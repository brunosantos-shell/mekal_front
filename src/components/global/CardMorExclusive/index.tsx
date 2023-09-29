import { IconPlusButton } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function CardMorExclusive () {
    return (
    <div className={styles.card_product}>
        <Link href={`/solucoes/sob-Medida`}
            style={{
                textDecoration: 'none',
            }}
        >
        <div
        className={styles.card_product__content}
        >
      <h4>Quer Mais Exclusividade?</h4>
      <p>Conheça nossas soluções sob-medita</p>
      </div>
      <div className={styles.image_wrapper__card_product}>
        <Image
          src={`/images/pageSobMedida/imageCardSobMedida.jpg`}
          alt="cuba"
          width={565}
          height={313}
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '313px',
            maxWidth: '565px',
          }}
        />
      </div>
      <button className={styles.card_product__btn__view_product}>
        <IconPlusButton />
      </button>
      </Link>
    </div>
    )
}