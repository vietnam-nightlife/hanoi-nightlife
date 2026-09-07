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
   * 하노이 더 레드 가라오케
   * =======================================================
   */

  {
    slug: "the-red-karaoke",
    name: "하노이 더 레드 가라오케",
    city: "hanoi",
    category: "karaoke",

    district: "미딩 · 딘톤",

    rating: 4.8,
    reviews: 42,

    description:
      "하노이 미딩 딘톤의 더 레드 가라오케는 붉은 외관과 리모델링 신축 인테리어가 특징입니다. 소맥·과일·기본 안주가 무제한이며 한국인 관계자가 상주해 편하게 이용할 수 있습니다.",

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
   * 하노이 박카스 가라오케
   * =======================================================
   */

  {
    slug: "bacchus-karaoke",
    name: "하노이 박카스 가라오케",
    city: "hanoi",
    category: "karaoke",

    district: "미딩 · 딘톤",

    rating: 4.8,
    reviews: 38,

    description:
      "하노이 미딩의 박카스 가라오케는 넓은 룸과 활기찬 분위기가 강점인 한인 KTV입니다. 한국인 관리자가 상주하고 출근 인원이 많아 선택의 폭이 넓으며, 초행 형님도 편하게 즐기기 좋습니다.",

    address:
      "34 Ngõ 2 P. Trần Văn Lai, Đình Thôn, Từ Liêm, Hà Nội",

    hours: "14:00 - 손님 퇴장까지",

    image: "/하노이 박카스 가라오케 메인.webp",

    featured: true,

    koreanSupport: true,
    recommended: true,
    revisitRecommended: true,
  },

    /*
   * =======================================================
   * 하노이 존슨 가라오케
   * =======================================================
   */

  {
    slug: "johnson-karaoke",
    name: "하노이 존슨 가라오케",
    city: "hanoi",
    category: "karaoke",

    district: "미딩 · 딘톤",

    rating: 4.8,
    reviews: 35,

    description:
      "하노이 미딩 메인스트리트의 존슨 가라오케는 구 원클럽 자리를 리뉴얼한 프리미엄 한국식 가라오케입니다. 한국어 매니저와 TJ미디어 반주기, 룸별 화장실·에어컨·공기청정기를 갖춰 쾌적하게 이용하기 좋습니다.",

    address:
      "8 P. Trần Văn Lai, Đình Thôn, Từ Liêm, Hà Nội",

    hours: "18:00 - 늦은 새벽",

    image: "/하노이 존슨 가라오케 메인.webp",

    featured: true,

    koreanSupport: true,
    recommended: true,
    revisitRecommended: true,
  },

  /*
   * =======================================================
   * 하노이 발렌타인 가라오케
   * =======================================================
   */

  {
    slug: "valentine-karaoke",
    name: "하노이 발렌타인 가라오케",
    city: "hanoi",
    category: "karaoke",

    district: "미딩 · 딘톤",

    rating: 4.8,
    reviews: 35,

    description:
      "하노이 미딩 중심 거리인 딘톤에 위치한 발렌타인 가라오케는 한국인 사장이 직접 상주하며 편하게 응대하는 한인 KTV입니다. 주대에 맥주·소주 무제한과 기본 안주가 포함되며, 3인 이상 무료 픽업을 지원해 술자리 중심의 소·중 인원 모임에 잘 맞습니다.",

    address:
      "48 Đ. Đình Thôn, Đình Thôn, Từ Liêm, Hà Nội",

    hours: "19:00 - 00:00",

    image: "/하노이 발렌타인 가라오케 메인.webp",

    featured: true,

    koreanSupport: true,
    recommended: true,
    revisitRecommended: true,
  },

  /*
   * =======================================================
   * 하노이 VVS 가라오케
   * =======================================================
   */

  {
    slug: "vvs-karaoke",
    name: "하노이 VVS 가라오케",
    city: "hanoi",
    category: "karaoke",

    district: "미딩 · 메찌하",

    rating: 4.9,
    reviews: 0,

    description:
      "하노이 미딩 메찌하 거리에 위치한 VVS 가라오케는 VVS Glory Hotel 건물을 통째로 사용하는 단일건물형 한인 KTV입니다. 12개의 룸과 별도 스크린골프룸을 갖추고 있어 노래와 술자리뿐 아니라 골프까지 한 건물에서 즐기기 좋습니다. 주대와 기본 TC를 분리해 정산하며 한국어 마담과 매니저가 응대해 초행 손님도 편하게 이용할 수 있습니다.",

    address:
      "46 P. Mễ Trì Hạ, Nam Từ Liêm, Hà Nội",

    hours: "14:00 - 02:00",

    image: "/하노이 vvs 가라오케 메.webp",

    featured: true,

    koreanSupport: true,
    recommended: true,
    revisitRecommended: true,
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
