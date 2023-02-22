import React from 'react';
import { BlogInterface } from '@/interface/BlogInterface';
import { Open_Sans } from '@next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  blog: BlogInterface;
}

export default function SearchResultCard(props: PropsInterface) {
  const { blog } = props;
  const router = useRouter();

  const handleSearchResultCardClick = () => {
    router.push(`/blogs/${blog.id}`);
  };

  return (
    <div
      className="flex flex-col items-center md:flex-row w-full search-result-card p-5 mt-10"
      onClick={handleSearchResultCardClick}
    >
      <div className="flex relative w-full md:w-64 h-48 sm:h-72 md:h-full min-h-[11rem] min-w-[16rem]">
        <Image src={blog.picURL} alt="Search Result" fill className="object-cover" />
      </div>
      <div className="flex flex-col md:ml-5 justify-center">
        <p className={`${openSansFont} font-sans font-bold text-[1.7rem] leading-8 mt-3`}>
          {blog.title}
        </p>
        <p className="flex font-product text-xs text-blog-secondary">{blog.date}</p>
        <p className="flex font-product text-sm mt-2">{blog.previewText}</p>
      </div>
    </div>
  );
}
