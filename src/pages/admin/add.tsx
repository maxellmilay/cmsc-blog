import React, { useState } from 'react';
import Layout from '@/components/Layout';
import UploadStepTab from '@/components/UploadStepTab';
import UploadInputBox from '@/components/UploadInputBox';
import InputSection from '@/components/InputSection';

export default function Add() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Layout>
      <div className="flex flex-col w-full">
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
        <div className="flex flex-col h-10 mx-14 mt-10">
          <InputSection type="Blog Title" input={UploadInputBox} />
        </div>
      </div>
    </Layout>
  );
}
