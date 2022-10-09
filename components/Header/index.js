import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/photos">Photos</Link></li>
      </ul>
    </header>
  )
}

export default Header;