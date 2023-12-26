import { useState, useEffect, RefObject } from 'react';

export const useElementWidth = (ref: RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
        if (ref?.current?.offsetWidth) {
            setWidth(ref.current.offsetWidth);
        }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  return { width };
};