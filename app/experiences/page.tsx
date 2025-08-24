import { useState } from "react";
import AchivermentPage from "./achiverment/page";
import WorksPage from "./work/page";
import EducationPage from "./education/page";
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
            {lang === "vi" ? <>Kinh Nghiệm Làm Việc</> : <>My Experience</>}
          </h2>

          <p className="mt-3 italic text-gray-500">
            {lang === "vi" ? (
              <>
                "Với hơn 2 năm kinh nghiệm trong lĩnh vực phát triển web, tôi đã
                tham gia nhiều dự án tập trung vào việc xây dựng các ứng dụng
                đáp ứng tốt, thân thiện với người dùng và có giao diện hấp dẫn."
              </>
            ) : (
              <>
                "With over 2 years of experience in web development, I have
                worked on various projects that focus on building responsive,
                user-friendly, and visually appealing applications."
              </>
            )}
          </p>
        </div>
      </div>
      {/* Menu nhỏ để chuyển page con */}
      <div
        className="flex items-center justify-center px-2 py-2 m-5 mt-4 shadow-2xl rounded-2xl border-1"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="flex justify-center basis-1/3">
          <button
            className={`px-3 py-2  w-full rounded-2xl ${
              activePage === "work"
                ? "font-bold bg-indigo-800 text-[#FCEBE5]"
                : "text-gray-500"
            }`}
            onClick={() => setActivePage("work")}
          >
            {lang === "vi" ? "CÔNG VIỆC" : "WORKS"}
          </button>
        </div>

        <div className="flex justify-center basis-1/3">
          <button
            className={`px-3 py-2 w-full rounded-2xl ${
              activePage === "ed"
                ? "font-bold bg-indigo-800 text-[#FCEBE5]"
                : "text-gray-500"
            }`}
            onClick={() => setActivePage("ed")}
          >
            {lang === "vi" ? "GIÁO DỤC" : "EDUCATION"}
          </button>
        </div>

        <div className="flex justify-center basis-1/3">
          <button
            className={`px-3 py-2 w-full rounded-2xl ${
              activePage === "ach"
                ? "font-bold bg-indigo-800 text-[#FCEBE5]"
                : "text-gray-500"
            }`}
            onClick={() => setActivePage("ach")}
          >
            {lang === "vi" ? "HOẠT ĐỘNG" : "ACTIVITIES"}
          </button>
        </div>
      </div>

      {/* childern */}
      <div className="flex justify-center mt-6">
        {activePage === "work" && <WorksPage />}
        {activePage === "ed" && <EducationPage />}
        {activePage === "ach" && <AchivermentPage />}
      </div>
    </section>
  );
}
