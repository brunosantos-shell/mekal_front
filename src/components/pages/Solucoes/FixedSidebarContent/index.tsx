'use client'

import styles from './styles.module.scss'
import React, { useState, useEffect, useRef } from 'react'
import CardArtistDesign from '../CardArtistDesign'
import {ArrowDownAcordion,ArrowUpAcrodion} from '@/icons'

const MockData = [
  {
    id: 'juliana-vasconcellos',
    name: 'Juliana Vasconcellos',
    image: '/images/artist/julianaVasconcellos/juliana-vasconcellos.jpg',
    description: `Uma combinação balanceada assimétrica de formas curvas em aço inox escovado e polido transforma a linha Ghost em camaleão, refletindo levemente as cores do ambiente. Inspirada pelo futurismo dos anos 60 e 70, a arquiteta e designer Juliana Vasconcellos desenhou peças que conectam passado, presente e futuro.
                  Os móveis Aparador e Mesa de Centro Ghost foram apresentados pela primeira vez durante a Mostra Black, em 2015, sendo um dos destaques na decoração de um ambiente composto por móveis futuristas. A linha faz parte do momento de estreia de Juliana Vasconcellos como designer, ao lado de Matheus Barreto`,
    allbum: [
      {
        name: 'APARADOR E MESA DE CENTRO GHOST',
        image:
          '/images/artist/julianaVasconcellos/allbum/aparador-e-mesa-de-centro-ghost.jpg',
      },
    ],
  },
  {
    id: 'ronald-sasson',
    name: 'Ronald Sasson',
    image: '/images/artist/ronaldSasson/ronald-sasson.jpg',
    description: `A poltrona NIN homenageia a pensadora e escritora francesa Anaïs Nin. De acordo com o designer Ronald Sasson, a inspiração para a peça veio por ele se identificar com Nin e suas ideias. O mobiliário apresenta em sua forma características da arquitetura expressionista alemã, além de uma orgânica de ponta a ponta.
                  Ao todo foram produzidos sete exemplares em inox Mekal, com primor industrial alinhado ao DNA de arte e design da marca.`,
    allbum: [
      {
        name: 'POLTRONA NIN',
        image: '/images/artist/ronaldSasson/allbum/poltrona-min.jpg',
      },
    ],
  },
  {
    id: 'dror-benshetrit',
    name: 'Dror Benshetrit',
    image: '/images/artist/drorBenshetrit/dror-benshetrit.jpg',
    description: `Batizada de REACH, a escultura fabricada pela Mekal lembra uma enorme escada, de 5 metros de altura, a céu aberto e consiste em 15 peças que têm como base o sistema QuaDror - estrutura criada por Dror que se adapta à uma grande variedade de funções, soluções e configurações, em diversas escalas, feito a partir de quatro módulos idênticos em forma de L.
                  Essa obra de arte, resultado da parceria entre Mekal e o designer israelense, foi doada para a “Casa da Criança Amor & Arte” em Jataí (GO), um centro de arte educacional e esportivo construído pela ONG americana Love & Art Childrens Foundation, que realiza trabalhos sociais com crianças através da arte. A ONG já atua em Los Angeles, Paris, Rússia e apresenta trabalhos realizados por crianças brasileiras em situação de vulnerabilidade social.`,
    allbum: [
      {
        name: 'ESCULTURA REACH',
        image: '/images/artist/drorBenshetrit/allbum/escultura-reach.jpg',
      },
    ],
  },
  {
    id: 'marko-brajovic',
    name: 'Marko Brajovic',
    image: '/images/artist/markoBrajovic/marko-brajovic.jpg',
    description: `Desenvolvido pelo Atelier Marko Brajovic, com curadoria do Coletivo Amor de Madre, o projeto ¨Passeando de bicicleta, reconheci São Paulo¨ promove a instalação de bicicletários pela cidade de São Paulo. Artesanalmente fabricadas pela Mekal, estas peças estão sendo instaladas em vários pontos da cidade e trazem no conjunto assentos (que têm desenhados o mapa da cidade), servindo tanto para as bicicletas quanto para os pedestres.
                  ¨Passeando de bicicleta, reconheci São Paulo¨ pensa o design como ferramenta fundamental para a melhoria da qualidade de vida nas cidades, propondo a melhoria e conscientização da mobilidade urbana, com o objetivo de revelar territórios urbanos, suas formas de apropriação e contribuição à construção da paisagem da cidade.`,
    allbum: [
      {
        name: 'BICICLETÁRIO “PASSEANDO DE BICICLETA, RECONHECI SÃO PAULO”',
        image:
          '/images/artist/markoBrajovic/allbum/bicicletario-passeando-de-bicicleta-reconheci-sao-paulo.jpg',
      },
    ],
  },
  {
    id: 'luciana-martins-e-gerson-de-oliveira',
    name: 'Luciana Martins e Gerson de Oliveira (Ovo)',
    image:
      '/images/artist/lucianaMartinsEGersonDeOliveira/luciana-martins-e-gerson-de-oliveira.jpg',
    description: `A obra Serpentina, assinada por Luciana Martins e Gerson de Oliveira (OVO), representa uma espiral quadrada que gradualmente assume formas circulares, com anéis mais espaçados, mudando de um banco para um bicicletário.
                  O mobiliário urbano, produzido em aço inox Mekal, fez parte do projeto Bike Points para a Design Weekend 2015 e SP-Arte 2016.`,
    allbum: [
      {
        name: 'BANCO E BICICLETÁRIO SERPENTINA',
        image:
          '/images/artist/lucianaMartinsEGersonDeOliveira/allbum/banco-e-bicicletario-serpentina.jpg',
      },
    ],
  },
  {
    id: 'carol-gay',
    name: 'Carol Gay',
    image: '/images/artist/carolGay/carol-gay.jpg',
    description: `A peça surgiu da experimentação durante o processo artesanal de sopro do vidro e o questionamento sobre a forma de produzir vidros em série.
                  A ideia foi intervir na forma redonda resultante do sopro do artesão, desafiando os limites de deformação do vidro. A deformação da bola é resultado da interferência de um molde externo em formato de “V”.
                  Na repetição, como o molde é externo, cada peça adquire um caráter único. Uma base em aço inox escovado da Mekal é usada posteriormente para suspender o vidro, permitindo assim, a estabilidade da peça e conservando a forma resultante do diálogo com o mestre vidreiro.
                  O resultado são peças únicas, onde peso, leveza e transparência são características contrastantes.
    `,
    allbum: [
      {
        name: 'VASO BOLA',
        image: '/images/artist/carolGay/allbum/vaso-bola.jpg',
      },
    ],
  },
  {
    id: 'rodrigo-ohtake',
    name: 'Rodrigo Ohtake',
    image: '/images/artist/rodrigoOhtake/rodrigo-ohtake.jpg',
    description: `A obra Serpentina, assinada por Luciana Martins e Gerson de Oliveira (OVO), representa uma espiral quadrada que gradualmente assume formas circulares, com anéis mais espaçados, mudando de um banco para um bicicletário.
                  O mobiliário urbano, produzido em aço inox Mekal, fez parte do projeto Bike Points para a Design Weekend 2015 e SP-Arte 2016.`,
    allbum: [
      {
        name: 'POLTRONA E MESA DE CENTRO POUSO',
        image:
          '/images/artist/rodrigoOhtake/allbum/poltrona-e-mesa-de-centro-pouso.jpg',
      },
    ],
  },
  {
    id: 'guilherme-torres',
    name: 'Guilherme Torres',
    image: '/images/artist/guilhermeTorres/guilherme-torres.jpg',
    description: `A referência para a criação da Mesa de Jantar Jet veio de um objeto comum da construção civil, uma desempenadeira. Guilherme Torres percebeu ali o potencial para a criação de uma mesa de formas marcantes, arredondadas e com uma influência futurista do clássico desenho animado de Hanna Barbera, os Jetsons, sucesso dos anos 70.
                  Para comemorar o aniversário de 10 anos da sua criação, o arquiteto e designer preparou uma amostra especial com versões da mesa em diferentes materiais. A Mekal foi responsável pela produção da JET Steel, peça única fabricada em aço inox especialmente para a celebração.`,
    allbum: [
      {
        name: 'MESA DE JANTAR JET STEEL',
        image:
          '/images/artist/guilhermeTorres/allbum/mesa-de-jantar-jet-steel.jpg',
      },
    ],
  },
  {
    id: 'fernanda-marques',
    name: 'Fernanda Marques',
    image: '/images/artist/fernandaMarques/fernanda-marques.jpg',
    description: `Os Bancos Organic e Geomorph fazem parte de um sistema de assentos, que parte das reflexões da arquiteta Fernanda Marques sobre a arte cinética, se prolongando através do espaço, a partir da utilização de uma ou mais unidades.
                  Concebidos como uma peça única, cada um dos componentes se encaixa, por meio de suas linhas sinuosas ou facetadas, às suas unidades anterior e posterior, incorporando assim a ideia de movimento e continuidade ao desenho final. Graças à sua constituição, o móvel pode ser usado dentro ou fora da casa, abolindo fronteiras entre interior e exterior.`,
    allbum: [
      {
        name: 'BANCO ORGANIC E BANCO GEOMORPH',
        image:
          '/images/artist/fernandaMarques/allbum/banco-organic-e-banco-geomorph.jpg',
      },
    ],
  },
  {
    id: 'ruy-ohtake',
    name: 'Ruy Ohtake',
    image: '/images/artist/ruyOhtake/ruy-ohtake.jpg',
    description: `A peça Mesa Sinfonia fez parte da exposição "Ruy Ohtake: imprevisibilidades, desenho e mobiliário", estando disponível no Instituto Tomie Ohtake durante a Design Weekend de 2015.
                  Segundo Ruy Ohtake, a superposição das curvas provoca um movimento sinfônico, enriquecido com luz e sombra, vigor ou suavidade, o dia ou a noite. Perceber ricas situações diferentes de uma mesma obra é a beleza da arquitetura.`,
    allbum: [
      {
        name: 'MESA SINFINIA',
        image: '/images/artist/ruyOhtake/allbum/mesa-sinfonia.jpg',
      },
    ],
  },
  {
    id: 'zanini-de-zanine',
    name: 'Zanini de Zanine',
    image: '/images/artist/zaniniDeZanine/zanini-de-zanine.jpg',
    description: `Utilizando o aço inox, o designer usa toda sua experiência e cria um mobiliário criativo, inovador e diferenciado. Para quem duvida de que o material possa ser usado para ganhar proporções artísticas, os bancos Prisma, Revisteiro e Bar mostram o contrário.
                  As principais inspirações do artista ao criar os bancos foram alguns dos grandes nomes da escultura brasileira, como Franz Weissmann – escultor austríaco radicado no Rio de Janeiro – e Amílcar de Castro. A Mekal, dessa forma, desenvolveu cada detalhe destas obras de arte, desde a escolha da melhor matéria-prima até o processo de produção, no melhor estilo handmade.
                  O resultado deste trabalho minucioso e detalhado é uma peça única, com acabamento exclusivo, feita para o consumidor mais exigente.`,
    allbum: [
      {
        name: 'BANCO PRISMA, BANCO BAR E BANCO REVISTEIRO',
        image:
          '/images/artist/zaniniDeZanine/allbum/banco-prisma-banco-bar-e-banco-revisteiro.jpg',
      },
    ],
  },
  {
    id: 'giacomo-tomazzi',
    name: 'Giácomo Tomazzi',
    image: '/images/artist/giacomoTomazzi/giacomo-tomazzi.jpg',
    description: `Meraki é uma palavra de origem grega que significa deixar um pedaço de si mesmo, uma parte da sua alma, em tudo o que você faz, com a ideia de colocar um pouco de sentimento em cada detalhe, com profundidade e dedicação.
                  Dentro desse conceito, o designer Giácomo Tomazzi e a Mekal desenvolveram em conjunto a Coleção Cápsula Meraki, composta pelas peças Mesas de Centro e Apoio Juca e o Banco Luzia, onde a sustentabilidade dos materiais empregados e a valorização do trabalho artesanal em sua confecção se tornam os pilares do projeto.
                  As peças, que evocam pureza estética, são compostas por elementos bem definidos, com aplicação de materiais contrastantes e de naturezas opostas. Há sempre a intenção de promover encontros antagônicos, como quente - frio, liso – áspero, passado - futuro, tecnológico – artesanal. Os materiais naturais empregados contracenam com o aço inox da Mekal, que também é trabalhado em diversas etapas artesanais e traz em sua composição 70% de matéria-prima reciclada.`,
    allbum: [
      {
        name: 'COLEÇÃO CÁPSULA MERAKI',
        image:
          '/images/artist/giacomoTomazzi/allbum/colecao-capsula-meraki.jpg',
      },
    ],
  },
  {
    id: 'maneco-quindere-e-paulo-alves',
    name: 'Maneco Quinderé e Paulo Alves',
    image:
      '/images/artist/manecoQuindereEPauloAlves/maneco-quindere-e-paulo-alves.jpg',
    description: `A Mekal foi convidada pelo light designer Maneco Quinderé e pelo designer Paulo Alves para produzir versões em aço inox das Luminárias Branche e Jabuticaba.
                  O conceito das peças vem diretamente da inspiração na natureza, da leveza e fragilidade dos galhos mais finos das árvores, que enfrentam fortes ventos e se mostram resistentes quando comparados aos galhos e troncos mais grossos.
                  As peças únicas foram produzidas para compor o acervo da coleção colaborativa dos artistas, exposta durante a 12ª edição da feira SP-Arte.`,
    allbum: [
      {
        name: 'LUMINÁRIAS BRANCHE E JABUTICABA',
        image:
          '/images/artist/manecoQuindereEPauloAlves/allbum/luminarias-branche-e-jabuticaba.jpg',
      },
    ],
  },
]

export default function FixedSidebarContent() {
  const [menuFixed, setMenuFixed] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState(null as string | null)
  const [isOpen, setIsOpen] = useState(false)
  const componentRef = useRef<HTMLDivElement | null>(null)
  const lastContentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current && lastContentRef.current) {
        const componentTop = componentRef.current.getBoundingClientRect().top
        const footerElement = document
          .getElementsByTagName('footer')[0]
          .getBoundingClientRect().top

        if (componentTop <= 0 && footerElement > window.innerHeight) {
          setMenuFixed(true)
        } else {
          setMenuFixed(false)
        }

        const contentDivs = document.querySelectorAll(
          `.${styles.content_autor}`
        )

        let closestSection = null
        let closestDistance = Infinity

        contentDivs.forEach((div) => {
          const divTop = div.getBoundingClientRect().top
          const distance = Math.abs(divTop - window.innerHeight / 2)

          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = div.id
          }
        })

        if (closestSection !== null) {
          setActiveMenuItem(closestSection)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMenuItemClick = (id: string) => {
    setActiveMenuItem(id)

    const targetElement = document.getElementById(id)

    if (targetElement) {
      const targetOffset = targetElement.getBoundingClientRect().top - 75

      window.scrollTo({
        top: window.scrollY + targetOffset,
        behavior: 'smooth',
      })
    }

    const menuMobile = document.getElementById('menuMobile')

    if (menuMobile) {
      toggleAccordion()
    }
  }

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }


  return (
    <section className={styles.container} ref={componentRef}>
      {menuFixed && <div className={styles.menuPlaceholder} />}
      <div className={`${styles.menu} ${menuFixed ? styles.fixedMenu : ''}`}>
        <ul 
          className={styles.menuMobileList}
        >
          <li
            className={
              activeMenuItem === 'juliana-vasconcellos' ? styles.active : ''
            }
            onClick={() => {
              handleMenuItemClick('juliana-vasconcellos')
            }}
          >
            JULIANA VASCONCELLOS
          </li>
          <li
            className={activeMenuItem === 'ronald-sasson' ? styles.active : ''}
            onClick={() => {
              handleMenuItemClick('ronald-sasson')
            }}
          >
            RONALD SASSON
          </li>
          <li
            className={
              activeMenuItem === 'dror-benshetrit' ? styles.active : ''
            }
            onClick={() => {
              handleMenuItemClick('dror-benshetrit')
            }}
          >
            DROR BENSHETRIT
          </li>
          <li
            className={activeMenuItem === 'marko-brajovic' ? styles.active : ''}
            onClick={() => {
              handleMenuItemClick('marko-brajovic')
            }}
          >
            MARKO BRAJOVIC
          </li>
          <li
            className={
              activeMenuItem === 'luciana-martins-e-gerson-de-oliveira'
                ? styles.active
                : ''
            }
            onClick={() => {
              handleMenuItemClick('ovo')
            }}
          >
            OVO
          </li>
          <li
            className={activeMenuItem === 'carol-gay' ? styles.active : ''}
            onClick={() => {
              handleMenuItemClick('carol-gay')
            }}
          >
            CAROL GAY
          </li>
          <li
            className={activeMenuItem === 'rodrigo-ohtake' ? styles.active : ''}
            onClick={() => {
              handleMenuItemClick('rodrigo-ohtake')
            }}
          >
            RODRIGO OHTAKE
          </li>
          <li
            className={
              activeMenuItem === 'guilherme-torres' ? styles.active : ''
            }
            onClick={() => {
              handleMenuItemClick('guilherme-torres')
            }}
          >
            GUILHERME TORRES
          </li>
          <li
            className={
              activeMenuItem === 'fernanda-marques' ? styles.active : ''
            }
            onClick={() => {
              handleMenuItemClick('fernanda-marques')
            }}
          >
            FERNANDA MARQUES
          </li>
          <li
            className={activeMenuItem === 'ruy-ohtake' ? styles.active : ''}
            onClick={() => {
              handleMenuItemClick('ruy-ohtake')
            }}
          >
            RUY OHTAKE
          </li>
          <li
            className={
              activeMenuItem === 'zanini-de-zanine' ? styles.active : ''
            }
            onClick={() => {
              handleMenuItemClick('zanini-de-zanine')
            }}
          >
            ZANINI DE ZANINE
          </li>
          <li
            className={
              activeMenuItem === 'giacomo-tomazzi' ? styles.active : ''
            }
            onClick={() => {
              handleMenuItemClick('giacomo-tomazzi')
            }}
          >
            GIÁCOMO TOMAZZI
          </li>
          <li
            className={
              activeMenuItem === 'maneco-quindere-e-paulo-alves'
                ? styles.active
                : ''
            }
            onClick={() => {
              handleMenuItemClick('maneco-quindere-e-paulo-alves')
            }}
          >
            MANECO QUINDERÉ E PAULO ALVES
          </li>
        </ul>
      </div>
        <div  id="menuMobile" className={`${styles.menuMobile} ${menuFixed ? styles.fixedMenu : ''}`}>
        <div className={styles.menuMobileButton} onClick={toggleAccordion}>
          <p>Navegue pelos Designers e Arquitetos</p>
          {isOpen ? <ArrowUpAcrodion /> : <ArrowDownAcordion /> }
        </div>

          {isOpen && (
            <div
            className={`${styles.menuMobileContent} ${isOpen ? styles.open : ''}`}
          >
            <ul
              className={styles.menuMobileList}
            >
              <li
                className={
                  activeMenuItem === 'juliana-vasconcellos' ? styles.active : ''
                }
                onClick={() => {
                  handleMenuItemClick('juliana-vasconcellos')
                }}
              >
                JULIANA VASCONCELLOS
              </li>
              <li
                className={
                  activeMenuItem === 'ronald-sasson' ? styles.active : ''
                }
                onClick={() => {
                  handleMenuItemClick('ronald-sasson')
                }}
              >
                RONALD SASSON
              </li>
              <li
                className={
                  activeMenuItem === 'dror-benshetrit' ? styles.active : ''
                }
                onClick={() => {
                  handleMenuItemClick('dror-benshetrit')
                }}
              >
                DROR BENSHETRIT
              </li>
              <li
                className={
                  activeMenuItem === 'marko-brajovic' ? styles.active : ''
                }
                onClick={() => {
                  handleMenuItemClick('marko-brajovic')
                }}
              >
                MARKO BRAJOVIC
              </li>
              <li
                className={
                  activeMenuItem === 'luciana-martins-e-gerson-de-oliveira'
                    ? styles.active
                    : ''
                }
                onClick={() => {
                  handleMenuItemClick('ovo')
                }}
              >
                OVO
              </li>
              <li
                className={activeMenuItem === 'carol-gay' ? styles.active : ''}
                onClick={() => {
                  handleMenuItemClick('carol-gay')
                }}
              >
                CAROL GAY
              </li>
              <li
                className={
                  activeMenuItem === 'rodrigo-ohtake' ? styles.active : ''
                }
                onClick={() => {
                  handleMenuItemClick('rodrigo-ohtake')
                }}
              >
                RODRIGO OHTAKE
              </li>
              <li
                className={
                  activeMenuItem === 'guilherme-torres' ? styles.active : ''
                }
                onClick={() => {
                  handleMenuItemClick('guilherme-torres')
                }}
              >
                GUILHERME TORRES
              </li>
              <li
                className={
                  activeMenuItem === 'fernanda-marques' ? styles.active : ''
                }
                onClick={() => {
                  handleMenuItemClick('fernanda-marques')
                }}
              >
                FERNANDA MARQUES
              </li>
              <li
                className={activeMenuItem === 'ruy-ohtake' ? styles.active : ''}
                onClick={() => {
                  handleMenuItemClick('ruy-ohtake')
                }}
              >
                RUY OHTAKE
              </li>
              <li
                className={
                  activeMenuItem === 'zanini-de-zanine' ? styles.active : ''
                }
                onClick={() => {
                  handleMenuItemClick('zanini-de-zanine')
                }}
              >
                ZANINI DE ZANINE
              </li>
              <li
                className={
                  activeMenuItem === 'giacomo-tomazzi' ? styles.active : ''
                }
                onClick={() => {
                  handleMenuItemClick('giacomo-tomazzi')
                }}
              >
                GIÁCOMO TOMAZZI
              </li>
              <li
                className={
                  activeMenuItem === 'maneco-quindere-e-paulo-alves'
                    ? styles.active
                    : ''
                }
                onClick={() => {
                  handleMenuItemClick('maneco-quindere-e-paulo-alves')
                }}
              >
                MANECO QUINDERÉ E PAULO ALVES
              </li>
            </ul>
          </div>
          )}
        
        </div>
      
      <div
        className={`${styles.content} ${menuFixed ? styles.contentFixed : ''}`}
      >
        {MockData.map((item, index) => {
          const isLastContent = index === MockData.length - 1

          return (
            <div
              id={item.id}
              className={styles.content_autor}
              key={index}
              ref={isLastContent ? lastContentRef : null}
            >
              <CardArtistDesign
                name={item.name}
                image={item.image}
                description={item.description}
                album={item.allbum}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
