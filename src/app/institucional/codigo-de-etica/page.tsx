import Showcase from '@/components/global/Showcase'
import WhereToFind from '@/components/global/WhereToFind'
import Contact from '@/components/pages/Institucional/Contact'
import styles from './styles.module.scss'

export default function codigoDeEtica() {
  return (
    <main>
      <Showcase
        title="Código de Ética"
        category="Institucional"
        image="/images/institucional/codigoDeEtica/hero.jpg?v2"
        catalog={false}
        customStyles={{ height: '464px' }}
        institutionals
        customPosition={25}
      />
      <section className={styles.container}>
        <div className={styles.container_header}>
          <p>
            A Docol e a Mekal prezam pela integridade, transparência e
            responsabilidade nas relações com todos os seus públicos. Por isso,
            a informação verdadeira e honesta e o cuidado com a conduta ética de
            seus líderes, colaboradores e fornecedores são sempre valorizados.
          </p>
        </div>
        <Contact />
        <WhereToFind />
      </section>
    </main>
  )
}
