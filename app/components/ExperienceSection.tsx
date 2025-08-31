"use client";
import { useState } from "react";
import ActivitiesPage from "../components/experience/ActivitiesPage";
import WorksPage from "../components/experience/WorkPage";
import EducationPage from "../components/experience/EducationPage";

export default function ExperienceSection({ lang }: { lang: "vi" | "en" }) {
  const [activePage, setActivePage] = useState<"work" | "ed" | "ach">("work");

  return (
    <section id="exp">
      <div className="flex justify-center leading-relaxed mt-44">
        <div
          className="flex flex-col items-center "
          data-aos="fade-up"
          data-aos-once="false"
        >
          <h2 className="inline-block px-10 py-1 text-6xl font-bold text-indigo-800">
            {lang === "vi" ? "Kinh Nghiệm Làm Việc" : "My Experience"}
          </h2>

          <p className="mt-3 italic text-gray-500">
            {lang === "vi" ? (
              <>
                &quot;Với hơn 2 năm kinh nghiệm trong lĩnh vực phát triển web,
                tôi đã tham gia nhiều dự án tập trung vào việc xây dựng các ứng
                dụng đáp ứng tốt, thân thiện với người dùng và có giao diện hấp
                dẫn.&quot;
              </>
            ) : (
              <>
                &quot;With over 2 years of experience in web development, I have
                worked on various projects that focus on building responsive,
                user-friendly, and visually appealing applications.&quot;
              </>
            )}
          </p>
        </div>
      </div>

      {/* Menu nhỏ để chuyển page con */}
      <div
        className="flex items-center justify-center px-2 py-2 m-6 shadow-2xl shadow-blue-600 rounded-2xl border-1 border-violet-500 bg-gradient-to-r from-blue-600 to-violet-600 backdrop-blur-md"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="flex justify-center basis-1/3">
          <button
            className={`px-3 py-2 w-full rounded-2xl font-bold ${
              activePage === "work"
                ? "font-bold bg-gradient-to-r to-blue-700 from-violet-700 text-[#FCEBE5]"
                : "text-gray-50"
            }`}
            onClick={() => setActivePage("work")}
          >
            {lang === "vi" ? "CÔNG VIỆC" : "WORKS"}
          </button>
        </div>

        <div className="flex justify-center basis-1/3">
          <button
            className={`px-3 py-2 w-full rounded-2xl font-bold ${
              activePage === "ed"
                ? "font-bold bg-gradient-to-r from-violet-500 to-blue-500 text-[#FCEBE5]"
                : "text-gray-50"
            }`}
            onClick={() => setActivePage("ed")}
          >
            {lang === "vi" ? "GIÁO DỤC" : "EDUCATION"}
          </button>
        </div>

        <div className="flex justify-center basis-1/3">
          <button
            className={`px-3 py-2 w-full rounded-2xl font-bold ${
              activePage === "ach"
                ? "bg-gradient-to-r from-blue-700 to-violet-700 text-[#FCEBE5]"
                : "text-gray-50"
            }`}
            onClick={() => setActivePage("ach")}
          >
            {lang === "vi" ? "HOẠT ĐỘNG" : "ACTIVITIES"}
          </button>
        </div>
      </div>

      {/* children */}
      <div className="m-6 mt-20">
        {activePage === "work" && <WorksPage />}
        {activePage === "ed" && <EducationPage />}
        {activePage === "ach" && <ActivitiesPage />}
      </div>
    </section>
  );
}
