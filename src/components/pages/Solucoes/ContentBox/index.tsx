import Button from '@/components/global/Button'
import ContentIndicador from '@/components/global/ContentIndicator'
import { IconDowload } from '@/icons'
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
    <div className={styles.container_content_box}
      style={{
        marginBottom: catalog && technicalFile ? '0' : '80px'
      }}
    >
      <span
        style={{
          marginBottom: category ? '0' : '3rem'
        }}
      >{category}</span>
      <div className={styles.content_box__header}>
        <h1>{title}</h1>
        <ContentIndicador />
      </div>
      <div className={styles.content_box__body}>
        {descriptionConvert.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className={styles.content_box__body__buttons}
          style={{
            display: catalog && technicalFile ? 'flex' : 'none'
          }}
        >
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
