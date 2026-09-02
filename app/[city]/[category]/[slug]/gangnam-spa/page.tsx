import { notFound } from "next/navigation";
import Link from "next/link";
import { places, getPlace, getCity } from "@/lib/data";

export function generateStaticParams() {
  return places.map((p) => ({
    city: p.city,
    category: p.category,
    slug: p.slug,
  }));
}

export default async function PlaceDetail({
  params,
}: {
  params: Promise<{
    city: string;
    category: string;
    slug: string;
  }>;
}) {
  const { city, category, slug } = await params;

  const place = getPlace(slug);

  if (!place || place.city !== city || place.category !== category) {
    notFound();
  }

  const cityData = getCity(city);

  if (!cityData) {
    notFound();
  }

  const cityName = cityData.name;
  const categoryName =
    category === "massage" ? "마사지" : "가라오케";

  const isGangnamSpa = place.slug === "gangnam-spa";

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="relative h-[520px] md:h-[620px]">

          <img
            src={place.image}
            alt={place.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

          <div className="absolute inset-x-0 bottom-0">
            <div className="container pb-12 md:pb-16">

              <div className="text-xs font-black tracking-[.35em] red">
                {cityName} · {categoryName}
              </div>

              <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
                {place.name}
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                하노이 미딩 · 딘톤 지역에서 이용할 수 있는
                {place.name}의 위치, 영업시간, 코스와 가격 정보를
                한눈에 확인하세요.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="rounded-full border border-white/10 bg-black/50 px-5 py-3 text-sm">
                  ★ {place.rating}
                </div>

                <div className="rounded-full border border-white/10 bg-black/50 px-5 py-3 text-sm">
                  리뷰 {place.reviews}개
                </div>

                <div className="rounded-full border border-white/10 bg-black/50 px-5 py-3 text-sm">
                  {place.district}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          QUICK INFO
      ========================================================= */}
      <section className="border-b border-white/10 bg-[#0b0b0b]">
        <div className="container py-8">

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs font-black tracking-[.25em] text-zinc-600">
                LOCATION
              </div>

              <div className="mt-3 text-lg font-black">
                {place.district}
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                {place.address}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs font-black tracking-[.25em] text-zinc-600">
                HOURS
              </div>

              <div className="mt-3 text-lg font-black">
                {place.hours}
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                운영시간은 방문 전 다시 확인하세요.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-xs font-black tracking-[.25em] text-zinc-600">
                RATING
              </div>

              <div className="mt-3 text-lg font-black">
                ★ {place.rating}
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                리뷰 {place.reviews}개 기준
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="container py-20 md:py-24">

        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">

          <div>

            <div className="text-xs font-black tracking-[.35em] red">
              ABOUT
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              {place.name} 소개
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-400">
              {place.description}
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-500">
              하노이 미딩·딘톤 지역을 방문하는 여행객이라면
              업소 위치와 운영시간을 미리 확인하고 방문하는 것이 좋습니다.
              아래에서 현재 정리된 코스와 가격 정보를 확인할 수 있습니다.
            </p>

          </div>


          {/* SIDE CARD */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-[#111] p-7">

            <div className="text-xs font-black tracking-[.3em] red">
              BASIC INFO
            </div>

            <h3 className="mt-3 text-xl font-black">
              기본 정보
            </h3>

            <dl className="mt-7 space-y-6 text-sm">

              <div>
                <dt className="text-zinc-600">
                  업소명
                </dt>

                <dd className="mt-2 font-bold text-zinc-200">
                  {place.name}
                </dd>
              </div>

              <div>
                <dt className="text-zinc-600">
                  지역
                </dt>

                <dd className="mt-2 font-bold text-zinc-200">
                  {place.district}
                </dd>
              </div>

              <div>
                <dt className="text-zinc-600">
                  주소
                </dt>

                <dd className="mt-2 leading-6 text-zinc-300">
                  {place.address}
                </dd>
              </div>

              <div>
                <dt className="text-zinc-600">
                  영업시간
                </dt>

                <dd className="mt-2 font-bold text-zinc-200">
                  {place.hours}
                </dd>
              </div>

            </dl>

          </aside>

        </div>

      </section>


      {/* =========================================================
          PRICE SECTION
      ========================================================= */}
      {isGangnamSpa && (
        <section className="border-y border-white/10 bg-[#0b0b0b]">

          <div className="container py-20 md:py-24">

            <div className="max-w-3xl">

              <div className="text-xs font-black tracking-[.35em] red">
                PRICE & COURSE
              </div>

              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                강남스파 코스 및 가격
              </h2>

              <p className="mt-5 leading-7 text-zinc-500">
                아래 가격표는 제공해주신 최신 가격표 이미지를
                기준으로 정리한 내용입니다.
              </p>

            </div>


            {/* PRICE CARDS */}
            <div className="mt-12 grid gap-5 lg:grid-cols-3">


              {/* A COURSE */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] p-7 transition hover:border-white/20">

                <div className="flex items-start justify-between">

                  <div>
                    <div className="text-xs font-black tracking-[.3em] text-zinc-600">
                      COURSE A
                    </div>

                    <h3 className="mt-3 text-3xl font-black">
                      A코스
                    </h3>

                    <div className="mt-2 text-sm text-zinc-500">
                      30분
                    </div>
                  </div>

                  <div className="rounded-full border border-white/10 px-4 py-2 text-xs font-black">
                    BASIC
                  </div>

                </div>


                <div className="my-7 h-px bg-white/10" />


                <div className="space-y-3 text-sm leading-7 text-zinc-400">
                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>샤워</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>핸플</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>립 마무리</span>
                  </div>
                </div>


                <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">

                  <div className="text-xs text-zinc-600">
                    PRICE
                  </div>

                  <div className="mt-2 text-3xl font-black">
                    140만동
                  </div>

                  <div className="mt-1 text-xs text-zinc-600">
                    VND
                  </div>

                </div>

              </div>


              {/* B COURSE */}
              <div className="group relative overflow-hidden rounded-3xl border border-red-500/30 bg-[#111] p-7 transition hover:border-red-500/50">

                <div className="absolute right-6 top-6 rounded-full bg-red-600 px-3 py-1.5 text-[10px] font-black tracking-wider">
                  POPULAR
                </div>

                <div>

                  <div className="text-xs font-black tracking-[.3em] text-zinc-600">
                    COURSE B
                  </div>

                  <h3 className="mt-3 text-3xl font-black">
                    B코스
                  </h3>

                  <div className="mt-2 text-sm text-zinc-500">
                    60분
                  </div>

                </div>


                <div className="my-7 h-px bg-white/10" />


                <div className="space-y-3 text-sm leading-7 text-zinc-400">

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>샤워</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>바디 및 전립선</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>누루 서비스</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>핸플</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>립 마무리</span>
                  </div>

                </div>


                <div className="mt-8 rounded-2xl border border-red-500/20 bg-black/30 p-5">

                  <div className="text-xs text-zinc-600">
                    PRICE
                  </div>

                  <div className="mt-2 text-3xl font-black">
                    180만동
                  </div>

                  <div className="mt-1 text-xs text-zinc-600">
                    VND
                  </div>

                </div>

              </div>


              {/* C COURSE */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] p-7 transition hover:border-white/20">

                <div className="flex items-start justify-between">

                  <div>

                    <div className="text-xs font-black tracking-[.3em] text-zinc-600">
                      COURSE C
                    </div>

                    <h3 className="mt-3 text-3xl font-black">
                      C코스
                    </h3>

                    <div className="mt-2 text-sm text-zinc-500">
                      90분
                    </div>

                  </div>

                  <div className="rounded-full border border-white/10 px-4 py-2 text-xs font-black">
                    PREMIUM
                  </div>

                </div>


                <div className="my-7 h-px bg-white/10" />


                <div className="space-y-3 text-sm leading-7 text-zinc-400">

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>샤워</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>아로마탕 목욕</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>바디 및 전립선</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>누루</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>핸플</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="red">—</span>
                    <span>립 마무리</span>
                  </div>

                </div>


                <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">

                  <div className="text-xs text-zinc-600">
                    PRICE
                  </div>

                  <div className="mt-2 text-3xl font-black">
                    210만동
                  </div>

                  <div className="mt-1 text-xs text-zinc-600">
                    VND
                  </div>

                </div>

              </div>

            </div>


            {/* PRICE NOTE */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">

              <div className="flex items-start gap-4">

                <div className="text-xl">
                  ✓
                </div>

                <div>

                  <div className="font-bold">
                    가격 안내
                  </div>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    모든 금액은 제공해주신 가격표 이미지를 기준으로
                    작성했습니다. 실제 방문 시 가격이나 코스 구성이
                    변경될 수 있으므로 방문 전 확인을 권장합니다.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
      )}


      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="container py-20 md:py-24">

        <div className="text-xs font-black tracking-[.35em] red">
          LOCATION
        </div>

        <h2 className="mt-4 text-3xl font-black md:text-4xl">
          강남스파 위치
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">

          <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-[#111]">

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl">
                  📍
                </div>

                <div className="mt-5 text-xl font-black">
                  미딩 · 딘톤
                </div>

                <div className="mt-2 max-w-md px-6 text-sm leading-6 text-zinc-500">
                  {place.address}
                </div>

              </div>

            </div>

          </div>


          <div className="rounded-3xl border border-white/10 bg-[#111] p-7">

            <div className="text-sm font-black">
              방문 정보
            </div>

            <div className="mt-7 space-y-6">

              <div>
                <div className="text-xs text-zinc-600">
                  ADDRESS
                </div>

                <div className="mt-2 text-sm leading-6 text-zinc-300">
                  {place.address}
                </div>
              </div>

              <div>
                <div className="text-xs text-zinc-600">
                  OPEN
                </div>

                <div className="mt-2 text-sm font-bold text-zinc-300">
                  {place.hours}
                </div>
              </div>

              <div>
                <div className="text-xs text-zinc-600">
                  AREA
                </div>

                <div className="mt-2 text-sm text-zinc-300">
                  미딩 · 딘톤
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          VISIT GUIDE
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#0b0b0b]">

        <div className="container py-20 md:py-24">

          <div className="text-xs font-black tracking-[.35em] red">
            VISIT GUIDE
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            방문 전 확인사항
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">

              <div className="text-2xl">
                01
              </div>

              <h3 className="mt-5 text-lg font-black">
                위치 확인
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                미딩·딘톤 지역은 골목이 많은 편이므로
                방문 전에 정확한 주소를 확인하는 것을 권장합니다.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">

              <div className="text-2xl">
                02
              </div>

              <h3 className="mt-5 text-lg font-black">
                코스 확인
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                방문 전에 원하는 코스와 시간을 미리 확인하면
                현장에서 보다 편하게 이용할 수 있습니다.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">

              <div className="text-2xl">
                03
              </div>

              <h3 className="mt-5 text-lg font-black">
                가격 확인
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                가격표는 변동될 수 있으므로 방문 시점의
                실제 가격을 다시 확인하는 것이 좋습니다.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BOTTOM NAVIGATION
      ========================================================= */}
      <section className="container py-16">

        <div className="flex flex-col gap-4 sm:flex-row">

          <Link
            href={`/${city}/${category}`}
            className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center text-sm font-black transition hover:bg-white/[0.07]"
          >
            ← {cityName} {categoryName} 목록
          </Link>

          <Link
            href={`/${city}`}
            className="flex-1 rounded-2xl bg-red-600 px-6 py-5 text-center text-sm font-black transition hover:bg-red-500"
          >
            {cityName} 전체 보기
          </Link>

        </div>

      </section>

    </main>
  );
}
