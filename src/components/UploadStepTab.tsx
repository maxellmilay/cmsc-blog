import React from 'react';

interface PropsInterface {
  stepNumber: number;
  text: string;
  currentStep: number;
}

export default function UploadStepTab(props: PropsInterface) {
  const { stepNumber, text, currentStep } = props;
  const color = currentStep === stepNumber ? `blog-primary` : `blog-gray-6`;

  return (
    <div className="flex items-center pr-3 ">
      <div
        className={`flex justify-center items-center bg-${color} text-white w-7 h-7 rounded-full mx-4`}
      >
        <p className="text-xs">{stepNumber}</p>
      </div>
      <p className={`text-${color}`}>{text}</p>
    </div>
  );
}
