import React from 'react';
import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

export default function ProfilePreview() {
  return (
    <div className="flex justify-end items-center">
      <p className={`text-blog-primary text-xs ${openSansFont} font-sans font-bold`}>
        Maxell Milay
      </p>
      <div className="flex bg-blog-primary h-8 w-8 rounded-[50vh] ml-3" />
    </div>
  );
}
