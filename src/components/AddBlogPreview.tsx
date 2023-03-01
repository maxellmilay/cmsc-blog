import { BlogInterface } from '@/interface/BlogInterface';
import React from 'react';
import BlogContent from './BlogContent';
import BlogPreview from './BlogPreview';
import SearchResultCard from './SearchResultCard';

interface PropsInterface {
  newBlog: BlogInterface;
}

export default function AddBlogPreview(props: PropsInterface) {
  const { newBlog } = props;
  return (
    <div className="flex flex-col items-center w-[90%] mx-auto">
      <p className="w-full text-2xl font-bold mb-5">Blog Preview</p>
      <div className="p-5 custom-box-shadow">
        <BlogPreview blog={newBlog} />
      </div>
      <p className="w-full text-2xl font-bold my-10">Search Result</p>
      <div className="w-[40rem]">
        <SearchResultCard blog={newBlog} />
      </div>
      <p className="w-full text-2xl font-bold mb-10">Main Content</p>
      <div className="flex flex-col w-[80%] p-10 custom-box-shadow">
        <BlogContent currentBlog={newBlog} />
      </div>
    </div>
  );
}
