import React from "react";

export default function AboutSection({ lang }: { lang: "vi" | "en" }) {
  return (
    <section id="about" className="mt-10">
      <div>
        <div className="flex justify-center text-indigo-800">
          <h2 className="text-6xl">
            {lang === "vi" ? <>Về Tôi</> : <>About Me</>}
          </h2>
        </div>

        <div>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
}
