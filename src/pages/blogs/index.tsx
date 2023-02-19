import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Blogs() {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);

  return <div />;
}
