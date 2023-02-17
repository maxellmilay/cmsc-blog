import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

export default function about() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center py-10">
          <h1 className="text-5xl mb-10">About Us</h1>
          <p>
            We are Computer Science students from the University of the Philippines Cebu, and we
            created this blog in compliance with our course.
          </p>
        </div>
      </Layout>
    </>
  );
}
