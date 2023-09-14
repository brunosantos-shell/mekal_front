import Button from '@/components/global/Button'
import { ArrowDown, IconDowload } from '@/icons'
import styles from './styles.module.scss'

interface ContentBoxProps {
  title: string
  description: string
  catalog?: string
  technicalFile?: string
  category?: string
  subTitle?: string
  paragraphs?: string
}

export default function ContentBox({
  title,
  description,
  catalog,
  technicalFile,
  category,
  subTitle,
  paragraphs,
}: ContentBoxProps) {

  function splitIntoParagraphs(text: string) {
    return text.split('\n').filter(paragraph => paragraph.trim() !== '')
  }
  
  const descriptionConvert = splitIntoParagraphs(description)
  
  const paragraphsConvert = splitIntoParagraphs(paragraphs ?? '')

  return (
    <div className={styles.container_content_box}>
      <span>{category}</span>
      <div className={styles.content_box__header}>
        <h1>{title}</h1>
        <button>
          <ArrowDown />
        </button>
      </div>
      <div className={styles.content_box__body}>
        {descriptionConvert.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className={styles.content_box__body__buttons}>
          {technicalFile && (
            <Button
              onClick={() => {
                console.log('technicalFile')
              }}
              icon={<IconDowload />}
            >
              arquivos técnicos
            </Button>
          )}
          {catalog && (
            <Button
              onClick={() => {
                console.log('catalog')
              }}
              icon={<IconDowload />}
            >
              Baixar catálogo
            </Button>
          )}
        </div>
        <div className={
          styles.paragraphs_content_box
        }>
          {subTitle && <h2>{subTitle}</h2>}
          {paragraphsConvert.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
