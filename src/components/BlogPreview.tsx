import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Open_Sans } from '@next/font/google';
import Link from 'next/link';
import { BlogInterface } from '@/interface/BlogInterface';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  blog: BlogInterface;
}

export default function BlogPreview(props: PropsInterface) {
  const { blog } = props;

  return (
    <div className="flex flex-col max-w-lg">
      <div className="w-full relative h-56 sm:h-72">
        <Image src={blog.picURL} fill className="object-cover" alt="Preview Image" />
        <div
          className={`flex w-full absolute bottom-0 py-4 px-4 custom-justify-between backdrop-blur-[2px] bg-black/50 text-white text-xs ${openSansFont} font-sans`}
        >
          <p>{blog.date}</p>
          <p className="font-bold">Lifestyle</p>
        </div>
      </div>
      <p
        className={`font-bold ${openSansFont} font-open text-blog-primary text-md sm:text-xl mt-3`}
      >
        {blog.title}
      </p>
      <p className="font-light font-product text-xs text-blog-gray-2 mt-1">{blog.previewText}</p>
      <Link href={`/${blog.id}`}>
        <div className="flex items-center mt-5 text-blog-primary">
          <p className="font-bold font-product text-xs">Read post</p>
          <ArrowRightIcon className="h-3 w-3 ml-1 text-blog-primary" />
        </div>
      </Link>
    </div>
  );
}
