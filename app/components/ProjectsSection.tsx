export default function ProjectsSection({ lang }: { lang: "vi" | "en" }) {
  return (
    <section id="projects" className="mt-44">
      <div className="leading-relaxed">
        <h1 className="mb-2 text-6xl font-bold text-center text-indigo-800 ">
          {lang === "vi" ? <>CÁC DỰ ÁN CỦA TÔI</> : <>MY PROJECTS</>}
        </h1>

        <p className="mb-10 text-center text-indigo-400 hover:text-indigo-300 animate-[bounce_2s] ">
          <a
            href="https://github.com/B2005848"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === "vi" ? <>Xem thêm...</> : <>See more...</>}
          </a>
        </p>
        <div className="grid w-3/4 grid-cols-1 gap-10 mx-auto md:grid-cols-2 text-gray-50">
          {" "}
          {/* project 1 */}
          <div
            className="px-5 py-5 bg-[#3664F4] shadow-2xl rounded-2xl hover:-translate-x-1.5 hover:transition-all duration-300 ease-in"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <div className="flex gap-2">
              <h1 className="text-2xl font-bold">
                Hệ Thống Quản Lí Phòng Khám
              </h1>
            </div>
            <div className="flex gap-2">
              <h1 className="font-bold">Thời gian: </h1>
              <span>3 tháng.</span>
            </div>
            <div>
              <h1 className="font-bold">Chức năng:</h1>
              <p>
                Quản lí bệnh nhân, quản lí nhân viên, quản lí lịch hẹn, thống kê
                doanh thu, thanh toán online, trò chuyện...
              </p>
            </div>
            <div className="flex gap-2 ">
              <h1 className="italic font-bold">Công nghệ: </h1>
              <span className="italic">
                VueJS, NodeJS, ExpressJS, React Native, Sql Server, <br />
                SocketIO, VNPAY demo...
              </span>
            </div>
          </div>
          {/* project 1 */}
          <div
            className="px-5 py-5 bg-[#3664F4] shadow-2xl rounded-2xl hover:translate-x-1.5 hover:transition-all duration-300 ease-in"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <div className="flex gap-2">
              <h1 className="text-2xl font-bold">Website Quản Lí Hoa Tiêu</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="font-bold">Thời gian: </h1>
              <span>2 tháng.</span>
            </div>
            <div>
              <h1 className="font-bold">Chức năng:</h1>
              <p>
                Quản lí nhân viên, Quản lí ca làm việc, Thống kê số lượt đi,
                Xuất file excel, Quản lí tàu, Quản lí cầu cảng.
              </p>
            </div>
            <div className="flex gap-2 ">
              <h1 className="italic font-bold">Công nghệ: </h1>
              <span className="italic">
                VueJS, NodeJS, ExpressJS, MongoDB...
              </span>
            </div>
          </div>
          {/* project 1 */}
          <div
            className="px-5 py-5 bg-[#3664F4] shadow-2xl rounded-2xl hover:-translate-x-1.5 hover:transition-all duration-300 ease-in"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <div className="flex gap-2">
              <h1 className="text-2xl font-bold">
                Landing Page về Dịch Vụ Bốc Xếp
              </h1>
              <span className="inline-flex items-center">Đã công khai</span>
            </div>
            <div className="flex gap-2">
              <h1 className="font-bold">Thời gian: </h1>
              <span>2 ngày.</span>
            </div>
            <div>
              <h1 className="font-bold">Mô tả:</h1>
              <p>
                Quảng bá về dịch vụ bốc xếp, vận chuyển hàng hóa, dọn dẹp kho
                xưởng, phun thuốc diệt côn trùng...
              </p>
            </div>
            <div className="flex gap-2 ">
              <h1 className="italic font-bold">Công nghệ: </h1>
              <span className="italic">
                NextJS, TailwindCSS, HeroUI, AOS Animation...
              </span>
            </div>

            <div className="flex gap-2 ">
              <h1 className="italic font-bold">Link website: </h1>
              <span className="italic">
                <a
                  className="text-amber-50 hover:text-blue-100"
                  href="https://thienphuocbocxep.id.vn/"
                  target="_blank"
                >
                  https://thienphuocbocxep.id.vn/
                </a>
              </span>
            </div>
          </div>
          {/* project 1 */}
          <div
            className="px-5 py-5 bg-[#3664F4] shadow-2xl rounded-2xl hover:translate-x-1.5 hover:transition-all duration-300 ease-in"
            data-aos="flip-right"
          >
            <div className="flex gap-2">
              <h1 className="text-2xl font-bold">
                Landing Page về Bất Động Sản
              </h1>
            </div>
            <div className="flex gap-2">
              <h1 className="font-bold">Thời gian: </h1>
              <span>2 ngày.</span>
            </div>
            <div>
              <h1 className="font-bold">Mô tả:</h1>
              <p>
                Quảng bá thương hiệu, cung cấp hình ảnh chung cư, thông tin ...
              </p>
            </div>
            <div className="flex gap-2 ">
              <h1 className="italic font-bold">Công nghệ: </h1>
              <span className="italic">
                NextJS, TailwindCSS, HeroUI, AOS Animation...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
