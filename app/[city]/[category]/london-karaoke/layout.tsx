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

  if (slug === "london-karaoke") {
    return {
      title: "하노이 런던 가라오케 | 미딩 한인 KTV 시설·가격·위치",

      description:
        "하노이 런던 가라오케의 시설, 룸, 분위기, 가격, 위치와 이용 정보를 확인하세요. 방문 전 필요한 가라오케 정보를 한눈에 정리했습니다.",

      keywords: [
        "하노이 런던 가라오케",
        "하노이 런던",
        "하노이 미딩 런던 가라오케",
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
          "https://hanoinightboom.com/hanoi/karaoke/london-karaoke",
      },

      openGraph: {
        title: "하노이 런던 가라오케 | 미딩 한인 KTV",
        description:
          "하노이 런던 가라오케의 시설, 룸, 분위기, 가격, 위치와 이용 정보를 확인하세요.",
        url: "https://hanoinightboom.com/hanoi/karaoke/london-karaoke",
        siteName: "하노이 눈탱이 방지 위원회",
        locale: "ko_KR",
        type: "article",
        images: [
          {
            url: "https://hanoinightboom.com/하노이 런던 가라오케 메인.webp",
            width: 1200,
            height: 800,
            alt: "하노이 런던 가라오케",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: "하노이 런던 가라오케 | 미딩 한인 KTV",
        description:
          "하노이 런던 가라오케의 시설, 룸, 분위기, 가격, 위치와 이용 정보를 확인하세요.",
        images: [
          "https://hanoinightboom.com/하노이 런던 가라오케 메인.webp",
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

export default function LondonKaraokeLayout({
  children,
}: Props) {
  return children;
}
