'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'

interface LanguageMenuProps {
  language: 'PT' | 'EN' | 'ES'
}

export default function LanguageMenu() {
  const [language, setLanguage] = useState<LanguageMenuProps['language']>('PT')
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleLanguageChange = (newLanguage: LanguageMenuProps['language']) => {
    if (open) {
      setLanguage(newLanguage)
      setOpen(false)
    }
  }

  const toggleMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current !== event.target) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.container_language_menu}>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className={styles.language_menu__button}
      >
        {language}
      </button>
      <motion.div
        className={styles.language_menu}
        initial={{ opacity: 0, y: -10, height: 0 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        style={{
          pointerEvents: open ? 'all' : 'none'
        }}
      >
        <div
          ref={menuRef}
          className={styles.language_menu__content}
        >
          <button onClick={() => { handleLanguageChange('PT') }}
            className={language === 'PT' ? styles.active : ''}
          >
            <span>PT</span>
            <span>Português</span>
          </button>
          <button onClick={() => { handleLanguageChange('EN') }}
            className={language === 'EN' ? styles.active : ''}
          >
            <span>EN</span>
            <span>English</span>
          </button>
          <button onClick={() => { handleLanguageChange('ES') }}
            className={language === 'ES' ? styles.active : ''}
          >
            <span>ES</span>
            <span>Español</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
