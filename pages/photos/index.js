import Layout from '../../components/Layout';
import styles from './Photos.module.css';

const Photos = (props) => {
  const { photos } = props;
  return (
    <Layout pageTitle="Photos">
      <div className="row">
        {
          photos.slice(0, 10).map((photo) => {
            return (
              <div key={photo.id} className={[styles.card, 'column']}>
                <div className={styles.container}>
                  {photo.title}
                </div>
              </div>
            );
          })
        }
      </div>
    </Layout>
  )
}

export default Photos;

export const getServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();
  return {
    props: {
      photos: data,
    },
  }
}