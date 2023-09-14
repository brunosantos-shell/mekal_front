import React from 'react'
import styles from './styles.module.scss'

interface CardWithTitleAndDescriptionProps {
    title: string;
    description: string;
    titleCategory?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    customStyles?: React.CSSProperties;
}

export function CardWithTitleAndDescription({ title, description, titleCategory = 'h1', customStyles }: CardWithTitleAndDescriptionProps) {
    const TitleComponent = titleCategory as React.ElementType

    function splitIntoParagraphs(text: string) {
        return text.split('\n').filter(paragraph => paragraph.trim() !== '')
    }

    const descriptionConvert = splitIntoParagraphs(description)

    return (
        <div className={styles.container_text} style={customStyles}>
            <TitleComponent>{title}</TitleComponent>
            {
                descriptionConvert.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))
            }
        </div>
    )
}
