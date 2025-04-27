'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// 🛡️ ScrollSmoother is optional and protected
// Commented if unavailable, but structure ready

gsap.registerPlugin(ScrollTrigger);

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <div id="smooth-wrapper" className="overflow-x-hidden">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
