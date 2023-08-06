'use client'

// Componentizar melhor o Header

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import Hamburger from 'hamburger-react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconPlus,
  IconX,
  IconYouTube,
} from '@/icons'
import ContentSolutions from './components/ContentSolutions'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [experienceMekalOpen, setExperienceMekalOpen] = useState(false)
  const [InstitucionalOpen, setInstitucionalOpen] = useState(false)
  const [SuporteOpen, setSuporteOpen] = useState(false)
  const [isRouteChanging, setIsRouteChanging] = useState(false) 
  const [shouldCloseOnRouteChange, setShouldCloseOnRouteChange] =
    useState(false)
  const [previousPathname, setPreviousPathname] = useState('')

  const pathname = usePathname()

  const closeAllItems = () => {
    setSolutionsOpen(false)
    setExperienceMekalOpen(false)
    setInstitucionalOpen(false)
    setSuporteOpen(false)
  }

  const handleCloseMenu = () => {
    closeAllItems()
    setIsMenuOpen(false)
  }

  const toggleExperienceMekal = () => {
    if (experienceMekalOpen) {
      setExperienceMekalOpen(false)
    } else {
      closeAllItems()
      setExperienceMekalOpen(true)
    }
  }

  const toggleSuporte = () => {
    if (SuporteOpen) {
      setSuporteOpen(false)
    } else {
      closeAllItems()
      setSuporteOpen(true)
    }
  }

  const toggleSolutions = () => {
    if (solutionsOpen) {
      setSolutionsOpen(false)
    } else {
      closeAllItems()
      setSolutionsOpen(true)
    }
  }

  const toggleInstitucional = () => {
    if (InstitucionalOpen) {
      setInstitucionalOpen(false)
    } else {
      closeAllItems()
      setInstitucionalOpen(true)
    }
  }

  const handleCloseSolutionsMenu = () => {
    setSolutionsOpen(false)
  }

  const handleToggleMainMenu = () => {
    if (solutionsOpen) {
      handleCloseSolutionsMenu()
    } else {
      setIsMenuOpen((prev) => !prev)
    }
  }

  useEffect(() => {
    handleCloseMenu()
    setShouldCloseOnRouteChange(false)
    setPreviousPathname(pathname)
    setIsRouteChanging(true)
  }, [pathname])

  useEffect(() => {
    if ((previousPathname !== "") && previousPathname !== pathname) {
      setShouldCloseOnRouteChange(true)
    }
  }, [pathname, previousPathname])

  useEffect(() => {
    if (isRouteChanging) {
      setIsMenuOpen(false)
      setIsRouteChanging(false)
    }
  }, [isMenuOpen, isRouteChanging])

  const getMenuDisplay = () => {
    if (isMenuOpen) {
      return 'block' 
    } else if (isRouteChanging && shouldCloseOnRouteChange) {
      return 'none' 
    } else {
      return 'none' 
    }
  }

  return (
    <>
      <motion.header
        id={styles.header}
        className={
          styles.slideIn + ' ' + (isMenuOpen ? styles.header_content__open : '')
        }
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 48, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <div className={styles.header_content}>
          <Hamburger toggled={isMenuOpen} toggle={handleToggleMainMenu} />
          <span className={isMenuOpen ? styles.hidden : ''}>menu</span>
        </div>
      </motion.header>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        className={styles.menu_container}
        animate={{ width: isMenuOpen ? 664 : 0, opacity: isMenuOpen ? 1 : 0 }}
        exit={{
          width: 0,
          opacity: 0,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          display: getMenuDisplay(),
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
      >
        <div className={styles.menu_content}>
          <div className={styles.menu_content__header}>
            <span>Explore</span>
          </div>
          <div className={styles.menu_content__body}>
            <ul>
              <li>
                <span>
                  <Link href="/">Início</Link>
                </span>
              </li>
              <li>
                <span onClick={toggleSolutions}>
                  Soluções
                  <button
                    className={
                      solutionsOpen
                        ? styles.menu_content__body__button__open
                        : styles.menu_content__body__button__close
                    }
                  >
                    {solutionsOpen ? <IconX /> : <IconPlus />}
                  </button>
                </span>
              </li>
              <li>
                <span onClick={toggleExperienceMekal}>
                  Experiência Mekal
                  <button
                    className={
                      experienceMekalOpen
                        ? styles.menu_content__body__button__open
                        : styles.menu_content__body__button__close
                    }
                  >
                    {experienceMekalOpen ? <IconX /> : <IconPlus />}
                  </button>
                </span>
                {experienceMekalOpen && (
                  <motion.div
                    className={styles.submenu_experience_mekal}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <ul>
                      <li>
                        <Link href="/experiencia-mekal/studio-mekal">
                          Studio Mekal
                        </Link>
                      </li>
                      <li>
                        <Link href="/experiencia-mekal/mekal-proxima-de-voce">
                          Mekal próxima de você
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </li>
              <li>
                <span onClick={toggleInstitucional}>
                  Institucional
                  <button
                    className={
                      InstitucionalOpen
                        ? styles.menu_content__body__button__open
                        : styles.menu_content__body__button__close
                    }
                  >
                    {InstitucionalOpen ? <IconX /> : <IconPlus />}
                  </button>
                </span>
                {InstitucionalOpen && (
                  <motion.div
                    className={styles.submenu_experience_mekal}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <ul>
                      <li>
                        <Link href="/institucional/nossa-historia">
                          Nossa História
                        </Link>
                      </li>
                      <li>
                        <Link href="/institucional/codigo-de-etica">
                          Código de Ética
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </li>
              <li>
                <span onClick={toggleSuporte}>
                  Suporte
                  <button
                    className={
                      SuporteOpen
                        ? styles.menu_content__body__button__open
                        : styles.menu_content__body__button__close
                    }
                  >
                    {SuporteOpen ? <IconX /> : <IconPlus />}
                  </button>
                </span>
                {SuporteOpen && (
                  <motion.div
                    className={styles.submenu_experience_mekal}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <ul>
                      <li>
                        <Link href="/suporte/perguntas-frequentes">
                          Perguntas Frequentes
                        </Link>
                      </li>
                      <li>
                        <Link href="/suporte/contato">Contato</Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </li>
              <li>
                <span>
                  <Link href="/acontece">Acontece</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.menu_content__footer}>
            <div>
              <span>© Mekal 2023</span>
              <span>Todos os Direitos Reservados.</span>
            </div>
            <ul className={styles.menu_content__footer__icons}>
              <li>
                <Link href="/">
                  <IconInstagram />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <IconLinkedin />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <IconYouTube />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <IconFacebook />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={styles.solutions_window}
        initial={{
          x: '-100%',
          width: 0,
          height: '100%',
          position: 'fixed',
          opacity: 0,
          zIndex: -1,
          pointerEvents: 'none',
        }}
        animate={{
          x: isMenuOpen && solutionsOpen ? 664 : 0,
          width: isMenuOpen && solutionsOpen ? 'calc(100% - 664px)' : 0,
          opacity: isRouteChanging ? 0 : isMenuOpen && solutionsOpen ? 1 : 0,
          zIndex: isMenuOpen && solutionsOpen ? 10 : 1,
          pointerEvents: isMenuOpen && solutionsOpen ? 'auto' : 'none',
        }}
        exit={{ x: '-100%', width: 0, opacity: 0 }}
        transition={{ duration: isRouteChanging ? 0 : 0.7, ease: 'easeOut' }}
        style={{ display: isMenuOpen && solutionsOpen ? 'block' : 'none' }}
      >
        <div className={styles.solutions_window__content}>
          <ContentSolutions />
        </div>
      </motion.div>
    </>
  )
}
