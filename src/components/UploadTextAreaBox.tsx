import React, { useState } from 'react';

interface PropsInterface {
  type: string;
  contentType?: string;
}

export default function UploadTextAreaBox(props: PropsInterface) {
  const { type, contentType } = props;
  const [data, setData] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  return (
    <div className="bg-blog-gray-7 w-full  rounded-md px-5 py-5 custom-box-shadow-2 h-fit">
      <p className="text-blog-gray-1 text-xs mb-1">{type}</p>
      <textarea
        cols={30}
        rows={10}
        value={data}
        onChange={(e) => handleInputChange(e)}
        className={`outline-none bg-inherit w-full ${
          contentType === 'Blog Content' && 'whitespace-pre-wrap'
        }`}
      />
    </div>
  );
}
