/* eslint-disable @typescript-eslint/explicit-function-return-type */

import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'

import '@/styles/global.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
