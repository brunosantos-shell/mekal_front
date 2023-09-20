'use client'

import React, { useState } from 'react'

import styles from './styles.module.scss'


interface JsonDataItem {
  url: string;
  [key: string]: string | number | boolean;
}

interface SearchComponentProps {
  jsonData: JsonDataItem;
}

export default function SearchComponent({ jsonData }: SearchComponentProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResults, setSearchResults] = useState<string[]>([])

  const handleSearch = () => {
    if (searchTerm.length < 3) {
      return
    }

    const valuesToSearch = Object.values(jsonData)
    const searchTermLower = searchTerm.toLowerCase()

    const results = valuesToSearch.reduce<string[]>((accumulator, value) => {
      if (typeof value === 'string' && value.toLowerCase().includes(searchTermLower)) {
        accumulator.push(value)
      }
      return accumulator
    }, [])

    setSearchResults(results)
  }

  const highlightMatch = (text: string) => {
    const searchTermLower = searchTerm.toLowerCase()
    const parts = text.split(new RegExp(`(${searchTermLower})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === searchTermLower ? (
        <span key={index} style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
          {part}
        </span>
      ) : (
        part
      )
    )
  }

  return (
    <div
        style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '600px',
            padding: '24px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginBottom: '24px'
        }}
    >
      <input
        type="text"
        placeholder="Digite a palavra-chave"
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />
      <button onClick={handleSearch}>Pesquisar</button>
      <div>
        {searchResults.length > 0 ? (
          <div>
            <p
                style={{
                    marginTop: '24px',
                    marginBottom: '24px'
                }}
            >Resultados da pesquisa:</p>
            {searchResults.map((result, index) => (
              <p 
                className={styles.text}
              key={index}>{highlightMatch(result)}</p>
            ))}
          </div>
        ) : (
          <p>Nenhuma correspondência encontrada.</p>
        )}
      </div>
    </div>
  )
}
