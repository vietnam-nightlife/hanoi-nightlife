import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "하노이 소라 마사지 | 미딩 한인타운 마사지 · 한국어 상담",
  description:
    "하노이 미딩 한인타운 소라 마사지. 시설, 코스, 가격, 위치와 이용 정보를 한눈에 확인하고 방문 전 필요한 정보를 확인하세요.",
  keywords: [
    "하노이 소라 마사지",
    "하노이 불건마",
    "하노이 미딩 불건마",
    "하노이 미딩 불건마 예약",
    "하노이 한인 불건마",
    "하노이 한국인 불건마",
    "미딩 불건마",
    "하노이 불건마 가격",
    "하노이 불건마 추천",
    "하노이 소라 마사지 가격",
  ],
  alternates: {
    canonical:
      "https://hanoinightboom.com/hanoi/massage/sora-massage",
  },
  openGraph: {
    title: "하노이 소라 마사지 | 미딩 한인타운",
    description:
      "하노이 미딩 소라 마사지의 시설, 코스, 가격, 위치와 이용 정보를 확인하세요.",
    url: "https://hanoinightboom.com/hanoi/massage/sora-massage",
    siteName: "하노이 눈탱이 방지 위원회",
    locale: "ko_KR",
    type: "article",
    images: [
      {
        url: "https://hanoinightboom.com/하노이 소라 마사지 메인.webp",
        width: 1200,
        height: 800,
        alt: "하노이 소라 마사지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "하노이 소라 마사지 | 미딩 한인타운",
    description:
      "하노이 미딩 소라 마사지의 시설, 코스, 가격, 위치와 이용 정보를 확인하세요.",
    images: [
      "https://hanoinightboom.com/하노이 소라 마사지 메인.webp",
    ],
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

export default function SoraMassageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
