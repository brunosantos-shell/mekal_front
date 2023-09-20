import {
    IconInstagram,
    IconLinkedin,
    IconYouTube,
    IconFacebook,
  } from '@/icons'
import Link from 'next/link'
import styles from './styles.module.scss'


export default function IconsMidiaSocial () {
    return (
        <ul className={styles.icons_midia_social}>
            <ul>
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
        </ul>
    )
}