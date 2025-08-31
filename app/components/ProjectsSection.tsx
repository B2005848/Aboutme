"use client";
import { Link } from "@heroui/react";
const projects = [
  {
    title: {
      vi: "Hệ Thống Quản Lí Phòng Khám",
      en: "Clinic Management System",
    },
    time: {
      vi: "3 tháng.",
      en: "3 months.",
    },
    descLabel: {
      vi: "Chức năng:",
      en: "Features:",
    },
    desc: {
      vi: "Quản lí bệnh nhân, quản lí nhân viên, quản lí lịch hẹn, thống kê doanh thu, thanh toán online, trò chuyện...",
      en: "Manage patients, staff, appointments, revenue statistics, online payment, chat...",
    },
    techLabel: {
      vi: "Công nghệ:",
      en: "Technologies:",
    },
    tech: "VueJS, NodeJS, ExpressJS, React Native, Sql Server, SocketIO, VNPAY demo...",
  },
  {
    title: {
      vi: "Website Quản Lí Hoa Tiêu",
      en: "Pilot Management Website",
    },
    time: {
      vi: "2 tháng.",
      en: "2 months.",
    },
    descLabel: {
      vi: "Chức năng:",
      en: "Features:",
    },
    desc: {
      vi: "Quản lí nhân viên, Quản lí ca làm việc, Thống kê số lượt đi, Xuất file excel, Quản lí tàu, Quản lí cầu cảng.",
      en: "Manage staff, shifts, trip statistics, export excel, manage ships, manage ports.",
    },
    techLabel: {
      vi: "Công nghệ:",
      en: "Technologies:",
    },
    tech: "VueJS, NodeJS, ExpressJS, MongoDB...",
  },
  {
    title: {
      vi: "Landing Page về Dịch Vụ Bốc Xếp",
      en: "Landing Page for Loading Services",
    },
    publicLabel: {
      vi: "Đã công khai",
      en: "Public",
    },
    time: {
      vi: "2 ngày.",
      en: "2 days.",
    },
    descLabel: {
      vi: "Mô tả:",
      en: "Description:",
    },
    desc: {
      vi: "Quảng bá về dịch vụ bốc xếp, vận chuyển hàng hóa, dọn dẹp kho xưởng, phun thuốc diệt côn trùng...",
      en: "Promote loading, cargo transport, warehouse cleaning, pest control services...",
    },
    techLabel: {
      vi: "Công nghệ:",
      en: "Technologies:",
    },
    tech: "NextJS, TailwindCSS, HeroUI, AOS Animation...",
    linkLabel: {
      vi: "Link website:",
      en: "Website link:",
    },
    link: "https://thienphuocbocxep.id.vn/",
  },
  {
    title: {
      vi: "Landing Page về Bất Động Sản",
      en: "Landing Page for Real Estate",
    },
    time: {
      vi: "2 ngày.",
      en: "2 days.",
    },
    descLabel: {
      vi: "Mô tả:",
      en: "Description:",
    },
    desc: {
      vi: "Quảng bá thương hiệu, cung cấp hình ảnh chung cư, thông tin ...",
      en: "Brand promotion, provide apartment images, information ...",
    },
    techLabel: {
      vi: "Công nghệ:",
      en: "Technologies:",
    },
    tech: "NextJS, TailwindCSS, HeroUI, AOS Animation...",
  },
];

export default function ProjectsSection({ lang }: { lang: "vi" | "en" }) {
  return (
    <section id="projects" className="mt-44">
      <div className="leading-relaxed">
        <h1 className="mb-2 text-6xl font-bold text-center text-indigo-800 ">
          {lang === "vi" ? <>CÁC DỰ ÁN CỦA TÔI</> : <>MY PROJECTS</>}
        </h1>

        <p className="mb-10 text-center text-indigo-400 hover:text-indigo-300 animate-[bounce_2s] ">
          <Link
            href="https://github.com/B2005848"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === "vi" ? <>Xem thêm...</> : <>See more...</>}
          </Link>
        </p>
        <div className="grid w-3/4 grid-cols-1 gap-10 mx-auto md:grid-cols-2 text-gray-50">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`px-5 py-5 bg-[#3664F4] shadow-2xl rounded-2xl hover:${
                idx % 2 === 0 ? "-translate-x-1.5" : "translate-x-1.5"
              } hover:transition-all duration-300 ease-in`}
              data-aos={idx % 2 === 0 ? "flip-left" : "flip-right"}
              data-aos-offset="200"
              data-aos-duration="1000"
            >
              <div className="flex gap-2">
                <h1 className="text-2xl font-bold">{project.title[lang]}</h1>
                {"publicLabel" in project && (
                  <span className="inline-flex items-center">
                    {project.publicLabel?.[lang]}
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <h1 className="font-bold">
                  {lang === "vi" ? "Thời gian: " : "Time: "}
                </h1>
                <span>{project.time[lang]}</span>
              </div>
              <div>
                <h1 className="font-bold">{project.descLabel[lang]}</h1>
                <p>{project.desc[lang]}</p>
              </div>
              <div className="flex gap-2 ">
                <h1 className="italic font-bold">{project.techLabel[lang]}</h1>
                <span className="italic">{project.tech}</span>
              </div>
              {"link" in project && (
                <div className="flex gap-2 ">
                  <h1 className="italic font-bold">
                    {project.linkLabel?.[lang]}
                  </h1>
                  <span className="italic">
                    <Link
                      className="text-amber-50 hover:text-blue-100"
                      href={project.link}
                      target="_blank"
                    >
                      {project.link}
                    </Link>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
