import Layout from '../../components/Layout';

const DetailUser = (props) => {
  const { user } = props;
  return (
    <Layout pageTitle={`User Detail ${user.name}`}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  )
}

export default DetailUser;

/* get static path (tidak cocok untuk website yg dinamis) /
static generate (akan di generate file html ketika mengakses pathnya)
*/
export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();
  const paths = dataUsers.map((user) => ({
    params: { id: `${user.id}` },
  }));
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) { // untuk mengambil dari path
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    // Passed to the page component as props
    props: {
      user,
    },
  }
}