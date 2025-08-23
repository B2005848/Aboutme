import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { Be_Vietnam_Pro } from "next/font/google";
import { Providers } from "./providers";
import { AOSProvider } from "./aos-provider"; // 👈 import
import { LangProvider } from "./lang-context";
const BeVNPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Thanh Nam - Dev Miền Tây",
  description: "Là 1 dev miền Tây, với niềm học hỏi mãnh liệt ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </head>

      <body className={`${BeVNPro.className} pt-16`}>
        <LangProvider>
          <Providers>
            <Header />
            <AOSProvider /> {/* 👈 Khởi tạo AOS ở đây */}
            <main className="min-h-screen mt-[100px]">{children}</main>{" "}
            <Footer />
          </Providers>
        </LangProvider>
      </body>
    </html>
  );
}
