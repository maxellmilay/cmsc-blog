import React, { useContext } from 'react';
import { Open_Sans } from '@next/font/google';
import UserContext from '@/context/UserContext';
import Image from 'next/image';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

export default function ProfilePreview() {
  const { userContext: user } = useContext(UserContext);
  console.log(user.photoURL);

  return (
    <div className="flex justify-end items-center">
      <p className={`text-blog-primary text-xs ${openSansFont} font-sans font-bold`}>
        {user.displayName}
      </p>
      <div className="flex relative h-8 w-8 ml-3">
        {user.photoURL !== null && (
          <Image src={user.photoURL} alt="DP" fill className="object-cover rounded-[50vh]" />
        )}
      </div>
    </div>
  );
}
