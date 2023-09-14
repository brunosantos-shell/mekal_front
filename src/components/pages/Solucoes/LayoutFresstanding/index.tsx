import SlideGallery from '@/components/global/SlideGallery'
import VideoPlayer from '@/components/global/VideoPlayer'
import Image from 'next/image'
import AccessoriesAndCompositionSlide from '../AccessoriesAndCompositionSlide'
import ContentBox from '../ContentBox'
import styles from './styles.module.scss'

interface LayoutFresstandingProps {
  category: string
}

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

const images = [
  '/images/gallerySlide/foto1.jpg',
  '/images/gallerySlide/foto2.jpg',
  '/images/gallerySlide/foto3.jpg',
]

export default function LayoutFresstanding({
  category,
}: LayoutFresstandingProps) {
  return (
    <>
      <section className={styles.container}>
        <ContentBox
          title="Unidade independente, 
                com alta funcionalidade 
                e usabilidade"
          category={category}
          description={`
                        A Freestanding rompe com o tradicional e apresenta o novo conceito de cozinha como equipamento. Composta por unidades independentes, a linha foi desenhada para seguir corretamente a dinâmica do workflow ideal para cozinhas, respeitando as áreas de trabalho e o posicionamento dos acessórios. Cada unidade independente dispõe de área úmida e de cocção e compartimentos com excelente espaço para armazenamento e organização, permitindo que utensílios e acessórios estejam à mão.

                        Além disso, a Freestanding é produzida em aço inoxidável 304, combinado com materiais refinados que conferem um acabamento elegante e sofisticado, sem interferir na composição do ambiente. Logo a linha se encaixa perfeitamente em diversos projetos de cozinha, assumindo, também, o papel de solução ideal para ambientes como sacadas e varandas gourmet, áreas cobertas para piscina, áreas para churrasqueira e cozinhas com espaço limitado

                        Muito mais flexibilidade, durabilidade e resistência, permitindo, até mesmo, que a cozinha seja levada com você no caso de mudança de casa.
                `}
          catalog="/catalogos/Freestanding.pdf"
          technicalFile="/catalogos/Freestanding.pdf"
        />
        <div className={styles.container_image}>
          <Image
            src={'/images/pageModulares/freestanding/cozinha.jpg'}
            alt={'cozinha'}
            width={1312}
            height={765}
            quality={100}
          />
        </div>
        <div className={styles.container_text}>
          <h2>COZINHA INTEGRADA COM A ÁREA SOCIAL</h2>

          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus mauris dui, vitae auctor enim congue eu. 
                  Suspendisse commodo ligula risus, et accumsan dolor pellentesque sit amet. Cras sit amet ante ut nisi molestie 
                  iaculis. Aliquam sit amet mauris at purus euismod vestibulum. Morbi sit amet purus aliquam, rutrum urna sit amet, 
                  efficitur eros. Nam pellentesque ultrices dui, ac gravida est egestas nec. Maecenas at sodales dui. Proin facilisis, 
                  tellus a pulvinar suscipit, arcu neque lobortis mauris, a faucibus lacus felis ut urna. Pellentesque tortor ex, 
                  commodo quis volutpat in, tincidunt.`}
          </p>
        </div>
      </section>
      <VideoPlayer src="/videoHome/videoHome.mp4" />
      <div className={styles.container_text}>
        <h4>Funciona até nos mínimos detalhes</h4>

        <p>
          {`Os modelos da linha foram configurados para facilitar a instalação e oferecer o máximo de funcionalidade. 
              Na parte interna da unidade há um módulo central específico para a passagem de acopladores de gás, água, 
              esgoto e fiação elétrica. Já no tampo, foi reservada uma área suficiente para o posicionamento de um cooktop.`}
        </p>

        <h4>Workstations</h4>
        <p>
          {`Cada unidade independente possui uma cuba Workstation, compatível com acessórios deslizantes. Esses acessórios 
              podem ser realocados facilmente entre os três níveis internos da cuba, além de possibilitar que a Workstation 
              seja uma extensão da área da bancada.`}
        </p>
        <h4>Projetos customizados</h4>

        <p>
          {`Os modelos da linha foram configurados para facilitar a instalação e oferecer o máximo de funcionalidade. 
              Na parte interna da unidade há um módulo central específico para a passagem de acopladores de gás, água, 
              esgoto e fiação elétrica. Já no tampo, foi reservada uma área suficiente para o posicionamento de um cooktop.`}
        </p>
      </div>
      <AccessoriesAndCompositionSlide type="accessories" data={Mock} />
      <SlideGallery images={images} />
    </>
  )
}
