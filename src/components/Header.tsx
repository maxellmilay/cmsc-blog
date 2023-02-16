import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex items-center w-full px-10 py-5 border-b">
      <Link className="mr-5" href="/">
        <p className="font-bold text-2xl mr-16">CMSC Blog</p>
      </Link>
      <Link className="mr-5" href="/">
        <p className="font-light ">Blogs</p>
      </Link>
      <Link href="/about">
        <p className="font-light">About Us</p>
      </Link>
    </div>
  );
}
