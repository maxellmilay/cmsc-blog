import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Dropdown from './Dropdown';
import useWindowSize from '@/hooks/useScreen';
import { useRouter } from 'next/router';

interface PropsInterface {
  children?: ReactNode;
}

export default function Layout(props: PropsInterface) {
  const { children } = props;
  const router = useRouter();
  const { width } = useWindowSize();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = (link: string) => {
    router.push(link);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (width > 768) {
      setIsDropdownOpen(false);
    }
  }, [width]);

  return (
    <>
      <Header setDropdownClick={handleDropdownClick} />
      {isDropdownOpen && <Dropdown setLinkClick={handleLinkClick} />}
      <div className="flex w-full min-h-screen justify-center">{children}</div>
      <Footer />
    </>
  );
}
