// components/LanguageToggle.tsx
"use client";

type LanguageToggleProps = {
  lang: "vi" | "en";
  setLang: (lang: "vi" | "en") => void;
};

export default function ButtonSwitchLang({
  lang,
  setLang,
}: LanguageToggleProps) {
  return (
    <button
      onClick={() => setLang(lang === "vi" ? "en" : "vi")}
      className="px-4 py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
    >
      {lang === "vi" ? "Tiếng Việt" : "English"}
    </button>
  );
}
