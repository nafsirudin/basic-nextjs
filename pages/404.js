import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);

  const handleClick = () => {
    router.replace('/');
  }
  return (
    <div>
      <h1>Oops..!</h1>
      <h3>Halaman yang anda cari tidak ada</h3>
      <button type="button" onClick={handleClick}>Back to Home</button>
    </div>
  )
}

export default Custom404;