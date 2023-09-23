import ContentBox from '../ContentBox'
import FeatureSectionWithImage from '../FeatureSectionWithImage'
import styles from './styles.module.scss'

interface LayoutSmartPremiumProps {
  category: string
}
const mockContent = [
  {
    image: '/images/pageModulares/smartPremium/tampoAreaMolhada.jpg',
    title: 'TAMPOS PARA ÁREA MOLHADA',
    content: `Os tampos de inox da Mekal para áreas molhadas se distinguem por serem um apoio prático e versátil para o preparo dos alimentos e contenção de água. 
              Além da funcionalidade, os tampos dão um toque de elegância com sua série de possibilidades projetadas para otimizar o dia a dia na cozinha.`,
    list: [
      {
        title: 'Opções de Customização',
        options: [
          'Vários modelos de cubas para compor cada comprimento de tampo',
          'Furação para torneiras, dispensers de detergente',
          'Personalização do comprimento do tampo escolhido',
          'Sistema de montagem inteligente',
          'Posicionamento eficiente entre as peças',
        ],
      },
    ],
    composition: [
      {
        image:
          '/images/pageModulares/smartPremium/slideTemp/tampoAreaMolhada.jpg',
        name: 'Tampo para Área Molhada',
        category: 'Smart Premium',
        content: `Tampo para Área
            Molhada em 1600mm
            com cuba LR-50 R10`,
      },
      {
        image:
          '/images/pageModulares/smartPremium/slideTemp/tampoAreaMolhada2.jpg',
        name: 'Tampo para Área Molhada',
        category: 'Smart Premium',
        content: `
        Tampo para Área
        Molhada em 1800mm
        com cuba PG-50
        `,
      },
    ],
  },
  {
    image: '/images/pageModulares/smartPremium/tampoAreaCoccao.jpg',
    title: 'TAMPOS PARA ÁREA DE COCÇÃO',
    content: `O tampo de aço inoxidável sólido é moldado para encaixe do tipo de fogão escolhido.
              A solução além de ser ideal para servir de apoio para panelas quentes, talheres e alimentos, também é facilmente higienizada e não fica manchada em caso de respingos da cocção.`,
    list: [
      {
        title: 'Opções de Customização',
        options: [
          'Encaixe de fogões do tipo rangetop, coocktop, churrasqueiras de embutir, fogão de embutir',
          'Posição do fogão de acordo com a necessidade de otimização da área de trabalho',
          'Personalização do comprimento do tampo escolhido',
        ],
      },
    ],
    composition: [
      {
        image:
          '/images/pageModulares/smartPremium/slideTemp/tampoAreaDeCoccao.jpg',
        name: 'Tampo para Área de Cocção',
        category: 'Smart Premium',
        comprimento: 'Customizável',
        largura: 'Largura (mm): Customizável',
        profundidade: '230',
        codigo: '000000000',
      },
      {
        image:
          '/images/pageModulares/smartPremium/slideTemp/tampoAreaDeCoccao2.jpg',
        name: 'Tampo para Área de Cocção',
        category: 'Smart Premium',
        comprimento: 'Customizável',
        largura: 'Largura (mm): Customizável',
        profundidade: '230',
        codigo: '000000000',
      },
    ],
  },
  {
    image: '/images/pageModulares/smartPremium/tampoAreaDeTrabalho.jpg',
    title: 'TAMPOS PARA ÁREA DE TRABALHO',
    content: `O aspecto sutil e de fácil composição com outros materiais torna o inox a melhor escolha para ampliar a área de trabalho com uma aparência leve.
              A estrutura do tampo para área de trabalho assume uma essência modular caracterizada por suas juntas, criando espaços extras para o preparo dos alimentos em conjunto.`,
    list: [
      {
        title: 'Opções de Customização',
        options: [
          'Personalização do comprimento do tampo escolhido',
          'Furação para lixeiras ou torres de tomada',
        ],
      },
    ],
    composition: [
      {
        image:
          '/images/pageModulares/smartPremium/slideTemp/tampoAreaDeCoccao3.jpg',
        name: 'Tampo para Área de Cocção',
        category: 'Smart Premium',
        comprimento: 'Customizável',
        largura: 'Customizável',
        profundidade: '230',
        codigo: '000000000',
      },
    ],
  },
  {
    image: '/images/pageModulares/smartPremium/tampoIlha.jpg',
    title: 'TAMPOS ILHA',
    content: `As ilhas envolvem a casa como um ambiente único e fluido, por isso, é importante a escolha de uma superfície com alto valor decorativo e que entregue versatilidade, tanto para facilitar a manutenção da área limpa, quanto para compor a integração.`,
    list: [
      {
        title: 'Opções de Customização',
        options: [
          'Vários modelos de cubas para cada comprimento de tampo',
          'Furação para torneiras, dispensers de detergente',
          'Encaixe de fogões do tipo rangetop, coocktop, churrasqueiras de embutir, fogão de embutir',
          'Canal equipado para 3 acessórios',
          'Disponíveis 4 opções de acessórios para o canal equipado: porta pratos, container com tampa, porta utensílios e escorredor de talheres e copos.',
          'Personalização do comprimento do tampo escolhido',
        ],
      },
    ],
    composition: [
      {
        image: '/images/pageModulares/smartPremium/slideTemp/tampoIlha.jpg',
        name: 'Tampo Ilha',
        category: 'Smart Premium',
        comprimento: 'Customizável',
        largura: 'Customizável',
        profundidade: '230',
        codigo: '000000000',
      },
      {
        image: '/images/pageModulares/smartPremium/slideTemp/tampoIlha2.jpg',
        name: 'Tampo Ilha',
        category: 'Smart Premium',
        comprimento: 'Customizável',
        largura: 'Customizável',
        profundidade: '230',
        codigo: '000000000',
      },
    ],
  },
  {
    image: '/images/pageModulares/smartPremium/prateleirasSuspensas.jpg',
    title: 'PRATELEIRAS SUSPENSAS',
    content: `A composição de prateleiras acima de ilhas ou bancadas gourmet adiciona uma superfície de trabalho para a cozinha. 
              Projetadas com estrutura em aço inox e componentes que garantem transparência, as prateleiras foram desenvolvidas para promover leveza no ambiente enquanto desempenham o papel de decoração funcional.`,
    list: [
      {
        title: 'Opções de Customização',
        options: [
          'Componentes em vidro ou em barras de inox para apoio de utensílios para compor as prateleiras',
          'Componentes totalmente reposicionáveis',
          'Altura dos tirantes regulável de acordo com o projeto',
          'Composição de até 3 módulos e 2 níveis',
        ],
      },
    ],
    composition: [
      {
        image:
          '/images/pageModulares/smartPremium/slideTemp/prateleirasSuspensas.jpg',
        name: 'Prateleiras Suspensas',
        category: 'Smart Premium',
        comprimento: 'Customizável',
        largura: 'Customizável',
        profundidade: '230',
        codigo: '000000000',
      },
    ],
  },
  {
    image: '/images/pageModulares/smartPremium/farmSink.jpg',
    title: 'FARM SINK',
    content: `Também conhecida como cuba de semiencaixe, a Farm Sink é o auge da versatilidade culinária, limpeza e função combinando elementos do design moderno e clássico.`,
    list: [
      {
        title: 'Opções de Customização',
        options: [
          'Disponível em 2 tamanhos com diferentes profundidades',
          'Com ou sem opção de canal equipado',
          'Canal equipado para 2 acessórios',
          'Disponíveis 4 opções de acessórios para o canal equipado: porta pratos, container com tampa, porta utensílios e escorredor de talheres e copos',
        ],
      },
      {
        title: 'Diferenciais exclusivos',
        options: [
          'Fácil instalação por ser modelo semiencaixe',
          'Protege o armário da umidade da pia',
          'Instalável em todos os tipos de bancadas',
          'Manutenção simples e funcional',
          'Não acumula água no tampo',
        ],
      },
    ],
    composition: [
      {
        image: '/images/pageModulares/smartPremium/slideTemp/farmSink.jpg',
        name: 'Farm Sink',
        category: 'Smart Premium',
        comprimento: 'Customizável',
        largura: 'Customizável',
        profundidade: '230',
        codigo: '000000000',
      },
      {
        image: '/images/pageModulares/smartPremium/slideTemp/farmSink2.jpg',
        name: 'Farm Sink',
        category: 'Smart Premium',
        comprimento: 'Customizável',
        largura: 'Customizável',
        profundidade: '230',
        codigo: '000000000',
      },
    ],
  },
  {
    image: '/images/pageModulares/smartPremium/prateleirasSuspensas.jpg',
    title: 'PRATELEIRAS SUSPENSAS',
    content: `Resistentes à corrosão e higiênicos, cubas tanque e molho são ideais para o dia a dia e para uso simultâneo na lavagem e molho das roupas. 
              A adição de uma área boleada traz mais comodidade para apoio de cestos ou roupas.`,
    list: [
      {
        title: 'Opções de Customização',
        options: [
          'Modelos de tanques com esfregador ou cubas molho',
          'Inclusão e escolha do posicionamento da área boleada no tampo',
          'Furação para torneiras',
        ],
      },
    ],
    composition: [
      {
        image:
          '/images/pageModulares/smartPremium/slideTemp/tampoAreaLavanderia.jpg',
        name: 'Tampo para Área de Lavanderia',
        category: 'Smart Premium',
        comprimento: 'Customizável',
        largura: 'Customizável',
        profundidade: '230',
        codigo: '000000000',
      },
    ],
  },
]

export default function LayoutSmartPremium({
  category,
}: LayoutSmartPremiumProps) {
  return (
    <>
      <div className={styles.container}>
        <ContentBox
          title="UMA LINHA INTELIGENTE, PENSADA PARA TRAZER PRATICIDADE AO DIA A DIA"
          category={category}
          description={`Para entregar praticidade, elegância e customização, desenvolvemos uma maneira de atender às principais necessidades de cada cliente em seus projetos especiais. Personalidade em inúmeras possibilidades de layout e posicionamento entre as peças, com entrega rápida e agilidade na evolução dos projetos. Tudo isso com a qualidade e requinte que são sinônimos de Mekal.`}
          catalog={'/catalogos/SmartPremium.pdf'}
          technicalFile={'/catalogos/SmartPremium.pdf'}
        />
      </div>
      {mockContent.map((contentItem, index) => (
        <FeatureSectionWithImage
          key={index}
          imagePath={contentItem.image}
          imageAlt={contentItem.title}
          title={contentItem.title}
          content={contentItem.content}
          optionsList={contentItem.list}
          slideList={contentItem.composition}
        />
      ))}
    </>
  )
}
