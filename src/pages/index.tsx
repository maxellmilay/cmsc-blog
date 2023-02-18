import Head from 'next/head';
import Layout from '@/components/Layout';
import blogs from '@/constants/blogs';
import { Open_Sans } from '@next/font/google';
import SubscribeCall from '@/components/SubscribeCall';
import BlogPreview from '@/components/BlogPreview';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

const openSansFont = openSans.variable;

export default function Home() {
  return (
    <>
      <Head>
        <title>CMSC Blogs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="CMSC Blogs"></meta>
        <meta property="og:image" content="https://i.ibb.co/yV0JHzL/cmsc-blog-logo.png"></meta>
      </Head>
      <Layout>
        <div className="flex flex-col w-full px-5 sm:px-16">
          <div className="flex flex-col items-center w-full py-14 h-fit border-b border-blog-gray-3">
            <p
              className={`text-5xl text-blog-primary ${openSansFont} font-open font-bold text-center mb-10`}
            >
              Connecting Ideas & People
            </p>
            <SubscribeCall
              emailColor="bg-white"
              emailTextColor="text-blog-primary"
              subscribeTextColor="text-white"
              subscribeColor="bg-blog-primary"
              borderColor="border-blog-gray-3"
            />
          </div>
          <div className="flex wrap py-16 justify-around">
            {blogs.map((blog) => {
              return <BlogPreview key={blog.id} blog={blog} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

