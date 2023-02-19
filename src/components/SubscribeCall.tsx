import React, { useState } from 'react';
import Swal from 'sweetalert2';

interface PropsInterface {
  emailTextColor: string;
  emailColor: string;
  subscribeTextColor: string;
  subscribeColor: string;
  borderColor: string;
  className: string;
}

export default function SubscribeCall(props: PropsInterface) {
  const { emailTextColor, emailColor, subscribeTextColor, subscribeColor, borderColor, className } =
    props;
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const handleSubscriberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscriberEmail(e.target.value);
  };

  const handleSubscribeButtonClick = () => {
    Swal.fire({
      title: 'Thank You!',
      text: 'Email subscription is still an upcoming feature, stay tuned',
      icon: 'info',
      confirmButtonText: 'Back',
    });
  };

  return (
    <div className="flex relative w-fit">
      <div className={`flex ${emailColor} rounded-[50vh] font-product border ${borderColor}`}>
        <input
          placeholder="Enter Your Email"
          className={`text-xs ${emailColor} ${emailTextColor} py-3 ml-5 mr-24 sm:mr-32 outline-none ${className}`}
          onChange={(e) => handleSubscriberInputChange(e)}
          value={subscriberEmail}
        />
      </div>
      <div
        className={`flex absolute right-0 justify-center items-center bg-${subscribeColor} h-full rounded-[50vh] py-3 px-7`}
      >
        <button
          className={`text-xs font-bold ${subscribeTextColor}`}
          onClick={handleSubscribeButtonClick}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
