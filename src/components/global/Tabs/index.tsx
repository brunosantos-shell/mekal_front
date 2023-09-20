'use client'

import { redirect, usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useLayoutEffect, useState } from 'react'
import CardProduct from '../CardProduct'

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

    const categoryName = categories.find(
      (categoryObj) =>
        slugify(categoryObj[Object.keys(categoryObj)[0]]?.name) === currentSlug
    )
    setHasActiveProducts(
      !!categoryName &&
        categoryName[Object.keys(categoryName)[0]].products.length > 0
    )
  }, [pathname, lastIndex])

  const handleTabClick = (category: string) => {
    setCurrentTab(category)
    redirect(`${pathnameWithoutLastSlash}/${category}`)
  }

  return (
    <>
      <div className={styles.container_tabs}>
        <p className={styles.tabs__title}>Conheça as linhas</p>
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
      {hasActiveProducts && (
        <div className={styles.container_products}>
          <h4>Todos os produtos</h4>
          {categories.map((categoryObj) => {
            const categoryName = Object.keys(categoryObj)[0]
            const isActive =
              currentTab === slugify(categoryObj[categoryName]?.name)
            const products = categoryObj[categoryName]?.products ?? []

            return isActive ? (
              <div
                key={categoryName}
                className={styles.container_products__content}
              >
                <ul>
                  {products.map((product) => (
                    <CardProduct
                      key={product.id}
                      id={product.id}
                      category={'seriados'}
                      image={product.image}
                      title={product.name}
                    />
                  ))}
                </ul>
              </div>
            ) : null
          })}
        </div>
      )}
    </>
  )
}
