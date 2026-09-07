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
  // 하노이 강남스파
  // ==========================================
  if (slug === "gangnam-spa") {
    return {
      title: "하노이 강남스파 | 미딩 마사지샵 시설·가격·위치",

      description:
        "하노이 미딩 강남스파의 시설, 마사지 코스, 가격, 위치와 영업시간 등 실제 이용에 필요한 정보를 확인하세요.",

      keywords: [
        "하노이 강남스파",
        "하노이 강남 스파",
        "하노이 미딩 강남스파",
        "하노이 불건마",
        "하노이 미딩 불건마",
        "하노이 불건마 예약",
        "미딩 불건마 예약",
        "하노이 불건마 가격",
        "하노이 불건마 추천",
      ],

      alternates: {
        canonical:
          "https://hanoinightboom.com/hanoi/massage/gangnam-spa",
      },

      openGraph: {
        title: "하노이 강남스파 | 미딩 마사지샵",
        description:
          "하노이 미딩 강남스파의 시설, 마사지 코스, 가격, 위치와 이용 정보를 확인하세요.",
        url: "https://hanoinightboom.com/hanoi/massage/gangnam-spa",
        siteName: "하노이 눈탱이 방지 위원회",
        locale: "ko_KR",
        type: "article",
        images: [
          {
            url: "https://hanoinightboom.com/하노이 강남스파 메인.webp",
            width: 1200,
            height: 800,
            alt: "하노이 강남스파",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: "하노이 강남스파 | 미딩 마사지샵",
        description:
          "하노이 미딩 강남스파의 시설, 마사지 코스, 가격, 위치와 이용 정보를 확인하세요.",
        images: [
          "https://hanoinightboom.com/하노이 강남스파 메인.webp",
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
  // 하노이 문 마사지
  // ==========================================
  if (slug === "hanoi-mun-massage") {
    return {
      title: "하노이 문마사지 | 미딩 마사지샵 시설·가격·위치",

      description:
        "하노이 미딩 문마사지의 시설, 마사지 코스, 가격, 위치와 영업시간 등 실제 이용에 필요한 정보를 확인하세요.",

      keywords: [
        "하노이 문마사지",
        "하노이 문 마사지",
        "하노이 미딩 문마사지",
        "하노이 불건마",
        "하노이 미딩 불건마",
        "하노이 불건마 예약",
        "미딩 불건마 예약",
        "하노이 불건마 가격",
        "하노이 불건마 추천",
        "하노이 문마사지 가격",
      ],

      alternates: {
        canonical:
          "https://hanoinightboom.com/hanoi/massage/hanoi-mun-massage",
      },

      openGraph: {
        title: "하노이 문마사지 | 미딩 마사지샵",
        description:
          "하노이 미딩 문마사지의 시설, 마사지 코스, 가격, 위치와 이용 정보를 확인하세요.",
        url: "https://hanoinightboom.com/hanoi/massage/hanoi-mun-massage",
        siteName: "하노이 눈탱이 방지 위원회",
        locale: "ko_KR",
        type: "article",
        images: [
          {
            url: "https://hanoinightboom.com/하노이 문 마사지 메인.webp",
            width: 1200,
            height: 800,
            alt: "하노이 문 마사지",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: "하노이 문마사지 | 미딩 마사지샵",
        description:
          "하노이 미딩 문마사지의 시설, 마사지 코스, 가격, 위치와 영업시간을 확인하세요.",
        images: [
          "https://hanoinightboom.com/하노이 문 마사지 메인.webp",
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
  // 그 외 페이지 기본 SEO
  // ==========================================
  return {
    title: "하노이 마사지 | 하노이 눈탱이 방지 위원회",
    description:
      "하노이 마사지와 현지 업소 정보를 확인하세요.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PlaceLayout({ children }: Props) {
  return children;
}
