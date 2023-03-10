import React from 'react';
import Image from 'next/image';
import { Open_Sans } from '@next/font/google';
import { ContributorInterface } from '@/interface/ContributorInterface';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const openSansFont = openSans.variable;

interface PropsInterface {
  contributor: ContributorInterface;
}

export default function ContributorCard(props: PropsInterface) {
  const { contributor } = props;

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="relative w-60 lg:w-72 h-60 lg:h-72">
        <Image
          src={contributor.imageURL}
          alt="Contributor"
          fill
          className="object-cover rounded-[50%]"
        />
      </div>
      <p className={`${openSansFont} font-sans text-lg sm:text-2xl font-bold mt-3`}>
        {contributor.name}
      </p>
      <p className="font-product font-light mt-3 text-xs sm:text-sm">{contributor.role}</p>
    </div>
  );
}
