"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import { useState } from "react";

export interface BlogPost {
  postId: string;
  category: string[];
  date: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  type: string;
  altImg: string;
  content: { type: string; data: { src?: string; altImg?: string } | string }[];
}

function getPostImage(post: BlogPost): string {
  const banner = post.content.find((c) => c.type === "banner");
  if (banner && typeof banner.data === "object" && banner.data.src) {
    return `/assets/${banner.data.src}`;
  }
  return `/assets/${post.postId}.jpg`;
}

function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#006CAD_0%,#012B71_100%)] flex items-center justify-center">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="opacity-30">
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="white" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="2" stroke="white" strokeWidth="1.5" />
        <path d="M2 16L7 11L10 14L15 9L22 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function BlogImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <ImagePlaceholder />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

interface BlogCardLargeProps {
  post: BlogPost;
}

export function BlogCardLarge({ post }: BlogCardLargeProps) {
  return (
    <a href={`/blog/${post.postId}`} className="flex flex-col gap-4 group">
      <div className="relative w-full h-[192px] lg:h-[510px] rounded-[30px] overflow-hidden">
        <BlogImage
          src={asset(getPostImage(post))}
          alt={post.altImg}
          className="object-cover"
        />
      </div>
      <span className="text-[18px] leading-[1.4] text-[#666666]">{post.date}</span>
      <h3 className="text-[24px] lg:text-[32px] leading-[1.3] text-azul">
        {post.title}
      </h3>
      <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
        {post.description}
      </p>
      <span className="btn-laranja self-start">{post.cta || "Leia mais"}</span>
    </a>
  );
}

interface BlogCardSmallProps {
  post: BlogPost;
}

export function BlogCardSmall({ post }: BlogCardSmallProps) {
  return (
    <a href={`/blog/${post.postId}`} className="flex flex-col gap-4 group">
      <div className="relative w-full h-[192px] lg:h-[237px] rounded-[30px] overflow-hidden">
        <BlogImage
          src={asset(getPostImage(post))}
          alt={post.altImg}
          className="object-cover"
        />
      </div>
      <span className="text-[18px] leading-[1.4] text-[#666666]">{post.date}</span>
      <h3 className="text-[24px] lg:text-[26px] leading-[1.3] text-azul">
        {post.title}
      </h3>
      <span className="text-[18px] leading-[1.33] text-laranja">Leia mais</span>
    </a>
  );
}
