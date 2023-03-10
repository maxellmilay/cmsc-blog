import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import contributors from '@/constants/contributors';
import ContributorCard from '@/components/ContributorCard';
import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

export default function about() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center w-full pt-10 pb-20">
          <p
            className={`font-bold text-3xl sm:text-6xl ${openSansFont} font-sans text-blog-primary`}
          >
            Meet The Team
          </p>
          <div className="flex flex-col lg:flex-row wrap justify-around w-full mt-10 sm:mt-14">
            {contributors.map((contributor) => {
              return <ContributorCard key={contributor.id} contributor={contributor} />;
            })}
          </div>
          <p className="font-product mt-5 lg:mt-10 text-center px-5">
            We are Computer Science students from the University of the Philippines Cebu, and we
            created this blog in compliance with our course.
          </p>
        </div>
      </Layout>
    </>
  );
}
