import Showcase from '@/components/global/Showcase'
import FixedSideBarQuestions from '@/components/pages/Suporte/FixedSideBarQuestions'
import styles from './styles.module.scss'

export default function commonQuestions() {
  return (
    <main>
      <Showcase
        title="Perguntas Frequentes"
        category="Suporte"
        image="/images/suporte/perguntasFrequentes/hero.jpg"
        catalog={false}
        customStyles={{ height: '464px' }}
        institutionals
      />
      <div className={styles.container_header}>
        <p>
          Reunimos algumas das dúvidas mais frequentes feitas por nossos
          clientes. Caso não encontre o que está procurando, entre em contato
          pelo sac@mekal.com.br. Teremos grande satisfação em atendê-lo(a).
        </p>
      </div>
        <FixedSideBarQuestions />
    </main>
  )
}
