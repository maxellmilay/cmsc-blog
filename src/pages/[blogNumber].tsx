import Layout from '@/components/Layout';
import React from 'react';
import { useRouter } from 'next/router';
import blogs from '@/constants/blogs';
import Head from 'next/head';

export default function SingleBlog() {
  const router = useRouter();
  const { blogNumber } = router.query;
  const currentBlog = blogs.find((blog) => {
    return blog.id == Number(blogNumber);
  });

  return (
    <>
      <Head>
        <title>{currentBlog?.title}</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center py-10">
          <h1 className="text-5xl mb-10">{currentBlog?.title}</h1>
          <p>{currentBlog?.description}</p>
        </div>
      </Layout>
    </>
  );
}
