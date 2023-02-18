import Head from 'next/head';
import Layout from '@/components/Layout';
import blogs from '@/constants/blogs';
import Link from 'next/link';
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
        <meta property="og:image" content="https://i.ibb.co/fpgRHWG/preview-image.png"></meta>
      </Head>
      <Layout>
        <div className="flex flex-col w-full px-16">
          <div className="flex flex-col w-full py-14 h-fit border-b border-blog-gray-3">
            <div
              className={`flex custom-justify-between items-center ${openSansFont} font-open font-bold mb-10`}
            >
              <p className="text-5xl">Connecting ideas and people</p>
              <p className="text-blog-gray-2 max-w-[13rem] text-right">
                Relevant information related to technology
              </p>
            </div>
            <SubscribeCall
              emailColor="bg-white"
              emailTextColor="text-blog-primary"
              subscribeTextColor="text-white"
              subscribeColor="bg-blog-primary"
              borderColor="border-blog-gray-3"
            />
          </div>
          <div className="flex wrap py-16 justify-around">
            <BlogPreview />
          </div>
        </div>
      </Layout>
    </>
  );
}

