"use client";
import React from "react";
import { Image } from "@heroui/react";

export default function AboutSection({ lang }: { lang: "vi" | "en" }) {
  return (
    <section
      id="about"
      className="flex items-center justify-center w-full px-6 py-12"
    >
      <div>
        <div className="flex justify-center text-indigo-800">
          <div className="flex flex-col items-center">
            <h2 className="text-6xl">
              {lang === "vi" ? <>Về Tôi</> : <>About Me</>}
            </h2>
            <p className="mt-2 italic text-gray-500">
              {lang === "vi" ? (
                <>
                  "Nhấn mạnh việc thiết kế UI “sạch” và đơn giản, nghe tự nhiên
                  và chuyên nghiệp."
                </>
              ) : (
                <>
                  "Passionate about designing clean and simple user
                  interfaces.""
                </>
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <Image
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-once="true"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              // src="imghomeme.webp"
              src="https://images.unsplash.com/photo-1755826525115-40dc08fcd1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
              isZoomed
              alt="Thanh Nam Dev Mien Tay, Thanh Nam, Lê Thanh Nam, Dev Miền Tây"
              className="object-cover w-full h-full rounded-2xl "
              width={300}
            />
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
}
