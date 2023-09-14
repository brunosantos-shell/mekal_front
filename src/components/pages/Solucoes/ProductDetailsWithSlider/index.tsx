import Button from '@/components/global/Button'
import { IconDowload, ArrowDownBtn } from '@/icons'
import SlideProduct from '../SlideProduct'

import styles from './styles.module.scss'

const mockSlide = [
    '/images/cubas/cubaSimples.jpg',
    '/images/cubas/farmhouse.jpg',
    '/images/cubas/mekalShades.jpg',
]

export default function ProductDetailsWithSlider() {
  return (
    <div
        className={styles.container_header_product}
    >
    <div className={styles.cotainer_description_product}>
      <div>
        <span>Seriados</span>
        <h1>Mekal Shades</h1>
        <p>A qualidade Mekal que você já conhece, agora também em cores.</p>
      </div>
      <div>
        <div>
          <button>Modelo Extra
            <ArrowDownBtn />
          </button>
          <ul>
            <li>
              <span>Comprimento (mm):</span> 500
            </li>
            <li>
              <span>Largura (mm):</span> 400
            </li>
            <li>
              <span>Profundidade (mm):</span> 230
            </li>
            <li>
              <span>Instalação:</span> Embutir (Undermount)
            </li>
            <li>
              <span>Raio:</span> R10
            </li>
            <li>
              <span>Espessura da Chapa (mm):</span> 1,2 mm
            </li>
            <li>
              <span>VSA na cor da cuba (inclusa):</span> 4 1⁄2”
            </li>
            <li>
              <span>Furo da válvula:</span> 3.1/2”, 4.1/2”, 3.1/2”
            </li>
            <li>
              <span>Acabamento:</span> Escovado
            </li>
            <li>
              <span>Anti Ruído:</span> Teremos nos 4 cantos e no fundo da
              cuba uma manta anti ruído, além da pintura externa.
            </li>
            <li>
              <span>Detalhes:</span> As cubas PVD incluem grapas para uma
              melhor instalação e fixação na bancada.
            </li>
            <li>
              <span>Código:</span> 01023816, 01018316, 01018304
            </li>
          </ul>

          <Button
            onClick={() => {
              console.log('catalog')
            }}
            icon={<IconDowload />}
          >
            arquivos técnicos
          </Button>
        </div>
      </div>
    </div>
    <div className={
        styles.container_slide_product
    }>
        <SlideProduct 
            images={mockSlide}
        />
    </div>
    </div>
    
  )
}
