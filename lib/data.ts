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
      "하노이의 마사지와 가라오케 정보를 지역별로 확인하세요. 가격과 위치를 비교해 여행 중 불필요한 지출을 줄이는 데 도움을 드립니다.",
    image: "/하노이눈탱이방지모바일.webp",
  },
];

export const places: Place[] = [
  {
    slug: "hanoi-massage-01",
    name: "하노이 마사지",
    city: "hanoi",
    category: "massage",
    district: "호안끼엠",
    rating: 4.9,
    reviews: 128,
    description:
      "하노이 호안끼엠 지역에서 이용할 수 있는 마사지 업소 정보입니다. 가격, 위치, 영업시간 등의 정보를 확인할 수 있습니다.",
    address: "하노이 호안끼엠",
    hours: "10:00 - 02:00",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "hanoi-karaoke-01",
    name: "하노이 가라오케",
    city: "hanoi",
    category: "karaoke",
    district: "미딘",
    rating: 4.8,
    reviews: 96,
    description:
      "하노이 미딘 지역의 가라오케 정보를 확인할 수 있습니다. 가격, 위치, 룸 정보와 영업시간 등의 정보를 제공합니다.",
    address: "하노이 미딘",
    hours: "19:00 - 05:00",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1400&auto=format&fit=crop",
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
