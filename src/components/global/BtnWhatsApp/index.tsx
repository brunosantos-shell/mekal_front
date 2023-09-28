import { IconWhatsapp } from "@/icons"
import styles from './styles.module.scss'

export default function BtnWhatsApp() {
    return (
        <div
            className={styles.container_btn_whatsapp}   
        >
        <a
            href="https://api.whatsapp.com/send?phone=53999222959&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20Mekal."
            target="_blank"
            rel="noreferrer"
        >
              <IconWhatsapp />
        </a>
        </div>
    )
}