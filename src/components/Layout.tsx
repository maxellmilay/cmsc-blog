import { ReactNode } from 'react';
import Header from './Header';

interface PropsInterface {
  children?: ReactNode;
}

export default function Layout(props: PropsInterface) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
}
