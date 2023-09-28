import { IconSearch, IconClose, HalfArrow } from '@/icons'
import { useState } from 'react'
import styles from './styles.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

export default function SearchComponentHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.container_search_component_header}>
      <button onClick={toggleMenu} className={styles.search_component_header__button}>
        <IconSearch />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.search_component_header}
            initial={{ opacity: 0, x: 40, width: 0 }}
            animate={{
              opacity: 1,
              x: 0,
              width: '100%',
              zIndex: 995,
              position: 'absolute',
            }}
            exit={{ opacity: 0, x: 40, width: 'auto' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              pointerEvents: 'all',
            }}
          >
            <div className={styles.search_component_header__input}>
              <div className={styles.search_component_header__input__search_input}>
                <HalfArrow />
                <input
                  type="text"
                  placeholder="O que você está procurando"
                ></input>
              </div>
              <div className={styles.search_component_header__input__buttons}>
                <div className={styles.search_component_header__input__buttons__search}>
                  <button>
                    <IconSearch />
                  </button>
                </div>
                <div className={styles.search_component_header__input__buttons__close}>
                  <button onClick={toggleMenu}>
                    <IconClose />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
