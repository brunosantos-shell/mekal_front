import type { AppProps } from 'next/app'

import ContextNester from '@/context'
import { AuthProvider } from '@/context/AuthContext'

import { Poppins } from 'next/font/google'
import '@/styles/global.scss'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html,
        *,
        button,
        a {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <ContextNester contexts={[<AuthProvider key={1} />]}>
        <Component {...pageProps} />
      </ContextNester>
    </>
  )
}

export default App
