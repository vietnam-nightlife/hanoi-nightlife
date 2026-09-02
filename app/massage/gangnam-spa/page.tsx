import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "하노이 강남스파 | 미딩 딘톤 마사지·스파",
  description:
    "하노이 미딩·딘톤 강남스파 정보를 정리했습니다. 위치, 영업시간, 시설 사진, 마사지 코스와 가격, 방문 전 확인사항을 확인하세요.",
  keywords: [
    "하노이 강남스파",
    "강남스파",
    "Gangnam Spa Hanoi",
    "하노이 마사지",
    "하노이 스파",
    "하노이 불건마",
    "하노이 불건마사지",
    "하노이 불건 스파",
    "하노이 불건마 추천",
    "하노이 불건마 가격",
    "미딩 마사지",
    "미딩 스파",
    "미딩 불건마",
    "미딩 불건마 추천",
    "딘톤 마사지",
    "딘톤 스파",
    "딘톤 불건마",
  ],
  alternates: {
    canonical: "/massage/gangnam-spa",
  },
};

const gallery = [
  {
    src: "/하노이 강남스파 메인.webp",
    title: "강남스파 메인",
  },
  {
    src: "/하노이 강남스파 외관.webp",
    title: "강남스파 외관",
  },
  {
    src: "/하노이 강남스파 리셉션.webp",
    title: "강남스파 리셉션",
  },
  {
    src: "/하노이 강남스파 룸1.webp",
    title: "강남스파 마사지룸",
  },
  {
    src: "/하노이 강남스파 룸2.webp",
    title: "강남스파 마사지룸 2",
  },
  {
    src: "/하노이 강남스파 휴게실.webp",
    title: "강남스파 휴게실",
  },
  {
    src: "/하노이 강남스파 스낵바.webp",
    title: "강남스파 스낵바",
  },
];

const courses = [
  {
    name: "A코스",
    time: "30분",
    price: "140만동",
    items: ["샤워", "핸드 마사지", "립 마무리"],
  },
  {
    name: "B코스",
    time: "60분",
    price: "180만동",
    items: [
      "샤워",
      "바디 및 전립선",
      "누루 서비스",
      "핸드",
      "립 마무리",
    ],
  },
  {
    name: "C코스",
    time: "90분",
    price: "210만동",
    items: [
      "샤워",
      "아로마탕 목욕",
      "바디",
      "전립선",
      "누루",
      "핸드",
      "립 마무리",
    ],
  },
];

export default function GangnamSpaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 via-black/20 to-[#08080a]" />

        <div className="container relative py-12 md:py-20">

          <Link
            href="/massage"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 transition hover:text-amber-300"
          >
            ← 하노이 마사지 목록
          </Link>

          <div className="mt-8 max-w-4xl">

            <p className="text-xs font-black tracking-[0.35em] text-amber-400">
              GANGNAM SPA · HANOI
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              하노이 강남스파
            </h1>

            <p className="mt-4 text-lg font-bold text-zinc-400">
              미딩 · 딘톤
            </p>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400 sm:text-base">
              하노이 미딩·딘톤 지역의 강남스파 정보를 정리했습니다.
              매장 위치와 영업시간, 실제 시설 사진, 마사지 코스와 가격을
              한곳에서 확인할 수 있습니다.
            </p>

            {/* BADGES */}
            <div className="mt-7 flex flex-wrap gap-2">

              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-black text-amber-300">
                인기
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-zinc-300">
                추천
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-zinc-300">
                한국어 응대 가능 여부 확인
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-zinc-300">
                재방문 추천
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* MAIN IMAGE */}
      <section className="container">

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111114]">

          <div className="relative aspect-[3/2] md:aspect-[16/8]">

            <img
              src="/하노이 강남스파 메인.webp"
              alt="하노이 강남스파 메인 사진"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-10">

              <p className="text-xs font-black tracking-[0.3em] text-amber-300">
                GANGNAM SPA
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">
                하노이 강남스파
              </h2>

            </div>

          </div>

        </div>

      </section>


      {/* BASIC INFO */}
      <section className="container py-12 md:py-16">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-6">
            <p className="text-xs text-zinc-500">위치</p>
            <p className="mt-3 text-lg font-black">
              하노이 미딩 · 딘톤
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-6">
            <p className="text-xs text-zinc-500">영업시간</p>
            <p className="mt-3 text-lg font-black">
              12:00 - 01:00
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-6">
            <p className="text-xs text-zinc-500">카테고리</p>
            <p className="mt-3 text-lg font-black">
              마사지 · 스파
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-6">
            <p className="text-xs text-zinc-500">지역</p>
            <p className="mt-3 text-lg font-black">
              미딩 · 딘톤
            </p>
          </div>

        </div>

      </section>


      {/* COURSE */}
      <section className="container pb-12 md:pb-16">

        <div className="mb-8">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            COURSE & PRICE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            강남스파 코스 및 가격
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-500">
            아래 가격은 제공된 강남스파 가격표 이미지를 기준으로 정리한
            내용입니다. 방문 전 최신 가격과 실제 포함사항을 다시 확인하세요.
          </p>

        </div>


        <div className="grid gap-5 lg:grid-cols-3">

          {courses.map((course) => (

            <div
              key={course.name}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#111114]"
            >

              <div className="border-b border-white/10 bg-white/[0.03] p-6">

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <p className="text-2xl font-black text-amber-300">
                      {course.name}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                      {course.time}
                    </p>
                  </div>

                  <p className="text-xl font-black">
                    {course.price}
                  </p>

                </div>

              </div>


              <div className="p-6">

                <p className="mb-4 text-xs font-bold tracking-widest text-zinc-500">
                  INCLUDED
                </p>

                <div className="space-y-3">

                  {course.items.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-xs font-black text-amber-300">
                        ✓
                      </span>

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>


        <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-5 text-sm leading-7 text-zinc-400">

          <span className="font-bold text-amber-300">
            가격 안내
          </span>
          <br />
          제공된 가격표 기준이며 실제 방문 시 가격, 코스 구성,
          포함 서비스 및 추가 비용이 달라질 수 있습니다.
          방문 전 최신 정보를 확인하는 것을 권장합니다.

        </div>

      </section>


      {/* GALLERY */}
      <section className="container py-12 md:py-16">

        <div className="mb-8">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            GALLERY
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            강남스파 시설 사진
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-500">
            실제 제공된 사진을 기준으로 외관과 리셉션, 마사지룸,
            휴게공간 및 스낵바 등의 모습을 확인할 수 있습니다.
          </p>

        </div>


        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((image, index) => (

            <div
              key={image.src}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#111114] ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >

              <div
                className={`relative overflow-hidden ${
                  index === 0
                    ? "aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
              >

                <img
                  src={image.src}
                  alt={`${image.title} - 하노이 강남스파`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">

                  <p className="text-sm font-black text-white">
                    {image.title}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* INFORMATION */}
      <section className="container py-12 md:py-16">

        <div className="grid gap-6 lg:grid-cols-2">

          {/* DESCRIPTION */}
          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-9">

            <p className="text-xs font-black tracking-[0.35em] text-amber-400">
              ABOUT GANGNAM SPA
            </p>

            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              하노이 강남스파 정보
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-8 text-zinc-400">

              <p>
                하노이 강남스파는 미딩·딘톤 지역에 위치한 마사지·스파
                업소로 소개되고 있습니다. 이 페이지에서는 방문 전에
                확인할 수 있도록 위치, 운영시간, 시설 사진과 코스별
                가격 정보를 정리했습니다.
              </p>

              <p>
                하노이 마사지나 미딩 스파를 찾는 경우 매장까지의 거리,
                영업시간, 이용 가능한 코스와 가격을 먼저 확인하는 것이
                좋습니다.
              </p>

              <p>
                특히 가격표는 방문 시점에 따라 변경될 수 있으므로
                실제 이용 전 최신 가격과 서비스 구성 여부를 확인하는
                것을 권장합니다.
              </p>

            </div>

          </div>


          {/* CHECKLIST */}
          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-9">

            <p className="text-xs font-black tracking-[0.35em] text-amber-400">
              BEFORE YOU VISIT
            </p>

            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              방문 전 확인사항
            </h2>

            <div className="mt-7 space-y-3">

              {[
                "영업시간을 방문 당일 다시 확인하세요.",
                "매장 위치와 이동 경로를 미리 확인하세요.",
                "원하는 코스의 최신 가격을 확인하세요.",
                "코스에 포함되는 서비스 내용을 확인하세요.",
                "추가 비용이 발생하는지 방문 전에 확인하세요.",
                "한국어 응대 가능 여부는 방문 전 직접 확인하세요.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >

                  <span className="mt-0.5 text-amber-300">
                    ✓
                  </span>

                  <p className="text-sm leading-6 text-zinc-300">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* SEO CONTENT */}
      <section className="container py-12 md:py-16">

        <div className="max-w-4xl">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            HANOI MASSAGE GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            하노이 강남스파를 찾는 여행객을 위한 안내
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-8 text-zinc-400">

            <p>
              하노이에서 마사지와 스파를 찾는 여행객이라면 미딩과
              딘톤 지역의 업소 정보를 함께 비교해 보는 것이 좋습니다.
              하노이 강남스파 역시 미딩·딘톤 지역에서 확인할 수 있는
              마사지·스파 정보 중 하나입니다.
            </p>

            <p>
              하노이 불건마, 미딩 불건마 등의 검색어로 업소를 찾는
              경우에도 단순히 검색 결과만 확인하기보다 실제 위치,
              영업시간, 가격과 이용조건을 함께 확인하는 것이 중요합니다.
            </p>

            <p>
              이 페이지에서는 하노이 강남스파의 기본적인 매장 정보와
              제공받은 시설 사진, 가격표 내용을 정리해 여행객이 방문 전에
              필요한 정보를 한곳에서 확인할 수 있도록 구성했습니다.
            </p>

            <p>
              가격이나 운영시간은 변경될 수 있으므로 실제 방문 전에는
              최신 정보를 다시 확인하시기 바랍니다.
            </p>

          </div>

        </div>

      </section>


      {/* BACK */}
      <section className="container pb-20">

        <Link
          href="/massage"
          className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-sm font-black text-zinc-300 transition hover:border-amber-400/30 hover:bg-amber-400/[0.05] hover:text-amber-300"
        >
          ← 하노이 마사지 목록으로 돌아가기
        </Link>

      </section>

    </main>
  );
}
