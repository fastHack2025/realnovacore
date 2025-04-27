// src/app/blog/page.tsx
"use client";

import BlogSection from "@/components/BlogSection";

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-black">
      <div className="container">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
          Derniers Articles du Blog
        </h1>
        <BlogSection />
      </div>
    </main>
  );
}
