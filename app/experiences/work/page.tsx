"use client";
export default function WorksPage({ lang }: { lang: "vi" | "en" }) {
  return (
    <div className="flex flex-row items-center justify-center py-10 space-x-10 bg-gray-100 shadow-lg h-80 rounded-2xl">
      <div className="flex flex-col space-y-5 ">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
          className="inline-flex items-center gap-2"
        >
          <h1 className="font-bold">
            {lang === "vi" ? <>Tên công ty:</> : <>Company name:</>}
          </h1>

          <p>
            {lang === "vi" ? (
              <>VNPT - Tập đoàn Bưu chính Viễn thông Việt Nam.</>
            ) : (
              <>VNPT - Vietnam Posts and Telecommunications Group.</>
            )}
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-once="false"
          className="inline-flex items-center gap-2"
        >
          <h1 className="font-bold">
            {lang === "vi" ? <>Vị trí:</> : <>Position:</>}
          </h1>

          <p>
            {lang === "vi" ? (
              <> Thực tập sinh phát triển Website.</>
            ) : (
              <>Web Development Intern.</>
            )}
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="90"
          data-aos-duration="1000"
          data-aos-once="false"
          className="inline-flex items-center gap-2"
        >
          <h1 className="font-bold">
            {lang === "vi" ? <>Thời gian:</> : <>Duration:</>}
          </h1>
          <p>13/05/2024 - 05/07/2024.</p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-once="false"
        className="flex border-gray-500 h-50 border-1"
      ></div>

      <div className="flex flex-col space-y-5">
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
          className="inline-flex items-center gap-2"
        >
          <h1 className="font-bold">
            {lang === "vi" ? <>Tên công ty:</> : <>Company name:</>}
          </h1>
          <p>
            {lang === "vi" ? (
              <>Mọi nơi có thể ở.</>
            ) : (
              <>Stay Anywhere Possible.</>
            )}
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-once="false"
          className="inline-flex items-center gap-2"
        >
          <h1 className="font-bold">
            {lang === "vi" ? <>Vị trí:</> : <>Position:</>}
          </h1>
          <p>
            {lang === "vi" ? (
              <>Nhà phát triển website tự do.</>
            ) : (
              <>Freelance Web Developer.</>
            )}
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="90"
          data-aos-duration="1000"
          data-aos-once="false"
          className="inline-flex items-center gap-2"
        >
          <h1 className="font-bold">
            {lang === "vi" ? <>Thời gian:</> : <>Duration:</>}
          </h1>
          <p> {lang === "vi" ? <>2 năm.</> : <>2 months.</>}</p>
        </div>
      </div>
    </div>
  );
}
