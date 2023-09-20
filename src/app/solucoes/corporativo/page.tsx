'use client'

import { useEffect } from 'react'
import { redirect, usePathname } from 'next/navigation'

import Mocks from '@/mocks/linhas.json'
import slugify from '@/utils'

export default function CorporatePageRedirect() {
    const pathname = usePathname()

    const pathElements = pathname.split('/').filter((element) => element.trim() !== '')

    useEffect(() => {
      const matchingSolution = Mocks.solutions.find((solution) => solution.slug === pathElements[1] )
  
      if (matchingSolution?.linhas != null && matchingSolution.linhas.length !== 0) {
        const firstCategory = Object.keys(matchingSolution.linhas[0])[0]
        const firstCategorySlug = slugify(firstCategory)
        redirect(`/solucoes/corporativo/${firstCategorySlug}`)
      } else {
        redirect('/')
      }
    }, [])
  
    return null
  }