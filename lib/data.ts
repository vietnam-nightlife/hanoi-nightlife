export type CitySlug = "hanoi";

export type CategorySlug = "massage" | "karaoke";

export type PlaceBadge =
  | "인기"
  | "추천"
  | "한국어 응대 가능"
  | "재방문 추천";

export type City = {
  slug: CitySlug;
  name: string;
  english: string;
  description: string;
  image: string;
};

export type Place = {
  slug: string;
  name: string;
  city: CitySlug;
  category: CategorySlug;

  district: string;

  rating: number;
  reviews: number;

  description: string;
  address: string;
  hours: string;

  image: string;

  featured?: boolean;

  tags?: PlaceBadge[];
  recommended?: boolean;
  koreanSupport?: boolean;
  revisitRecommended?: boolean;
};

export const cities: City[] = [
  {
    slug: "hanoi",
    name: "하노이",
    english: "HANOI",
    description:
      "베트남 하노이의 마사지와 가라오케 정보를 지역별로 확인하세요. 가격과 위치를 비교해 여행 중 불필요한 지출을 줄이는 데 도움을 드립니다.",
    image: "/하노이눈탱이방지피씨.webp",
  },
];

/* =========================================================
   업소 목록
   ========================================================= */

export const places: Place[] = [
  /*
   * =======================================================
   * 하노이 강남스파
   * =======================================================
   */

  {
    slug: "gangnam-spa",
    name: "하노이 강남스파",
    city: "hanoi",
    category: "massage",

    district: "미딩 · 딘톤",

    rating: 4.6,
    reviews: 122,

    description:
      "하노이 미딩 강남 스파는 2022년 신축 고급 시설과 자쿠지 룸이 강점이며, 마사지와 휴게텔을 한곳에서 이용할 수 있습니다. 관리사 선택과 팁 포함 정찰제로 깔끔하게 이용하기 좋습니다.",

    address: "하노이 미딩 · 딘톤",

    hours: "12:00 - 01:00",

    image: "/하노이 강남스파 메인.webp",

    featured: true,
  },

  /*
   * =======================================================
   * 하노이 문 마사지
   * =======================================================
   */

  {
    slug: "hanoi-mun-massage",
    name: "하노이 문 마사지",
    city: "hanoi",
    category: "massage",

    district: "하노이",

    rating: 4.8,
    reviews: 146,

    description:
      "하노이 미딩 딘톤에서 한국인 사장이 직접 관리하는 문 마사지. 사우나·샤워·바디마사지가 한 번에 이어지며, 팁 포함 정찰제와 당일 관리사 선택이 장점입니다.",

    address: "하노이",

    hours: "영업시간 확인 필요",

    image: "/하노이 문 마사지 메인.webp",

    featured: true,
  },

  /*
   * =======================================================
   * 하노이 수 사우나
   * =======================================================
   */

  {
    slug: "su-sauna",
    name: "하노이 수 사우나",
    city: "hanoi",
    category: "massage",

    district: "미딩 · 딘톤",

    rating: 4.7,
    reviews: 138,

    description:
      "하노이 미딩 딘톤의 수 사우나는 오래 운영된 한국인 직영 업소로, 100% 예약제와 당일 출근부 초이스가 특징입니다. 30~90분 1:1·2:1 코스로 안정적인 이용이 가능합니다.",

    address:
      "32 Ng. 154 Đ. Đình Thôn, Đình Thôn, Từ Liêm, Hà Nội",

    hours: "12:00 - 01:00",

    image: "/하노이 수 사우나 메인.webp",

    featured: true,
  },

  /*
   * =======================================================
   * 하노이 어메이징 마사지
   * =======================================================
   */

  {
    slug: "amazing-massage",
    name: "하노이 어메이징 마사지",
    city: "hanoi",
    category: "massage",

    district: "미딩 · 딘톤",

    rating: 4.8,
    reviews: 26,

    description:
      "하노이 미딩 한인타운의 어메이징 마사지는 한인 운영으로 한국어 응대가 편하며, 호텔식 프라이빗 룸에서 A~E 코스와 누루를 편하게 이용할 수 있는 마사지샵입니다.",

    address:
      "28 ngõ 39 Đình Thôn, Mỹ Đình 1, Từ Liêm, Hà Nội",

    hours: "13:00 - 00:30",

    image: "/하노이 어메이징 마사지 메인.webp",

    featured: true,

    koreanSupport: true,
    recommended: true,
    revisitRecommended: true,
  },

  /*
   * =======================================================
   * 하노이 디살롱 마사지
   * =======================================================
   */

  {
    slug: "d-salon",
    name: "하노이 디살롱 마사지",
    city: "hanoi",
    category: "massage",

    district: "하노이",

    rating: 4.8,
    reviews: 32,

    description:
      "하노이 디살롱은 미딩 딘톤 파이브스타 인근의 붐 마사지 스파입니다. 한국식 방석집 콘셉트와 개인룸, 실시간 출근부, 마사지와 술자리를 함께 즐길 수 있는 올인원 코스를 제공합니다.",

    address: "하노이",

    hours: "영업시간 확인 필요",

    image: "/하노이 디살롱 메인.webp",

    featured: true,

    koreanSupport: true,
    recommended: true,
    revisitRecommended: true,
  },

 /*
   * =======================================================
   * 하노이 소라 마사지
   * =======================================================
   */
  
{
    slug: "sora-massage",
    name: "하노이 소라 마사지",
    city: "hanoi",
    category: "massage",

    district: "하노이",

    rating: 4.6,
    reviews: 54,

    description:
      "하노이 미딩 딩톤시장 인근 소라 마사지는 프라이빗 룸 약 10개와 전용 샤워·화장실, 한국인 매니저 상주로 편리하며, A~F 정찰제 코스로 원하는 구성에 맞춰 이용하기 좋은 마사지샵입니다.",

    address: "하노이",

    hours: "영업시간 확인 필요",

    image: "/하노이 소라 마사지 메인.webp",

    featured: true,

    koreanSupport: true,
    recommended: true,
    revisitRecommended: true,
  },

  /*
   * =======================================================
   * 하노이 더레드 가라오케
   * =======================================================
   */

  {
    slug: "the-red-karaoke",
    name: "하노이 더 레드 가라오케",
    city: "hanoi",
    category: "karaoke",

    district: "미딩 · 딘톤",

    rating: 4.7,
    reviews: 58,

    description:
      description:
  "하노이 미딩 딘톤의 더 레드 가라오케는 붉은 외관과 깔끔한 신축 룸이 특징입니다. 소맥·과일·안주 무제한과 한국어 응대가 가능해 편하게 이용하기 좋습니다.",

    address:
      "5 Ng. 1 Đ. Đình Thôn, Đình Thôn, Từ Liêm, Hà Nội",

    hours: "18:00 - 늦은 새벽",

    image: "/하노이 더레드 가라오케 메인.webp",

    featured: true,

    koreanSupport: true,
    recommended: true,
    revisitRecommended: true,
  },
  
  /*
   * =======================================================
   * 하노이 호안끼엠 가라오케
   * =======================================================
   */

  {
    slug: "hanoi-hoankiem-karaoke-01",
    name: "하노이 호안끼엠 가라오케",
    city: "hanoi",
    category: "karaoke",

    district: "호안끼엠",

    rating: 4.8,
    reviews: 96,

    description:
      "하노이 호안끼엠 지역의 가라오케 정보입니다. 가격, 룸 정보, 영업시간 등의 실제 업소 정보를 확인할 수 있습니다.",

    address: "하노이 호안끼엠",

    hours: "19:00 - 05:00",

    image: "/하노이눈탱이방지피씨.webp",

    featured: true,
  },

  /*
   * =======================================================
   * 하노이 미딩 가라오케
   * =======================================================
   */

  {
    slug: "hanoi-mydinh-karaoke-01",
    name: "하노이 미딩 가라오케",
    city: "hanoi",
    category: "karaoke",

    district: "미딩",

    rating: 4.7,
    reviews: 61,

    description:
      "하노이 미딩 지역의 가라오케 정보입니다. 실제 업소 정보와 가격, 영업시간을 확인할 수 있습니다.",

    address: "하노이 미딩",

    hours: "19:00 - 04:00",

    image: "/하노이눈탱이방지피씨.webp",

    featured: true,
  },
];

/* =========================================================
   도시
   ========================================================= */

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

/* =========================================================
   업소 목록
   ========================================================= */

export function getPlaces(city: string, category?: string) {
  return places.filter(
    (p) =>
      p.city === city &&
      (!category || p.category === category)
  );
}

/* =========================================================
   업소 상세
   ========================================================= */

export function getPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}
