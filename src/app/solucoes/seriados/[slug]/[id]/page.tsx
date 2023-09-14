'use client'

import LayoutProducts from '@/components/pages/Solucoes/LayoutProducts'



export default function Product({ params }: { params: { id: string } }) {
 
  // Pegar os dados do produto e passar para o componente LayoutProducts

  return (
    <>
        <LayoutProducts />
  
    </>
  )
}
