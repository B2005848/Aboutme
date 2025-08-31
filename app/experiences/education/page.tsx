"use client";
export default function EducationPage({ lang }: { lang: "vi" | "en" }) {
  const timeline = [
    {
      year: "2017 - 2020",
      title: {
        vi: "Trường THPT Thoại Ngọc Hầu",
        en: "Thoai Ngoc Hau High School",
      },
      desc: [
        {
          vi: "Tốt nghiệp với thành tích khá.",
          en: "Graduated with good performance.",
        },
        {
          vi: "Chứng chỉ nghề Tin học: Giỏi.",
          en: "Certificate in Information Technology: Good",
        },
      ],
    },
    {
      year: "2020 - 2025",
      title: {
        vi: "Trường Công Nghệ Thông Tin và Truyền Thông (CTU)",
        en: "College of Information & Communication Technology (CTU)",
      },
      desc: [
        { vi: "GPA: 2.96/4.", en: "GPA: 2.96/4." },
        {
          vi: "Học mọi thứ về công nghệ thông tin.",
          en: "Studied various aspects of IT.",
        },
      ],
    },
  ];
  return (
    <div className="w-full h-full py-10 bg-gray-100 shadow-lg rounded-2xl">
      <h1 className="mb-8 text-3xl font-bold text-center">
        {lang === "vi" ? "Quá trình học tập" : "Education Journey"}
      </h1>

      <div className="relative w-2/3 mx-auto ">
        <div className="absolute top-0 h-full border-l-2 border-gray-300 left-1/2"></div>
        <div className="flex flex-col space-y-8">
          {timeline.map((item, index) => (
            <div
              data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
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
                    {item.desc.map((d, i) => (
                      <li key={i}>{lang === "vi" ? d.vi : d.en}</li>
                    ))}
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
