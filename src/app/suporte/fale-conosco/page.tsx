import Showcase from '@/components/global/Showcase'
import WhereToFind from '@/components/global/WhereToFind'
import ContactForm from '@/components/pages/Suporte/ContactForm'
import styles from './styles.module.scss'

export default function contactUs() {
  return (
    <main>
      <Showcase
        title="Fale Conosco"
        category="Suporte"
        image="/images/suporte/faleConosco/hero.jpg"
        catalog={false}
        customStyles={{ height: '464px' }}
        institutionals
      />
      <div className={styles.container_header}>
        <p>
          Tem alguma dúvida sobre os nosso produtos ou sobre como podemos
          auxiliar no seu projeto? É só preencher o formulário abaixo, assim
          nossa equipe de especialistas entrará em contato com você o quanto
          antes.
        </p>
      </div>
      <div
        className={styles.container_content}
      >
         <ContactForm />
      </div>
      <WhereToFind />
     
    </main>
  )
}
