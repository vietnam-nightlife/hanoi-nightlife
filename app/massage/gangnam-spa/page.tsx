import type { Metadata } from "next";
import Link from "next/link";
import { getPlace } from "@/lib/data";

export const metadata: Metadata = {
  title: "하노이 강남스파 | 하노이 불건마 · 미딩 불건마",
  description:
    "하노이 미딩·딘톤 강남스파 정보를 확인하세요. 위치, 영업시간, 마사지 코스, 가격, 시설 및 방문 전 확인사항을 정리했습니다.",
  keywords: [
    "하노이 강남스파",
    "강남스파",
    "Gangnam Spa Hanoi",
    "하노이 불건마",
    "하노이 불건마사지",
    "하노이 불건마 추천",
    "하노이 불건마 가격",
    "하노이 불건마 위치",
    "미딩 불건마",
    "미딩 불건마 추천",
    "미딩 스파",
    "딘톤 불건마",
    "하노이 마사지",
    "하노이 스파",
  ],
  alternates: {
    canonical: "/massage/gangnam-spa",
  },
};

export default function GangnamSpaPage() {
  const spa = getPlace("gangnam-spa");

  if (!spa) {
    return (
      <main className="min-h-screen bg-[#08080a] px-6 py-24 text-center text-white">
        <h1 className="text-3xl font-black">
          강남스파 정보를 찾을 수 없습니다.
        </h1>

        <Link
          href="/massage"
          className="mt-8 inline-flex rounded-xl bg-red-600 px-6 py-3 font-bold"
        >
          마사지 목록으로 돌아가기
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#08080a]" />

        <img
          src={spa.image}
          alt={`${spa.name} 메인 사진`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative container py-24 md:py-36">

          <p className="text-xs font-black tracking-[0.35em] text-red-400">
            HANOI · MASSAGE & SPA
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            {spa.name}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-zinc-300">

            <span>
              ★ {spa.rating}
            </span>

            <span className="text-zinc-500">
              리뷰 {spa.reviews}개
            </span>

            <span className="text-zinc-500">
              ·
            </span>

            <span>
              {spa.district}
            </span>

          </div>

          {/* TAGS */}
          {spa.tags && spa.tags.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">

              {spa.tags.map((tag) => (

                <span
                  key={tag}
                  className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-black text-red-300"
                >
                  {tag}
                </span>

              ))}

            </div>
          )}

        </div>

      </section>


      {/* CONTENT */}
      <section className="container py-12 md:py-16">

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* LEFT */}
          <div>

            <p className="text-xs font-black tracking-[0.35em] text-red-400">
              ABOUT
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              업소 정보
            </h2>

            <div className="mt-6 space-y-6 text-[15px] leading-8 text-zinc-400">

              <p>
                {spa.description}
              </p>

              <p>
                하노이 미딩·딘톤 지역에서 강남스파를 찾는 경우
                위치와 영업시간, 마사지 코스 및 가격을 방문 전에
                확인하는 것이 좋습니다.
              </p>

              <p>
                실제 방문 시에는 당일 운영 여부와 최신 가격,
                포함 서비스 및 추가 비용 여부를 함께 확인하면
                불필요한 비용이나 불편을 줄이는 데 도움이 됩니다.
              </p>

            </div>


            {/* RECOMMENDATION TAGS */}
            <div className="mt-10">

              <h2 className="text-2xl font-black">
                강남스파 추천 정보
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {spa.recommended && (
                  <div className="rounded-2xl border border-white/10 bg-[#111114] p-5">

                    <p className="text-xs font-bold text-zinc-500">
                      추천
                    </p>

                    <p className="mt-2 font-black text-white">
                      추천 업소
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      하노이 미딩·딘톤 지역에서 확인할 수 있는
                      마사지 업소 정보입니다.
                    </p>

                  </div>
                )}


                {spa.koreanSupport && (
                  <div className="rounded-2xl border border-white/10 bg-[#111114] p-5">

                    <p className="text-xs font-bold text-zinc-500">
                      LANGUAGE
                    </p>

                    <p className="mt-2 font-black text-white">
                      한국어 응대 가능
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      한국인 여행객이 이용할 때 참고할 수 있는
                      한국어 응대 관련 정보입니다.
                    </p>

                  </div>
                )}


                {spa.revisitRecommended && (
                  <div className="rounded-2xl border border-white/10 bg-[#111114] p-5">

                    <p className="text-xs font-bold text-zinc-500">
                      VISIT
                    </p>

                    <p className="mt-2 font-black text-white">
                      재방문 추천
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      다시 방문하기 좋은 마사지 업소를 찾는
                      여행객에게 참고가 될 수 있습니다.
                    </p>

                  </div>
                )}


                {spa.tags?.includes("인기") && (
                  <div className="rounded-2xl border border-white/10 bg-[#111114] p-5">

                    <p className="text-xs font-bold text-zinc-500">
                      POPULAR
                    </p>

                    <p className="mt-2 font-black text-white">
                      인기 업소
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      하노이 마사지 정보를 찾는 여행객이
                      참고할 수 있는 인기 업소 정보입니다.
                    </p>

                  </div>
                )}

              </div>

            </div>


            {/* BEFORE VISIT */}
            <div className="mt-12">

              <p className="text-xs font-black tracking-[0.35em] text-red-400">
                BEFORE YOU VISIT
              </p>

              <h2 className="mt-3 text-3xl font-black">
                방문 전 확인사항
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {[
                  "영업시간 확인",
                  "정확한 위치 확인",
                  "최신 가격 확인",
                  "마사지 코스 확인",
                  "포함 서비스 확인",
                  "추가 비용 여부 확인",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-300"
                  >

                    <span className="mr-3 text-red-400">
                      ✓
                    </span>

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* RIGHT INFO CARD */}
          <aside>

            <div className="sticky top-24 rounded-3xl border border-white/10 bg-[#111114] p-6">

              <p className="text-xs font-black tracking-[0.25em] text-red-400">
                BASIC INFO
              </p>

              <h2 className="mt-3 text-2xl font-black">
                기본 정보
              </h2>


              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-xs text-zinc-500">
                    주소
                  </p>

                  <p className="mt-2 font-bold">
                    {spa.address}
                  </p>
                </div>


                <div>
                  <p className="text-xs text-zinc-500">
                    영업시간
                  </p>

                  <p className="mt-2 font-bold">
                    {spa.hours}
                  </p>
                </div>


                <div>
                  <p className="text-xs text-zinc-500">
                    평점
                  </p>

                  <p className="mt-2 font-bold">
                    ★ {spa.rating} ({spa.reviews})
                  </p>
                </div>


                <div>
                  <p className="text-xs text-zinc-500">
                    지역
                  </p>

                  <p className="mt-2 font-bold">
                    {spa.district}
                  </p>
                </div>

              </div>


              {/* STATUS */}
              <div className="mt-7 space-y-2">

                {spa.tags?.includes("인기") && (
                  <div className="rounded-xl bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300">
                    ✓ 인기
                  </div>
                )}

                {spa.recommended && (
                  <div className="rounded-xl bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300">
                    ✓ 추천
                  </div>
                )}

                {spa.koreanSupport && (
                  <div className="rounded-xl bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300">
                    ✓ 한국어 응대 가능
                  </div>
                )}

                {spa.revisitRecommended && (
                  <div className="rounded-xl bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300">
                    ✓ 재방문 추천
                  </div>
                )}

              </div>


              <Link
                href="/massage"
                className="mt-7 flex w-full items-center justify-center rounded-xl bg-red-600 px-5 py-4 text-sm font-black transition hover:bg-red-500"
              >
                목록으로 돌아가기
              </Link>

            </div>

          </aside>

        </div>

      </section>


      {/* SEO CONTENT */}
      <section className="container pb-16 md:pb-24">

        <div className="max-w-4xl">

          <p className="text-xs font-black tracking-[0.35em] text-red-400">
            HANOI MASSAGE GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            하노이 강남스파와 미딩 마사지
          </h2>

          <div className="mt-7 space-y-6 text-[15px] leading-8 text-zinc-400">

            <p>
              하노이 강남스파는 미딩·딘톤 지역의 마사지 정보를
              찾는 여행객이 참고할 수 있도록 위치와 운영시간,
              시설 및 이용 정보를 정리한 페이지입니다.
            </p>

            <p>
              하노이 불건마 또는 미딩 불건마 정보를 검색할 때에는
              가격뿐만 아니라 매장 위치, 영업시간, 코스,
              포함사항과 추가 비용 등을 함께 확인하는 것이 좋습니다.
            </p>

            <p>
              강남스파 방문을 계획하고 있다면 방문 당일 최신
              운영 정보와 가격을 다시 확인하여 실제 이용 조건과
              차이가 없는지 확인하는 것을 권장합니다.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
