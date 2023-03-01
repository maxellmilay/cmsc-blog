import React from 'react';
import { BlogInterface } from '@/interface/BlogInterface';
import { Open_Sans } from '@next/font/google';
import Image from 'next/image';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  currentBlog: BlogInterface;
}

export default function BlogContent(props: PropsInterface) {
  const { currentBlog } = props;

  return (
    <div className="flex flex-col">
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
      <p className="font-product text-xs text-blog-secondary mt-1">{currentBlog.imageCaption}</p>
      <p className="font-product text-sm text-justify mt-7 whitespace-pre-wrap">
        {currentBlog.description}
      </p>
    </div>
  );
}
