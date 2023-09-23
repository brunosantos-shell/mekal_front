import Image from "next/image"
import styles from './styles.module.scss'

interface CardSlideTheJourneyOfSteelProps {
    ano: string;
    image: string;
    description: string;
}

export default function CardSlideTheJourneyOfSteel (
    { ano, image, description }: CardSlideTheJourneyOfSteelProps
) {

    function splitIntoParagraphs(text: string) {
        return text.split('\n').filter(paragraph => paragraph.trim() !== '')
    }

    const paragraphs = splitIntoParagraphs(description)

    return (
        <div
            className={styles.container_card__slide}
        >
            <span
                className={styles.container_card__slide__year}
            >{ano}</span>
            <div
                className={styles.container_card__slide__info}
            >
                <div
                    className={styles.container_card__slide__image}
                >
                    <Image src={image} fill alt={''} />
                </div>
                <div
                    className={styles.container_card__slide__info__description}
                >
               {
                     paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))
               }
               </div>
            </div>
            <span
                className={styles.container_card__slide__year__mobile}
            >{ano}</span>
        </div>
    )
}