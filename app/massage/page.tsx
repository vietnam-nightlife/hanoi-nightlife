import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "하노이 마사지 | 하노이 스파 추천",
  description:
    "하노이 마사지와 스파 정보를 한곳에서 확인하세요. 미딩 지역 마사지, 스파 위치와 시설, 이용정보를 정리했습니다.",
  keywords: [
    "하노이 마사지",
    "하노이 스파",
    "하노이 마사지 추천",
    "미딩 마사지",
    "미딩 스파",
    "하노이 마사지샵",
  ],
  alternates: {
    canonical: "/massage",
  },
};

const massageShops = [
  {
    name: "하노이 강남 스파",
    slug: "gangnam-spa",
    image: "/하노이 강남스파 메인.webp",
    location: "미딩 · 딘톤",
    hours: "12:00 - 01:00",
    description:
      "하노이 미딩 딘톤 지역에 위치한 스파입니다. 매장 외관과 리셉션, 룸, 스낵바 및 휴게공간 등 시설을 확인할 수 있습니다.",
  },
];

export default function MassagePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[430px] overflow-hidden sm:h-[500px] md:h-[600px]">

        <img
          src="/하노이 강남스파 메인.webp"
          alt="하노이 마사지 스파"
          className="h-full w-full object-cover brightness-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/0" />

        <div className="absolute bottom-0 left-0 right-0">

          <div className="container pb-10 md:pb-14">

            <p className="text-xs font-black tracking-[0.35em] text-amber-400">
              HANOI · MASSAGE & SPA
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              하노이 마사지
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              하노이에서 마사지와 스파를 찾는 여행객들을 위한
              마사지 정보를 정리했습니다.
              위치, 시설, 이용시간과 방문 전 확인사항을
              한곳에서 확인하세요.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                HANOI
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                MASSAGE
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                SPA
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                MY DINH
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <div className="max-w-4xl">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            HANOI MASSAGE GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            하노이 마사지 & 스파
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-zinc-400">

            <p>
              하노이에서 마사지와 스파를 찾는 여행객들을 위해
              주요 업소의 위치와 시설, 운영시간 및 이용정보를
              정리하고 있습니다.
            </p>

            <p>
              특히 한국인 여행객들이 많이 찾는 미딩 지역을 중심으로
              실제 방문에 도움이 되는 정보를 확인할 수 있도록
              구성했습니다.
            </p>

            <p>
              마사지샵을 방문하기 전에는 운영시간과 코스,
              가격 및 포함사항을 다시 확인하는 것을 권장합니다.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MASSAGE LIST
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <div className="mb-8">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            MASSAGE & SPA
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            하노이 마사지샵
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
            하노이 마사지와 스파 정보를 확인하세요.
            각 매장의 상세 페이지에서 시설 사진과
            이용정보를 확인할 수 있습니다.
          </p>

        </div>


        <div className="grid gap-6 md:grid-cols-2">

          {massageShops.map((shop) => (

            <Link
              key={shop.slug}
              href={`/massage/${shop.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111114] transition duration-300 hover:border-amber-400/40 hover:bg-[#151518]"
            >

              {/* IMAGE */}

              <div className="relative aspect-[3/2] overflow-hidden">

                <img
                  src={shop.image}
                  alt={`${shop.name} 하노이 마사지`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <p className="text-xs font-black tracking-[0.3em] text-amber-300">
                    HANOI · SPA
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {shop.name}
                  </h3>

                </div>

              </div>


              {/* CONTENT */}

              <div className="p-7">

                <p className="text-sm leading-7 text-zinc-400">
                  {shop.description}
                </p>


                <div className="mt-6 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                    <p className="text-xs text-zinc-500">
                      위치
                    </p>

                    <p className="mt-2 font-black">
                      {shop.location}
                    </p>

                  </div>


                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                    <p className="text-xs text-zinc-500">
                      영업시간
                    </p>

                    <p className="mt-2 font-black">
                      {shop.hours}
                    </p>

                  </div>

                </div>


                <div className="mt-6 flex items-center justify-between">

                  <span className="text-sm font-black text-amber-300">
                    상세 정보 보기
                  </span>

                  <span className="text-xl text-amber-300 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-amber-400">
          ABOUT HANOI MASSAGE
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          하노이 마사지 정보
        </h2>

        <div className="mt-8 max-w-4xl space-y-6 text-[15px] leading-8 text-zinc-400">

          <p>
            하노이는 베트남의 수도로 다양한 마사지와
            스파 시설을 쉽게 찾아볼 수 있는 도시입니다.
          </p>

          <p>
            여행 중 피로를 풀기 위해 마사지나 스파를
            이용하려는 경우 숙소와 관광지에서 이동하기 편한
            지역의 매장을 선택하는 것이 좋습니다.
          </p>

          <p>
            미딩 지역은 한국인 여행객들이 많이 찾는 지역 중 하나로
            한국어 안내가 있는 업소도 확인할 수 있습니다.
          </p>

          <p>
            다만 마사지샵의 영업시간, 가격, 코스와
            서비스 내용은 변경될 수 있으므로 방문 전에
            최신 정보를 확인하는 것을 권장합니다.
          </p>

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="container py-12">

        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            LOCATION
          </p>

          <h2 className="mt-3 text-3xl font-black">
            하노이 마사지 지역
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400">
            하노이 마사지와 스파는 여러 지역에서 찾아볼 수 있습니다.
            여행 일정과 숙소 위치를 고려하여 방문하기 편한 지역을
            선택하는 것이 좋습니다.
          </p>


          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-black/40 p-6">

              <p className="text-xs text-zinc-500">
                주요 지역
              </p>

              <p className="mt-2 text-lg font-black">
                미딩 · 딘톤
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-500">
                한국인 여행객과 교민들이 많이 찾는
                미딩 지역의 마사지와 스파 정보를 확인할 수 있습니다.
              </p>

            </div>


            <div className="rounded-2xl bg-black/40 p-6">

              <p className="text-xs text-zinc-500">
                방문 전 확인
              </p>

              <p className="mt-2 text-lg font-black">
                위치 · 영업시간
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-500">
                방문 당일 운영 여부와 정확한 위치를
                다시 확인하는 것을 권장합니다.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section className="container py-12">

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs text-zinc-500">
              CATEGORY
            </p>

            <p className="mt-3 text-2xl font-black">
              마사지
            </p>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              하노이 마사지와 스파 정보를 정리합니다.
            </p>

          </div>


          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs text-zinc-500">
              AREA
            </p>

            <p className="mt-3 text-2xl font-black">
              HANOI
            </p>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              미딩을 비롯한 하노이 주요 지역 정보를
              계속 추가할 수 있도록 구성했습니다.
            </p>

          </div>


          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs text-zinc-500">
              GUIDE
            </p>

            <p className="mt-3 text-2xl font-black">
              방문 전 확인
            </p>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              가격과 영업시간 및 이용조건은
              방문 전에 최신 정보를 확인하세요.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-amber-400">
          FAQ
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          하노이 마사지 자주 묻는 질문
        </h2>


        <div className="mt-8 space-y-4">

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              하노이 마사지샵은 어디에 많이 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              하노이에는 여러 지역에 마사지와 스파가 있으며,
              이 페이지에서는 미딩 지역을 중심으로 정보를 정리하고 있습니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              마사지 가격은 얼마인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              매장과 코스, 이용시간에 따라 가격이 달라집니다.
              각 매장의 상세 페이지에서 확인하고,
              방문 전 최신 가격을 다시 확인하는 것을 권장합니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              방문 전에 예약해야 하나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              저녁이나 주말처럼 방문객이 많은 시간대에는
              원하는 시간에 이용하기 위해 미리 예약하는 것이 좋습니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              영업시간은 항상 같은가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              영업시간은 매장 사정이나 공휴일 등에 따라
              변경될 수 있으므로 방문 당일 확인하는 것을 권장합니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              사진으로 매장 시설을 볼 수 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              네. 각 마사지샵 상세 페이지에서
              외관과 리셉션, 룸 등 제공된 시설 사진을 확인할 수 있습니다.
            </p>

          </details>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="container py-14 md:py-20">

        <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-b from-amber-950/20 to-[#111114] p-8 text-center md:p-14">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            HANOI MASSAGE & SPA
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            하노이 마사지
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            하노이 마사지와 스파의 위치, 시설 사진,
            이용정보를 확인하고 여행 일정에 맞는
            매장을 찾아보세요.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/massage/gangnam-spa"
              className="rounded-xl bg-amber-400 px-7 py-3 text-sm font-black text-black transition hover:bg-amber-300"
            >
              강남 스파 상세보기
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
