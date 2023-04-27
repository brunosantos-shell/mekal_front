import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Insira a descrição aqui" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
