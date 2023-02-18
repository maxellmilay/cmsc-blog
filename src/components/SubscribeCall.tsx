import React, { useState } from 'react';

interface PropsInterface {
  emailTextColor: string;
  emailColor: string;
  subscribeTextColor: string;
  subscribeColor: string;
  borderColor: string;
  placeholderColor: string;
}

export default function SubscribeCall(props: PropsInterface) {
  const {
    emailTextColor,
    emailColor,
    subscribeTextColor,
    subscribeColor,
    borderColor,
    placeholderColor,
  } = props;
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const handleSubscriberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscriberEmail(e.target.value);
  };

  return (
    <div className="flex relative w-fit">
      <div className={`flex ${emailColor} rounded-[50vh] font-product border ${borderColor}`}>
        <input
          placeholder="Enter Your Email"
          className={`text-xs ${emailColor} ${emailTextColor} ${placeholderColor} py-3 ml-5 mr-32 outline-none`}
          onChange={(e) => handleSubscriberInputChange(e)}
        />
      </div>
      <div
        className={`flex absolute right-0 justify-center items-center ${subscribeColor} h-full rounded-[50vh] py-3 px-7`}
      >
        <p className={`text-xs font-bold ${subscribeTextColor}`}>Subscribe</p>
      </div>
    </div>
  );
}
