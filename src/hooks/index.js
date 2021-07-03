import { useEffect, useState } from 'react';

export function HasWindow() {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    setIsWindow(true);

    return () => setIsWindow(false);
  }, []);

  return isWindow;
}
