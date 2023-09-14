import React from 'react';
import Seo from './seo';
import { preloadImages } from '../utils';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const homePageImages = [`/images/brush_stroke.png`, '/images/me-1.jpg'];

    const images = [...homePageImages];

    preloadImages(images, () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <PreLoader />}
      <div>{children}</div>
    </>
  );
}

export const Head = () => <Seo />;
export default Layout;

const PreLoader = () => {
  React.useEffect(() => {
    const bodyNode = document.querySelector('body');
    if (!bodyNode) return;

    bodyNode.style.overflow = 'hidden';

    return () => {
      bodyNode.style.overflow = '';
    };
  }, []);
  return <div className="fixed w-full h-full bg-white z-50" />;
};
