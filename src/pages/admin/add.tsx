import React, { useState } from 'react';
import Layout from '@/components/Layout';
import UploadStepTab from '@/components/UploadStepTab';
import UploadInputBox from '@/components/UploadInputBox';
import InputSection from '@/components/InputSection';
import ProtectedRoute from '@/components/ProtectedRoute';
import Head from 'next/head';
import { BlogInterface } from '@/interface/BlogInterface';
import UploadTextAreaBox from '@/components/UploadTextAreaBox';
import BlogTypeDropdown from '@/components/BlogTypeDropdown';

export default function Add() {
  const [currentStep, setCurrentStep] = useState(1);
  const [newBlog, setNewBlog] = useState({} as BlogInterface);

  const handleNextButtonClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackButtonClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (key: string, value: string) => {
    setNewBlog({ [key]: value, ...newBlog });
  };

  const handleFinishButtonClick = () => {
    console.log(newBlog);
  };

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
              <UploadStepTab stepNumber={1} text="Add Preview" currentStep={currentStep} />
              <UploadStepTab stepNumber={2} text="Add Main Content" currentStep={currentStep} />
              <UploadStepTab stepNumber={3} text="Finish" currentStep={currentStep} />
            </div>
          </div>
          <div className="flex flex-col mx-14 mt-10">
            {currentStep === 1 && (
              <>
                <InputSection type="Blog Title" objectKey="title" input={UploadInputBox} />
                <InputSection
                  type="Preview Text"
                  objectKey="previewText"
                  input={UploadTextAreaBox}
                />
                <InputSection type="Blog Type" objectKey="type" input={BlogTypeDropdown} />
              </>
            )}
            {currentStep === 2 && (
              <>
                <InputSection
                  type="Blog Content"
                  objectKey="description"
                  input={UploadTextAreaBox}
                ></InputSection>
                <InputSection
                  type="Image Caption"
                  objectKey="imageCaption"
                  input={UploadTextAreaBox}
                ></InputSection>
              </>
            )}
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
