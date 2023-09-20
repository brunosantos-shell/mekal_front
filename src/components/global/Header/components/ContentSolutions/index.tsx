'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation, type Transition } from 'framer-motion'

import CardSolution from '@/components/global/CardSolution'
import styles from './styles.module.scss'
import { IconArrowDown, IconArrowUp } from '@/icons'

interface ContentSolutionsProps {
  responsive?: number
}


export default function ContentSolutions({
  responsive
}: ContentSolutionsProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [windowWidthSize, setWindowWidthSize] = useState(800)
  const controls = useAnimation()

  const handleScroll = (scrollStep: number) => {
    const maxScroll = windowWidthSize
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

  const handleScrollWheel = (event: { deltaY: number }) => {
    const scrollStep = event.deltaY > 0 ? 350 : -350
    handleScroll(scrollStep)
  }

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setWindowWidthSize(1244)
    }

  }, [])

  return (
    <div className={styles.container_content__solutions}
    onWheel={handleScrollWheel}
    >
      <motion.div
        className={styles.column}
        style={{ y: -scrollPosition }}
        animate={controls}
      >
        <h2>Nossas soluções</h2>
        <CardSolution
          title="Modulados"
          image="/images/highlightsProducts/modulados.jpg"
          alt="Modulados"
          numeric={'02'}
          url="/solucoes/modulares"
          width={
            responsive === 444 ? 284 : 344}
          height={
            responsive === 444 ? 443.75 : 480 }
          responsive
        />
        <CardSolution
          title="Corporativo"
          image="/images/highlightsProducts/corporativo.jpg"
          alt="Corporativo"
          numeric={'04'}
          url="/solucoes/corporativo"
          width={
            responsive === 444 ? 284 : 384 }
          height={
            responsive === 444 ? 284 : 384 }
          responsive
        />
      </motion.div>

      <motion.div
        className={styles.column}
        style={{ y: -scrollPosition }}
        animate={controls}
      >
        <CardSolution
          title="Seriados"
          image="/images/highlightsProducts/seriados.jpg"
          alt="Seriados"
          numeric={'01'}
          url="/solucoes/seriados"
          width={
            responsive === 444 ? 284 : 384 }
          height={
            responsive === 444 ? 284 : 384 }
          responsive
        />

        <CardSolution
          title="Sob medida"
          image="/images/highlightsProducts/sobMedida.jpg"
          alt="Sob medida"
          numeric={'03'}
          url="/solucoes/sob-medida"
          width={
            responsive === 444 ? 284 : 384 }
          height={
            responsive === 444 ? 284 : 384 }
          responsive
        />

        <CardSolution
          title="Arte e Design"
          image="/images/highlightsProducts/arteDesign.jpg"
          alt="Arte e Design"
          numeric={'05'}
          url="/solucoes/arte-e-design"
          width={
            responsive === 444 ? 324 : 424 }
          height={
            responsive === 444 ? 284 : 324}
          responsive
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
