import React from 'react';

interface PropsInterface {
  input: React.FC<{ type: string; objectKey: string }> | React.FC;
  type: string;
  objectKey: string;
}

export default function InputSection(props: PropsInterface) {
  const { input: Input, type, objectKey } = props;

  return (
    <div className="flex mb-10">
      <div className="flex flex-col w-1/2 px-20 items-end ">
        <p className="font-bold">{type}</p>
        <p className="text-xs text-blog-gray-1">Provide your {type.toLocaleLowerCase()}</p>
      </div>
      <div className="flex grow">{<Input type={type} objectKey={objectKey} />}</div>
    </div>
  );
}
