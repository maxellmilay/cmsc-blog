import React from 'react';

interface PropsInterface {
  type: string;
}

export default function UploadInputBox(props: PropsInterface) {
  const { type } = props;
  return (
    <div className="bg-blog-gray-7 w-full  rounded-md px-5 py-5 custom-box-shadow-2 h-fit">
      <p className="text-blog-gray-1 text-xs mb-1">{type}</p>
      <input type="text" className="outline-none bg-inherit w-full" />
    </div>
  );
}
