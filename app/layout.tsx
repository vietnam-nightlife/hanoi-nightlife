import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://hanoinightboom.com"),

  title: {
    default: "하노이 눈탱이 방지 위원회 | 하노이 마사지·가라오케",
    template: "%s | 하노이 눈탱이 방지 위원회",
  },

  description:
    "하노이 마사지와 가라오케 정보를 지역별로 확인하세요. 미딩·딘톤·중화 등 지역별 업소 정보와 가격, 위치, 이용 팁을 정리했습니다.",

  keywords: [
    "하노이 마사지",
    "하노이 마사지 추천",
    "하노이 마사지 가격",
    "하노이 미딩 마사지",
    "하노이 딘톤 마사지",
    "하노이 가라오케",
    "하노이 가라오케 추천",
    "하노이 가라오케 가격",
    "하노이 KTV",
    "하노이 KTV 추천",
    "하노이 미딩 가라오케",
    "하노이 로컬 가라오케",
    "하노이 유흥",
    "하노이 여행",
  ],

  alternates: {
    canonical: "https://hanoinightboom.com",
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://hanoinightboom.com",
    siteName: "하노이 눈탱이 방지 위원회",
    title: "하노이 눈탱이 방지 위원회 | 하노이 마사지·가라오케",
    description:
      "하노이 마사지와 가라오케 정보를 지역별로 확인하세요. 업소별 위치, 가격, 시설과 이용 정보를 정리했습니다.",
  },

  twitter: {
    card: "summary_large_image",
    title: "하노이 눈탱이 방지 위원회 | 하노이 마사지·가라오케",
    description:
      "하노이 마사지와 가라오케 정보를 지역별로 확인하세요.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
