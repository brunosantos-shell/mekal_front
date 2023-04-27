import styles from './styles.module.scss'

interface TitleProps {
  size: '1' | '2' | '3' | '4' | '5' | '6'
  text: string
}

const Title: React.FC<TitleProps> = ({ text, size }) => {
  switch (size) {
    case '1':
      return <h1 className={styles.title}>{text}</h1>
    case '2':
      return <h2 className={styles.title}>{text}</h2>
    case '3':
      return <h3 className={styles.title}>{text}</h3>
    case '4':
      return <h4 className={styles.title}>{text}</h4>
    case '5':
      return <h5 className={styles.title}>{text}</h5>
    case '6':
      return <h6 className={styles.title}>{text}</h6>
  }
}

export default Title
