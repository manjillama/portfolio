import { useEffect, useState } from 'react';

export function hasWindow() {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    setIsWindow(true);

    return () => setIsWindow(false);
  }, []);

  return isWindow;
}
