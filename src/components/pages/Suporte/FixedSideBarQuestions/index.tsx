'use client'

import styles from './styles.module.scss'
import React, { useState, useEffect, useRef } from 'react'
import SectionQuestionnaire from '../SectionQuestionnaire'

const MockData = [
  {
    id: 'garantia-dos-produtos',
    title: 'Garantia dos produtos',
    questions: [
      {
        question: 'Qual é o prazo de garantia dos produtos Mekal?',
      },
      {
        question: 'Quando é válida a garantia da minha peça?',
      },
      {
        question: 'Como faço para solicitar a garantia da minha peça?',
      },
    ],
  },
  {
    id: 'contato-com-assistencia-tecnica',
    title: 'Contato com assistência técnica',
    questions: [
      {
        question: 'Em caso de defeito de fabricação,o que devo fazer?',
      },
      {
        question:
          'Identifiquei a falta de peças no meu pedido, como posso proceder?',
      },
      {
        question:
          'Como solicitar atendimento de uma assistência técnica autorizada?',
      },
      {
        question:
          'Como agendar atendimento presencial de uma assistência técnica autorizada?',
      },
      {
        question:
          'Como agendar atendimento presencial de uma assistência técnica autorizada?',
      },
    ],
  },
  {
    id: 'armazenamento-e-instalacao',
    title: 'Armazenamento e instalação',
    questions: [
      {
        question: 'Como armazenar minhas peças Mekal antes de instalá-las? ',
      },
      {
        question: 'Quais cuidados devo ter durante o período de obras?',
      },
      {
        question:
          'O que é e para que serve a película protetora de cor amarela?',
      },
      {
        question:
          'Quando devo retirar a película protetora amarela da minha peça Mekal?',
      },
      {
        question: 'Como tirar a película protetora amarela?',
      },
      {
        question:
          'Retirei a película protetora amarela e minha peça está com manchas, o que fazer?',
      },
      {
        question: 'Como faço a instalação da minha peça Mekal?',
      },
      {
        question:
          'Como faço para contratar o serviço de um instalador especializado Mekal?',
      },
      {
        question:
          'Quais são os tipos de instalação das cubas Mekal? Quais as diferenças entre elas?',
      },
      {
        question:
          'Comprei uma cuba Mekal que não veio com válvula de saída de água. Por quê?',
      },
      {
        question:
          'Como saber qual tipo de válvula de saída de água é a mais adequada para a minha cuba?',
      },
      {
        question:
          'Minha cuba está com vazamento na parte externa. Como devo proceder?',
      },
      {
        question:
          'Minha cuba veio acompanhada de alguns parafusos na embalagem. O que são e para que servem estes parafusos?',
      },
      {
        question: 'Todas as peças Mekal acompanham grapas?',
      },
      {
        question:
          'As grapas podem ser removidas e descartadas sem a necessidade de serem instaladas?',
      },
      {
        question: 'Perdi meu kit de grapas. O que eu faço?',
      },
    ],
  },
  {
    id: 'materia-prima',
    title: 'Matéria prima',
    questions: [
      {
        question: 'O que é aço inox 304?',
      },
      {
        question: 'Aço inox 304 enferruja?',
      },
      {
        question:
          'Minhas peças Mekal estão em uma casa no litoral. A maresia pode estragar o aço inox?',
      },
      {
        question:
          'Gostaria de instalar uma cuba de cozinha no meu banheiro. O vapor do chuveiro pode danificar a cuba?',
      },
      {
        question:
          'Quais são os tipos de acabamento nas cubas e pias Mekal? Quais as diferenças entre elas?',
      },
      {
        question:
          'Posso colocar uma panela quente na superfície da minha cuba ou bancada de inox?',
      },
      {
        question: 'Posso descongelar alimentos dentro da cuba da Mekal?',
      },
      {
        question:
          'Coloquei gelo ou alimentos para descongelar na cuba e agora ela está condensando (suando). O que faço?',
      },
      {
        question:
          'Posso transformar minha cuba da Mekal em um local para gelar bebidas?',
      },
      {
        question:
          'Costumo usar facas pesadas na minha cozinha. O que acontece se uma delas cair de ponta em uma cuba da Mekal? A cuba irá furar?',
      },
      {
        question: 'O aço inox mata bactéria?',
      },
      {
        question: 'A cuba de inox polida pode perder o brilho?',
      },
      {
        question: 'A cuba de inox pode mudar de cor:esbranquiçar ou escurecer?',
      },
    ],
  },
  {
    id: 'limpeza-e-manutencao',
    title: 'Limpeza e manutenção',
    questions: [
      {
        question:
          'Posso usar ácido muriático para limpeza das cubas e pias Mekal?',
      },
      {
        question: 'Posso usar palha de aço para limpar minha peça Mekal?',
      },
      {
        question:
          'Quais produtos posso utilizar para limpeza de cubas e pias Mekal em aço polido?',
      },
      {
        question:
          'Quais produtos utilizar para a limpeza de cubas e pias Mekal em aço escovado?',
      },
      {
        question: 'Quais substâncias podem agredir a minha peça Mekal?',
      },
    ],
  },
]

export default function FixedSideBarQuestions() {
  const [menuFixed, setMenuFixed] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState(null as string | null)
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
  }
  

  return (
    <section className={styles.container} ref={componentRef}>
      {menuFixed && <div className={styles.menuPlaceholder} />}
      <div className={`${styles.menu} ${menuFixed ? styles.fixedMenu : ''}`}>
        <ul>
          <li
            className={
              activeMenuItem === 'garantia-dos-produtos' ? styles.active : ''
            }
            onClick={() => {
              handleMenuItemClick('garantia-dos-produtos')
            }}
          >
            Garantia dos produtos
          </li>
          <li
            className={
              activeMenuItem === 'contato-com-assistencia-tecnica'
                ? styles.active
                : ''
            }
            onClick={() => {
              handleMenuItemClick('contato-com-assistencia-tecnica')
            }}
          >
            
              Contato com assistência técnica
           
          </li>
          <li
            className={
              activeMenuItem === 'armazenamento-e-instalacao'
                ? styles.active
                : ''
            }
            onClick={() => {
              handleMenuItemClick('armazenamento-e-instalacao')
            }}
          >
            Armazenamento e Instalação
          </li>
          <li
            className={activeMenuItem === 'materia-prima' ? styles.active : ''}
            onClick={() => {
              handleMenuItemClick('materia-prima')
            }}
          >
          Matéria Prima
          </li>
          <li
            className={
              activeMenuItem === 'limpeza-e-manutencao' ? styles.active : ''
            }
            onClick={() => {
              handleMenuItemClick('limpeza-e-manutencao')
            }}
          >
           Limpeza e Manutenção
          </li>
        </ul>
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
              <h3>{item.title}</h3>

              <SectionQuestionnaire
                title={item.title}
                questions={item.questions}
                id={item.id}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
