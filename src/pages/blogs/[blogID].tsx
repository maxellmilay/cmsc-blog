import Layout from '@/components/Layout';
import React from 'react';
import { useRouter } from 'next/router';
import { fetchSingleBlog } from '@/firebase/db';
import Head from 'next/head';
import { Open_Sans } from '@next/font/google';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/Loader';
import BlogContent from '@/components/BlogContent';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

export default function SingleBlog() {
  const router = useRouter();
  const { blogID } = router.query;
  const { data: currentBlog, isLoading } = useQuery({
    queryKey: ['blogID', blogID],
    queryFn: () => fetchSingleBlog(blogID as string),
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleBackOnClick = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>{currentBlog ? currentBlog.title : 'Blog'}</title>
      </Head>
      <Layout>
        {currentBlog && (
          <div className="flex flex-col w-[85vw] sm:w-[70vw] lg:w-[65vw] pt-10 pb-16">
            <BlogContent currentBlog={currentBlog} />
            <div className="flex justify-end mt-3">
              <button
                className="text-white font-product text-xs bg-blog-primary py-2 px-5 rounded-[50vh]"
                onClick={handleBackOnClick}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
