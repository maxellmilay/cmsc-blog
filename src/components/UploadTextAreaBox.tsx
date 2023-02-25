import React from 'react';

interface PropsInterface {
  type: string;
  contentType: string;
}

export default function UploadTextAreaBox(props: PropsInterface) {
  const { type, contentType } = props;

  return (
    <div className="bg-blog-gray-7 w-full  rounded-md px-5 py-5 custom-box-shadow-2 h-fit">
      <p className="text-blog-gray-1 text-xs mb-1">{type}</p>
      <textarea
        cols={30}
        rows={10}
        className={`outline-none bg-inherit w-full ${
          contentType === 'Blog Content' && 'whitespace-pre-wrap'
        }`}
      />
    </div>
  );
}
