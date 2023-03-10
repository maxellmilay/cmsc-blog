import Head from 'next/head';
import Layout from '@/components/Layout';
import { Open_Sans } from '@next/font/google';
import SubscribeCall from '@/components/SubscribeCall';
import BlogPreview from '@/components/BlogPreview';
import { handleLogOut } from '@/firebase/auth';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '@/firebase/db';
import Loader from '@/components/Loader';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

const openSansFont = openSans.variable;

export default function Home() {
  const { setAuthContext } = useContext(AuthContext);
  const router = useRouter();

  const { data: blogs, isLoading } = useQuery({
    queryKey: ['blogList'],
    queryFn: fetchBlogs,
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleLogOutClick = () => {
    handleLogOut();
    setAuthContext(false);
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>CMSC Blogs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="CMSC Blogs"></meta>
        <meta property="og:image" content="https://i.ibb.co/fkzCChs/preview-image.png"></meta>
      </Head>
      <Layout>
        <div className="flex flex-col w-full px-5 sm:px-16">
          <div className="flex flex-col items-center w-full py-14 h-fit border-b border-blog-gray-3">
            <p
              className={`text-3xl sm:text-5xl text-blog-primary ${openSansFont} font-open font-bold text-center mb-10`}
            >
              Connecting Ideas & People
            </p>
            <SubscribeCall
              emailColor="bg-white"
              emailTextColor="text-blog-primary"
              subscribeTextColor="text-white"
              subscribeColor="blog-primary"
              borderColor="border-blog-gray-3"
              className={`landing-subscribe-input`}
            />
          </div>
          <div className="flex flex-wrap pt-16 pb-6 justify-around">
            {blogs !== undefined &&
              blogs.map((blog) => {
                return <BlogPreview key={blog.id} blog={blog} />;
              })}
          </div>
        </div>
      </Layout>
    </>
  );
}

