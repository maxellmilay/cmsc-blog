import React, { useState } from 'react';
import Link from 'next/link';
import { Open_Sans } from '@next/font/google';
import { Bars3Icon } from '@heroicons/react/24/solid';
import useWindowSize from '@/hooks/useScreen';
import { useRouter } from 'next/router';
import SearchInput from './SearchInput';
import ProfilePreview from './ProfilePreview';
import { fetchBlogs, fetchSingleBlog } from '@/firebase/db';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  setDropdownClick: () => void;
}

export default function Header(props: PropsInterface) {
  const { setDropdownClick: handleDropdownClick } = props;
  const { width } = useWindowSize();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchQueryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className={`flex relative custom-justify-between items-center w-full h-[15vh] px-5 sm:px-10 md:px-20 border-b ${openSansFont} font-open bg-white text-blog-primary`}
    >
      <div className="flex w-1/5 md:w-1/3 items-end text-sm">
        {width > 768 ? (
          <>
            <Link className="mr-10" href="/">
              <p className="font-bold">Blogs</p>
            </Link>
            <Link href="/about">
              <p className="font-bold">About Us</p>
            </Link>
          </>
        ) : (
          <Bars3Icon className="w-7 h-7" onClick={handleDropdownClick} />
        )}
      </div>
      <div className="flex grow justify-center items-end">
        <Link href="/">
          <p className="text-xl font-extrabold">CMSC Blogs</p>
        </Link>
        <button onClick={fetchBlogs} className="ml-5 bg-blog-primary text-white p-3">
          FETCH
        </button>
      </div>
      <div className="flex justify-end items-end w-1/5 md:w-1/3">
        {router.pathname !== '/search' && !router.pathname.includes('/admin') && width > 768 && (
          <SearchInput
            searchQuery={searchQuery}
            handleSearchQueryInputChange={handleSearchQueryInputChange}
          />
        )}
        {router.pathname.includes('/admin') && <ProfilePreview />}
      </div>
    </div>
  );
}
