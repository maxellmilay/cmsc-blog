import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import UploadStepTab from '@/components/UploadStepTab';
import UploadInputBox from '@/components/UploadInputBox';
import InputSection from '@/components/InputSection';
import ProtectedRoute from '@/components/ProtectedRoute';
import Head from 'next/head';
import { BlogInterface } from '@/interface/BlogInterface';
import UploadTextAreaBox from '@/components/UploadTextAreaBox';
import BlogTypeDropdown from '@/components/BlogTypeDropdown';
import AddBlogPreview from '@/components/AddBlogPreview';
import month from '@/constants/months';
import { postBlog } from '@/firebase/db';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

export default function Add() {
  const [currentStep, setCurrentStep] = useState(1);
  const [newBlog, setNewBlog] = useState({ type: 'Lifestyle' } as BlogInterface);
  const router = useRouter();

  const handleNextButtonClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackButtonClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (key: string, value: string) => {
    setNewBlog({ ...newBlog, [key]: value });
  };

  const handleFinishButtonClick = () => {
    postBlog(newBlog);
    Swal.fire({
      title: 'Blog Uploaded!',
      text: 'You will now be redirected to the home page',
      icon: 'success',
      confirmButtonText: 'Go to Home',
    }).then(() => {
      router.push('/');
    });
  };

  const handleStepTabButtonClick = (step: number) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    const dateData = new Date();
    const date = {
      year: String(dateData.getFullYear()),
      month: month[dateData.getMonth()],
      day: String(dateData.getDate()),
    };
    setNewBlog({ ...newBlog, date: date });
  }, []);

  return (
    <ProtectedRoute>
      <Head>
        <title>Add Blog</title>
      </Head>
      <Layout>
        <div className="flex flex-col w-full pb-10">
          <div className="flex border-b custom-justify-between">
            <div className="flex border-b-2 border-black py-5 px-16">
              <p className="font-bold">UPLOAD YOUR OWN BLOG</p>
            </div>
            <div className="flex mr-10">
              <UploadStepTab
                stepNumber={1}
                text="Add Preview"
                currentStep={currentStep}
                setStepTabButtonClick={handleStepTabButtonClick}
              />
              <UploadStepTab
                stepNumber={2}
                text="Add Main Content"
                currentStep={currentStep}
                setStepTabButtonClick={handleStepTabButtonClick}
              />
              <UploadStepTab
                stepNumber={3}
                text="Finish"
                currentStep={currentStep}
                setStepTabButtonClick={handleStepTabButtonClick}
              />
            </div>
          </div>
          <div className="flex flex-col mx-14 mt-10">
            {currentStep === 1 && (
              <>
                <InputSection
                  type="Blog Title"
                  objectKey="title"
                  input={UploadInputBox}
                  setInputChange={handleInputChange}
                  newBlog={newBlog}
                />
                <InputSection
                  type="Preview Text"
                  objectKey="previewText"
                  input={UploadTextAreaBox}
                  setInputChange={handleInputChange}
                  newBlog={newBlog}
                />
                <InputSection
                  type="Blog Type"
                  objectKey="type"
                  input={BlogTypeDropdown}
                  setInputChange={handleInputChange}
                  newBlog={newBlog}
                />
              </>
            )}
            {currentStep === 2 && (
              <>
                <InputSection
                  type="Blog Content"
                  objectKey="description"
                  input={UploadTextAreaBox}
                  setInputChange={handleInputChange}
                  newBlog={newBlog}
                ></InputSection>
                <InputSection
                  type="Blog Image"
                  objectKey="picURL"
                  input={UploadInputBox}
                  setInputChange={handleInputChange}
                  newBlog={newBlog}
                />
                <InputSection
                  type="Image Caption"
                  objectKey="imageCaption"
                  input={UploadTextAreaBox}
                  setInputChange={handleInputChange}
                  newBlog={newBlog}
                ></InputSection>
              </>
            )}
            {currentStep === 3 && <AddBlogPreview newBlog={newBlog} />}
            <div
              className={`flex ${
                currentStep == 1 ? 'justify-end' : 'custom-justify-between'
              } mt-10`}
            >
              {currentStep !== 1 && (
                <button
                  type="button"
                  className="bg-blog-primary text-white px-10 py-4 rounded-full"
                  onClick={handleBackButtonClick}
                >
                  Back
                </button>
              )}
              {currentStep !== 3 && (
                <button
                  type="button"
                  className="bg-blog-primary text-white px-10 py-4 rounded-full"
                  onClick={handleNextButtonClick}
                >
                  Next
                </button>
              )}
              {currentStep === 3 && (
                <button
                  type="button"
                  className="bg-blog-primary text-white px-10 py-4 rounded-full"
                  onClick={handleFinishButtonClick}
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
