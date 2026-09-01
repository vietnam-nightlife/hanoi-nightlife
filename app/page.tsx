import Link from "next/link";
import CityCard from "@/components/CityCard";
import PlaceCard from "@/components/PlaceCard";
import ContactButtons from "@/components/ContactButtons";
import { cities, places } from "@/lib/data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "하노이 밤문화 가이드 | 마사지·가라오케",
  description:
    "하노이의 마사지와 가라오케 정보를 지역별로 확인하세요. 가격, 위치, 영업시간 등 여행자에게 필요한 정보를 한곳에서 비교할 수 있습니다.",
};

export default function Home() {
  const featured = places.filter((p) => p.featured);

  return (
    <main id="top">

      {/* =================================================
          HERO
      ================================================== */}
      <section className="relative overflow-hidden border-b border-white/10">

        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/하노이눈탱이방지모바일.webp"
          />

          <img
            src="/하노이눈탱이방지피씨.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

        <div className="container relative z-10 py-12 md:py-16">

          <div className="max-w-4xl">

            {/* 상단 라벨 */}
            <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-black tracking-widest text-red-400">
              HANOI TRAVEL & NIGHTLIFE
            </div>


            {/* 메인 제목 */}
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
              하노이에서
              <br />
              <span className="red">
                눈탱이 맞지 마세요.
              </span>
            </h1>


            {/* 설명 */}
            <p className="mt-5 max-w-2xl text-base leading-8 text-white md:text-zinc-400 md:text-lg">
              하노이에서 이용할 수 있는 마사지와 가라오케 정보를
              지역별로 확인하세요. 가격, 위치, 영업시간 등
              여행자에게 필요한 정보를 한곳에서 비교할 수 있도록
              구성했습니다.
            </p>


{/* =================================================
    하노이 바로가기 네온 버튼
================================================== */}
<div className="mt-7 flex flex-wrap gap-4">

  {/* 마사지 */}
  <a
    href="/hanoi/massage"
    className="group relative min-w-[200px] overflow-hidden rounded-2xl border border-red-500/80 bg-black/10 px-7 py-5 text-center backdrop-blur-[2px] shadow-[0_0_8px_rgba(239,68,68,0.45),0_0_20px_rgba(239,68,68,0.15),inset_0_0_14px_rgba(239,68,68,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:bg-red-500/5 hover:shadow-[0_0_12px_rgba(239,68,68,0.7),0_0_32px_rgba(239,68,68,0.28),inset_0_0_20px_rgba(239,68,68,0.1)]"
  >
    <div className="relative z-10">

      <div className="text-[10px] font-black tracking-[0.25em] text-red-300">
        HANOI
      </div>

      <div className="mt-1 text-lg font-black text-white drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
        하노이 마사지
      </div>

      <div className="mt-1 text-xs font-medium text-zinc-300">
        마사지 정보 보기 →
      </div>

    </div>

    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-red-400/20" />

    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-red-500/10 blur-2xl transition-transform duration-300 group-hover:scale-150" />

  </a>


  {/* 가라오케 */}
  <a
    href="/hanoi/karaoke"
    className="group relative min-w-[200px] overflow-hidden rounded-2xl border border-blue-500/80 bg-black/10 px-7 py-5 text-center backdrop-blur-[2px] shadow-[0_0_8px_rgba(59,130,246,0.45),0_0_20px_rgba(59,130,246,0.15),inset_0_0_14px_rgba(59,130,246,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/5 hover:shadow-[0_0_12px_rgba(59,130,246,0.7),0_0_32px_rgba(59,130,246,0.28),inset_0_0_20px_rgba(59,130,246,0.1)]"
  >
    <div className="relative z-10">

      <div className="text-[10px] font-black tracking-[0.25em] text-blue-300">
        HANOI
      </div>

      <div className="mt-1 text-lg font-black text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
        하노이 가라오케
      </div>

      <div className="mt-1 text-xs font-medium text-zinc-300">
        가라오케 정보 보기 →
      </div>

    </div>

    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-400/20" />

    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-transform duration-300 group-hover:scale-150" />

  </a>


  {/* 에코걸 */}
  <a
    href="/hanoi/ecogirl"
    className="group relative min-w-[200px] overflow-hidden rounded-2xl border border-yellow-500/80 bg-black/10 px-7 py-5 text-center backdrop-blur-[2px] shadow-[0_0_8px_rgba(234,179,8,0.45),0_0_20px_rgba(234,179,8,0.15),inset_0_0_14px_rgba(234,179,8,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-500/5 hover:shadow-[0_0_12px_rgba(234,179,8,0.7),0_0_32px_rgba(234,179,8,0.28),inset_0_0_20px_rgba(234,179,8,0.1)]"
  >
    <div className="relative z-10">

      <div className="text-[10px] font-black tracking-[0.25em] text-yellow-300">
        HANOI
      </div>

      <div className="mt-1 text-lg font-black text-white drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]">
        하노이 에코걸
      </div>

      <div className="mt-1 text-xs font-medium text-zinc-300">
        에코걸 정보 보기 →
      </div>

    </div>

    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-yellow-400/20" />

    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-500/10 blur-2xl transition-transform duration-300 group-hover:scale-150" />

  </a>

</div>

          </div>

        </div>

      </section>


      {/* =================================================
          1. 추천 업소
      ================================================== */}
      <section
        id="popular"
        className="container py-8 md:py-10"
      >

        <div className="text-xs font-black tracking-[.3em] red">
          FEATURED
        </div>

        <h2 className="mt-2 text-3xl font-black md:text-4xl">
          하노이 추천 업소
        </h2>

        <p className="mt-3 text-sm text-zinc-500">
          하노이에서 이용할 수 있는 추천 마사지와 가라오케 정보를 확인하세요.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {featured.map((place) => (
            <PlaceCard
              key={place.slug}
              place={place}
            />
          ))}

        </div>

      </section>


      {/* =================================================
          2. 하노이 어느 지역을 찾으세요?
      ================================================== */}
      <section className="container py-14 sm:py-20">
  <div className="mb-8">
    <p className="text-xs font-black tracking-[0.25em] text-red-500">
      DESTINATION
    </p>

    <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
      하노이 어느 지역을 찾으세요?
    </h2>

    <p className="mt-2 text-sm text-zinc-500">
      하노이 주요 지역의 마사지와 가라오케 정보를 확인하세요.
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-2">

    {/* 미딩 */}
    <a
      href="/hanoi/miding"
      className="group relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50"
    >
      {/* 배경 */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: "url('/hanoi-night.webp')",
        }}
      />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

      {/* 내용 */}
      <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
        <p className="text-xs font-black tracking-[0.3em] text-red-500">
          MIDING
        </p>

        <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
          미딩
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-300">
          하노이 미딩 지역의 마사지와 가라오케 정보를
          지역별로 확인하세요.
        </p>

        <div className="mt-6 text-sm font-black text-white">
          미딩 정보 보기 →
        </div>
      </div>
    </a>

    {/* 중화 */}
    <a
      href="/hanoi/jungwha"
      className="group relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
    >
      {/* 배경 */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: "url('/hanoi-night.webp')",
        }}
      />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

      {/* 내용 */}
      <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
        <p className="text-xs font-black tracking-[0.3em] text-blue-400">
          JUNGWHA
        </p>

        <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
          중화
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-300">
          하노이 중화 지역의 마사지와 가라오케 정보를
          지역별로 확인하세요.
        </p>

        <div className="mt-6 text-sm font-black text-white">
          중화 정보 보기 →
        </div>
      </div>
    </a>

  </div>
</section>


      {/* =================================================
          3. 무엇을 찾으세요?
      ================================================== */}
      <section className="container py-12 md:py-16">

        <div className="text-xs font-black tracking-[.3em] red">
          CATEGORIES
        </div>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          무엇을 찾으세요?
        </h2>


        <div className="mt-7">

          {/* =========================
              하노이
          ========================== */}
          <div
            className="relative overflow-hidden rounded-3xl border border-red-500/70 bg-[#111] p-8
            shadow-[0_0_12px_rgba(239,68,68,0.25),inset_0_0_20px_rgba(239,68,68,0.04)]"
          >

            <div className="text-[10px] font-black tracking-[0.3em] text-red-400">
              HANOI
            </div>

            <h3 className="mt-2 text-3xl font-black text-white">
              하노이
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              하노이의 마사지와 가라오케 정보를 확인하세요.
            </p>


            {/* 마사지 / 가라오케 */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              <a
                href="/hanoi/massage"
                className="rounded-2xl border border-red-500/40 bg-red-500/5 px-5 py-5 transition-all duration-300 hover:border-red-400 hover:bg-red-500/10"
              >

                <div className="text-3xl">
                  💆
                </div>

                <div className="mt-3 text-lg font-black text-white">
                  하노이 마사지
                </div>

                <div className="mt-1 text-xs font-bold text-red-400">
                  마사지 보기 →
                </div>

              </a>


              <a
                href="/hanoi/karaoke"
                className="rounded-2xl border border-red-500/40 bg-red-500/5 px-5 py-5 transition-all duration-300 hover:border-red-400 hover:bg-red-500/10"
              >

                <div className="text-3xl">
                  🎤
                </div>

                <div className="mt-3 text-lg font-black text-white">
                  하노이 가라오케
                </div>

                <div className="mt-1 text-xs font-bold text-red-400">
                  가라오케 보기 →
                </div>

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          4. FAQ
      ================================================== */}
      <section
        id="faq"
        className="border-t border-white/10 bg-[#0c0c0c]"
      >

        <div className="container py-12 md:py-16">

          <div className="mx-auto max-w-4xl">

            <div className="text-xs font-black tracking-[.3em] red">
              FAQ
            </div>

            <h2 className="mt-3 text-3xl font-black text-white">
              하노이 밤문화 자주 묻는 대표 질문 (FAQ)
            </h2>


            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">

              {/* FAQ 1 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    하노이에서는 어느 지역을 많이 이용하나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">

                  하노이에서는 호안끼엠, 미딩, 서호 등 관광객과
                  한국인 여행객들이 많이 찾는 지역을 중심으로
                  다양한 마사지와 가라오케 업소를 찾아볼 수 있습니다.

                  <br />
                  <br />

                  여행 일정과 숙소 위치에 맞춰 가까운 지역의 업소를
                  선택하는 것이 편리합니다.

                </div>

              </details>


              {/* FAQ 2 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    하노이 마사지 가격은 어떻게 확인하나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">

                  마사지 종류와 업소, 이용 시간에 따라 가격이 달라질 수 있습니다.

                  <br />
                  <br />

                  방문 전에 코스와 가격, 이용시간 및 추가 비용 여부를
                  미리 확인하는 것이 좋습니다.

                  <br />
                  <br />

                  처음 방문하는 경우에는 이용하려는 업소의
                  정확한 가격과 조건을 확인한 후 이용하시기 바랍니다.

                </div>

              </details>


              {/* FAQ 3 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    하노이 가라오케 영업시간은 어떻게 되나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">

                  하노이 가라오케의 영업시간은 업소와 지역에 따라
                  차이가 있을 수 있습니다.

                  <br />
                  <br />

                  일반적으로 저녁 시간부터 영업을 시작하는 곳이 많으며,
                  늦은 시간까지 운영하는 업소도 있습니다.

                  <br />
                  <br />

                  방문 전 해당 업소의 정확한 영업시간을 확인하여
                  헛걸음하지 않도록 준비하는 것을 권장합니다.

                </div>

              </details>


              {/* FAQ 4 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    하노이에서 바가지나 추가요금을 피하려면 어떻게 해야 하나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">

                  방문 전에 업소의 위치와 가격 정보를 미리 확인하고,
                  현장에서 안내받는 가격과 조건도 이용 전에
                  다시 확인하는 것이 좋습니다.

                  <br />
                  <br />

                  특히 기본 가격에 포함되지 않는 추가 비용이 있는지
                  미리 확인하면 예상하지 못한 지출을 줄일 수 있습니다.

                  <br />
                  <br />

                  하노이 여행 중 이용할 업소를 선택할 때는
                  가격과 이용조건이 명확한 곳을 우선적으로 확인하시기 바랍니다.

                </div>

              </details>


              {/* FAQ 5 */}
              <details className="group border-b border-white/10">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    하노이 업소 이용 시 주의해야 할 사항은 무엇인가요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">

                  업소를 이용하기 전 이용요금과 이용시간,
                  포함된 서비스 및 추가 비용 여부를 확인하는 것이 좋습니다.

                  <br />
                  <br />

                  업소마다 이용 조건이 다를 수 있으므로
                  예약이나 방문 전에 안내받은 내용을 정확하게
                  확인하시기 바랍니다.

                  <br />
                  <br />

                  또한 여권이나 휴대폰 등 개인 소지품은
                  본인이 직접 관리하는 것을 권장합니다.

                </div>

              </details>


              {/* FAQ 6 */}
              <details className="group">

                <summary className="flex cursor-pointer list-none items-center px-6 py-5 text-base font-bold text-white">

                  <span className="mr-4 text-sm text-red-400">
                    Q
                  </span>

                  <span className="flex-1">
                    업소 예약이나 이용 관련 문의는 어디로 하면 되나요?
                  </span>

                  <span className="ml-4 text-zinc-400 transition-transform duration-300 group-open:rotate-180">
                    ↓
                  </span>

                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-400">

                  업소 예약 및 이용에 관한 문의는
                  카카오톡 또는 텔레그램을 통해 문의하실 수 있습니다.

                  <br />
                  <br />

                  방문 예정일, 인원, 원하시는 지역과 업소 등을
                  함께 알려주시면 보다 빠르게 안내받으실 수 있습니다.

                  <br />
                  <br />

                  업소별 코스와 이용시간, 요금 및 예약 가능 여부가
                  다를 수 있으므로 방문 전에 미리 확인하는 것을 권장합니다.

                </div>

              </details>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          5. 문의
      ================================================== */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#0c0c0c]"
      >

        <div className="container py-12 text-center md:py-16">

          <div className="text-xs font-black tracking-[.3em] red">
            CONTACT
          </div>

          <h2 className="mt-4 text-3xl font-black">
            하노이 업소 등록 및 정보 수정 문의
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            하노이 지역 업소를 사이트에 등록하거나
            가격, 주소, 영업시간 등의 정보 수정이 필요한 경우 문의해주세요.
          </p>

          <div className="flex justify-center">

            <ContactButtons className="mt-8" />

          </div>

        </div>

      </section>

    </main>
  );
}
