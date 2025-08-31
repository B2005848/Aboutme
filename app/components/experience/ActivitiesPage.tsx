"use client";
export default function ActivitiesPage({ lang }: { lang: "vi" | "en" }) {
  return (
    <div className="h-full py-10 bg-gray-100 shadow-lg rounded-2xl">
      <div className="flex justify-center">
        <table
          data-aos="fade-up"
          className="w-2/3 text-sm text-center text-gray-500 rtl:text-right dark:text-gray-400 rounded-2xl"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3" data-aos="fade-right">
                {lang === "vi" ? <>Tên HOẠT ĐỘNG</> : <>ACTIVITY NAME</>}
              </th>
              <th scope="col" className="px-6 py-3" data-aos="fade-left">
                {lang === "vi" ? <>ĐƠN VỊ TỔ CHỨC</> : <>ORGANIZATION UNIT</>}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                data-aos="fade-right"
              >
                {lang === "vi" ? (
                  <>Tham gia hiến máu tình nguyện</>
                ) : (
                  <> Participate in voluntary blood donation </>
                )}
              </th>
              <td className="px-6 py-4" data-aos="fade-left">
                {lang === "vi" ? <>Đại học Cần Thơ</> : <>Can Tho University</>}
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                data-aos="fade-right"
              >
                {lang === "vi" ? (
                  <>Tham gia hoạt động tình nguyện</>
                ) : (
                  <> Participate in volunteer activities</>
                )}
              </th>
              <td className="px-6 py-4" data-aos="fade-left">
                {lang === "vi" ? <>Đại học Cần Thơ</> : <>Can Tho University</>}
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                data-aos="fade-right"
              >
                {lang === "vi" ? (
                  <> Tham gia hoạt động công đức</>
                ) : (
                  <>Participate in charity activities</>
                )}
              </th>
              <td className="px-6 py-4" data-aos="fade-left">
                {lang === "vi" ? (
                  <>Thiền Viện Trúc Lâm Cần Thơ</>
                ) : (
                  <>Thien Vien Truc Lam Can Tho</>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
