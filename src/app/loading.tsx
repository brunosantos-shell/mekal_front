import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Loading() {
  return  <Skeleton height={500} width={200} count={5} />
}