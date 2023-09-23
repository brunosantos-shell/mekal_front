import ContentBox from '@/components/pages/Solucoes/ContentBox'
import FixedSidebarContent from '@/components/pages/Solucoes/FixedSidebarContent'
import Image from 'next/image'
import styles from './styles.module.scss'

import arteEDesignContent from './content.json'

export default function arteEDesign() {
  return (
    <>
      <section
        className={styles.container}
      >
        <ContentBox
          title={arteEDesignContent.title}
          description={arteEDesignContent.description}
        />
        <div 
            className={styles.container_text}
        >
          <Image
            src={'/images/pageArteEDesign/iconAspas.svg'}
            width={48}
            height={28}
            alt="aspas"
          />
          <p
            className={styles.text_quote}
          >{arteEDesignContent.quote}</p>
          <h5>{arteEDesignContent.quoteAuthor}</h5>
          <p
            className={styles.text_info}
          >{arteEDesignContent.quoteInfo}</p>
          <h4>
          {arteEDesignContent.introText}
          </h4>
        </div>
      </section>
      <FixedSidebarContent />
    </>
  )
}
