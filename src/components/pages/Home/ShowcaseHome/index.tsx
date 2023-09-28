import React from 'react'
import style from './styles.module.scss'
import { ArrowDown } from '@/icons'
import { motion } from 'framer-motion'

export default function ShowcaseHome() {


  return (
    <section className={style.container_showcase}
    >
      <motion.video
        className={style.showcase__video}
        autoPlay
        muted
        loop
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <source src="/videoHome/videoHome.mp4" type="video/mp4"/>
      </motion.video>
      <div className={style.showcase_content}>
        <motion.div
          className={style.container_showcase__button}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            className={style.showcase_button}
            whileTap={{ y: 0, scale: 0.9 }}
          >
            <ArrowDown />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
          >
            Explore
          </motion.span>
        </motion.div>
        <motion.div
          className={style.showcase_content__text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.p>
            Elegância, História e Arte em uma experiência única.
          </motion.p>
          <motion.h2>
            Originalidade e inovação materializados em aço inox
          </motion.h2>
        </motion.div>
      </div>
    </section>
  )
}
