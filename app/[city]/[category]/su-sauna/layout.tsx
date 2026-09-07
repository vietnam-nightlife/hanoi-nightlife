import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "하노이 수사우나 | 미딩 마사지·사우나 이용 정보",
  description:
    "하노이 수사우나의 시설, 이용 정보, 가격, 위치와 영업 정보를 한눈에 확인하세요. 방문 전 필요한 정보를 간편하게 확인할 수 있습니다.",
  keywords: [
    "하노이 수사우나",
    "하노이 사우나",
    "하노이 미딩 불건마",
    "하노이 사우나 추천",
    "하노이 사우나 가격",
    "하노이 불건마 사우나",
    "미딩 불건마",
    "하노이 한국인 불건마",
    "하노이 한국인 불건마 추천",
  ],
  alternates: {
    canonical:
      "https://hanoinightboom.com/hanoi/massage/su-sauna",
  },
  openGraph: {
    title: "하노이 수사우나 | 미딩 사우나·마사지",
    description:
      "하노이 수사우나의 시설, 이용 정보, 가격, 위치와 영업 정보를 확인하세요.",
    url: "https://hanoinightboom.com/hanoi/massage/su-sauna",
    siteName: "하노이 눈탱이 방지 위원회",
    locale: "ko_KR",
    type: "article",
    images: [
      {
        url: "https://hanoinightboom.com/하노이 수사우나 메인.webp",
        width: 1200,
        height: 800,
        alt: "하노이 수사우나",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "하노이 수사우나 | 미딩 사우나·마사지",
    description:
      "하노이 수사우나의 시설, 이용 정보, 가격, 위치와 영업 정보를 확인하세요.",
    images: [
      "https://hanoinightboom.com/하노이 수사우나 메인.webp",
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

export default function SuSaunaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
