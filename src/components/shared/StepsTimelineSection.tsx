import Image from "next/image";
import { asset } from "@/lib/assets";

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
}

export default function StepsTimelineSection({
  title,
  subtitle,
  steps,
  footnote,
  phoneImage,
  phoneImageAlt = "Tela do celular",
  bgColor = "bg-white",
}: StepsTimelineSectionProps) {
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

        {/* Content: Steps + Phone Mockup */}
        <div className="flex flex-col lg:flex-row lg:justify-center gap-[30px] lg:gap-10">
          {/* Timeline steps */}
          <div className="flex flex-col gap-0 lg:max-w-[658px]">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start gap-6">
                {/* Timeline column */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Circle */}
                  <div
                    className={`w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 ${
                      index === 0
                        ? "bg-azul"
                        : "border-2 border-[#D5D5D5] bg-transparent"
                    }`}
                  >
                    <span
                      className={`text-[14px] font-bold ${
                        index === 0 ? "text-white" : "text-[#D5D5D5]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="w-[2px] h-[40px] bg-[#D5D5D5]" />
                  )}
                </div>

                {/* Step text */}
                <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black pt-2">
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

          {/* Phone mockup */}
          <div className="relative flex items-center justify-center w-full lg:w-[499px] h-[329px] lg:h-[513px]">
            {/* White card background */}
            <div className="absolute bottom-0 w-full lg:w-[499px] h-[215px] lg:h-[334px] bg-white rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]" />
            {/* Phone image */}
            <Image
              src={asset(phoneImage)}
              alt={phoneImageAlt}
              width={192}
              height={329}
              className="relative z-10 object-contain h-full w-auto lg:w-[299px] lg:h-[513px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
