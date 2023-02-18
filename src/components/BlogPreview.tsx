import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Open_Sans } from '@next/font/google';
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

const openSansFont = openSans.variable;

export default function BlogPreview() {
  return (
    <div className="flex flex-col max-w-lg">
      <div className="w-full relative h-72">
        <Image
          src="/images/blogs/first-week.jpg"
          fill
          className="object-cover"
          alt="Preview Image"
        ></Image>
      </div>
      <p className={`font-bold ${openSansFont} font-open text-blog-primary text-xl mt-3`}>
        First Week of School
      </p>
      <p className="font-light font-product text-xs text-blog-gray-2 mt-1">
        A collective review of our experiences as computer science majors in the first week of our
        2nd semester classes.
      </p>
      <div className="flex items-center mt-5 text-blog-primary">
        <p className="font-bold text-xs">Read post</p>
        <ArrowRightIcon className="h-3 w-3 ml-1 text-blog-primary" />
      </div>
    </div>
  );
}
