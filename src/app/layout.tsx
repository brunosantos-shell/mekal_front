import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'
import localFont from 'next/font/local'
import '@/styles/global.scss'

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


  return (
    <html lang="en" className={myFont.className}>
      <body>
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
