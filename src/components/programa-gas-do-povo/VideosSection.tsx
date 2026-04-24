"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

function PlayIcon() {
  return (
    <div className="w-[56px] h-[56px] lg:w-[79px] lg:h-[79px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        className="ml-1 w-[16px] h-[18px] lg:w-[22px] lg:h-[26px]"
      >
        <path d="M0 0L22 13L0 26V0Z" fill="#006CAD" />
      </svg>
    </div>
  );
}

const videos = [
  {
    title: "Como aceitar o Programa Gás do Povo com a azulzinha aproxima",
    thumbnail: "/images/programa-gas-do-povo/video-1-thumb.png",
    videoSrc: "https://azulzinhadacaixa.com.br/midias/aproxima-gas-do-povo.mp4",
  },
  {
    title: "Como aceitar o Programa Gás do Povo com a azulzinha",
    thumbnail: "/images/programa-gas-do-povo/video-2-thumb.png",
    videoSrc: "https://azulzinhadacaixa.com.br/midias/azulzinha-smart-gas-do-povo.mp4",
  },
];

export default function VideosSection() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] flex flex-col items-center gap-10 lg:gap-14">
        <h2 className="section-title text-azul max-w-[1020px]">
          Assista aos vídeos e <span className="font-bold">veja como é fácil</span> receber pagamentos através do Programa Gás do Povo
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full">
          {videos.map((video, index) => (
            <div key={video.title} className="flex flex-col gap-4 lg:gap-6">
              <h3 className="text-[20px] lg:text-[24px] leading-[1.3] text-azul text-center">
                {video.title}
              </h3>
              <div className="relative w-full aspect-[16/9] rounded-[12px] overflow-hidden">
                {playingIndex === index ? (
                  <video
                    src={video.videoSrc}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full cursor-pointer group"
                    onClick={() => setPlayingIndex(index)}
                  >
                    <Image
                      src={asset(video.thumbnail)}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayIcon />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
