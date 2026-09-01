import { notFound } from "next/navigation";
import Link from "next/link";
import PlaceCard from "@/components/PlaceCard";
import { cities, getCity, getPlaces } from "@/lib/data";

export function generateStaticParams() {
  return cities.flatMap((city) =>
    ["massage", "karaoke"].map((category) => ({
      city: city.slug,
      category,
    }))
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    city: string;
    category: string;
  }>;
}) {
  const { city: citySlug, category } = await params;

  const city = getCity(citySlug);

  if (!city || !["massage", "karaoke"].includes(category)) {
    notFound();
  }

  const items = getPlaces(citySlug, category);

  const title =
    category === "massage" ? "마사지" : "가라오케";

  return (
    <main>
      {/* HEADER */}
      <section className="border-b border-white/10">
        <div className="container py-20">
          <Link
            href="/"
            className="text-sm text-zinc-600 hover:text-white"
          >
            ← 하노이 홈
          </Link>

          <div className="mt-8 text-xs font-black tracking-[.3em] red">
            HANOI · {category.toUpperCase()}
          </div>

          <h1 className="mt-3 text-5xl font-black">
            {city.name} {title}
          </h1>

          <p className="mt-5 max-w-2xl text-zinc-500">
            {city.name} 지역의 {title} 정보를 확인하세요.
            가격, 위치, 영업시간 등 여행자에게 필요한 정보를
            한곳에서 비교할 수 있습니다.
          </p>
        </div>
      </section>

      {/* PLACES */}
      <section className="container py-16">
        {items.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((place) => (
              <PlaceCard
                key={place.slug}
                place={place}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-[#111] p-12 text-center">
            <div className="text-4xl">📍</div>

            <h2 className="mt-5 text-2xl font-black">
              등록된 업소가 없습니다.
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              현재 {city.name} 지역에 등록된 {title} 정보가
              없습니다.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
