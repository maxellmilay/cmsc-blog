import React from 'react';
import Link from 'next/link';

interface PropsInterface {
  setLinkClick: (link: string) => void;
}

export default function Dropdown(props: PropsInterface) {
  const { setLinkClick: handleLinkClick } = props;

  return (
    <div className={`flex flex-col items-center w-full py-5 bg-blog-gray-4 z-10 text-black`}>
      <p className="font-bold " onClick={() => handleLinkClick('/')}>
        Blogs
      </p>
      <p className="font-bold mt-5" onClick={() => handleLinkClick('/about')}>
        About Us
      </p>
    </div>
  );
}
