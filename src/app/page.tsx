'use client'

import CardProduct from "@/components/global/CardProduct"
import CardSolution from "@/components/global/CardSolution"
import SlideGallery from "@/components/global/SlideGallery"

const imagens = [
    '/gallerySlide/foto1.jpg',
    '/gallerySlide/foto2.jpg',
    '/gallerySlide/foto3.jpg',
]


export default function Home () {
    return <>
        <h2>Componente de card para produtos</h2>
        <CardProduct 
            title="Farmhouse"
            category="Farmhouse"
            image="/images/cubaTesteCard.jpg"
        />
        <h2>Componente de card para solutions</h2>
        <CardSolution
            title="Modulados"
            image="/images/solucaoTesteCard.jpg"
            type="modulados"
        />

        <CardSolution
            title="Art e Design"
            image="/images/solucaoTesteCardArteDesign.jpg"
            type="art-e-design"
        />
        <h2>Componente de slide galeria</h2>
        <SlideGallery 
            images={imagens}
        />
    </>
}