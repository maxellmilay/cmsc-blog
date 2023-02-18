import React from 'react';

interface PropsInterface {
  emailTextColor: string;
  emailColor: string;
  subscribeTextColor: string;
  subscribeColor: string;
  borderColor: string;
}

export default function SubscribeCall(props: PropsInterface) {
  const { emailTextColor, emailColor, subscribeTextColor, subscribeColor, borderColor } = props;

  return (
    <div className="flex relative w-fit">
      <div className={`flex ${emailColor} rounded-[50vh] font-product border ${borderColor}`}>
        <p className={`text-xs ${emailTextColor} my-3 ml-5 mr-32`}>Enter your email</p>
      </div>
      <div
        className={`flex absolute right-0 justify-center items-center ${subscribeColor} h-full rounded-[50vh] py-3 px-7`}
      >
        <p className={`text-xs font-bold ${subscribeTextColor}`}>Subscribe</p>
      </div>
    </div>
  );
}
