import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { Open_Sans } from '@next/font/google';
import SearchInput from '@/components/SearchInput';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <Layout>
        <div className="flex flex-col w-[60vw] pt-10">
          <p
            className={`${openSansFont} font-sans text-center text-4xl font-bold text-blog-primary`}
          >
            Search Blog
          </p>
          <div className="flex w-full justify-center mt-5">
            <SearchInput
              searchQuery={searchQuery}
              handleSearchQueryInputChange={handleSearchQueryInputChange}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
