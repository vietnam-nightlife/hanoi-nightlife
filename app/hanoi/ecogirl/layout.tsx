import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "하노이 에코걸 | 에코걸 비용·프로필·이용 안내",
  description:
    "하노이 에코걸 프로필과 비용, 이용 방법 및 예약 전 확인사항을 정리했습니다. 하노이 여행 중 에코걸 이용에 필요한 정보를 한눈에 확인하세요.",
  keywords: [
    "하노이 에코걸",
    "하노이 에코걸 비용",
    "하노이 에코걸 가격",
    "하노이 에코걸 추천",
    "하노이 에코걸 프로필",
    "하노이 에코걸 예약",
    "베트남 에코걸",
    "베트남 에코걸 비용",
    "하노이 에코걸 이용 방법",
  ],
  alternates: {
    canonical: "https://www.hanoinightboom.com/hanoi/ecogirl",
  },
  openGraph: {
    title: "하노이 에코걸 | 에코걸 비용·프로필·이용 안내",
    description:
      "하노이 에코걸 프로필과 비용, 이용 방법 및 예약 전 확인사항을 확인하세요.",
    url: "https://www.hanoinightboom.com/hanoi/ecogirl",
    siteName: "하노이 눈탱이 방지 위원회",
    locale: "ko_KR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "하노이 에코걸 | 에코걸 비용·프로필·이용 안내",
    description:
      "하노이 에코걸 프로필과 비용, 이용 방법 및 예약 전 확인사항을 확인하세요.",
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

export default function EcoGirlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
