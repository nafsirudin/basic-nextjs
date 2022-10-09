import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>Nexjs Basic | {pageTitle}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;