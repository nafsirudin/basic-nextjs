import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <div>asas</div>
      <div className={styles.imageFrame}>
        <Image src="/test.png" layout="fill" className={styles.image} title="Logo" />
      </div>
    </Layout>
  )
}

export default Home;