export type CitySlug = "hoan-kiem" | "my-dinh";
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
    slug: "hoan-kiem",
    name: "호안끼엠",
    english: "HOAN KIEM",
    description:
      "하노이 호안끼엠 지역의 마사지와 가라오케 정보를 확인하세요. 가격, 위치, 영업시간 등 여행자에게 필요한 정보를 한곳에서 비교할 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1800&auto=format&fit=crop",
  },
  {
    slug: "my-dinh",
    name: "미딘",
    english: "MY DINH",
    description:
      "하노이 미딘 지역의 마사지와 가라오케 정보를 확인하세요. 실제 업소 정보와 가격은 등록 후 계속 업데이트할 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=1800&auto=format&fit=crop",
  },
];

export const places: Place[] = [
  {
    slug: "hoan-kiem-massage-01",
    name: "호안끼엠 프리미엄 마사지",
    city: "hoan-kiem",
    category: "massage",
    district: "호안끼엠",
    rating: 4.9,
    reviews: 128,
    description:
      "하노이 호안끼엠 지역에서 이용하기 좋은 마사지샵 예시입니다. 실제 운영 정보와 메뉴는 업소 등록 후 수정할 수 있습니다.",
    address: "하노이 호안끼엠",
    hours: "10:00 - 02:00",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "hoan-kiem-karaoke-01",
    name: "호안끼엠 스타 가라오케",
    city: "hoan-kiem",
    category: "karaoke",
    district: "호안끼엠",
    rating: 4.8,
    reviews: 96,
    description:
      "하노이 호안끼엠 지역의 가라오케 정보 예시입니다. 가격, 룸 정보, 영업시간은 실제 업소 정보로 교체할 수 있습니다.",
    address: "하노이 호안끼엠",
    hours: "19:00 - 05:00",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1400&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "my-dinh-massage-01",
    name: "미딘 오션 마사지",
    city: "my-dinh",
    category: "massage",
    district: "미딘",
    rating: 4.8,
    reviews: 84,
    description:
      "하노이 미딘 지역에서 편안하게 이용할 수 있는 마사지샵 예시입니다. 실제 업소 정보와 가격표로 교체할 수 있습니다.",
    address: "하노이 미딘",
    hours: "10:00 - 01:00",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1400&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "my-dinh-karaoke-01",
    name: "미딘 프리미엄 가라오케",
    city: "my-dinh",
    category: "karaoke",
    district: "미딘",
    rating: 4.7,
    reviews: 61,
    description:
      "하노이 미딘 지역의 가라오케 정보 예시입니다. 가격, 룸 정보, 영업시간은 실제 업소 정보로 교체할 수 있습니다.",
    address: "하노이 미딘",
    hours: "19:00 - 04:00",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c9c3b1d2?q=80&w=1400&auto=format&fit=crop",
    featured: true,
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getPlaces(city: string, category?: string) {
  return places.filter(
    (p) =>
      p.city === city &&
      (!category || p.category === category)
  );
}

export function getPlace(slug: string) {
  return places.find((p) => p.slug === slug);
}
