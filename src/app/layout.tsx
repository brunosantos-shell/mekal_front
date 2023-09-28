'use client'

import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'
import localFont from 'next/font/local'
import '@/styles/global.scss'
import BtnWhatsApp from '@/components/global/BtnWhatsApp'
import HeaderHorizontal from '@/components/global/HeaderHorizontal'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const myFont = localFont({
  src: [
    {
      path: '../../fonts/Muli-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Muli-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/Muli-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/Muli-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/Muli-Light.woff',
      weight: '500',
      style: 'normal',
    },
  ],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: unknown) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <html lang="en" className={myFont.className}>
      <body>
       <Header />
       <HeaderHorizontal />
       <BtnWhatsApp />
       {children}
       <ProgressBar
          height="4px"
          color="#282828"
          options={{ showSpinner: false }}
          shallowRouting
        />        
        <Footer />
      </body>
    </html>
  )
}
