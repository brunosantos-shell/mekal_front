import Button from '@/components/global/Button'
import CardSolution from '@/components/global/CardSolution'
import style from './styles.module.scss'
import contentHighlightsHappen from './content.json'

export default function HighlightsHappen() {
  return (
    <section className={style.container_highlights_happen}
    >
      <div className={`${style.container_highlights_content}`}
      >
        <div className={style.highlights_content__header}>
          <span>{contentHighlightsHappen.header}</span>
          <div>
            <h2>{contentHighlightsHappen.explore}</h2>
            <Button
              onClick={() => {
                console.log('Clicou')
              }}
            >
              {contentHighlightsHappen.button}
            </Button>
          </div>
        </div>
        <div className={style.container_highlights_content__cards}>
          <CardSolution
            title="Lançamento na semana internacional de design"
            image="/images/highlightsHappen/noticia1.jpg"
            alt="lançamento na semana internacional de design"
            url="#"
            width={538}
            height={328}
            responsive
          />

          <CardSolution
            title="Benefícios do Aço Inox na limpeza da sua cozinha"
            image="/images/highlightsHappen/noticia3.jpg"
            alt="benefícios do aço inox na limpeza da sua cozinha"
            url="#"
            width={538}
            height={504}
            responsive
          />
          <CardSolution
            title="Tendências para 2024 para sua Área Gourmet"
            image="/images/highlightsHappen/noticia2.jpg"
            alt="tendências para 2024 para sua área gourmet"
            url="#"
            width={538}
            height={328}
            responsive
          />
        </div>
        <div className={
          style.container_highlights_content__button__mobile
        }>
          <Button
            onClick={() => {
              console.log('Clicou')
            }}
          >
            Ver mais
          </Button>
        </div>
      </div>
    </section>
  )
}
