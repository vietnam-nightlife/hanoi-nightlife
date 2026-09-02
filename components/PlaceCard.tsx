import Link from "next/link";
import type { Place } from "@/lib/data";

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={`/${place.city}/${place.category}/${place.slug}`}>
      <article className="card-hover overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">
        {/* IMAGE */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={place.image}
            alt={place.name}
            className="img-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          {place.featured && (
            <span className="absolute left-4 top-4 rounded-md bg-red-600 px-3 py-2 text-xs font-black text-white">
              추천 인기 업소
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <div className="text-xs text-zinc-600">
            {place.district}
          </div>

          <h3 className="mt-2 text-lg font-black text-white">
            {place.name}
          </h3>

          {/* RATING + KOREAN SUPPORT */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-400">★</span>

              <span className="font-bold text-white">
                {place.rating}
              </span>
            </div>

            {place.koreanSupport ? (
              <span className="rounded-md bg-blue-500/20 px-3 py-2 text-xs font-bold text-blue-400">
                🔵 한국어 응대 가능
              </span>
            ) : (
              <span className="rounded-md bg-zinc-800 px-3 py-2 text-xs font-bold text-pink-400">
                ❌ 한국어 응대 안됨
              </span>
            )}
          </div>

          {/* REVISIT */}
          {place.revisitRecommended && (
            <div className="mt-2">
              <span className="inline-block rounded-md bg-red-900/50 px-3 py-2 text-xs font-bold text-red-400">
                🔥 재방문 추천
              </span>
            </div>
          )}

          {/* REVIEWS */}
          <div className="mt-3 text-xs text-zinc-600">
            후기 {place.reviews}
          </div>

          {/* DESCRIPTION */}
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-zinc-500">
            {place.description}
          </p>

          {/* DETAIL */}
          <div className="mt-5 text-sm font-black red">
            자세히 보기 →
          </div>
        </div>
      </article>
    </Link>
  );
}
