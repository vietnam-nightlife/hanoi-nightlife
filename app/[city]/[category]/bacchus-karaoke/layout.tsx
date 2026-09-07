import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "하노이 박카스 가라오케 | 미딩 한인 KTV 시설·가격·위치",

  description:
    "하노이 미딩 박카스 가라오케의 시설, 룸, 분위기, 가격, 위치와 이용 정보를 확인하세요. 하노이 가라오케 방문 전 필요한 정보를 한눈에 확인할 수 있습니다.",

  keywords: [
    "하노이 박카스 가라오케",
    "하노이 박카스",
    "하노이 미딩 박카스",
    "하노이 미딩 박카스 가라오케",
    "하노이 가라오케",
    "하노이 미딩 가라오케",
    "하노이 한인 가라오케",
    "하노이 한인 KTV",
    "하노이 KTV",
    "미딩 가라오케",
    "미딩 KTV",
    "하노이 가라오케 추천",
    "하노이 가라오케 가격",
  ],

  alternates: {
    canonical:
      "https://hanoinightboom.com/hanoi/karaoke/bacchus-karaoke",
  },

  openGraph: {
    title: "하노이 박카스 가라오케 | 미딩 한인 KTV",
    description:
      "하노이 미딩 박카스 가라오케의 시설, 룸, 분위기, 가격과 위치 정보를 확인하세요.",
    url: "https://hanoinightboom.com/hanoi/karaoke/bacchus-karaoke",
    siteName: "하노이 눈탱이 방지 위원회",
    locale: "ko_KR",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "하노이 박카스 가라오케 | 미딩 한인 KTV",
    description:
      "하노이 미딩 박카스 가라오케의 시설, 룸, 분위기, 가격과 위치 정보를 확인하세요.",
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

export default function BacchusKaraokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
