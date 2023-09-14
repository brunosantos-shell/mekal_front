'use client'

import SlideGallery from '@/components/global/SlideGallery'
import ContentBox from '@/components/pages/Solucoes/ContentBox'
import styles from './styles.module.scss'

import sobMedidaContent from './content.json'
import { CardWithTitleAndDescription } from '@/components/global/CardWithTitleAndDescription'

const MockGallery = ['/images/pageSobMedida/gallerySlide/foto1.jpg']


export default function sobMedida() {
  return (
    <section className={styles.container}>
      <ContentBox
        title={sobMedidaContent.title}
        description={sobMedidaContent.description}
      />

      <SlideGallery images={MockGallery} />

      <div className={styles.container_text}>
        <h2>{sobMedidaContent.secondtitle}</h2>

        <p>
          {sobMedidaContent.seconddescription}
        </p>

        {sobMedidaContent.steps.map((step, index) => (
            <CardWithTitleAndDescription
                key={index}
                title={step.title}
                description={step.description}
                titleCategory="h4"
            />
        ))}
      </div>
    </section>
  )
}
