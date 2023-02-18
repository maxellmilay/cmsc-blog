import React from 'react';
import Link from 'next/link';
import { Open_Sans } from '@next/font/google';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid';
import useWindowSize from '@/hooks/useScreen';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  setDropdownClick: () => void;
}

export default function Header(props: PropsInterface) {
  const { setDropdownClick: handleDropdownClick } = props;
  const { width } = useWindowSize();

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
      </div>
      <div className="flex w-1/5 md:w-1/3 justify-end items-end">
        <div className="flex justify-center items-center bg-blog-primary px-3 py-2">
          <MagnifyingGlassIcon className="text-white h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
