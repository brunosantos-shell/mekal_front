'use client'

import Showcase from '@/components/global/Showcase'
import SlideComeMeet from '@/components/pages/ExperienciaMekal/SlideComeMeet'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function StudioMekal() {
  return (
    <main>
      <Showcase
        title="Especialista em produtos premium de aço inox"
        customStyles={{ height: '464px' }}
        image="/images/experienciaMekal/studioMekal/hero.jpg"
        catalog={false}
        category="Studio Mekal"
      />
      <section className={styles.container}>
        <div className={styles.container_header}>
          <div>
            <span>Experiência Mekal</span>
            <h2>
              STUDIO MEKAL OFERECE SOLUÇÕES QUE OTIMIZAM O PROJETO DA COZINHA
            </h2>
          </div>

          <div className={styles.container_img}>
            <Image
              src="/images/experienciaMekal/studioMekal/image1.jpg"
              fill
              alt={''}
            />
          </div>
        </div>
        <div className={styles.container_content}>
          <div className={styles.container_content_texto}>
            <div>
              <p>
                Para ser funcional, o projeto da cozinha deve priorizar o
                workflow ideal para quem irá utilizá-la diariamente. Por ser um
                ambiente que remete a uma genuína linha de produção, tudo nele
                deve estar coordenado. O layout deve refletir uma ordem que
                facilite o fluxo de trabalho e a interação dos usuários. A Mekal
                é especialista não apenas no manejo do aço inox, disciplina na
                qual alcança o estado da arte, mas, também, na elaboração do
                projeto da cozinha do início ao fim. Transcende-se o mero
                projeto executivo, o conhecimento adquirido por mais de meio
                século proporciona a amálgama perfeita de forma e função no
                desenvolvimento das melhores soluções.
              </p>
              <p>
                Esse conhecimento, especialidade da marca, é traduzido no Studio
                Mekal, que coloca à disposição de arquitetos, designers de
                interiores e clientes finais um serviço de consultoria para
                auxiliá-los tanto na concepção inicial do projeto quanto na sua
                otimização. O Studio Mekal enaltece a nossa expertise em
                projetar cozinhas de diversos perfis, com alto nível de
                detalhamento e inteligência no uso e combinação de diversos
                materiais além do aço inox. A cozinha é o ambiente com a maior
                variedade de materiais provenientes de fornecedores distintos.
                Cada um produz da sua maneira e fazer com que tudo funcione
                harmonicamente é um grande desafio.
              </p>
            </div>
          </div>
          <div className={styles.container_img}>
            <Image
              src="/images/experienciaMekal/studioMekal/image2.jpg"
              fill
              alt={''}
            />
          </div>
        </div>
      </section>
      <section className={styles.container2}>
        <div className={styles.container_header__section2}>
          <div>
            <span>Experiência Mekal</span>
            <h2>
              Prezamos pelo design inovador, fino acabamento e alta qualidade
            </h2>
          </div>
          <div className={styles.container_content_text__section2}>
            <p>
              Estar em uma de nossas lojas vai além da experiência de visitar um
              showroom de vendas. Contamos com um ambiente estrategicamente
              pensado para oferecer as melhores soluções aos clientes. Cada
              espaço apresenta possibilidades de aplicações do mix de produtos
              Mekal, estando eles atrelados a soluções sob medida, combinadas
              com outros materiais além do inox.
            </p>
            <p>
              Isso facilita a visualização das composições que melhor se
              encaixam ao seu projeto de cozinha, além de entender as
              necessidades das pessoas que a utilizarão diariamente. Nossa
              equipe especializada dará todo o suporte necessário para
              viabilizar o seu projeto, oferecendo as melhores soluções
              disponíveis no Studio Mekal
            </p>
          </div>
        </div>
        <div className={styles.container_footer__section2}>
          <div className={styles.collumn1__section2}>
            <div className={styles.collumn1__section2__img}>
              <Image
                src="/images/experienciaMekal/studioMekal/image3.jpg"
                fill
                alt={''}
              />
            </div>
            <div className={styles.collumn1__section2__text}>
              <h3>Projetos sob medida com o mekal custom</h3>
              <p>
                Com exclusividade, nossas lojas contam com a solução Mekal
                Custom, que permite a criação de peças sob medida. Muito mais
                possibilidades para criar projetos únicos e que seus sonhos se
                tornem realidade. Uma peça sob medida, pensada para o seu
                espaço, exclusiva para o seu jeito.
              </p>
            </div>
          </div>

          <div className={styles.collumn2__section2}>
            <p>
              “Uma residência é um espaço em permanente evolução, que responde
              às mudanças no comportamento humano, na tecnologia, na cultura”
            </p>
            <div className={styles.collumn2__section2__img}>
              <Image
                src="/images/experienciaMekal/studioMekal/image4.jpg"
                fill
                alt={''}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container3}>
        <div className={styles.container_header__section3}>
          <div className={styles.container_header__section3__img}>
            <Image
              src="/images/experienciaMekal/studioMekal/heroContent.jpg"
              fill
              alt={''}
            />
          </div>
          <div className={styles.container_header__section3__text}>
            <h1>Inteligência em Cozinhas</h1>
            <div>
              <p>
                Saber que as soluções Mekal equipam cozinhas no Brasil e
                exterior é motivo de muito orgulho para nós. Entendemos que
                cozinhar é um ato que vai além de uma necessidade diária.
                Cozinhar também é um ato de amor, de celebrar momentos especiais
                com quem gostamos e de compartilhar experiências enquanto
                saboreamos um prato apetitoso.
              </p>
              <p>
                Para que esses rituais sejam marcantes, nada melhor do que
                preparar o melhor cenário possível. Logo o ambiente precisa ser
                funcional, prático, agradável e pensado para suprir as
                necessidades de cada usuário. Por isso a Mekal tem como foco
                principal as pessoas, buscando entender suas necessidades,
                desejos e sonhos para que sejam oferecidas as melhores soluções
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container_content__section3}>
          <div className={styles.container_content__section3__text}>
            <h2>
              COZINHA DE FRANKFURT: O CONCEITO QUE DEU ORIGEM AOS MODELOS DE
              COZINHAS ATUAIS
            </h2>
            <p>
              Planejar uma cozinha requer habilidades e conhecimentos
              primordiais. Há toda uma inteligência desenvolvida pela
              arquitetura em relação a esse espaço fundamental. Um marco
              importante foi a Cozinha de Frankfurt, conceito criado em 1926
              pela arquiteta Margarete Schütte-Lihotzky, que assumiu a missão de
              remodelar a cozinha para atender às demandas por funcionalidade e
              praticidade de uma Europa em reconstrução. Margarete estudou os
              diferentes hábitos das pessoas diante de uma cozinha e criou um
              sistema que até hoje é aplicado por arquitetos e engenheiros do
              mundo todo.
            </p>
          </div>
          <div className={styles.container_content__section3__cards}>
            <div className={styles.container_content__section3__cards__items}>
              <div className={styles.container_content__section3__cards__item}>
                <span>Cozinha tradicional</span>
                <div
                  className={
                    styles.container_content__section3__cards__item__tradition
                  }
                >
                  <Image
                    src="/images/experienciaMekal/studioMekal/cozinhaTradicional.jpg"
                    fill
                    alt={''}
                  />
                </div>
              </div>
              <div className={styles.container_content__section3__cards__item}>
                <span>Cozinha otimizada</span>
                <div
                  className={
                    styles.container_content__section3__cards__item__optimized
                  }
                >
                  <Image
                    src="/images/experienciaMekal/studioMekal/cozinhaOtimizada.jpg"
                    fill
                    alt={''}
                  />
                </div>
              </div>
            </div>
            <p>
              Esboço do estudo para a Cozinha de Frankfurt: à esquerda, cozinha
              tradicional, com todos os complexos deslocamentos necessários para
              uma tarefa doméstica. À direita, simplificação dos movimentos
              através da remodelagem do workflow.
            </p>
          </div>
          <div className={styles.container_content__section3__text}>
            <p>
              Com inspiração no Taylorismo, Margarete Schütte-Lihotzky adotou em
              seu projeto a funcionalidade de uma verdadeira estação de trabalho
              industrial. Como resultado, a Cozinha de Frankfurt precisava ser
              altamente otimizada, mesmo em espaços compactos. As coisas mais
              importantes deveriam estar sempre ao alcance das mãos e cada área
              de trabalho devidamente posicionada para uma rápida
              acessibilidade, evitando deslocamentos e manuseios desnecessários.
              Entender esse conceito, e adotar o sistema de planejamento para um
              workflow ideal da cozinha, é a base para que possamos oferecer as
              melhores soluções aos nossos clientes.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.container4}>
        <div className={styles.container_header__section4}>
          <Image
            src="/images/experienciaMekal/studioMekal/heroContent2.jpg"
            fill
            alt={''}
          />
        </div>
        <div className={styles.container_content__section4}>
          <div className={styles.container_content__section4__column1}>
            <span>A mais de 50 anos inovando para sua casa</span>
            <h1>SUA COZINHA DO SEU JEITO</h1>
          </div>
          <div className={styles.container_content__section4__column2}>
            <p>
              Na Mekal buscamos compreender como cada pessoa, dos mais diversos
              perfis, atua nesse ambiente tão complexo e fascinante. Um layout
              bem-feito, com espaço otimizado para o uso, faz toda diferença.
              Além disso, entendemos que uma cozinha bem planejada se torna
              convidativa para que mais pessoas a utilizem. O ambiente precisa
              estar adequado ao fluxo diário e realização das tarefas, além de
              promover o convívio. Uma cozinha ideal é aquela que se adapta ao
              perfil de quem a utiliza. O ambiente deve ser pensado para o
              usuário, podendo ser personalizada de diversas formas. Na Mekal
              desenvolvemos soluções levando sempre em consideração a
              experiência do usuário. Conhecendo a fundo as necessidades, os
              desejos, preferências estéticas e particularidades das pessoas que
              moram na casa, somos capazes de entregar soluções muito mais
              precisas.{' '}
            </p>
            <p>
              Por sermos especialistas, estamos prontos para desenvolver
              projetos de perfis variados de usuários, até mesmo para aqueles
              que não cozinham. Seja para uma cozinha vegana, uma cozinha
              acessível, de grandes proporções ou compacta, oferecemos soluções
              pensadas para se encaixar ao layout ideal, podendo personalizá-las
              como desejado. Cada produto Mekal é fabricado tendo a exata
              compreensão do que significa o espaço da cozinha em uma casa nos
              dias de hoje. Estamos sempre atentos às tendências e
              transformações do mercado e da sociedade, o que nos permite
              desenvolver as melhores soluções. Porque, para entender de
              cozinha, é preciso antes entender de gente.
            </p>
          </div>
        </div>
        <div className={styles.container_footer__section4}>
          <div className={styles.container_footer__section4__column1}>
            <h2>Como Otimizamos a cozinha</h2>
            <div
              className={styles.container_footer__section4__column1__content}
            >
              <div
                className={
                  styles.container_footer__section4__column1__content__item
                }
              >
                <h4>1. Despensa / Geladeira</h4>
                <p>
                  Onde se guardam os alimentos e ingredientes envolvidos no
                  processo de cozimento e preparo. Armazenamento “vivo”, que
                  requer cuidados especiais: alimentos perecíveis e não
                  perecíveis (com prazo de validade), temperos, necessidade de
                  ventilação, abrigo da luz, refrigeração, descongelamento etc.
                </p>
              </div>
              <div
                className={
                  styles.container_footer__section4__column1__content__item
                }
              >
                <h4>2. Armazenagem</h4>
                <p>
                  Onde se guardam os alimentos e ingredientes envolvidos no
                  processo de cozimento e preparo. Armazenamento “vivo”, que
                  requer cuidados especiais: alimentos perecíveis e não
                  perecíveis (com prazo de validade), temperos, necessidade de
                  ventilação, abrigo da luz, refrigeração, descongelamento etc.
                </p>
              </div>
              <div
                className={
                  styles.container_footer__section4__column1__content__item
                }
              >
                <h4>3. Área Molhada</h4>
                <p>
                  Separamos a área molhada da área de trabalho por, normalmente,
                  funcionar como “fronteira” entre o pré-preparo e o cozimento.
                  Utilizamos a água e as cubas tanto para lavagem e separação de
                  ingredientes (pré-preparo) quanto na fase do preparo em si. A
                  escolha correta das cubas e seu posicionamento ideal no layout
                  da bancada são cruciais para um bom workflow da cozinha. Além
                  disso, a área molhada pode ser utilizada, em muitos casos,
                  para atividades não relacionadas à cozinha, como, por exemplo,
                  o manuseio de plantas em apartamentos pequenos.
                </p>
              </div>
              <div
                className={
                  styles.container_footer__section4__column1__content__item
                }
              >
                <h4>4. Estação de Trabalho</h4>
                <p>
                  Onde a mágica do preparo e cozimento efetivamente acontece.
                  Essa é área que recebe, muitas vezes, mais impacto físico
                  (panelas pesadas) e abrasão sobre a bancada. A correta
                  distribuição entre áreas de apoio e área de cocção, além de
                  seus respectivos posicionamentos em relação à área molhada,
                  são fundamentais na formatação de um workflow equilibrado.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              width: '649px',
              height: '649px',
            }}
            className={styles.container_footer__section4__image}
          >
            <Image
              src="/images/experienciaMekal/studioMekal/cozinhaPlanejada.svg"
              fill
              alt={''}
            />
          </div>
        </div>
      </section>
      <section className={styles.container5}>
        <h1>Venha conhecer as nossas lojas</h1>
        <div className={styles.container_content__section5}>
          <div className={styles.container_content__section5__column1}>
            <h2>Studio Mekal Flagship</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac pharetra sem, a aliquet libero. Etiam gravida in dui id.
            </p>
            <p>
              Alameda Gabriel Monteiro da Silva, 1061 Jardim America, São Paulo
              - SP, 01441-001{' '}
            </p>
            <div
              className={styles.container_content__section5__column1__contact}
            >
              <span>Horário de funcionamento</span>
              <span>
                Segunda a sexta-feira das 10h às 19h Sábado das 10h às 14h
              </span>
            </div>
            <div className={styles.container_content__section5__column1__contact}>
              <span>Atendimento Flagship</span>
              <span>
                55 (11) 3081-5625 <br></br> gms@mekal.com.br
              </span>
            </div>
          </div>
          <div className={styles.container_content__section5__column2}>
            <SlideComeMeet
              imagens={[
                '/images/experienciaMekal/studioMekal/studioMekalFlagship.jpg',
              ]}
            />
          </div>
        </div>
        <div className={styles.container_content__section5}>
          <div className={styles.container_content__section5__column2}>
            <SlideComeMeet
              imagens={[
                '/images/experienciaMekal/studioMekal/studioMekalLeblon.jpg',
              ]}
            />
          </div>
          <div className={styles.container_content__section5__column1}>
            <h2>Studio Mekal Leblon</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac pharetra sem, a aliquet libero. Etiam gravida in dui id.
            </p>
            <p>
              Alameda Gabriel Monteiro da Silva, 1061 Jardim America, São Paulo
              - SP, 01441-001{' '}
            </p>
            <div
              className={styles.container_content__section5__column1__contact}
            >
              <span>Horário de funcionamento</span>
              <span>
                Segunda a sexta-feira das 10h às 19h Sábado das 10h às 14h
              </span>
            </div>
            <div
              className={styles.container_content__section5__column1__contact}
            >
              <span>Atendimento Flagship</span>
              <span>
                55 (11) 3081-5625 <br></br> gms@mekal.com.br
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
