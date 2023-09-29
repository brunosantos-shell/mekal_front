'use client'

import { redirect, usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useLayoutEffect, useState } from 'react'
import CardProduct from '../CardProduct'
import CardMorExclusive from '../CardMorExclusive'

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

interface Product {
  id: number
  name: string
  slug: string
  image: string
}

type TabLine = Record<
  string,
  {
    name: string
    products: Product[]
  }
>

interface TabsProps {
  categories: TabLine[]
}

export default function Tabs({ categories }: TabsProps) {
  const [hasActiveProducts, setHasActiveProducts] = useState(false)
  const [qtdLinesBiggerThree, setQtdLinesBiggerThree] = useState(false)
  const [qtdProducts, setQtdProducts] = useState(0)

  const categorySlugs = categories.map((categoryObj) => {
    const categoryName = Object.keys(categoryObj)[0]
    return slugify(categoryObj[categoryName]?.name) ?? ''
  })

  const pathname = usePathname()
  const lastIndex = pathname.lastIndexOf('/')
  const pathnameWithoutLastSlash = pathname.substring(0, lastIndex)
  const [currentTab, setCurrentTab] = useState<string>('')


  useLayoutEffect(() => {
    const currentSlug = pathname.substring(lastIndex + 1)
    setCurrentTab(currentSlug)

    categories.length > 3 ? setQtdLinesBiggerThree(true) : setQtdLinesBiggerThree(false)

    const categoryName = categories.find(
      (categoryObj) =>
        slugify(categoryObj[Object.keys(categoryObj)[0]]?.name) === currentSlug
    )
    setHasActiveProducts(
      !!categoryName &&
        categoryName[Object.keys(categoryName)[0]].products.length > 0
    )

    if (categoryName) {
      setQtdProducts(categoryName[Object.keys(categoryName)[0]].products.length)
    } else {
      setQtdProducts(0) 
    }
  }, [pathname, lastIndex])

  const handleTabClick = (category: string) => {
    setCurrentTab(category)
    redirect(`${pathnameWithoutLastSlash}/${category}`)
  }

  return (
    <div className={styles.container_tabs__wrapper}>
      <div className={styles.container_header}>
        <p
          className={`${styles.tabs__title} ${
            qtdLinesBiggerThree ? styles.tabs__title__bigger_three : ''
          }`}
        >
          Conheça as linhas
        </p>
        <div className={styles.container_tabs}>
          <ul className={styles.tabs__content}>
            {categorySlugs.map((category) => {
              const isActive = currentTab === category
  
              return (
                <Link
                  href={`${pathnameWithoutLastSlash}/${category}`}
                  key={category}
                  shallow={true}
                >
                  <li
                    onClick={() => handleTabClick(category)}
                    className={`${isActive ? styles.active : ''} ${styles.tabs}`}
                  >
                    <span>{category}</span>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
        
      {hasActiveProducts && (
      <div className={styles.container_products}>
        <h4 className={styles.product_count} data-count={qtdProducts}>
          Todos os produtos
        </h4>
        {categories.map((categoryObj, index) => {
          const categoryName = Object.keys(categoryObj)[0]
          const isActive =
            currentTab === slugify(categoryObj[categoryName]?.name)
          const products = categoryObj[categoryName]?.products ?? []
          
          const allProducts = products.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              category={'seriados'}
              image={product.image}
              title={product.name}
            />
          ))

          allProducts.push(<CardMorExclusive key="CardMorExclusive" />)

          return isActive ? (
            <div
              key={categoryName}
              className={styles.container_products__content}
            >
              <ul className={styles.products_grid}>
                {allProducts}
              </ul>
            </div>
          ) : null
        })}
      </div>
    )}
    </div>
  )
}
