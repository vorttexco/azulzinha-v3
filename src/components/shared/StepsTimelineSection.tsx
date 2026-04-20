"use client";

import Image from "next/image";
import { asset } from "@/lib/assets";
import { useState, useEffect, useRef } from "react";

interface StepItem {
  number: number;
  text: string;
}

interface StepsTimelineSectionProps {
  title: string;
  subtitle?: string;
  steps: StepItem[];
  footnote?: string;
  phoneImage: string;
  phoneImageAlt?: string;
  bgColor?: string;
  stepImages?: string[];
  stepInterval?: number;
}

export default function StepsTimelineSection({
  title,
  subtitle,
  steps,
  footnote,
  phoneImage,
  phoneImageAlt = "Tela do celular",
  bgColor = "bg-white",
  stepImages,
  stepInterval = 4000,
}: StepsTimelineSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [imgKey, setImgKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasStepImages = stepImages && stepImages.length > 0;

  const goToStep = (index: number) => {
    setActiveStep(index);
    setImgKey(k => k + 1);
  };

  useEffect(() => {
    if (!hasStepImages) return;

    timerRef.current = setInterval(() => {
      setActiveStep(prev => {
        const next = (prev + 1) % steps.length;
        setImgKey(k => k + 1);
        return next;
      });
    }, stepInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeStep, hasStepImages, steps.length, stepInterval]);

  const handleStepClick = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goToStep(index);
  };

  return (
    <section className={bgColor}>
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 flex flex-col gap-[30px] lg:gap-[60px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="section-title text-azul">{title}</h2>
          {subtitle && (
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[802px]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content: Steps + Image */}
        <div className="flex flex-col lg:flex-row lg:justify-center gap-[30px] lg:gap-10">
          {/* Timeline steps */}
          <div className="flex flex-col gap-4 lg:max-w-[658px]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex items-start gap-6 ${hasStepImages ? "cursor-pointer group" : ""}`}
                onClick={hasStepImages ? () => handleStepClick(index) : undefined}
              >
                {/* Circle indicator */}
                <div
                  className={`w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    hasStepImages
                      ? index <= activeStep
                        ? "bg-azul"
                        : "border-2 border-[#D5D5D5] bg-transparent group-hover:border-azul"
                      : index === 0
                      ? "bg-azul"
                      : "border-2 border-[#D5D5D5] bg-transparent"
                  }`}
                >
                  {(hasStepImages ? index <= activeStep : index === 0) && (
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.711657 5.76206L5.2411 10.2915L15.3065 0.72935" stroke="white" strokeWidth="2" />
                    </svg>
                  )}
                </div>

                {/* Step text */}
                <p
                  className={`text-[16px] lg:text-[18px] leading-[1.4] pt-2 transition-colors duration-300 ${
                    hasStepImages && index === activeStep
                      ? "text-azul font-semibold"
                      : "text-black"
                  }`}
                >
                  {step.text}
                </p>
              </div>
            ))}

            {footnote && (
              <p className="text-[14px] leading-[1.4] text-[#666666] mt-6 lg:ml-[62px]">
                {footnote}
              </p>
            )}
          </div>

          {/* Step image / Phone mockup */}
          <div className="relative flex items-center justify-center w-full lg:w-[499px] h-[329px] lg:h-[513px]">
            <div className="absolute bottom-0 w-full lg:w-[499px] h-[215px] lg:h-[334px] bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]" />
            {hasStepImages ? (
              <Image
                key={imgKey}
                src={asset(stepImages[activeStep])}
                alt={`Passo ${activeStep + 1}`}
                width={299}
                height={513}
                className="relative z-10 object-contain h-full w-auto lg:w-[299px] lg:h-[513px] animate-fade-in"
              />
            ) : (
              <Image
                src={asset(phoneImage)}
                alt={phoneImageAlt}
                width={192}
                height={329}
                className="relative z-10 object-contain h-full w-auto lg:w-[299px] lg:h-[513px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
