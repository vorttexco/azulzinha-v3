"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import { useState } from "react";
import { BlogPost } from "@/components/shared/BlogCard";

function getPostBanner(post: BlogPost): { src: string; alt: string } {
  const banner = post.content.find((c) => c.type === "banner");
  if (banner && typeof banner.data === "object") {
    return {
      src: `/assets/${banner.data.src || post.postId + ".jpg"}`,
      alt: banner.data.altImg || post.altImg,
    };
  }
  return { src: `/assets/${post.postId}.jpg`, alt: post.altImg };
}

function getPostHtml(post: BlogPost): string {
  const texto = post.content.find((c) => c.type === "texto");
  if (texto && typeof texto.data === "string") {
    return texto.data;
  }
  return "";
}

function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#006CAD_0%,#012B71_100%)] flex items-center justify-center rounded-[30px]">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="opacity-30">
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="white" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="2" stroke="white" strokeWidth="1.5" />
        <path d="M2 16L7 11L10 14L15 9L22 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

interface PostContentProps {
  post: BlogPost;
}

export default function PostContent({ post }: PostContentProps) {
  const banner = getPostBanner(post);
  const html = getPostHtml(post);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pt-14 lg:pt-20 pb-14 lg:pb-[110px]">
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-8 lg:gap-[43px]">
          {/* Title */}
          <h1 className="text-[24px] lg:text-[36px] font-bold leading-[1.3] text-azul text-center max-w-[600px]">
            {post.title}
          </h1>

          {/* Banner image */}
          <div className="relative w-full h-[200px] lg:h-[423px] rounded-[30px] overflow-hidden">
            {imgError ? (
              <ImagePlaceholder />
            ) : (
              <Image
                src={asset(banner.src)}
                alt={banner.alt}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          {/* HTML content */}
          {html && (
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
