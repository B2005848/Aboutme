export default function EducationPage({ lang }: { lang: "vi" | "en" }) {
  const timeline = [
    {
      year: "2017 - 2020",
      title: {
        vi: "Trường Trung Học Phổ Thông",
        en: "High School",
      },
      desc: {
        vi: "Tốt nghiệp với thành tích khá.",
        en: "Graduated with good performance.",
      },
    },
    {
      year: "2020 - 2025",
      title: {
        vi: "Trường Công Nghệ Thông Tin và Truyền Thông (CTU)",
        en: "College of Information & Communication Technology (CTU)",
      },
      desc: {
        vi: "GPA: 2.96/4. Học mọi thứ về công nghệ thông tin.",
        en: "GPA: 2.96/4. Studied various aspects of Information Technology.",
      },
    },
    {
      year: "2023",
      title: {
        vi: "Khóa học Online",
        en: "Online Course",
      },
      desc: {
        vi: "Học thêm về React và Node.js.",
        en: "Studied React and Node.js.",
      },
    },
  ];
  return (
    <div className="py-10">
      <h1 className="mb-8 text-3xl font-bold text-center">
        {lang === "vi" ? "Quá trình học tập" : "Education Journey"}
      </h1>

      <div className="relative w-2/3 mx-auto ">
        <div className="absolute top-0 h-full border-l-2 border-gray-300 left-1/2"></div>
        <div className="flex flex-col space-y-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex  mb-10  ${
                index % 2 === 0 ? "justify-start mr-6" : "justify-end ml-6"
              }`}
            >
              <div className="w-1/2">
                <div className="relative p-4 bg-gray-100 shadow-md rounded-2xl">
                  <h2 className="text-xl font-semibold">
                    {lang === "vi" ? item.title.vi : item.title.en}
                  </h2>

                  <p className="italic text-gray-600">{item.year}</p>

                  <ol className="mt-3 space-y-2 list-disc list-inside">
                    <li>{lang === "vi" ? item.desc.vi : item.desc.en}</li>
                    <li>
                      {lang === "vi"
                        ? "Các môn liên quan: Học mọi thứ về công nghệ thông tin."
                        : "Relevant courses: Studied everything about IT."}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
