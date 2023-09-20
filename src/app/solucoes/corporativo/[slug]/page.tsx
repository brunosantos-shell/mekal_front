'use client'

import { usePathname } from 'next/navigation'
import Tabs from "@/components/global/Tabs"

import Mocks from '@/mocks/linhas.json'


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
  


export default function Corporativo () {
    const pathname = usePathname()
    const pathElements = pathname.split("/").filter((element) => element.trim() !== "")
    
    const slugToMatch = pathElements[1]

    const matchingSolution = Mocks.solutions.find((solution) => solution.slug === slugToMatch) as MockSolution | undefined

    return (
        <div>
            {matchingSolution?.linhas !== null && matchingSolution?.linhas !== undefined && (
                        <Tabs 
                            categories={matchingSolution.linhas}
                            />
                    )}
        </div>
    )
}