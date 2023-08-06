import Image from 'next/image'
import styles from './styles.module.scss'

interface HeroSolutionsProps {
  image: string
}

export default function HeroSolutions({ image }: HeroSolutionsProps) {
  return (
    <section className={
        styles.container_hero_solutions
    }>
      <Image src={image} fill  objectFit="cover" alt={''} quality={100}/>
    </section>
  )
}
