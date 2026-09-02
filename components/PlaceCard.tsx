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
        </div>

        {/* CONTENT */}
        <div className="p-6">
          {/* DISTRICT */}
          <div className="text-xs text-zinc-600">
            {place.district}
          </div>

          {/* NAME */}
          <h3 className="mt-2 text-lg font-black">
            {place.name}
          </h3>

          {/* RATING */}
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="text-yellow-400">
              ★
            </span>

            <span className="font-bold">
              {place.rating}
            </span>
          </div>

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
