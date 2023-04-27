import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <header id={styles.header}>
      <div className={`${styles.content} ${styles.grid}`}>
        <Link href="#" id={styles.logo} aria-label="Ir para página inicial">
          <Image
            alt="Logo"
            title="Logo"
            src="/images/Logo.svg"
            width="123"
            height="43"
          />
        </Link>

        <nav
          id={styles.menu}
          className={isOpen ? styles.open : ''}
          role="navigation"
          aria-label="Menu de navegação"
        >
          <button
            title="Menu"
            onClick={toggleMenu}
            className={styles.hamburguer}
            aria-controls="menu-list"
          >
            <span className={styles.icon}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <ul id="menu-list">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Item 1</Link>
            </li>
            <li>
              <Link href="#">Item 2</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
