import Link from "next/link";
import type { Place } from "@/lib/data";

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={`/${place.city}/${place.category}/${place.slug}`}>
      <article className="card-hover overflow-hidden rounded-2xl border border-white/10 bg-[#101010]">

        {/* IMAGE */}
        <div className="relative h-28 overflow-hidden sm:h-40 lg:h-56">
          <img
            src={place.image}
            alt={place.name}
            className="img-cover brightness-110 transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="p-3 sm:p-4 lg:p-6">

          {/* DISTRICT */}
          <div className="text-[9px] text-zinc-600 sm:text-xs">
            {place.district}
          </div>

          {/* NAME */}
          <h3 className="mt-1.5 text-sm font-black leading-5 sm:text-base lg:text-lg">
            {place.name}
          </h3>

          {/* RATING */}
          <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm">
            <span className="text-yellow-400">
              ★
            </span>

            <span className="font-bold">
              {place.rating}
            </span>
          </div>

          {/* REVIEWS */}
          <div className="mt-1.5 text-[9px] text-zinc-600 sm:text-xs">
            후기 {place.reviews}
          </div>

          {/* DESCRIPTION */}
          <p className="mt-2 line-clamp-2 text-[10px] leading-4 text-zinc-500 sm:text-xs sm:leading-5 lg:mt-4 lg:text-sm lg:leading-6">
            {place.description}
          </p>

          {/* DETAIL */}
          <div className="mt-3 text-[10px] font-black red sm:mt-4 sm:text-xs lg:mt-5 lg:text-sm">
            자세히 보기 →
          </div>

        </div>
      </article>
    </Link>
  );
}
