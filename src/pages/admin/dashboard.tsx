import Layout from '@/components/Layout';
import React from 'react';
import Head from 'next/head';
import ProtectedRoute from '@/components/ProtectedRoute';
import blogs from '@/constants/blogs';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Layout>
        <div className="flex w-full bg-red-200"></div>
      </Layout>
    </ProtectedRoute>
  );
}
