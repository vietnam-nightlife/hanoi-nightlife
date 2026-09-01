import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "하노이 눈탱이 방지 위원회 | 하노이 마사지 & 가라오케",
  description:
    "하노이의 마사지, 가라오케, 에코걸 정보를 지역별로 확인하고 비교하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Header />

        {children}

        <Footer />

        <FloatingContact />
      </body>
    </html>
  );
}
