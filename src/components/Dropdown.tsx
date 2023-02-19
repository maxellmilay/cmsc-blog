import React from 'react';

interface PropsInterface {
  setLinkClick: (link: string) => void;
}

export default function Dropdown(props: PropsInterface) {
  const { setLinkClick: handleLinkClick } = props;

  return (
    <div
      className={`flex flex-col items-center w-full py-5 bg-white z-10 text-blog-primary border-b`}
    >
      <p className="font-bold " onClick={() => handleLinkClick('/')}>
        Blogs
      </p>
      <p className="font-bold mt-5" onClick={() => handleLinkClick('/about')}>
        About Us
      </p>
    </div>
  );
}
