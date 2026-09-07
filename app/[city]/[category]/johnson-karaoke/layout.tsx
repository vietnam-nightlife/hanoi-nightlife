import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    city: string;
    category: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  // ==========================================
  // 하노이 존슨 가라오케
  // ==========================================
  if (slug === "johnson-karaoke") {
    return {
      title: "하노이 존슨 가라오케 | 미딩 프리미엄 한인 KTV 시설·위치",

      description:
        "하노이 미딩 존슨 가라오케의 시설, 룸 환경, TJ미디어 반주기, 한국어 응대와 위치 등 실제 이용에 필요한 정보를 확인하세요.",

      keywords: [
        "하노이 존슨 가라오케",
        "하노이 존슨",
        "하노이 미딩 존슨 가라오케",
        "하노이 가라오케",
        "하노이 미딩 가라오케",
        "하노이 한인 가라오케",
        "하노이 한인 KTV",
        "하노이 KTV",
        "미딩 가라오케",
        "미딩 KTV",
        "하노이 가라오케 추천",
        "하노이 가라오케 가격",
        "존슨 KTV",
      ],

      alternates: {
        canonical:
          "https://hanoinightboom.com/hanoi/karaoke/johnson-karaoke",
      },

      openGraph: {
        title: "하노이 존슨 가라오케 | 미딩 프리미엄 한인 KTV",
        description:
          "하노이 미딩 존슨 가라오케의 시설, 룸 환경, 한국어 응대와 위치 정보를 확인하세요.",
        url: "https://hanoinightboom.com/hanoi/karaoke/johnson-karaoke",
        siteName: "하노이 눈탱이 방지 위원회",
        locale: "ko_KR",
        type: "article",
        images: [
          {
            url: "https://hanoinightboom.com/하노이 존슨 가라오케 메인.webp",
            width: 1200,
            height: 800,
            alt: "하노이 존슨 가라오케",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: "하노이 존슨 가라오케 | 미딩 프리미엄 한인 KTV",
        description:
          "하노이 미딩 존슨 가라오케의 시설, 룸 환경, 한국어 응대와 위치 정보를 확인하세요.",
        images: [
          "https://hanoinightboom.com/하노이 존슨 가라오케 메인.webp",
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
  }

  // ==========================================
  // 기본 SEO
  // ==========================================
  return {
    title: "하노이 가라오케 | 하노이 눈탱이 방지 위원회",
    description:
      "하노이 가라오케와 현지 업소 정보를 확인하세요.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function JohnsonKaraokeLayout({
  children,
}: Props) {
  return children;
}
