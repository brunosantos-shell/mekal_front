import { CardWithTitleAndDescription } from '@/components/global/CardWithTitleAndDescription'
import SlideGallery from '@/components/global/SlideGallery'
import VideoPlayer from '@/components/global/VideoPlayer'
import AccessoriesAndCompositionSlide from '../AccessoriesAndCompositionSlide'
import ProductDetailsWithSlider from '../ProductDetailsWithSlider'
import style from './styles.module.scss'

const images = [
  '/images/gallerySlide/foto1.jpg',
  '/images/gallerySlide/foto2.jpg',
  '/images/gallerySlide/foto3.jpg',
]

const Mock = [
  {
    id: 1,
    image:
      '/images/pageModulares/freestanding/slideTemp/tabuaDeMadeiraTeca.jpg',
    name: 'Nome do acessório lorem ipsum ',
    category: 'Freestanding',
    comprimento: ' Customizável',
    largura: 'Customizável',
    profundidade: '230',
    codigo: '0000000',
  },
  {
    id: 2,
    image: '/images/pageModulares/freestanding/slideTemp/acessorio.jpg',
    name: 'Nome do acessório lorem ipsum ',
    category: 'Freestanding',
    comprimento: ' Customizável',
    largura: 'Customizável',
    profundidade: '230',
    codigo: '0000000',
  },
  {
    id: 3,
    image: '/images/pageModulares/freestanding/slideTemp/acessorio.jpg',
    name: 'Nome do acessório lorem ipsum ',
    category: 'Freestanding',
    comprimento: ' Customizável',
    largura: 'Customizável',
    profundidade: '230',
    codigo: '0000000',
  },
  {
    id: 4,
    image: '/images/pageModulares/freestanding/slideTemp/acessorio.jpg',
    name: 'Nome do acessório lorem ipsum ',
    category: 'Freestanding',
    comprimento: ' Customizável',
    largura: 'Customizável',
    profundidade: '230',
    codigo: '0000000',
  },
]

export default function LayoutProducts() {
  return (
    <>
      <ProductDetailsWithSlider />
      <div className={style.container_description_product}>
        <CardWithTitleAndDescription
          title="Sobre a linha"
          description={`Nosso sistema de cores Mekal Shades® é resultado de uma nanotecnologia inovadora e ambientalmente amigável, desenvolvida para proporcionar um alto padrão de acabamento a superfícies metálicas. Esse processo à vácuo, conhecido como PVD, produz um revestimento de cor finíssimo, porém denso e altamente resistente a produtos de limpeza e à corrosão. Sobre a camada de cor é aplicado o exclusivo acabamento Ultraclean®, que dificulta a aderência de sujeira, facilita a limpeza e evita a formação de manchas.
                          Mekal Shades® com Ultraclean® não desbota nem muda de cor com os raios UV, e é totalmente seguro para uso em contato com alimentos.
                          A tecnologia Shades PVD evidencia a beleza e a pureza das cores dos metais nobres ao criar sobre o aço inoxidável um revestimento ultrafino, denso, altamente aderente e resistente a riscos, produtos de limpeza e corrosão. As cubas não mudam de cor e não desbotam com os raios UV.`}
          titleCategory="h2"
        />
      </div>
      <VideoPlayer src="/videoTeste/testeVideo.mp4" />
      <div className={style.container_description_product}>
        <CardWithTitleAndDescription
          title="A QUALIDADE MEKAL QUE VOCÊ JÁ CONHECE, AGORA TAMBÉM EM CORES"
          description={`Mekal Shades® com Ultraclean® é um acabamento extremamente resistente a produtos de limpeza e à corrosão, não desbota nem muda de cor com os raios UV, e é totalmente seguro para uso em contato com alimentos. A tecnologia Shades PVD evidencia a beleza e a pureza das cores dos metais nobres ao criar sobre o aço inoxidável um revestimento ultrafino, denso, altamente aderente e resistente a riscos.
                `}
          titleCategory="h2"
        />
      </div>
      <div
        className={style.container_slide_images}
      >
        <SlideGallery images={images} area="slideProducts" />
      </div>
     <div
      className={style.container_accessories}
     >
     <AccessoriesAndCompositionSlide
        type="accessories"
        data={Mock}
      />
     </div>
      
    </>
  )
}
