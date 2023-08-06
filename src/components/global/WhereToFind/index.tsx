import Image from 'next/image'
import Button from '../Button'
import styles from './styles.module.scss'

export default function WhereToFind() {
  return (
    <section className={styles.container_where__to__find}>
      <div className={styles.content_where__to__find}>
        <span>Viva a Experiencia</span>
        <h2>Onde encontrar</h2>
        <p>
          Visite as nossas lojas e veja como os nossos especialistas podem te
          ajudar a levar um design sofisticado e duradouro para sua casa.
        </p>
        <Button
          onClick={() => {
            console.log('Clicou')
          }}
        >
          Entre em contato
        </Button>
      </div>
      <div className={styles.container_cards__where__to__find}>
        <div className={styles.card__where__to__find}>
          <Image
            src={'/images/whereToFind/mekalFlagship.jpg'}
            alt={'mekalFlagship'}
            width={384}
            height={232}
          />
          <h4>Studio Mekal Flagship</h4>
          <p>
            Alameda Gabriel Monteiro da Silva, 1061 Jardim America, São Paulo -
            SP, 01441-001
          </p>
          <div className={styles.container__info__where__to__find}>
            <div>
              <span>Horário de funcionamento</span>
              <p>Segunda a sexta-feira das 10h às 19h Sábado das 10h às 14h</p>
            </div>
            <div>
              <span>Atendimento Studio</span>
              <p>55 (11) 3081-5625 gms@mekal.com.br</p>
            </div>
          </div>
        </div>
      
        <div className={styles.card__where__to__find}>
          <Image
            src={'/images/whereToFind/mekalLeblon.jpg'}
            alt={'mekalLeblon'}
            width={384}
            height={232}
          />
          <h4>Studio Mekal Leblon</h4>
          <p>
            Av. Niemeyer, 2 - sala 213 Leblon CEP 22450-220 Rio de Janeiro – RJ
          </p>
          <div className={styles.container__info__where__to__find}>
            <div>
              <span>Horário de funcionamento</span>
              <p>Segunda a sexta-feira das 10h às 19h Sábado das 10h às 14h</p>
            </div>
            <div>
              <span>Atendimento Studio</span>
              <p>21 96020-0009 (WhatsApp) rio@mekal.com.br</p>
            </div>
          </div>
        </div>
      <div className={styles.card__where__to__find}>
        
          <Image
            src={'/images/whereToFind/mekalFabric.jpg'}
            alt={'mekalFabric'}
            width={384}
            height={232}
          />
          <h4>Nossa Fabrica</h4>
          <p>
            Rua Euricledes Formiga, 240 Jardim Claudio CEP 06714-300 Cotia – SP
          </p>
          <div className={styles.container__info__where__to__find}>
            <div>
              <span>Horário de funcionamento</span>
              <p>Segunda a quinta-feira das 7h às 17h Sexta das 7h às 16h</p>
            </div>
            <div>
              <span>Atendimento ao lojista/revendedor</span>
              <p>Televendas 55 (11) 96349-0964 televendas@mekal.com.br</p>
            </div>
            <div>
              <span>Serviço de Atendimento ao Cliente</span>
              <p>21 96020-0009 (WhatsApp) rio@mekal.com.br</p>
            </div>
          </div>
        </div>
        </div>
          
     
    </section>
  )
}
