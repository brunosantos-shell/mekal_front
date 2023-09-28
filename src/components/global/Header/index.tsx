'use client'

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import Hamburger from 'hamburger-react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'


import {
  ArrowLeft,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconPlus,
  IconX,
  IconYouTube,
  MekalLogo,
} from '@/icons'
import ContentSolutions from './components/ContentSolutions'
import HighlightsProducs from '@/components/pages/Home/HighlightsProducts'
import useWindowResize from '@/utils/ResizeListener'
import SearchComponentHeader from '../SearchComponentHeader'

interface LanguageMenuProps {
  language: 'PT' | 'EN' | 'ES'
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [experienceMekalOpen, setExperienceMekalOpen] = useState(false)
  const [InstitucionalOpen, setInstitucionalOpen] = useState(false)
  const [SuporteOpen, setSuporteOpen] = useState(false)
  const [isRouteChanging, setIsRouteChanging] = useState(false) 
  const [language, setLanguage] = useState<LanguageMenuProps['language']>('PT')

  const [windowWidthSize, setWindowWidthSize] = useState(644)

  const pathname = usePathname()

  const { width } = useWindowResize()

  const handleLanguageChange = (newLanguage: LanguageMenuProps['language']) => {
      setLanguage(newLanguage)
    
  }

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
    setIsRouteChanging(true)
  }, [pathname])


  useEffect(() => {
    if (isRouteChanging) {
      setIsMenuOpen(false)
      setIsRouteChanging(false)
    }
  }, [isMenuOpen, isRouteChanging])

  useEffect(() => {
    const handleResize = () => {

      if (width) {
        if (width <= 1440) {
          setWindowWidthSize(444)
        } else {
          setWindowWidthSize(644)
        }
      }
      
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width])

  return (
    <header>
    <div
      className={styles.header__desktop}
    >
      <motion.header
        id={styles.header}
        className={
          styles.slideIn + ' ' + (isMenuOpen ? styles.header_content__open : '')
        }
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 48, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        
        
      >
        <div className={styles.header_content}>
          <Hamburger toggled={isMenuOpen} toggle={handleToggleMainMenu} />
          <span className={isMenuOpen ? styles.hidden : ''}>menu</span>
        </div>
      </motion.header>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        className={styles.menu_container}
        animate={{
          width: isMenuOpen ? windowWidthSize : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        exit={{
          width: 0,
          opacity: 0,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
         /*  display: getMenuDisplay(), */
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
                        <Link href="/suporte/fale-conosco">Contato</Link>
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
          x: isMenuOpen && solutionsOpen ? windowWidthSize : 0,
          width: isMenuOpen && solutionsOpen ? `calc(100% - ${windowWidthSize}px)` : 0,
          opacity: isRouteChanging ? 0 : isMenuOpen && solutionsOpen ? 1 : 0,
          zIndex: isMenuOpen && solutionsOpen ? 999 : 1,
          pointerEvents: isMenuOpen && solutionsOpen ? 'auto' : 'none',
        }}
        exit={{ x: '-100%', width: 0, opacity: 0 }}
        transition={{ duration: isRouteChanging ? 0 : 1, ease: 'easeInOut' }}
      >
        <div className={styles.solutions_window__content}>
          <ContentSolutions 
            responsive={windowWidthSize}
          />
        </div>
      </motion.div>
    </div>

    <div
      className={styles.header__mobile}
    >
      <div className={styles.header_content__mobile}>
        <div className={styles.header_content_menu_mobile}>
          <Hamburger
            toggled={isMenuOpen}
            toggle={handleToggleMainMenu}
            size={24}
          />
        </div>

        <div className={styles.header_content_logo__mobile}>
          <MekalLogo />
        </div>

        <div className={styles.header_content_search__mobile}>
          <SearchComponentHeader />
        </div>
      </div>

      <motion.div
        className={styles.mobile_menu_container}
        initial={{ opacity: 0, y: -100, height: 0, zIndex: 998, backgroundColor: '#fff' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -100,
          height: isMenuOpen ? '100vh' : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          position: isMenuOpen ? 'fixed' : 'absolute',
        }}
        exit={{
          opacity: 0,
          y: -100,
          height: 0,
          transition: { duration: 0.7, ease: 'easeOut' },
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
                        <Link href="/suporte/fale-conosco">Contato</Link>
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
            <div
              className={styles.menu_content__footer__languages}
              style={{
                flexDirection: 'row',
                gap: '12px'
              }}
            >
              <button
                className={
                  language === 'PT'
                    ? styles.active : ''
                }
                onClick={() => {
                  handleLanguageChange('PT')
                }}
              >PT</button>
              <button
                className={
                  language === 'EN'
                    ? styles.active : ''
                }
                onClick={() => {
                  handleLanguageChange('EN')
                }}
              >EN</button>
              <button
                className={
                  language === 'ES'
                    ? styles.active : ''
                }
                onClick={() => {
                  handleLanguageChange('ES')
                }}
              >ES</button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={styles.solutions_menu_container}
        initial={{
          x: '100%', 
          transformOrigin: 'right center',
          width: 0,
          opacity: 0,
          right: 0,
          zIndex: 998,
          backgroundColor: '#F2F2F2',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        animate={{
          x: solutionsOpen ? '0%' : '100%', 
          transformOrigin: solutionsOpen ? 'right center' : '0%',
          width: solutionsOpen ? '100%' : 0,
          opacity: solutionsOpen ? 1 : 0,
          pointerEvents: solutionsOpen ? 'auto' : 'none',
          position: solutionsOpen ? 'fixed' : 'absolute',
        }}
        exit={{
          x: '100%',
          transformOrigin: 'right center',
          width: 0,
          opacity: 0,
          transition: { duration: 0.3, ease: 'easeOut' },
          right: 0,
        }}
      >
        <div className={styles.solutions_menu_content}>
          <button
            onClick={() => {
              toggleSolutions()
            }}
          >
            <ArrowLeft />
          </button>
          <HighlightsProducs />
        </div>
      </motion.div>
    </div>
    </header>
  )
}
