"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface Resource {
  id: string;
  name: string;
  description: string;
  age: string;
  category: string;
  thumbnailUrl: string;
  documentUrl: string;
  isSpotlight: boolean;
  spotlightThumbnailUrl?: string;
}

// ── Single card ───────────────────────────────────────────────────────────────
export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-white rounded-[24px] sm:rounded-[38px] border border-gray-50/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col group hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all h-full ">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[1.5/1] rounded-[24px] sm:rounded-[38px] overflow-hidden mb-5">
        <Image
          src={resource.thumbnailUrl}
          alt={resource.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          unoptimized
        />
        {/* White pill age badge */}
        <span className="absolute top-3.5 left-3.5 bg-white text-gray-900 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
          {resource.age}
        </span>
      </div>

      {/* Content */}
      <div className="px-5 sm:px-7 pb-5 sm:pb-7 flex flex-col flex-1">
        <h3 className="text-[16px] sm:text-[17px] font-bold text-gray-900 leading-tight mb-2 line-clamp-2">
          {resource.name}
        </h3>
        <p className="text-[11px] sm:text-[12px] text-gray-400 leading-relaxed line-clamp-2 mb-6 flex-1">
          {resource.description}
        </p>

        <a
          href={resource.documentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14px] font-bold text-gray-900 hover:text-[#FF4D67] transition-colors group/link"
        >
          Download Pdf
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

// ── Paginated carousel (dynamic items per page) ────────────
interface Props {
  title: string;
  resources: Resource[];
}

export default function ResourceCarousel({ title, resources }: Props) {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else if (window.innerWidth < 1280) setItemsPerPage(3);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(resources?.length / itemsPerPage);
  const visible = resources?.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  // If page becomes invalid after resize, reset it
  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
      setPage(totalPages - 1);
    }
  }, [itemsPerPage, page, totalPages]);

  return (
    <section className="pt-8 pb-4">
      <div className="max-w-[1248px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[1.2rem] sm:text-[1.35rem] font-bold text-gray-900">
            {title}
          </h2>

          {/* Mobile pagination indicators */}
          <div className="flex sm:hidden gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${page === i ? "bg-[#FF4D67]" : "bg-gray-200"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Left arrow — appears after first page */}
          {page > 0 && (
            <button
              onClick={() => setPage((p) => p - 1)}
              aria-label="Previous"
              className="absolute left-[-12px] sm:left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}

          {/* Fixed column grid — no overflow, no half-cards */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
              gap: "1.25rem",
            }}
          >
            {visible?.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
            {/* Fill empty spots to keep grid layout stable */}
            {Array.from({ length: itemsPerPage - visible?.length })?.map(
              (_, i) => (
                <div key={`empty-${i}`} className="hidden sm:block" />
              ),
            )}
          </div>

          {/* Right arrow — only when more pages remain */}
          {page < totalPages - 1 && (
            <button
              onClick={() => setPage((p) => p + 1)}
              aria-label="Next"
              className="absolute right-[-12px] sm:right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#FF4D67] hover:scale-110 transition-all z-10"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
