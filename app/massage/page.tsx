import type { Metadata } from "next";
import Link from "next/link";
import { getPlaces } from "@/lib/data";

export const metadata: Metadata = {
  title: "하노이 불건마 | 미딩 불건마·스파",
  description:
    "하노이 미딩 지역의 마사지와 스파 정보를 정리했습니다. 위치, 운영시간, 시설, 가격과 방문 전 확인사항을 확인하세요.",
  keywords: [
    "하노이 불건마사지",
    "하노이 불건 스파",
    "하노이 불건마 추천",
    "하노이 불건마 위치",
    "하노이 불건마 가격",
    "미딩 불건마",
    "미딩 스파",
    "미딩 불건마 추천",
    "딘톤 불건마",
    "하노이 강남스파",
    "강남스파",
    "Gangnam Spa Hanoi",
  ],
  alternates: {
    canonical: "/massage",
  },
};

export default function MassagePage() {
  /*
   * 중요:
   * 이제 페이지 안에 별도의 spas 데이터를 만들지 않습니다.
   *
   * lib/data.ts의 places 데이터를 직접 가져옵니다.
   */
  const spas = getPlaces("hanoi", "massage");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-transparent to-[#08080a]" />

        <div className="container relative py-16 md:py-24">
          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            HANOI · MASSAGE & SPA
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            하노이 불건마
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
            하노이에서 방문할 만한 불건마와 스파 정보를 지역별로 정리합니다.
            미딩 불건마, 딘톤 불건마 등 지역별 정보를 확인하고 각 매장의
            위치와 운영시간, 시설, 가격 및 방문 전 확인사항을 한곳에서
            확인해보세요.
          </p>
        </div>
      </section>

      {/* =====================================================
          SPA LIST
      ====================================================== */}
      <section className="container py-12 md:py-16">
        <div className="mb-8">
          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            SPA GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            미딩 불건마·스파
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
            하노이 지역에서 찾을 수 있는 마사지와 스파 정보를 하나씩
            정리하고 있습니다.
          </p>
        </div>

        {/* =================================================
            CARD GRID
        ================================================== */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spas.map((spa) => (
            <Link
              key={spa.slug}
              href={`/massage/${spa.slug}`}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#111114] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-950/20"
            >
              {/* =================================================
                  IMAGE
              ================================================== */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={spa.image}
                  alt={`${spa.name} 메인 사진`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* FEATURED */}
                {spa.featured && (
                  <div className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1.5 text-[11px] font-black tracking-wide text-white">
                    FEATURED
                  </div>
                )}

                {/* =================================================
                    BADGES
                ================================================== */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {spa.recommended && (
                    <span className="rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1.5 text-[11px] font-bold text-amber-300 backdrop-blur">
                      ⭐ 추천
                    </span>
                  )}

                  {spa.koreanSupport && (
                    <span className="rounded-full border border-blue-400/30 bg-blue-400/15 px-3 py-1.5 text-[11px] font-bold text-blue-300 backdrop-blur">
                      🇰🇷 한국어 응대 가능
                    </span>
                  )}

                  {spa.revisitRecommended && (
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3 py-1.5 text-[11px] font-bold text-emerald-300 backdrop-blur">
                      🔄 재방문 추천
                    </span>
                  )}
                </div>

                {/* TITLE */}
                <div className="absolute bottom-20 left-6 right-6">
                  <p className="text-xs font-black tracking-[0.25em] text-amber-300">
                    {spa.name.toUpperCase()} · HANOI
                  </p>

                  <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                    {spa.name}
                  </h3>
                </div>
              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================== */}
              <div className="p-7">
                {/* TAGS */}
                {spa.tags && spa.tags.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {spa.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] text-zinc-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* SUMMARY */}
                <p className="text-sm leading-7 text-zinc-400">
                  {spa.description}
                </p>

                {/* =================================================
                    INFO
                ================================================== */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-xs text-zinc-500">위치</p>

                    <p className="mt-2 font-bold">{spa.district}</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] p-4">
                    <p className="text-xs text-zinc-500">영업시간</p>

                    <p className="mt-2 font-bold">{spa.hours}</p>
                  </div>
                </div>

                {/* =================================================
                    RATING
                ================================================== */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-lg text-yellow-400">★</span>

                  <span className="font-black">{spa.rating}</span>

                  <span className="text-sm text-zinc-500">
                    리뷰 {spa.reviews}
                  </span>
                </div>

                {/* =================================================
                    BUTTON
                ================================================== */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-black text-red-400">
                    자세히 보기 →
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10 text-lg text-red-400 transition group-hover:translate-x-1 group-hover:bg-red-400/20">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          BEFORE VISIT
      ====================================================== */}
      <section className="container py-12 md:py-16">
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">
          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            BEFORE YOU VISIT
          </p>

          <h2 className="mt-3 text-3xl font-black">
            하노이 불건마 방문 전 체크
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-500">
            방문하기 전 영업시간과 위치, 코스별 가격, 포함사항 및 추가
            비용 등을 미리 확인하면 더욱 편리하게 이용할 수 있습니다.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "영업시간 확인",
              "정확한 매장 위치 확인",
              "희망 마사지 코스 확인",
              "최신 가격 확인",
              "포함 서비스 확인",
              "추가 비용 여부 확인",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-300"
              >
                <span className="mr-3 text-amber-400">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO CONTENT
      ====================================================== */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl">
          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            HANOI MASSAGE GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            하노이 불건마와 미딩 스파 찾기
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-8 text-zinc-400">
            <p>
              하노이에는 여행객과 출장객들이 이용할 수 있는 다양한 마사지와
              스파가 있습니다. 특히 미딩 지역은 한국인 여행객이 많이 찾는
              지역 중 하나로 마사지와 스파 정보를 함께 찾아보기 편리합니다.
            </p>

            <p>
              하노이 불건마 추천 정보를 찾을 때는 단순히 가격만 확인하기보다
              매장 위치, 영업시간, 시설, 마사지 코스와 실제 이용조건을 함께
              확인하는 것이 좋습니다.
            </p>

            <p>
              이 페이지에서는 하노이 지역의 마사지와 스파 정보를 지속적으로
              정리하고 있으며, 각 매장별 상세 페이지에서 사진과 위치, 가격
              및 방문 전 체크사항을 확인할 수 있도록 구성하고 있습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
