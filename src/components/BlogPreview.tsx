import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Open_Sans } from '@next/font/google';
import Link from 'next/link';
import { BlogInterface } from '@/interface/BlogInterface';
import { useRouter } from 'next/router';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  blog: BlogInterface;
}

export default function BlogPreview(props: PropsInterface) {
  const { blog } = props;
  const router = useRouter();

  return (
    <div className="flex flex-col w-[32rem] mb-10">
      <div className="w-full relative h-56 sm:h-72">
        <Image src={blog.picURL} fill className="object-cover" alt="Preview Image" />
        <div
          className={`flex w-full absolute bottom-0 py-4 px-4 custom-justify-between backdrop-blur-[2px] bg-black/50 text-white text-xs ${openSansFont} font-sans`}
        >
          <p>{`${blog.date.day} ${blog.date.month} ${blog.date.year}`}</p>
          <p className="font-bold">{blog.type}</p>
        </div>
      </div>
      <p
        className={`font-bold ${openSansFont} font-open text-blog-primary text-md sm:text-xl mt-3`}
      >
        {blog.title}
      </p>
      <p className="font-light font-product text-xs text-blog-gray-2 mt-1">{blog.previewText}</p>
      {router.pathname.includes('/admin/add') ? (
        <div className="flex items-center mt-5 text-blog-primary">
          <p className="font-bold font-product text-xs">Read post</p>
          <ArrowRightIcon className="h-3 w-3 ml-1 text-blog-primary" />
        </div>
      ) : (
        <Link href={`/blogs/${blog.id}`}>
          <div className="flex items-center mt-5 text-blog-primary">
            <p className="font-bold font-product text-xs">Read post</p>
            <ArrowRightIcon className="h-3 w-3 ml-1 text-blog-primary" />
          </div>
        </Link>
      )}
    </div>
  );
}
