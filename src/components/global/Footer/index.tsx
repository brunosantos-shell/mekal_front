import Image from 'next/image'
import styles from './styles.module.scss'
import { IconFacebook, IconInstagram, IconLinkedIn, IconTwitter } from '@/icons'

const Footer: React.FC = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.content}>
        <div id={styles.logo}>
          <a href="#" aria-label="go to initial page">
            <Image
              alt="Logo"
              title="Logo"
              src="/images/Logo.svg"
              width="123"
              height="43"
            />
          </a>
        </div>

        <nav id={styles.categories} role="navigation" aria-label="Site Map">
          <ul>
            <li>
              <label>Categoria 1</label>
              <ul>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
                <li>
                  <a href="#">Item 4</a>
                </li>
              </ul>
            </li>
            <li>
              <label>Categoria 1</label>
              <ul>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
                <li>
                  <a href="#">Item 4</a>
                </li>
              </ul>
            </li>
            <li>
              <label>Categoria 1</label>
              <ul>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
                <li>
                  <a href="#">Item 4</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <hr />
        <nav id={styles.social} role="navigation" aria-label="Social Medias">
          <ul>
            <li>
              <a
                href="www.instagram.com"
                id="social-instagram"
                aria-label="Go to Instagram"
                target="_blank"
              >
                <label>Instagram</label>
                <IconInstagram />
              </a>
            </li>
            <li>
              <a
                href="www.twitter.com"
                id="social-twitter"
                aria-label="Go to Twitter"
                target="_blank"
              >
                <label>Twitter</label>
                <IconTwitter />
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com"
                id="social-linkedin"
                aria-label="Go to Linkedin"
                target="_blank"
              >
                <label>Linkedin</label>
                <IconLinkedIn />
              </a>
            </li>
            <li>
              <a
                href="www.facebook.com"
                id="social-facebook"
                aria-label="Go to Facebook"
                target="_blank"
              >
                <label>Facebook</label>
                <IconFacebook />
              </a>
            </li>
          </ul>
        </nav>
        <nav id={styles.terms} role="navigation">
          <ul>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Licenses</a>
            </li>
          </ul>
        </nav>
        <p>© 2022 NAME. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
