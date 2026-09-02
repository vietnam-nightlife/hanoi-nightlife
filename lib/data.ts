export type CitySlug = "hanoi";

export type CategorySlug = "massage" | "karaoke";

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

export const places: Place[] = [
  /*
   * ==========================================
   * 하노이 마사지
   * ==========================================
   */

  {
    slug: "moon-massage",
    name: "하노이 문 마사지",
    city: "hanoi",
    category: "massage",
    district: "하노이",
    rating: 4.8,
    reviews: 0,
    description:
      "하노이에서 이용할 수 있는 문 마사지 업소 정보입니다. 매장 위치와 운영시간, 내부 시설, 마사지 코스와 가격 정보를 한눈에 확인할 수 있도록 정리했습니다.",
    address: "하노이",
    hours: "10:00 - 01:00",
    image: "/하노이 문 마사지 메인.webp",
    featured: true,
  },

  {
    slug: "gangnam-spa",
    name: "하노이 강남스파",
    city: "hanoi",
    category: "massage",
    district: "미딩 · 딘톤",
    rating: 4.6,
    reviews: 122,
    description:
      "하노이 미딩·딘톤 지역에 위치한 강남스파 마사지 정보입니다. 강남스파 위치, 영업시간, 마사지 코스와 가격, 내부 시설 등 실제 방문에 필요한 정보를 확인할 수 있습니다.",
    address: "하노이 미딩 · 딘톤",
    hours: "12:00 - 01:00",
    image: "/하노이 강남스파 메인.webp",
    featured: true,
  },

  /*
   * ==========================================
   * 하노이 가라오케
   * ==========================================
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

  {
    slug: "hanoi-mydinh-karaoke-01",
    name: "하노이 미딩 가라오케",
    city: "hanoi",
    category: "karaoke",
    district: "미딩",
    rating: 4.7,
    reviews: 61,
    description:
      "하노이 미딩 지역의 가라오케 정보입니다. 실제 업소 정보와 가격, 영업시간에 맞게 확인할 수 있습니다.",
    address: "하노이 미딩",
    hours: "19:00 - 04:00",
    image: "/하노이눈탱이방지피씨.webp",
    featured: true,
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getPlaces(city: string, category?: string) {
  return places.filter(
    (p) => p.city === city && (!category || p.category === category)
  );
}

export function getPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}
