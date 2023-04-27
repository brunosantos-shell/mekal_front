import Head from 'next/head'
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'

import styles from '@/styles/pages.module.scss'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Descrição da página (útil para meta tags e SEO)"
        />
      </Head>

      <div className={styles.wrapper}>
        <Header />
        <main>
          <section className={styles.content}>
            <h1>Titulo Grande</h1>
            <p>
              <strong>Pellentesque habitant morbi tristique</strong> senectus et
              netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
              eu libero sit amet quam egestas semper.{' '}
              <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
              leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
              ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
              dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis.
              Ut felis.
            </p>
            <p className="small">
              <strong>Pellentesque habitant morbi tristique</strong> senectus et
              netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
              eu libero sit amet quam egestas semper.{' '}
              <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
              leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
              ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
              dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis.
              Ut felis.
            </p>
            <h2>Titulo Médio - H2</h2>
            <ol className="list">
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>
            <ul className="list">
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <h3>Titulo Médio - H3</h3>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
                molestie gravida. Curabitur massa. Donec eleifend, libero at
                sagittis mollis, tellus est malesuada tellus, at luctus turpis
                elit sit amet quam. Vivamus pretium ornare est.
              </p>
            </blockquote>
            <h4>Titulo Médio - H4</h4>
            <p className="small">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              place
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
