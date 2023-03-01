import React, { useState } from 'react';
import { BlogInterface } from '@/interface/BlogInterface';

interface PropsInterface {
  type: string;
  contentType?: string;
  setInputChange: (key: string, value: string) => void;
  objectKey: string;
  newBlog: BlogInterface;
}

export default function UploadTextAreaBox(props: PropsInterface) {
  const { type, contentType, setInputChange, objectKey, newBlog } = props;
  const data = newBlog[objectKey];

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputChange(objectKey, e.target.value);
  };

  return (
    <div className="bg-blog-gray-7 w-full  rounded-md px-5 py-5 custom-box-shadow-2 h-fit">
      <p className="text-blog-gray-1 text-xs mb-1">{type}</p>
      <textarea
        cols={30}
        rows={10}
        value={typeof data === 'string' ? data : ''}
        onChange={(e) => handleInputChange(e)}
        className={`outline-none bg-inherit w-full ${
          contentType === 'Blog Content' && 'whitespace-pre-wrap'
        }`}
      />
    </div>
  );
}
