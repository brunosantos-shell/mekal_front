'use client'

import Button from '@/components/global/Button'
import { ArrowExternal } from '@/icons'
import Image from 'next/image'
import style from './styles.module.scss'

interface CarsExclusiveEventsProps {
    title: string
    description: string
    data: string
    local: string
    image: string
}

export default function CarsExclusiveEvents({title, description, data, local, image}: CarsExclusiveEventsProps) {
  return (
    <div className={style.container_card}>
      <div className={style.container_img}>
        <Image
          src={image}
          fill
          alt={''}
        />
      </div>
      <div className={style.container_content}>
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
        <Button
          onClick={() => {
            console.log('catalog')
          }}
          icon={<ArrowExternal />}
        >
          Mais informações
        </Button>
      </div>
      <div className={style.container_info}>
        <p className={style.container_info_date}>{
            data
        }</p>
        <div
            className={style.container_info_local}
        >
          <span>Local</span>
          <p>
            {local}
          </p>
        </div>
      </div>
    </div>
  )
}
