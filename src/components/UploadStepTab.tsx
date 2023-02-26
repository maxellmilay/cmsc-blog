import React from 'react';

interface PropsInterface {
  stepNumber: number;
  text: string;
  currentStep: number;
}

export default function UploadStepTab(props: PropsInterface) {
  const { stepNumber, text, currentStep } = props;
  const backgroundColor = currentStep === stepNumber ? `bg-blog-primary` : `bg-blog-gray-6`;
  const textColor = currentStep === stepNumber ? `text-blog-primary` : `text-blog-gray-6`;

  return (
    <div className="flex items-center pr-2 ">
      <div
        className={`flex justify-center items-center ${backgroundColor} text-white w-7 h-7 rounded-full mx-4`}
      >
        <p className="text-xs">{stepNumber}</p>
      </div>
      <p className={`${textColor}`}>{text}</p>
    </div>
  );
}
