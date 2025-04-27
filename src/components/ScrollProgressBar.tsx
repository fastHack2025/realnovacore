'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollHeight(progress);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ height: `${scrollHeight}vh` }}
    />
  );
}
