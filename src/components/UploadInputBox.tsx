import React, { useState } from 'react';

interface PropsInterface {
  type: string;
}

export default function UploadInputBox(props: PropsInterface) {
  const { type } = props;
  const [data, setData] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <div className="bg-blog-gray-7 w-full  rounded-md px-5 py-5 custom-box-shadow-2 h-fit">
      <p className="text-blog-gray-1 text-xs mb-1">{type}</p>
      <input
        type="text"
        value={data}
        className="outline-none bg-inherit w-full"
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}
