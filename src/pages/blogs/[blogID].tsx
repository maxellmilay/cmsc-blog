import Layout from '@/components/Layout';
import React from 'react';
import { useRouter } from 'next/router';
import { fetchSingleBlog } from '@/firebase/db';
import Head from 'next/head';
import { Open_Sans } from '@next/font/google';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/Loader';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

export default function SingleBlog() {
  const router = useRouter();
  const { blogID } = router.query;

  const { data: currentBlog, isLoading } = useQuery({
    queryKey: ['blog'],
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
            <div className="flex text-blog-secondary text-xs font-product items-center">
              <p>{`${currentBlog.date.day} ${currentBlog.date.month} ${currentBlog.date.year}`}</p>
              <div className="w-1 h-1 rounded-[50%] bg-blog-red ml-2" />
              <p className="ml-2">{currentBlog.type}</p>
            </div>
            <h1
              className={`${openSansFont} font-sans text-blog-primary font-bold text-4xl sm:text-6xl mt-3`}
            >
              {currentBlog.title}
            </h1>
            <div className="w-full relative h-56 sm:h-[35rem] mt-7">
              <Image src={currentBlog.picURL} fill className="object-cover" alt="Blog Image" />
            </div>
            <p className="font-product text-xs text-blog-secondary mt-1">
              {currentBlog.imageCaption}
            </p>
            <p className="font-product text-sm text-justify mt-7 whitespace-pre-wrap">
              {currentBlog.description}
            </p>
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
