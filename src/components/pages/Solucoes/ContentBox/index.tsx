import Button from '@/components/global/Button'
import { ArrowDown, IconDowload } from '@/icons'
import styles from './styles.module.scss'

interface ContentBoxProps {
    title: string;
    description: string;
    catalog?: string;
    technicalFile?: string;
    category: string;
} 


export default function ContentBox ({
    title,
    description,
    catalog,
    technicalFile,
    category
}: ContentBoxProps) {
    return (
        <div
            className={styles.container_content_box}
        >
            <span>{category}</span>
            <div
                className={styles.content_box__header}
            >
                <h1>{title}</h1>
                <button>
                    <ArrowDown />
                </button>
            </div>
            <div
                className={styles.content_box__body}
            >
                <p>{description}</p>
                <div className={
                    styles.content_box__body__buttons
                }>
                
                {
                    technicalFile && (
                        <Button
                            onClick={
                                () => { console.log('technicalFile') }
                            }
                            icon={<IconDowload />}
                        >
                            arquivos técnicos
                        </Button>
                    )
                }
                {
                    catalog && (
                        <Button
                            onClick={
                                () => { console.log('catalog') }
                            }
                            icon={<IconDowload />}
                        >
                            Baixar catálogo
                        </Button>
                    )
                        
                }
                </div>
            </div>
        </div>
    )
}