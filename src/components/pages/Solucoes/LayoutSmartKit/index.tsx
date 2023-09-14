import SlideGallery from '@/components/global/SlideGallery'
import AccessoriesAndCompositionSlide from '../AccessoriesAndCompositionSlide'
import ContentBox from '../ContentBox'

import styles from './styles.module.scss'

interface LayoutSmartKitProps {
  category: string
}

const images = [
  '/images/gallerySlide/foto1.jpg',
  '/images/gallerySlide/foto2.jpg',
  '/images/gallerySlide/foto3.jpg',
]

const Mock = [
    {
      id: 1,
      image:
        '/images/pageModulares/smartKit/slideTemp/tampaParaAreaMolhada.jpg',
      name: 'Tampo para Área Molhada',
      category: 'Smart Premium',
      content: `Tampo para Área
      Molhada em 1600mm
      com cuba LR-50 R10`
    },
    {
      id: 2,
      image:
        '/images/pageModulares/smartKit/slideTemp/tampaParaAreaMolhadaPg50.jpg',
      name: 'Tampo para Área Molhada',
      category: 'Smart Premium',
      comprimento: ' Customizável',
      content: `Tampo para Área
      Molhada em 1800mm
      com cuba PG-50`
    },
]

export default function LayoutSmartKit({ category }: LayoutSmartKitProps) {
  return (
    <>
      <section className={styles.container}>
        <ContentBox
          title="SOLUÇÃO EM ACESSÓRIOS INTERCAMBIÁVEIS"
          category={category}
          description={`A linha Smart Kit foi criada a partir de um conceito que mescla modularidade e funcionalidade. São opções de acessórios e módulos que farão toda a diferença na composição do seu projeto.`}
          catalog={'/catalogos/SmartPremium.pdf'}
          technicalFile={'/catalogos/SmartPremium.pdf'}
          subTitle="MÓDULOS E ACESSÓRIOS SMART KIT"
          paragraphs={`Desenvolvemos 3 modelos de módulos, disponíveis nas versões com rodízios (formato de carrinho) e com pés fixos. Os módulos podem ser conectados por meio de acessórios específicos, que viabilizam esse acoplamento, formando assim estações de trabalho.
                       Na superfície de trabalho há a possibilidade de ser escolhida uma configuração entre as opções Tampo Liso, Tampo com Cuba e Tampo para Cocção (recomendado para uso com cooktops de 2 bocas ou 4 bocas). Na parte central dos módulos customizados com Tampo Liso ou para Cocção é possível incluir gavetas para armazenamento de acessórios e talheres. Além disso, os módulos contam com uma prateleira inferior para a acomodação de equipamentos, objetos e eletrodomésticos menores.
                       Para complementar ainda mais, e elevar as possibilidades de uso, em ambas as laterais do módulo existem rasgos que possibilitam o encaixe dos acessórios Smart Kit. Esses acessórios exclusivos da linha estão disponíveis em variados formatos para atender qualquer configuração da área de trabalho.`}
        />
        <div className={styles.container_slide}>
          <SlideGallery images={images} />

          <div className={styles.container_text}>
          <h2>PAINÉIS COMPATÍVEIS COM OS ACESSÓRIOS SMART KIT</h2>

          <p>
            {`Através de painéis feitos sob medida é possível utilizar os variados acessórios da linha Smart Kit, seguindo o mesmo padrão de encaixe e funcionalidade dos módulos. Por outro lado, os painéis produzidos pela Mekal abrem novas possibilidades de aplicações, que dependerão diretamente do projeto da cozinha e seu workflow.
              A linha Smart Kit se encaixa perfeitamente como um complemento para os projetos sob medida, permitindo mais possibilidades de combinações e com os acessórios em aço inox.
           `}
          </p>
        </div>
        </div>
        <AccessoriesAndCompositionSlide type="composition" data={Mock} />
      </section>
    </>
  )
}
