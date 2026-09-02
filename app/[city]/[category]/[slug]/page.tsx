import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "강남스파 | 하노이 미딩 마사지",
  description:
    "하노이 미딩 지역 강남스파 마사지 정보. 위치, 영업시간, 코스, 가격표 및 이용 안내를 한눈에 확인할 수 있습니다.",
};

export default function GangnamSpaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0">
          <img
            src="/하노이 강남스파 메인.webp"
            alt="하노이 강남스파"
            className="h-full w-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/65 to-[#050505]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">

          <div className="max-w-4xl">

            <div className="text-xs font-black tracking-[0.35em] text-red-500">
              HANOI · MY DINH · MASSAGE
            </div>

            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              강남스파
            </h1>

            <div className="mt-3 text-xl font-bold tracking-[0.25em] text-zinc-300">
              GANGNAM SPA
            </div>

            <p className="mt-8 max-w-3xl text-sm leading-8 text-zinc-300 md:text-base">
              하노이 미딩 지역에서 이용할 수 있는 강남스파 마사지 안내입니다.
              위치와 영업시간, 마사지 코스 및 가격 정보를 한눈에 확인할 수
              있도록 정리했습니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 bg-black/50 px-5 py-3 text-sm text-zinc-200">
                미딩 지역
              </span>

              <span className="rounded-full border border-white/10 bg-black/50 px-5 py-3 text-sm text-zinc-200">
                12:00 ~ 01:00
              </span>

              <span className="rounded-full border border-white/10 bg-black/50 px-5 py-3 text-sm text-zinc-200">
                사전 예약 권장
              </span>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          BASIC INFORMATION
      ========================================================= */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">

          <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">
            <div className="text-xs font-black tracking-[0.25em] text-zinc-500">
              LOCATION
            </div>

            <div className="mt-3 text-lg font-black">
              하노이 미딩
            </div>

            <p className="mt-2 text-sm leading-7 text-zinc-500">
              미딩 지역에서 방문하기 편리한 마사지 업소입니다.
            </p>
          </div>


          <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">
            <div className="text-xs font-black tracking-[0.25em] text-zinc-500">
              OPENING HOURS
            </div>

            <div className="mt-3 text-lg font-black">
              12:00 ~ 01:00
            </div>

            <p className="mt-2 text-sm leading-7 text-zinc-500">
              방문 전 실제 운영 여부와 예약 가능 시간을 확인하는 것을 권장합니다.
            </p>
          </div>


          <div className="p-8">
            <div className="text-xs font-black tracking-[0.25em] text-zinc-500">
              CATEGORY
            </div>

            <div className="mt-3 text-lg font-black">
              마사지 · 스파
            </div>

            <p className="mt-2 text-sm leading-7 text-zinc-500">
              샤워 및 마사지 코스를 중심으로 이용할 수 있습니다.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">

        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">

          <div>

            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              ABOUT
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              강남스파 업소 정보
            </h2>

            <div className="mt-7 space-y-6 text-sm leading-8 text-zinc-400 md:text-base">

              <p>
                강남스파는 하노이 미딩 지역에서 이용할 수 있는 마사지 및
                스파 업소입니다. 여행 중 피로를 풀고 휴식을 취할 수 있도록
                마사지와 스파 코스를 운영하고 있습니다.
              </p>

              <p>
                이용을 원하는 경우 방문 전에 원하는 코스와 이용 시간을
                미리 확인하고 예약하는 것을 권장합니다. 현장 상황에 따라
                운영시간이나 이용 가능한 코스가 달라질 수 있으므로
                실제 방문 전 확인이 필요합니다.
              </p>

              <p>
                아래에는 강남스파에서 안내하는 대표 코스와 가격 정보를
                정리했습니다. 가격 및 서비스 구성은 변경될 수 있으므로
                예약 시 최신 내용을 확인하시기 바랍니다.
              </p>

            </div>

          </div>


          {/* SIDE INFO */}
          <aside className="rounded-3xl border border-white/10 bg-[#111] p-7">

            <div className="text-sm font-black">
              기본 정보
            </div>

            <dl className="mt-7 space-y-6 text-sm">

              <div>
                <dt className="text-zinc-600">
                  지역
                </dt>

                <dd className="mt-2 text-zinc-300">
                  하노이 미딩
                </dd>
              </div>


              <div>
                <dt className="text-zinc-600">
                  영업시간
                </dt>

                <dd className="mt-2 text-zinc-300">
                  12:00 ~ 01:00
                </dd>
              </div>


              <div>
                <dt className="text-zinc-600">
                  업종
                </dt>

                <dd className="mt-2 text-zinc-300">
                  마사지 · 스파
                </dd>
              </div>

            </dl>


            <Link
              href="/hanoi/massage"
              className="mt-8 block rounded-xl bg-red-600 px-5 py-4 text-center text-sm font-black transition hover:bg-red-500"
            >
              마사지 목록으로 돌아가기
            </Link>

          </aside>

        </div>

      </section>


      {/* =========================================================
          PRICE
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#080808]">

        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">

          <div className="text-center">

            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              PRICE
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              강남스파 가격표
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
              아래 가격표는 제공해주신 강남스파 가격표 이미지를 기준으로
              텍스트 형태로 정리했습니다.
            </p>

          </div>


          <div className="mt-12 grid gap-6 lg:grid-cols-3">


            {/* A COURSE */}
            <div className="group rounded-3xl border border-white/10 bg-[#111] p-7 transition hover:border-white/20">

              <div className="flex items-start justify-between gap-5">

                <div>
                  <div className="text-3xl font-black">
                    A코스
                  </div>

                  <div className="mt-2 text-sm text-zinc-500">
                    30분
                  </div>
                </div>

                <div className="rounded-xl border border-[#b8945b]/50 px-5 py-3 text-lg font-black text-[#d6b477]">
                  140만동
                </div>

              </div>


              <div className="my-7 h-px bg-white/10" />


              <div className="space-y-2 text-sm leading-7 text-zinc-300">

                <p>
                  - 샤워 + 핸드폰
                </p>

                <p>
                  - 립 마무리
                </p>

              </div>

            </div>


            {/* B COURSE */}
            <div className="group rounded-3xl border border-white/10 bg-[#111] p-7 transition hover:border-white/20">

              <div className="flex items-start justify-between gap-5">

                <div>
                  <div className="text-3xl font-black">
                    B코스
                  </div>

                  <div className="mt-2 text-sm text-zinc-500">
                    60분
                  </div>
                </div>

                <div className="rounded-xl border border-[#b8945b]/50 px-5 py-3 text-lg font-black text-[#d6b477]">
                  180만동
                </div>

              </div>


              <div className="my-7 h-px bg-white/10" />


              <div className="space-y-2 text-sm leading-7 text-zinc-300">

                <p>
                  - 샤워 + 바디 및 전립선
                </p>

                <p>
                  + 누루 서비스 + 핸플, 립 마무리
                </p>

              </div>

            </div>


            {/* C COURSE */}
            <div className="group rounded-3xl border border-white/10 bg-[#111] p-7 transition hover:border-white/20">

              <div className="flex items-start justify-between gap-5">

                <div>
                  <div className="text-3xl font-black">
                    C코스
                  </div>

                  <div className="mt-2 text-sm text-zinc-500">
                    90분
                  </div>
                </div>

                <div className="rounded-xl border border-[#b8945b]/50 px-5 py-3 text-lg font-black text-[#d6b477]">
                  210만동
                </div>

              </div>


              <div className="my-7 h-px bg-white/10" />


              <div className="space-y-2 text-sm leading-7 text-zinc-300">

                <p>
                  - 샤워 + 아로마탕 목욕
                </p>

                <p>
                  + 바디, 전립선 + 누루
                </p>

                <p>
                  + 핸플, 립 마무리
                </p>

              </div>

            </div>

          </div>


          <div className="mt-10 text-center">

            <div className="inline-flex rounded-full border border-white/10 bg-[#111] px-6 py-3 text-sm text-zinc-400">
              모든 금액은 팁 포함 가격입니다.
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">

        <div className="text-xs font-black tracking-[0.3em] text-red-500">
          GALLERY
        </div>

        <h2 className="mt-4 text-3xl font-black md:text-4xl">
          강남스파 시설
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
          강남스파 관련 이미지를 확인할 수 있습니다.
        </p>


        <div className="mt-10 grid gap-5 md:grid-cols-2">

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img
              src="/하노이 강남스파 외관.webp"
              alt="강남스파 외관"
              className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>


          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <img
              src="/하노이 강남스파 리셉션.webp"
              alt="강남스파 리셉션"
              className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-t border-white/10 bg-[#080808]">

        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8">

          <div className="text-center">

            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              FAQ
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              자주 묻는 질문
            </h2>

          </div>


          <div className="mt-12 space-y-4">


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer list-none pr-8 text-base font-black">
                강남스파는 어디에 있나요?
              </summary>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                하노이 미딩 지역에 위치한 마사지 업소로 안내되고 있습니다.
                정확한 위치와 방문 방법은 예약 시 확인하는 것을 권장합니다.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer list-none pr-8 text-base font-black">
                영업시간은 어떻게 되나요?
              </summary>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                안내된 영업시간은 12:00부터 01:00까지입니다.
                방문 전 실제 운영시간을 다시 확인하는 것이 좋습니다.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer list-none pr-8 text-base font-black">
                예약이 필요한가요?
              </summary>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                원하는 시간에 이용하기 위해서는 사전 예약을 권장합니다.
                특히 방문객이 많은 시간에는 예약 가능 여부를 미리 확인하는
                것이 좋습니다.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer list-none pr-8 text-base font-black">
                가격은 얼마인가요?
              </summary>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                제공받은 가격표 기준으로 A코스 140만동, B코스 180만동,
                C코스 210만동입니다. 모든 금액은 팁 포함 가격으로 안내되어
                있습니다. 가격과 코스 구성은 변경될 수 있으므로 예약 시
                최신 내용을 확인하시기 바랍니다.
              </p>

            </details>


            <details className="group rounded-2xl border border-white/10 bg-[#111] p-6">

              <summary className="cursor-pointer list-none pr-8 text-base font-black">
                가격표의 코스는 어떻게 구성되어 있나요?
              </summary>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                A코스는 30분, B코스는 60분, C코스는 90분으로 구성되어
                있으며 각각의 세부 구성은 위 가격표에서 확인할 수 있습니다.
              </p>

            </details>


          </div>

        </div>

      </section>


      {/* =========================================================
          NOTICE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">

        <div className="rounded-3xl border border-white/10 bg-[#111] p-7 md:p-10">

          <div className="text-sm font-black">
            이용 전 확인사항
          </div>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-500">

            <li>
              • 영업시간과 가격은 현장 상황에 따라 변경될 수 있습니다.
            </li>

            <li>
              • 방문 전 이용 가능 여부와 최신 가격을 확인하는 것을 권장합니다.
            </li>

            <li>
              • 원하는 시간대가 있다면 사전 예약을 권장합니다.
            </li>

            <li>
              • 본 페이지의 가격 정보는 제공받은 가격표를 기준으로 작성되었습니다.
            </li>

          </ul>

        </div>

      </section>


      {/* =========================================================
          BOTTOM
      ========================================================= */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8">

          <div className="text-xs font-black tracking-[0.3em] text-red-500">
            GANGNAM SPA
          </div>

          <h2 className="mt-4 text-3xl font-black">
            강남스파
          </h2>

          <p className="mt-4 text-sm text-zinc-500">
            하노이 미딩 마사지 정보
          </p>

          <Link
            href="/hanoi/massage"
            className="mt-8 inline-block rounded-xl bg-red-600 px-8 py-4 text-sm font-black transition hover:bg-red-500"
          >
            마사지 목록으로 돌아가기
          </Link>

        </div>

      </section>

    </main>
  );
}
