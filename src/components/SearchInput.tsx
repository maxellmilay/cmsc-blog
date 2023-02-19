import React from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface PropsInterface {
  searchQuery: string;
  handleSearchQueryInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput(props: PropsInterface) {
  const { searchQuery, handleSearchQueryInputChange } = props;

  return (
    <>
      <div className="flex items-center py-[0.35rem]  px-3 bg-white rounded-[50vh] border border-blog-gray-3">
        <input
          type="text"
          placeholder="Search"
          className="bg-white placeholder:text-blog-primary placeholder:text-xs placeholder:text-center text-xs p-[0.1rem] focus:outline-none"
          value={searchQuery}
          onChange={(e) => handleSearchQueryInputChange(e)}
        />
      </div>
      <Link href={`/search/${searchQuery}`}>
        <div className="flex justify-center items-center bg-blog-primary px-[0.6rem] py-[0.6rem] ml-3 rounded-[50%]">
          <MagnifyingGlassIcon className="text-white h-3 w-3" />
        </div>
      </Link>
    </>
  );
}
