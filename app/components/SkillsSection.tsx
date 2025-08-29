export default function SkillsSection({ lang }: { lang: "vi" | "en" }) {
  return (
    <section id="skills" className="mt-16">
      <div className="space-y-10">
        {/* Communication */}
        <div>
          <div className="flex items-center mb-2">
            <span className="inline-block w-4 h-4 mr-2 bg-teal-600 rounded-full"></span>
            <span className="text-2xl font-bold">Communication</span>
          </div>
          <div className="relative w-full h-10">
            <div
              className="absolute top-0 left-0 h-full bg-teal-600 rounded-l-lg"
              style={{ width: "60%" }}
            >
              <span className="absolute left-0 w-full text-2xl font-bold text-center text-white top-1">
                {lang === "vi" ? "Tốt" : "Good"}
              </span>
            </div>
            <div
              className="absolute top-0 right-0 h-full bg-gray-400 rounded-r-lg"
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>
        {/* Office information technology */}
        <div>
          <div className="flex items-center mb-2">
            <span className="inline-block w-4 h-4 mr-2 bg-teal-600 rounded-full"></span>
            <span className="text-2xl font-bold">
              Office information technology
            </span>
          </div>
          <div className="relative w-full h-10">
            <div
              className="absolute top-0 left-0 h-full bg-teal-600 rounded-l-lg"
              style={{ width: "60%" }}
            >
              <span className="absolute left-0 w-full text-2xl font-bold text-center text-white top-1">
                {lang === "vi" ? "Tốt" : "Good"}
              </span>
            </div>
            <div
              className="absolute top-0 right-0 h-full bg-gray-400 rounded-r-lg"
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>
        {/* Teamwork */}
        <div>
          <div className="flex items-center mb-2">
            <span className="inline-block w-4 h-4 mr-2 bg-teal-600 rounded-full"></span>
            <span className="text-2xl font-bold">Teamwork</span>
          </div>
          <div className="relative w-full h-10">
            <div
              className="absolute top-0 left-0 h-full bg-teal-600 rounded-l-lg"
              style={{ width: "80%" }}
            >
              <span className="absolute left-0 w-full text-2xl font-bold text-center text-white top-1">
                {lang === "vi" ? "Rất tốt" : "Very Good"}
              </span>
            </div>
            <div
              className="absolute top-0 right-0 h-full bg-gray-400 rounded-r-lg"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
