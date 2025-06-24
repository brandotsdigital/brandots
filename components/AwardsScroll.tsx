'use client';

import React from "react"

const awards = [
  { src: "/images/certi7.png", alt: "Great place to work" },
  { src: "/images/certi2.svg", alt: "ISO Certification" },
  { src: "/images/certi3.png", alt: "Economic Times Growth Champions 2023" },
  { src: "/images/certi4.png", alt: "Times Business Awards" },
  { src: "/images/certi6.png", alt: "Clutch 100 Fastest Growth 2025" },
  { src: "/images/certi1.webp", alt: "Gold Award" },
]

export default function AwardsScroll() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Trusted by Leading Partners</h4>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex items-center animate-awards-scroll space-x-16 md:space-x-24">
            {awards.concat(awards).map((award, idx) => (
              <div key={idx} className="flex-shrink-0 flex justify-center items-center">
                <img
                  src={award.src}
                  alt={award.alt}
                  className="h-20 w-auto mx-auto object-contain"
                  style={{ minWidth: 80 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes awards-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-awards-scroll {
          animation: awards-scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  )
}
