import React from 'react';
import { BlogInterface } from '@/interface/BlogInterface';
import { Open_Sans } from '@next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  blog: BlogInterface;
  setDeleteButtonClick?: (blog: BlogInterface) => void;
}

export default function SearchResultCard(props: PropsInterface) {
  const { blog, setDeleteButtonClick: handleDeleteButtonClick } = props;
  const router = useRouter();

  const handleSearchResultCardClick = () => {
    router.push(`/blogs/${blog.id}`);
  };

  return (
    <div className="flex flex-col md:flex-row custom-box-shadow mb-10 w-full">
      <div className={`flex flex-col items-center md:flex-row p-5`}>
        <div
          className="flex relative w-full md:w-64 h-48 sm:h-72 md:h-full min-h-[11rem] min-w-[16rem] cursor-pointer"
          onClick={handleSearchResultCardClick}
        >
          <Image src={blog.picURL} alt="Search Result" fill className="object-cover" />
        </div>
        <div
          className="flex flex-col grow md:ml-5 justify-center cursor-pointer"
          onClick={handleSearchResultCardClick}
        >
          <p className={`${openSansFont} font-sans font-bold text-[1.7rem] leading-8 mt-3`}>
            {blog.title}
          </p>
          <p className="flex font-product text-xs text-blog-secondary">{`${blog.date.day} ${blog.date.month} ${blog.date.year}`}</p>
          <p className="flex font-product text-sm mt-2">{blog.previewText}</p>
        </div>
      </div>
      {router.pathname.includes('/admin') && handleDeleteButtonClick !== undefined && (
        <div className="flex md:flex-col p-5 h-full justify-center border-blog-gray-3 border-t md:border-t-0 md:border-l">
          <PencilSquareIcon className="w-7 h-7 mr-5 md:mr-0 md:mb-5 cursor-pointer" />
          <TrashIcon
            className="w-7 h-7 cursor-pointer"
            onClick={() => handleDeleteButtonClick(blog)}
          />
        </div>
      )}
    </div>
  );
}
