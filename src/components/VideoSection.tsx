"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";

interface VideoItem {
  title: string;
  thumbnail?: string;
}

interface VideoSectionProps {
  title?: string;
  mainVideoImage?: string;
  mainVideoTitle?: string;
  videos?: VideoItem[];
  youtubeText?: string;
  backgroundColor?: string;
  sidebarWidth?: string;
}

function PlayIcon() {
  return (
    <div className="w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        className="ml-1"
      >
        <path d="M0 0L22 13L0 26V0Z" fill="#006CAD" />
      </svg>
    </div>
  );
}

function SmallPlayIcon() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="w-[21px] h-[21px] rounded-full bg-white/30 flex items-center justify-center">
        <svg width="7" height="8" viewBox="0 0 7 8" fill="none">
          <path d="M0 0L7 4L0 8V0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}

function VideoThumbnailIcon() {
  return (
    <div className="w-[72px] h-[72px] rounded-[10px] bg-[linear-gradient(135deg,#006CAD_0%,#012B71_100%)] flex items-center justify-center shrink-0 overflow-hidden relative">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        className="absolute inset-0"
      >
        <circle cx="56" cy="16" r="24" stroke="white" strokeOpacity="0.15" strokeWidth="1" fill="none" />
        <circle cx="56" cy="16" r="16" stroke="white" strokeOpacity="0.1" strokeWidth="1" fill="none" />
        <circle cx="16" cy="56" r="20" stroke="white" strokeOpacity="0.1" strokeWidth="1" fill="none" />
      </svg>
      <div className="relative z-10 w-[28px] h-[28px] rounded-full bg-white/20 flex items-center justify-center">
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
          <path d="M0 0L10 6L0 12V0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}

const defaultVideos: VideoItem[] = [
  { title: "Como funciona a automação comercial?" },
  { title: "Como aproveitar o Portal Clover?" },
  { title: "Como gerenciar suas vendas na Clover?" },
  { title: "Como acessar seu relatório de vendas?" },
];

export default function VideoSection({
  title = "Assista aos nossos tutoriais",
  mainVideoImage = "/images/clover/video-main.png",
  mainVideoTitle = "Como funciona a automação comercial?",
  videos = defaultVideos,
  youtubeText = "Se inscreva no nosso canal do Youtube",
  backgroundColor = "bg-[#F7F7F7]",
  sidebarWidth = "lg:w-[494px]",
}: VideoSectionProps) {
  const hasThumbnails = videos.some((v) => v.thumbnail);

  return (
    <section className={backgroundColor}>
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-8 lg:mb-[49px]">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px]">
          {/* Main video */}
          <div className="relative w-full lg:flex-1 h-[250px] lg:h-[480px] rounded-[16px] overflow-hidden cursor-pointer group">
            <div className="absolute inset-0 z-0">
              <Image
                src={asset(mainVideoImage)}
                alt={mainVideoTitle}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute  inset-0 bg-[linear-gradient(359.87deg,#00275E_20.33%,rgba(1,61,145,0)_53.44%),linear-gradient(0deg,rgba(0,41,97,0.2),rgba(0,41,97,0.2))] z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <PlayIcon />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 lg:p-8">
              <p className="text-[20px] lg:text-[26px] font-normal leading-[1.4] text-white">
                {mainVideoTitle}
              </p>
            </div>
          </div>

          {/* Sidebar video list */}
          <div className="relative lg:w-[380px]">

            <div className="absolute bottom-0 left-0 right-0 h-10 bg-[linear-gradient(to_top,rgb(244,244,244)_0%,rgba(244,244,244,0.8)_40%,transparent_100%)] z-10 pointer-events-none" />
            <div className={`flex flex-col gap-3 lg:gap-4 ${sidebarWidth} lg:h-[480px] overflow-y-auto scrollbar-hide pr-2`}>
              {videos.map((video, index) => (
                <div
                  key={`${video.title}-${index}`}
                  className="group/card flex items-center gap-4 bg-white rounded-[12px] p-3 lg:p-4 cursor-pointer duration-200 flex-1 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[linear-gradient(102.11deg,#006CAD_7.09%,#012B71_99.16%)]"
                >
                  {hasThumbnails && video.thumbnail ? (
                    <div className="w-[120px] h-[80px] rounded-[8px] overflow-hidden relative shrink-0">
                      <Image
                        src={asset(video.thumbnail)}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <SmallPlayIcon />
                    </div>
                  ) : (
                    <VideoThumbnailIcon />
                  )}
                  <p className="text-[18px] leading-[1.4] text-black group-hover/card:text-white transition-colors duration-200">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div></div>

        {/* YouTube CTA */}
        <div className="flex flex-col items-center gap-4 mt-10 lg:mt-[49px]">
          <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-azul text-center">
            {youtubeText}
          </p>
          <a
            href="#"
            className="btn-laranja inline-flex items-center gap-2"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path
                d="M19.615 2.184A2.506 2.506 0 0017.853.408C16.28 0 10 0 10 0S3.72 0 2.147.408A2.506 2.506 0 00.385 2.184C0 3.773 0 7.084 0 7.084s0 3.312.385 4.9a2.506 2.506 0 001.762 1.777C3.72 14.169 10 14.169 10 14.169s6.28 0 7.853-.408a2.506 2.506 0 001.762-1.777C20 10.396 20 7.084 20 7.084s0-3.311-.385-4.9z"
                fill="#fff"
              />
              <path d="M8 10.121V4.047l5.25 3.037L8 10.121z" fill="#FC8F01" />
            </svg>
            Youtube
          </a>
        </div>
      </div>
    </section>
  );
}
