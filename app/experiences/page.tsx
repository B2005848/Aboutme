import { useState } from "react";
import Ad from "./achiverment/page";
import Work from "./work/page";
export default function ExperienceSection({ lang }: { lang: "vi" | "en" }) {
  const [activePage, setActivePage] = useState<"work" | "ad">("work");
  return (
    <section id="exp">
      <div className="mt-44">This is Experience</div>
      {/* Menu nhỏ để chuyển page con */}
      <div className="flex gap-4 mt-4">
        <button
          className={activePage === "work" ? "font-bold" : ""}
          onClick={() => setActivePage("work")}
        >
          {lang === "vi" ? "Kinh nghiệm làm việc" : "Work Experience"}
        </button>
        <button
          className={activePage === "ad" ? "font-bold" : ""}
          onClick={() => setActivePage("ad")}
        >
          {lang === "vi" ? "Học tập" : "Study"}
        </button>
      </div>
      {/* childern */}

      <div className="mt-6">
        {activePage === "work" && <Work />}
        {activePage === "ad" && <Ad />}
      </div>
    </section>
  );
}
