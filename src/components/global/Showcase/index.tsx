'use client'

import Image from 'next/image'
import React from 'react'

import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import Button from '../Button'

import { IconDowload } from '@/icons'

interface ShowcaseProps {
  title: string
  image: string
  catalog: boolean
  category: string
  customStyles?: React.CSSProperties
  institutionals?: boolean
  customPosition?: number
}

const Showcase: React.FC<ShowcaseProps> = ({
  title,
  image,
  catalog,
  category,
  customStyles,
  institutionals,
  customPosition
}) => {
  return (
    <section className={styles.container_showcase} style={customStyles}>
      <motion.div
        className={styles.hero_image}
        /* initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }} */
      >
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{
            objectPosition: customPosition ? `50% ${customPosition}%` : '50% 50%'
          }}
        />
        <div className={styles.filter}></div>
      </motion.div>
      <div className={styles.showcase_content}>
        <motion.div
          className={
            styles.showcase_content__text +
            ' ' +
            (institutionals ? styles.institutionals : '') + (catalog ? styles.catalog : '')

          }
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div
            className={
              styles.showcase_title
            }
          >
            <p>{category.replace(/-/g, ' ')}</p>
            <h2>{title}</h2>
          </div>
        </motion.div>
        <motion.div
          className={styles.container_showcase__button}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          {catalog && (
            <Button
              inverted
              onClick={() => {
                console.log('Clicou')
              }}
            >
              Baixar catálogo
              <IconDowload />
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Showcase
