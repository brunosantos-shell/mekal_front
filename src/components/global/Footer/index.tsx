import styles from './styles.module.scss'
import Link from 'next/link'
import {
  Logo,
} from '@/icons'
import IconsMidiaSocial from './components/IconsMidiaSocial'

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.footer_header}>
        <Logo />
        <IconsMidiaSocial />
        
      </div>
      <div className={styles.footer_content}>
        <h1>Mekal existe para materializar a inventividade humana</h1>
      </div>

      <div className={styles.footer_bottom}>
        <div>
          <span>© Mekal 2023</span>
          <span>Todos os Direitos Reservados.</span>
        </div>
        <IconsMidiaSocial />
        <div>
          <ul className={
            styles.footer_bottom__menu
          }>
            <li>
              <Link href="/">Início</Link>
              <Link href="/suporte" className={styles.mobile_only}>Suporte</Link>
              <Link href="/acontece">Acontece</Link>
            </li>
            <li>
              <span>Soluções</span>
              <Link href="/solucoes/seriados">Seriados</Link>
              <Link href="/solucoes/modulares">Modulados</Link>
              <Link href="/solucoes/sob-Medida">Sob medida</Link>
              <Link href="/solucoes/corporativo">Corporativo</Link>
              <Link href="/solucoes/arte-e-design">Arte e Design</Link>
            </li>
            <li>
              <span>Institucional</span>
              <Link href="/">História</Link>
              <Link href="/">Código de ética</Link>
              <Link href="/">Politica de privacidade</Link>
              <Link href="/">Cookies</Link>
            </li>
            <li>
              <span>Suporte</span>
              <Link href="/">Perguntas Frequentes</Link>
              <Link href="/contato">Contato</Link>
            </li>
            <li>
              <span>Experiência</span>
              <Link href="/">Nossas Lojas</Link>
              <Link href="/">Mekal próxima de você</Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
