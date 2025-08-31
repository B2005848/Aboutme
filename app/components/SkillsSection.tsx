"use client";
import { Image } from "@heroui/react";
const translations = {
  en: {
    title: "My skills",
    communication: "Communication",
    officeIT: "Office information technology",
    teamwork: "Teamwork",
    good: "Good",
    veryGood: "Very Good",
    aboutTech: "About technology skills...",
  },
  vi: {
    title: "Kỹ năng của tôi",
    communication: "Giao tiếp",
    officeIT: "Tin học văn phòng",
    teamwork: "Làm việc nhóm",
    good: "Tốt",
    veryGood: "Rất tốt",
    aboutTech: "Về kỹ năng công nghệ...",
  },
};

export default function SkillsSection({ lang }: { lang: "vi" | "en" }) {
  const t = translations[lang];
  const icons = [
    "git",
    "vue",
    "nodejs",
    "express",
    "tailwind",
    "typescript",
    "nextjs",
    "react",
    "mongodb",
  ];
  return (
    <section id="skills" className="mt-44">
      <h1
        data-aos="fade-up"
        className="mb-2 text-6xl font-bold text-center text-indigo-800"
      >
        {t.title}
      </h1>

      <div className="w-2/3 mx-auto">
        <div className="space-y-10">
          {/* Communication */}
          <div>
            <div data-aos="fade-right" className="flex items-center mb-2">
              <span data-aos="fade-right" className="font-bold">
                {t.communication}
              </span>
            </div>
            <div data-aos="fade-up" className="relative w-full h-6">
              <div
                className="absolute top-0 left-0 h-full bg-indigo-800 rounded-l-lg"
                style={{ width: "60%" }}
              >
                <span className="absolute left-0 w-full font-bold text-center text-white">
                  {t.good}
                </span>
              </div>
              <div
                className="absolute top-0 right-0 h-full bg-indigo-400 rounded-r-lg"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          {/* Office information technology */}
          <div>
            <div data-aos="fade-right" className="flex items-center mb-2">
              <span className="font-bold">{t.officeIT}</span>
            </div>
            <div className="relative w-full h-6" data-aos="fade-right">
              <div
                className="absolute top-0 left-0 h-full bg-indigo-800 rounded-l-lg"
                style={{ width: "60%" }}
              >
                <span className="absolute left-0 w-full font-bold text-center text-white ">
                  {t.good}
                </span>
              </div>
              <div
                className="absolute top-0 right-0 h-full bg-indigo-400 rounded-r-lg"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
          {/* Teamwork */}
          <div>
            <div data-aos="fade-right" className="flex items-center mb-2">
              <span className="font-bold">{t.teamwork}</span>
            </div>
            <div className="relative w-full h-6" data-aos="fade-up">
              <div
                className="absolute top-0 left-0 h-full bg-indigo-800 rounded-l-lg"
                style={{ width: "80%" }}
              >
                <span className="absolute left-0 w-full font-bold text-center text-white ">
                  {t.veryGood}
                </span>
              </div>
              <div
                className="absolute top-0 right-0 h-full bg-indigo-400 rounded-r-lg"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p className="mb-6 text-center">{t.aboutTech}</p>

        <div className="w-2/3 mx-auto overflow-hidden rounded-2xl">
          <div className="flex animate-marquee">
            {icons.concat(icons).map((icon, idx) => (
              <Image
                key={idx}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={icon}
                className="flex-shrink-0 w-12 h-12 mx-6"
              />
            ))}

            {/* nhân đôi để chạy mượt liên tục */}
            {icons.map((icon, idx) => (
              <Image
                key={`dup-${idx}`}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={icon}
                className="flex-shrink-0 w-12 h-12 mx-6"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
