"use client";
import { Image } from "@heroui/image";
export default function Footer() {
  return (
    <footer className="flex justify-center h-full mt-44">
      <div>
        <div>
          <Image src="1.svg" alt="" />
        </div>
        <div className="text-sm text-gray-400">
          © 2025 SOYVN - Web Design & Digital Branding. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
