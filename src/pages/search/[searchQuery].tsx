import React from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { Open_Sans } from '@next/font/google';
import Head from 'next/head';
import blogs from '@/constants/blogs';
import SearchResultCard from '@/components/SearchResultCard';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

export default function SearchResults() {
  const router = useRouter();
  const { searchQuery } = router.query;
  const query = searchQuery !== undefined ? String(searchQuery) : '';

  const filteredBlogs = blogs.filter((blog) => {
    const name = blog.title.toLowerCase();
    console.log(name);

    return name.includes(query.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Search Results</title>
      </Head>
      <Layout>
        <div className="flex flex-col w-[90vw] sm:w-[75vw] md:w-[60vw] pt-6">
          <div className={`flex ${openSansFont} font-sans items-end`}>
            <p className="text-blog-secondary mr-1">Search Results:</p>
            <h1 className="text-2xl font-bold">{query}</h1>
          </div>
          {filteredBlogs.map((blog) => {
            return <SearchResultCard key={blog.id} blog={blog} />;
          })}
          {filteredBlogs.length === 0 && (
            <p className="font-product text-3xl text-center mt-10">No Results Found</p>
          )}
        </div>
      </Layout>
    </>
  );
}
