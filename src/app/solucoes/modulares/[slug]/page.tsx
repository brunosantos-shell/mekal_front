'use client'

import { usePathname } from 'next/navigation'
import Tabs from "@/components/global/Tabs"

import Mocks from '@/mocks/linhas.json'
import LayoutFresstanding from '@/components/pages/Solucoes/Freestanding/LayoutFresstanding'


interface Product {
    id: number;
    name: string;
    slug: string;
    image: string;
  }
  
  type TabLine = Record<string, {
    products: Product[];
    name: string;
}>;

interface MockSolution {
    id: number;
    linhas?: TabLine[];
}
  


export default function Modulares () {
    const pathname = usePathname()
    const pathElements = pathname.split("/").filter((element) => element.trim() !== "")
    
    const slugToMatch = pathElements[1]
    const categoryToMatch = pathElements[2]


    const matchingSolution = Mocks.solutions.find((solution) => solution.slug === slugToMatch) as MockSolution | undefined


    return (
        <div>
            {matchingSolution?.linhas !== null && matchingSolution?.linhas !== undefined && (
                        <Tabs 
                            categories={matchingSolution.linhas}
                            />
                    )}

            <section>
                {
                    categoryToMatch === 'freestanding' && (
                        <LayoutFresstanding category={categoryToMatch} />
                    )
                }
                {
                    categoryToMatch === 'smart-premium' && (
                        <h1>Smart Premium</h1>
                    )
                }
                {
                    categoryToMatch === 'smart-kit' && (
                        <h1>Smart Kit</h1>
                    )
                }
            </section>
                    
        </div>
    )
}