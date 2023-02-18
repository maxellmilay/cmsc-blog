import React from 'react';
import Link from 'next/link';
import { Open_Sans } from '@next/font/google';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

export default function Header() {
  return (
    <div
      className={`flex custom-justify-between items-center w-full px-20 pb-5 pt-10 border-b ${openSansFont} font-open text-blog-primary`}
    >
      <div className="flex w-1/3 items-end text-sm">
        <Link className="mr-10" href="/">
          <p className="font-bold">Blogs</p>
        </Link>
        <Link href="/about">
          <p className="font-bold">About Us</p>
        </Link>
      </div>
      <div className="flex grow justify-center items-end">
        <Link href="/">
          <p className="text-xl font-extrabold">CMSC Blogs</p>
        </Link>
      </div>
      <div className="flex w-1/3 justify-end items-end">
        <div className="flex justify-center items-center bg-blog-primary px-3 py-2">
          <MagnifyingGlassIcon className="text-white h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
