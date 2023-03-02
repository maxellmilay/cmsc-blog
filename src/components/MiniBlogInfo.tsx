import React from 'react';
import Image from 'next/image';
import { BlogInterface } from '@/interface/BlogInterface';

interface PropsInterface {
  blog: BlogInterface;
}

export default function MiniBlogInfo(props: PropsInterface) {
  const { blog } = props;

  return (
    <div className="flex custom-box-shadow p-3 my-7 w-fit">
      <div className="flex relative w-32 h-20">
        <Image src={blog.picURL} alt="Modal Blog Preview" fill className="object-cover" />
      </div>
      <div className="flex flex-col max-w-[10rem] ml-3 justify-center">
        <p className="text-[0.6rem] font-bold">{blog.title}</p>
        <p className="text-[0.4rem] font-product text-blog-secondary">{`${blog.date} ${blog.date.month} ${blog.date.year}`}</p>
        <p className="text-[0.4rem]">{blog.previewText}</p>
      </div>
    </div>
  );
}
