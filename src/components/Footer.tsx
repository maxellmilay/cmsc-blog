import React from 'react';
import { Open_Sans } from '@next/font/google';
import SubscribeCall from './SubscribeCall';
import Link from 'next/link';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

const openSansFont = openSans.variable;

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row w-screen items-center sm:items-start footer-subscription-call bg-blog-primary py-14 px-10">
      <div className={`flex flex-col font-open ${openSansFont} text-white`}>
        <Link href="/">
          <p className="text-xl font-bold text-center sm:text-start">CMSC Blogs</p>
        </Link>
        <Link href="/">
          <p className="font-bold text-xs mt-2 text-blog-secondary text-center sm:text-start">
            Blogs
          </p>
        </Link>
        <Link href="/about">
          <p className="font-bold text-xs mt-2 text-blog-secondary text-center sm:text-start">
            About Us
          </p>
        </Link>
      </div>
      <div className="flex flex-col font-product mt-7 sm:mt-0">
        <SubscribeCall
          emailColor="bg-blog-gray-1"
          emailTextColor="text-white"
          subscribeTextColor="text-black"
          subscribeColor="white"
          borderColor="border-blog-gray-1"
          className={'footer-subscribe-input'}
        />
        <p className="text-blog-secondary text-[0.6rem] text-center sm:text-right mt-5">
          © 2023 CMSC Blogs. All rights reserved.
        </p>
      </div>
    </div>
  );
}
