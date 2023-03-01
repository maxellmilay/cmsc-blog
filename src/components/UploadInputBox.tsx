import React, { useState } from 'react';
import { BlogInterface } from '@/interface/BlogInterface';

interface PropsInterface {
  type: string;
  setInputChange: (key: string, value: string) => void;
  objectKey: string;
  newBlog: BlogInterface;
}

export default function UploadInputBox(props: PropsInterface) {
  const { type, setInputChange, objectKey, newBlog } = props;
  const data = newBlog[objectKey];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputChange(objectKey, e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="bg-blog-gray-7 w-full  rounded-md px-5 py-5 custom-box-shadow-2 h-fit">
      <p className="text-blog-gray-1 text-xs mb-1">{type}</p>
      <input
        type="text"
        value={typeof data === 'string' ? data : ''}
        className="outline-none bg-inherit w-full"
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}
