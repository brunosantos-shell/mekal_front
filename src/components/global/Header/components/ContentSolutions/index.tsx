'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation, type Transition } from 'framer-motion'

import CardSolution from '@/components/global/CardSolution'
import styles from './styles.module.scss'
import { IconArrowDown, IconArrowUp } from '@/icons'

export default function ContentSolutions() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const controls = useAnimation()

  const handleScroll = (scrollStep: number) => {
    const maxScroll = 1024
    const newScrollPosition = Math.min(
      Math.max(0, scrollPosition + scrollStep),
      maxScroll
    )
    setScrollPosition(newScrollPosition)
  }

  const handleScrollUp = () => {
    handleScroll(-350)
  }

  const handleScrollDown = () => {
    handleScroll(350)
  }

  const animationConfig: Transition = {
    type: 'spring',
    damping: 30,
    stiffness: 150,
  }

  useEffect(() => {
    void controls.start({ y: -scrollPosition }, animationConfig)
  }, [scrollPosition, controls])

  return (
    <div className={styles.container_content__solutions}>
      <motion.div
        className={styles.column}
        style={{ y: -scrollPosition }}
        animate={controls}
      >
        <h2>Nossas soluções</h2>
        <CardSolution
          title="Modulados"
          type="modulados"
          image="/images/highlightsProducts/modulados.jpg"
          alt="Modulados"
          numeric={'02'}
          url="/solucoes/modulares"
        />
        <CardSolution
          title="Corporativo"
          type="corporativo"
          image="/images/highlightsProducts/corporativo.jpg"
          alt="Corporativo"
          numeric={'04'}
          url="/solucoes/corporativo"
        />
      </motion.div>

      <motion.div
        className={styles.column}
        style={{ y: -scrollPosition }}
        animate={controls}
      >
        <CardSolution
          title="Seriados"
          type="seriados"
          image="/images/highlightsProducts/seriados.jpg"
          alt="Seriados"
          numeric={'01'}
          url="/solucoes/seriados"
        />

        <CardSolution
          title="Sob medida"
          type="sob-medida"
          image="/images/highlightsProducts/sobMedida.jpg"
          alt="Sob medida"
          numeric={'03'}
          url="/solucoes/sob-medida"
        />

        <CardSolution
          title="Arte e Design"
          type="art-e-design"
          image="/images/highlightsProducts/arteDesign.jpg"
          alt="Arte e Design"
          numeric={'05'}
          url="/solucoes/arte-e-design"
        />
      </motion.div>

      <div className={styles.container_btns}>
        <button onClick={handleScrollUp}>
          <IconArrowUp />
        </button>
        <button onClick={handleScrollDown}>
          <IconArrowDown />
        </button>
      </div>
    </div>
  )
}
