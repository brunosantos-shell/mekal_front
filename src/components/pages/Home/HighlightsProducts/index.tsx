import CardSolution from '@/components/global/CardSolution'
import styles from './styles.module.scss'

export default function HighlightsProducs() {
  return (
    <section className={styles.container_highlights_producs}>

        <div className={styles.container_highlights_header}>
            <span>
                Explore nossos produtos
            </span>
            <ul>
                <li>
                    <span>Seriados</span>
                </li>
                <li>
                    <span>Modulados</span>
                </li>
                <li>
                    <span>Sob medida</span>
                </li>
                <li>
                    <span>Corporativo</span>
                </li>
                <li>
                    <span>Arte e Design</span>
                </li>
            </ul>
        <h2 className={styles.container_highlights_producs__title}>
        Nossas soluções
      </h2>
        </div>

      <div className={styles.container_highlights_producs__content}>
        <div className={styles.first_card}>
          <CardSolution
            title="Seriados"
            type="seriados"
            url='/solucoes/seriados'
            image="/images/highlightsProducts/seriados.jpg"
            alt="Seriados"
            numeric={'01'}
          />
        </div>
        <CardSolution
          title="Modulados"
          type="modulados"
          url='/solucoes/modulares'
          image="/images/highlightsProducts/modulados.jpg"
          alt="Modulados"
          numeric={'02'}
          
        />
        <div className={styles.sob_medida_container}>
          <CardSolution
            title="Sob medida"
            type="sob-medida"
            url='/solucoes/sob-medida'
            image="/images/highlightsProducts/sobMedida.jpg"
            alt="Sob medida"
            numeric={'03'}
          />
          <div className={styles.additional_text}>
            <p>
              Fabricamos cozinhas, produtos para casa ou ambientes corporativos.
              Tudo com acabamento premium e exclusivo. Desenvolvemos produtos
              multifuncionais, integrando ambientes e proporcionando
              experiências marcantes.
            </p>
          </div>
        </div>
        <CardSolution
          title="Corporativo"
          type="corporativo"
          url='/solucoes/corporativo'
          image="/images/highlightsProducts/corporativo.jpg"
          alt="Corporativo"
          numeric={'04'}
        />
        <div className={styles.last_card}>
          <CardSolution
            title="Arte e Design"
            type="art-e-design"
            url='/solucoes/arte-e-design'
            image="/images/highlightsProducts/arteDesign.jpg"
            alt="Arte e Design"
            numeric={'05'}
          />
        </div>
      </div>
    </section>
  )
}
