import Image from "next/image"
import SlideGalleryArtDesign from "../SlideGalleryArtDesign"
import styles from './styles.module.scss'

interface allbum {
    name: string
    image: string
}


interface CardArtistDesignProps {
    image: string
    name: string
    description: string
    album: allbum[]
}


export default function CardArtistDesign ({image, name, description, album}: CardArtistDesignProps) {

    function splitIntoParagraphs(text: string) {
        return text.split('\n').filter(paragraph => paragraph.trim() !== '')
      }

    const paragraphs = splitIntoParagraphs(description)

    return (
        <div 
            className={styles.card_artist_design}
        >
            <div className={
                styles.card_artist_design__image
            }>
                <Image src={image} alt={name} width={380} height={344} sizes="100vw" style={{width: "100%", height: "auto", maxHeight: "344px", maxWidth: "380px"}} />
                <h1>{name}</h1>
            </div>
            <div className={
                styles.card_artist_design__content
            }
            >
                {paragraphs.map((paragraph, index) => (
                    <p key={index}
                        style={{
                            marginBottom: '48px'
                        }}
                    >{paragraph}</p>
                ))}
            </div>

            <SlideGalleryArtDesign images={album} />
        </div>
    )
}