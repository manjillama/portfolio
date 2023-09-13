import React from 'react';
import Seo from './seo';
import { preloadImages } from '../utils';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const homePageImages = [`/images/brush_stroke.png`, '/images/me-1.jpg', '/images/mount_phone.jpg'];

    const images = [...homePageImages];

    preloadImages(images, () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <div className="fixed w-full h-full bg-white z-50" />}
      <div>{children}</div>
    </>
  );
}

export const Head = () => <Seo />;
