import { BlogInterface } from '@/interface/BlogInterface';
import React from 'react';
import { Open_Sans } from '@next/font/google';
import Image from 'next/image';
import MiniBlogInfo from './MiniBlogInfo';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  setModalDeleteModalCloseClick: () => void;
  currentBlog: BlogInterface;
}

export default function DeleteConfirmationModal(props: PropsInterface) {
  const { currentBlog, setModalDeleteModalCloseClick: handleModalDeleteModalCloseClick } = props;

  return (
    <>
      <div
        className="flex fixed z-10 top-0 left-0 h-screen w-screen justify-center items-center bg-blog-gray-5 opacity-50"
        onClick={(e) => handleModalDeleteModalCloseClick()}
      />
      <div className="flex fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col justify-center bg-transparent items-center">
        <div className="flex flex-col items-center bg-white p-10 rounded-3xl">
          <p className={`text-center ${openSansFont} font-sans text-xl font-bold`}>
            Are You Sure You Want To Delete This?
          </p>
          <MiniBlogInfo blog={currentBlog} />
          <div className="flex custom-justify-between w-full">
            <button
              className="py-2 px-6 rounded-full bg-blog-primary text-white"
              onClick={handleModalDeleteModalCloseClick}
            >
              Cancel
            </button>
            <button className="py-2 px-6 rounded-full bg-white text-blog-red border border-blog-red">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
