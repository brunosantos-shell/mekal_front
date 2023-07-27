'use client'

import CardProduct from "@/components/global/CardProduct"
import CardSolution from "@/components/global/CardSolution"
import SlideGallery from "@/components/global/SlideGallery"
import VideoPlayer from "@/components/global/VideoPlayer"
import Link from "next/link"

const imagens = [
    '/gallerySlide/foto1.jpg',
    '/gallerySlide/foto2.jpg',
    '/gallerySlide/foto3.jpg',
]


export default function Home () {
    return (
        <>
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

        <h2>Componente de video player</h2>
        <VideoPlayer
            src="/videoTeste/testeVideo.mp4"
        />

        <h2>Tabs</h2>
        <Link href="/solucoes/seriados">
            seriados
        </Link>
        <Link
            href="/solucoes/corporativo"
        >
            corporativo
        </Link>
        <Link 
            href="/solucoes/modulares"
        >
            modulares
        </Link>
        <Link
            href="/solucoes/arte-e-design"
        >
            art e design
        </Link>
        <Link
            href="/solucoes/sob-medida"
        >
            sob medida
        </Link>
        </>
    )
}