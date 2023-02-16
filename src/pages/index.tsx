import Head from 'next/head';
import Layout from '@/components/Layout';
import blogs from '@/constants/blogs';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center py-10">
          <h1 className="text-5xl mb-10">Blogs</h1>
          {blogs.map((blog) => {
            return (
              <Link key={blog.id} href={`/${blog.id}`} className="border mb-5 px-5 py-2">
                <div>
                  <h2>{blog.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

