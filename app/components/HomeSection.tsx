"use client";
import { TypeAnimation } from "react-type-animation";
import { Image } from "@heroui/react";
export default function HomeSection({ lang }: { lang: "vi" | "en" }) {
  const link = process.env.NEXT_PUBLIC_MY_LINK;
  return (
    <section
      className="flex items-center justify-center w-full px-6 py-12"
      id="/"
    >
      <div className="flex flex-row items-center gap-8 max-w-7xl">
        <div className="basis-2/3">
          <a
            href={link}
            className="inline-flex items-center gap-2 px-10 py-1 mb-10 text-sm text-white bg-blue-600 shadow-lg cursor-pointer shadow-blue-600/50 rounded-2xl"
            target="_blank"
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
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
            {lang === "vi"
              ? "Sản sàng nhận công việc tự do"
              : "Available for freelance work"}
          </a>

          <h1
            data-aos="fade-down"
            data-aos-once="true"
            className="mb-2 text-4xl font-bold leading-relaxed"
          >
            {lang === "vi" ? (
              <>
                Xin Chào, Tôi là Lê Thanh Nam <br /> {"<"}Dev Miền Tây{">"}
              </>
            ) : (
              <>
                Hi, I'm Le Thanh Nam {"<"}Dev Mien Tay{">"}
              </>
            )}
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            className="mb-2 text-2xl"
          >
            <TypeAnimation
              key={lang} // ← quan trọng
              sequence={
                lang === "vi"
                  ? [
                      "Nhà phát triển Website.",
                      1000,
                      "Đam mê thiết kế UX/UI.",
                      2000,
                    ]
                  : ["Website Developer.", 1000, "UX/UI Enthusiast.", 2000]
              }
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </h2>

          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="leading-relaxed text-justify"
          >
            {lang === "vi" ? (
              <>
                Tôi là một lập trình viên web với niềm đam mê tạo ra các trang
                web đẹp mắt và chức năng. Tôi thích làm việc với các framework
                để xây dựng các ứng dụng đáp ứng tốt trên mọi thiết bị và thân
                thiện với người dùng, với hơn 2 năm kinh nghiệm trong phát triển
                web.
              </>
            ) : (
              <>
                I'm a web developer with a passion for creating beautiful and
                functional websites. I enjoy working with frameworks to build
                responsive and user-friendly applications with 2+ years of
                experience in web development.{" "}
              </>
            )}
          </p>

          <div className="flex mt-5 space-x-10 text-gray-500">
            <div className="inline-flex items-center gap-2">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {lang === "vi" ? <>Việt Nam</> : <>Viet Nam</>}
            </div>
            <div className="inline-flex items-center gap-2">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              {lang === "vi" ? <>Sẳn sàng ngay bây giờ</> : <>Available Now</>}
            </div>
          </div>

          {/* ---------------------VIEW PROJECTS--------------------- */}
          <div className="flex mt-5 space-x-10 text-gray-500">
            <div className="px-10 py-2 font-bold text-white shadow-2xl bg-indigo-950 rounded-2xl shadow-indigo-800/80">
              <a className="inline-flex items-center gap-2" href="#projects">
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
                {lang === "vi" ? <>Các Dự Án</> : <>View Projects</>}
              </a>
            </div>

            {/* ----- LET'S WORK TOGETHER----------- */}
            <div className="px-10 py-2 font-bold shadow-2xl text-indigo-950 border-1 rounded-2xl shadow-gray-400/80">
              <a className="inline-flex items-center gap-2" href={link}>
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
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                {lang === "vi" ? (
                  <>Làm việc cùng nhau nào!</>
                ) : (
                  <>Let's Work Together!</>
                )}
              </a>
            </div>
          </div>

          {/* ----------FOLLOW ME------------- */}
          <div className="mt-8 text-gray-500">
            <h4 className="flex gap-8 text-sm">
              {lang === "vi" ? <>Theo dõi tôi:</> : <>Follow me:</>}
              <ul className="flex items-center gap-8">
                <li>
                  <a href="https://www.facebook.com/coderNam/" target="_blank">
                    <Image
                      width={16}
                      src="/icon/icons8-facebook-logo.svg"
                      alt="fb"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/ltn181202/"
                    target="_blank"
                  >
                    <Image
                      width={16}
                      src="/icon/icons8-instagram-logo.svg"
                      alt="instagram"
                    />
                  </a>
                </li>

                <li>
                  <a href="https://www.tiktok.com/@ltnam2002" target="_blank">
                    <Image
                      width={16}
                      src="/icon/icons8-tiktok-logo.svg"
                      alt="tiktok"
                    />
                  </a>
                </li>
              </ul>
            </h4>
          </div>
        </div>

        {/* IMAGE */}
        <div className="basis-1/3">
          <Image
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-once="true"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            src="imghomeme.webp"
            // src="https://images.unsplash.com/photo-1755826525115-40dc08fcd1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
            isZoomed
            alt="Thanh Nam Dev Mien Tay, Thanh Nam, Lê Thanh Nam, Dev Miền Tây"
            className="object-cover w-full h-full rounded-2xl "
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
