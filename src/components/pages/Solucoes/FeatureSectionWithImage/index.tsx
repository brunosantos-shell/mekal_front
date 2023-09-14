import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { ArrowRightLi } from '@/icons'
import AccessoriesAndCompositionSlide from '../AccessoriesAndCompositionSlide'

interface FeatureSectionWithImageProps {
  imagePath: string
  imageAlt: string
  title: string
  content: string
  optionsList: Array<{ title: string; options: string[] }>
  slideList: Array<{
    image: string
    name: string
    category: string
    content?: string
    largura?: string
    comprimento?: string
    profundidade?: string
    codigo?: string
  }>
}

export default function FeatureSectionWithImage({
  imagePath,
  imageAlt,
  title,
  content,
  optionsList,
  slideList,
}: FeatureSectionWithImageProps) {
  return (
    <div className={styles.feature_section}>
      <div className={styles.container_image}>
        <Image src={imagePath} alt={imageAlt} fill quality={100} />
      </div>
      <div className={
        styles.container_content
      }>
      <div className={
        styles.container_text
      }>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className={
        styles.container_options
      }>
        {optionsList.map((optionsItem, index) => (
          <div key={index} 
          className={
            styles.options_item
          }
          >
            <h4>{optionsItem.title}</h4>
            <ul>
              {optionsItem.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <ArrowRightLi />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
      <AccessoriesAndCompositionSlide type="composition" data={slideList} />
    </div>
  )
}
