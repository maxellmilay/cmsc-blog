import React from 'react';
import Image from 'next/image';
import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  contributor: {
    id: number;
    name: string;
    role: string;
    imageURL: string;
  };
}

export default function ContributorCard(props: PropsInterface) {
  const { contributor } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-72 h-72">
        <Image
          src={contributor.imageURL}
          alt="Contributor"
          fill
          className="object-cover rounded-[50%]"
        />
      </div>
      <p className={`${openSansFont} font-sans text-2xl font-bold mt-3`}>{contributor.name}</p>
      <p className="font-product font-light mt-3 text-sm">{contributor.role}</p>
    </div>
  );
}
