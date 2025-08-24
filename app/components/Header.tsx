"use client";
import { useLang } from "../lang-context";
import { Image } from "@heroui/react";
import { useEffect, useState } from "react";
export default function Header() {
  const { lang, setLang } = useLang();
  const [activeSection, setActiveSection] = useState("/");
  const sections = ["/", "about", "exp", "projects", "skills", "contact"];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // hoặc [0.25, 0.5, 0.75]
        rootMargin: "-20% 0px -20% 0px",
      }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      className="fixed top-0 left-0 z-50 flex justify-center w-full h-16"
    >
      <div className="flex justify-center w-2/3 mt-2 shadow-xl bg-white/30 backdrop-blur-md rounded-2xl">
        <ul className="flex space-x-8 list-none">
          <li>
            <a
              className={`flex items-center gap-2 p-2 pl-5 pr-5 m-3 text-sm text-gray-700 transition-all duration-300 cursor-pointer hover:text-white hover:bg-indigo-800 rounded-2xl hover:shadow-xl/30 hover:shadow-gray-400 ${
                activeSection === "/"
                  ? "bg-indigo-800 text-white"
                  : "text-gray-700 hover:bg-indigo-800 hover:text-white"
              }`}
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              {lang === "vi" ? <>Trang Chủ</> : <>Home</>}
            </a>
          </li>
          <li>
            <a
              className={`flex items-center gap-2 p-2 pl-5 pr-5 m-3 text-sm text-gray-700 transition-all duration-300 cursor-pointer hover:text-white hover:bg-indigo-800 rounded-2xl hover:shadow-xl/30 hover:shadow-gray-400 ${
                activeSection === "about"
                  ? "bg-indigo-800 text-white"
                  : "text-gray-700 hover:bg-indigo-800 hover:text-white"
              }`}
              href="#about"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              {lang === "vi" ? <>Về Tôi</> : <>About</>}
            </a>
          </li>
          <li>
            <a
              className={`flex items-center gap-2 p-2 pl-5 pr-5 m-3 text-sm text-gray-700 transition-all duration-300 cursor-pointer hover:text-white hover:bg-indigo-800 rounded-2xl hover:shadow-xl/30 hover:shadow-gray-400 ${
                activeSection === "exp"
                  ? "bg-indigo-800 text-white"
                  : "text-gray-700 hover:bg-indigo-800 hover:text-white"
              }`}
              href="#exp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                />
              </svg>
              {lang === "vi" ? <>Kinh Nghiệm</> : <>Experience</>}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`flex items-center gap-2 p-2 pl-5 pr-5 m-3 text-sm text-gray-700 transition-all duration-300 cursor-pointer hover:text-white hover:bg-indigo-800 rounded-2xl hover:shadow-xl/30 hover:shadow-gray-400 ${
                activeSection === "projects"
                  ? "bg-indigo-800 text-white"
                  : "text-gray-700 hover:bg-indigo-800 hover:text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                />
              </svg>
              {lang === "vi" ? <>Dự Án</> : <>Projects</>}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`flex items-center gap-2 p-2 pl-5 pr-5 m-3 text-sm text-gray-700 transition-all duration-300 cursor-pointer hover:text-white hover:bg-indigo-800 rounded-2xl hover:shadow-xl/30 hover:shadow-gray-400 ${
                activeSection === "skills"
                  ? "bg-indigo-800 text-white"
                  : "text-gray-700 hover:bg-indigo-800 hover:text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              {lang === "vi" ? <>Kỹ Năng</> : <>Skills</>}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 p-2 pl-5 pr-5 m-3 text-sm text-white transition-all duration-300 bg-indigo-800 cursor-pointer hover:text-gray-700 rounded-2xl hover:shadow-xl/30 hover:shadow-gray-400 hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {lang === "vi" ? <>Liên Hệ</> : <>Contact</>}
            </a>
          </li>
        </ul>
      </div>

      <div className="absolute right-4 top-4" data-aos="fade-left">
        <button
          onClick={() => {
            const newLang = lang === "vi" ? "en" : "vi";
            console.log("Ngôn ngữ mới:", newLang); // hiển thị ra console
            setLang(newLang);
          }}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-200 rounded-2xl"
        >
          {lang === "vi" ? (
            <>
              <Image width={24} src="vnflag.svg" alt="Lá cờ Việt Nam" />{" "}
              Vietnamese
            </>
          ) : (
            <>
              <Image width={24} src="usaflag.svg" alt="Lá cờ Việt Nam" />{" "}
              English
            </>
          )}
        </button>
      </div>
    </header>
  );
}
