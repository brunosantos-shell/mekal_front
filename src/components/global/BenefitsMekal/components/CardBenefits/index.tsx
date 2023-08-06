import Image from "next/image"
import styles from './styles.module.scss'

interface CardBenefitsProps {
    title: string;
    description: string;
    image: string;
}


export default function CardBenefits({
    title,
    description,
    image
}: CardBenefitsProps){
    return(
        <div className={
            styles.container_card_benefits
        }>
            <div className={
                styles.container_card_benefits__image
            }>
                <Image src={image} alt={title} width={48} height={48} />
            </div>
            <div className={
                styles.container_card_benefits__content
            }>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}