'use client'

import { usePathname } from 'next/navigation'
import Tabs from "@/components/global/Tabs"

import Mocks from '@/mocks/linhas.json'
import LayoutFresstanding from '@/components/pages/Solucoes/LayoutFresstanding'
import LayoutSmartPremium from '@/components/pages/Solucoes/LayoutSmartPremium'
import LayoutSmartKit from '@/components/pages/Solucoes/LayoutSmartKit'


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
        <>
            {matchingSolution?.linhas !== null && matchingSolution?.linhas !== undefined && (
                        <Tabs 
                            categories={matchingSolution.linhas}
                            />
                    )}

            <>
                {
                    categoryToMatch === 'freestanding' && (
                        <LayoutFresstanding category={categoryToMatch} />
                    )
                }
                {
                    categoryToMatch === 'smart-premium' && (
                        <LayoutSmartPremium category={categoryToMatch} />
                    )
                }
                {
                    categoryToMatch === 'smart-kit' && (
                       <LayoutSmartKit category={categoryToMatch} />
                    )
                }
            </>
                    
        </>
    )
}