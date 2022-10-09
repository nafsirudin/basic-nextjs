import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Users = (props) => {
  const router = useRouter();
  const { dataUsers } = props;
  return (
    <Layout pageTitle="Users">
      <h1>Users Page</h1>
      <ul>
        {
          dataUsers?.map((user) => {
            return (
              <li key={user.id} onClick={() => { router.push('users') }}>{user.name}</li>
            );
          })
        }
      </ul>
    </Layout>
  )
}

export default Users;

// get static props (tidak cocok untuk website yg dinamis) / static generate
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();
  return {
    props: {
      dataUsers,
    },
  }
}