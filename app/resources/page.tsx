"use client";
import ResourceHero from "@/components/resources/ResourceHero";
import ResourceCarousel from "@/components/resources/ResourceCarousel";
import QuickBrowse from "@/components/resources/QuickBrowse";
import { Resource } from "@/components/resources/ResourceCarousel";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

import { useGetResourcesQuery } from "@/app/api/resource";

export default function ResourcesPage() {
  const { data: apiResponse } = useGetResourcesQuery();
  const resources = apiResponse?.data;
  const trending = apiResponse?.data?.slice(0, 6);
  if (resources?.length === 0) {
    return <div>not found</div>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <ResourceHero />

      {/* New and Trending horizontal carousel */}
      <div className="pt-6 sm:pt-10">
        <ResourceCarousel title="New and Trending" resources={trending} />
      </div>

      {/* Quick Browse with category filter + grouped sections */}
      <QuickBrowse resources={resources} />
    </div>
  );
}
