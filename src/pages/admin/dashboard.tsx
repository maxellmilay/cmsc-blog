import Layout from '@/components/Layout';
import React, { useState } from 'react';
import Head from 'next/head';
import ProtectedRoute from '@/components/ProtectedRoute';
import SearchResultCard from '@/components/SearchResultCard';
import blogs from '@/constants/blogs';
import DeleteConfirmationModal from '@/components/DeleteConfirmationModal';

export default function Dashboard() {
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(true);

  const handleDeleteButtonClick = () => {
    setIsDeleteConfirmationModalOpen(true);
  };

  const handleModalDeleteModalBackgroundClick = () => {
    setIsDeleteConfirmationModalOpen(false);
  };

  return (
    <ProtectedRoute>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Layout>
        <div className="flex flex-col w-[60vw]">
          <div className="flex py-7 custom-justify-between">
            <button className="bg-blog-primary text-white px-6 py-3 rounded-[50vh] text-sm">
              CHECK REVIEW
            </button>
            <button className="bg-blog-primary text-white px-6 py-3 rounded-[50vh] text-sm">
              ADD BLOG
            </button>
          </div>
          {blogs.map((blog) => {
            return (
              <SearchResultCard
                key={blog.id}
                blog={blog}
                setDeleteButtonClick={handleDeleteButtonClick}
              />
            );
          })}
        </div>
      </Layout>
      {isDeleteConfirmationModalOpen && (
        <DeleteConfirmationModal
          setModalDeleteModalBackgroundClick={handleModalDeleteModalBackgroundClick}
        />
      )}
    </ProtectedRoute>
  );
}
