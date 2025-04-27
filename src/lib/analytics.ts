// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return;
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }: { action: string; params: any }) => {
  if (!GA_TRACKING_ID) return;
  (window as any).gtag('event', action, params);
};
