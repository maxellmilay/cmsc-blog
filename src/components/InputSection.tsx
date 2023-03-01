import { BlogInterface } from '@/interface/BlogInterface';
import React from 'react';

interface PropsInterface {
  input:
    | React.FC<{
        type: string;
        objectKey: string;
        setInputChange: (key: string, value: string) => void;
        newBlog: BlogInterface;
      }>
    | React.FC;
  type: string;
  objectKey: string;
  setInputChange: (key: string, value: string) => void;
  newBlog: BlogInterface;
}

export default function InputSection(props: PropsInterface) {
  const { input: Input, type, objectKey, setInputChange: handleInputChange, newBlog } = props;

  return (
    <div className="flex mb-10">
      <div className="flex flex-col w-1/2 px-20 items-end ">
        <p className="font-bold">{type}</p>
        <p className="text-xs text-blog-gray-1">Provide your {type.toLocaleLowerCase()}</p>
      </div>
      <div className="flex grow">
        {
          <Input
            type={type}
            objectKey={objectKey}
            setInputChange={handleInputChange}
            newBlog={newBlog}
          />
        }
      </div>
    </div>
  );
}
