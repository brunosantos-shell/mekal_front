import Image from "next/image"
import React from "react"
import styles from './styles.module.scss'
import { motion } from 'framer-motion'

interface ShowcaseProps {
    title: string;
    image: string;
    catalog: boolean;
}

const Showcase: React.FC<ShowcaseProps> = ({
    title,
    image,
    catalog
}) => {
    return (
        <section className={styles.container_showcase}>
            <motion.div className={styles.hero_image}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </motion.div>
            {/* Restante do conteúdo do componente Showcase */}
        </section>
    )
}

export default Showcase
