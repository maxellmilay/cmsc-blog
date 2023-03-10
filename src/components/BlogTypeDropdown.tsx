import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { BlogInterface } from '@/interface/BlogInterface';

interface PropsInterface {
  setInputChange: (key: string, value: string) => void;
  objectKey: string;
  newBlog: BlogInterface;
}

const dropDownItems = ['Lifestyle', 'Technology', 'Personal'];

export default function BlogTypeDropdown(props: PropsInterface) {
  const { setInputChange: handleInputChange, objectKey, newBlog } = props;
  const [currentType, setCurrentType] = useState(newBlog.type);
  const [isBlogTypeDropdownOpen, setIsBlogTypeDropdownOpen] = useState(false);

  const handleDropdownButtonClick = () => {
    setIsBlogTypeDropdownOpen(!isBlogTypeDropdownOpen);
  };

  const handleDropdownChoiceClick = (item: string) => {
    setCurrentType(item);
    setIsBlogTypeDropdownOpen(false);
  };

  useEffect(() => {
    handleInputChange(objectKey, currentType);
  }, [currentType]);

  const DropDownContent = (
    <div className="flex flex-col bg-blog-gray-7 absolute top-20 left-0 rounded-md py-5 custom-box-shadow-2">
      {dropDownItems.map((item, index) => {
        return (
          <div key={index} className="bg-blog-gray-7 w-56 py-1">
            <button type="button" onClick={() => handleDropdownChoiceClick(item)}>
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );

  return (
    <button
      onClick={handleDropdownButtonClick}
      type="button"
      className="flex relative bg-blog-gray-7 w-56 items-center custom-justify-between rounded-md px-5 py-5 custom-box-shadow-2 h-fit"
    >
      <p>{currentType}</p>
      <ChevronDownIcon className="w-5 h-5" />
      {isBlogTypeDropdownOpen && DropDownContent}
    </button>
  );
}
