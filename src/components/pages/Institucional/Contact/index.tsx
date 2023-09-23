'use client'

import Button from '@/components/global/Button'
import { IconDowload, ArrowExternal } from '@/icons'

import styles from './styles.module.scss'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
      <div className={styles.container_contact}>
        <h4>Contato</h4>
        <p>
          O Canal de Ética Docol/Mekal é atendido pela Deloitte, uma empresa
          séria e independente, que garante o sigilo e a confidencialidade das
          suas denúncias.
        </p>
        <span>0800 721 1404</span>
        <span>eticadocol@relatoconfidencial.com.br</span>
      </div>
      <div
        className={styles.container_download}
      >
        <h4>Baixe ou registre seu relato</h4>
        <p>
          Qualquer ato que não estiver de acordo com o Código de Ética deve ser
          reportado. Além disso, qualquer informação ou situação que possa
          prejudicar a Docol, a Mekal ou algum de seus públicos é importante,
          merece atenção e pode ser relatada ao Canal de Ética da Mekal.
        </p>
        <Button
          onClick={() => {
            console.log('catalog')
          }}
          icon={<IconDowload />}
        >
          Baixar Código de ética
        </Button>
        <Button
          onClick={() => {
            console.log('catalog')
          }}
          icon={<ArrowExternal />}
        >
          Registrar relatorio
        </Button>
      </div>
      </div>
    </div>
  )
}
