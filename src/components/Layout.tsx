import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PropsInterface {
  children?: ReactNode;
}

export default function Layout(props: PropsInterface) {
  const { children } = props;

  return (
    <>
      <Header />
      <div className="flex w-full min-h-screen justify-center">{children}</div>
      <Footer />
    </>
  );
}
