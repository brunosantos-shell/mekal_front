import { motion } from 'framer-motion'
import { MekalLogo } from '@/icons'
import LanguageMenu from '../LanguageMenu'
import SearchComponentHeader from '../SearchComponentHeader'
import styles from './styles.module.scss'

export default function HeaderHorizontal() {
  return (
    <motion.div
      className={styles.container_header_horizontal}
      initial={{ /* opacity: 0, */ y: -50 }} 
      animate={{ /* opacity: 1, */ y: 0 }} 
      transition={{ duration: 1.2, ease: 'easeInOut' }} 
    >
      <div className={styles.container_logo}>
        <MekalLogo />
      </div>
      <div style={{ display: 'flex' }}>
        <SearchComponentHeader />
        <LanguageMenu />
      </div>
    </motion.div>
  )
}
