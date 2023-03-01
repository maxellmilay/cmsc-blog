import Layout from '@/components/Layout';
import React, { useState } from 'react';
import Head from 'next/head';
import ProtectedRoute from '@/components/ProtectedRoute';
import SearchResultCard from '@/components/SearchResultCard';
//import blogs from '@/constants/blogs';
import DeleteConfirmationModal from '@/components/DeleteConfirmationModal';
import { BlogInterface } from '@/interface/BlogInterface';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '@/firebase/db';
import Loader from '@/components/Loader';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({} as BlogInterface);
  const router = useRouter();

  const { data: blogs, isLoading } = useQuery({
    queryKey: ['blogList'],
    queryFn: fetchBlogs,
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleDeleteButtonClick = (blog: BlogInterface) => {
    setCurrentBlog(blog);
    setIsDeleteConfirmationModalOpen(true);
  };

  const handleModalDeleteModalCloseClick = () => {
    setIsDeleteConfirmationModalOpen(false);
  };

  const handleAddBlogButtonClick = () => {
    router.push('/admin/add');
  };

  return (
    <ProtectedRoute>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <Layout>
        <div className="flex flex-col w-[60vw]">
          <h1 className="text-center text-3xl font-product font-bold mt-10">Admin Dashboard</h1>
          <div className="flex py-7 custom-justify-between">
            <button
              type="button"
              className="bg-blog-primary text-white px-6 py-3 rounded-[50vh] text-sm"
            >
              CHECK REVIEW
            </button>
            <button
              type="button"
              className="bg-blog-primary text-white px-6 py-3 rounded-[50vh] text-sm"
              onClick={handleAddBlogButtonClick}
            >
              ADD BLOG
            </button>
          </div>
          {blogs !== undefined &&
            blogs.map((blog) => {
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
          setModalDeleteModalCloseClick={handleModalDeleteModalCloseClick}
          currentBlog={currentBlog}
        />
      )}
    </ProtectedRoute>
  );
}
