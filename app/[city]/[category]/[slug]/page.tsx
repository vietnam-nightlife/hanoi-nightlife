import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "하노이 강남스파 | Gangnam Spa",
  description:
    "하노이 미딩 지역 강남스파의 위치, 운영시간, 코스 및 가격 정보를 한눈에 확인하세요.",
};

export default async function GangnamSpaPage({
  params,
}: {
  params: Promise<{
    city: string;
  }>;
}) {
  const { city } = await params;

  /*
   * ============================================================
   * 이미지
   * ============================================================
   *
   * public 폴더 안에 아래 파일들이 있어야 합니다.
   *
   * /하노이 강남스파 메인.webp
   * /하노이 강남스파 외관.webp
   * /하노이 강남스파 리셉션.webp
   *
   * 실제 파일명이 다르면 파일명만 맞춰주세요.
   */

  const mainImage = "/하노이 강남스파 메인.webp";

  const galleryImages = [
    {
      src: "/하노이 강남스파 외관.webp",
      title: "강남스파 외관",
    },
    {
      src: "/하노이 강남스파 리셉션.webp",
      title: "강남스파 리셉션",
    },
  ];

  /*
   * ============================================================
   * 가격표
   * ============================================================
   *
   * 가격은 사용자가 제공한 가격표 이미지를 기준으로 작성.
   */

  const courses = [
    {
      name: "A코스",
      time: "30분",
      price: "140만동",
      items: [
        "샤워",
        "기본 케어",
        "마무리 샤워",
      ],
      featured: false,
    },
    {
      name: "B코스",
      time: "60분",
      price: "180만동",
      items: [
        "샤워",
        "바디 케어",
        "전신 관리",
        "추가 케어",
        "마무리 샤워",
      ],
      featured: true,
    },
    {
      name: "C코스",
      time: "90분",
      price: "210만동",
      items: [
        "샤워",
        "아로마 탕",
        "바디 케어",
        "전신 관리",
        "추가 케어",
        "마무리 샤워",
      ],
      featured: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* =========================================================
          HERO / MAIN IMAGE
      ========================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[650px]">

          <img
            src={mainImage}
            alt="하노이 강남스파 메인"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-14 lg:px-10 lg:pb-20">

              <div className="mb-4 text-xs font-black tracking-[0.35em] text-red-500">
                HANOI · MY DINH · MASSAGE
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                강남스파
              </h1>

              <div className="mt-3 text-lg font-medium tracking-[0.2em] text-zinc-300 sm:text-xl">
                GANGNAM SPA
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                하노이 미딩 한인타운 인근에서 이용할 수 있는
                강남스파 상세 안내입니다.
                위치와 운영시간부터 코스 및 가격 정보까지
                방문 전에 필요한 내용을 한곳에서 확인할 수 있도록
                정리했습니다.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold text-zinc-200">
                  미딩 지역
                </span>

                <span className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold text-zinc-200">
                  12:00 ~ 01:00
                </span>

                <span className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-bold text-zinc-200">
                  사전 예약 권장
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          INTRO
      ========================================================== */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

            <div>

              <div className="text-xs font-black tracking-[0.35em] text-red-500">
                ABOUT
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                하노이 강남스파
              </h2>

              <p className="mt-7 max-w-3xl text-sm leading-8 text-zinc-400 sm:text-base">
                강남스파는 하노이 미딩 지역에서 찾아볼 수 있는
                마사지·스파 업소입니다.
                미딩 한인타운과 가까운 위치를 바탕으로
                한국인 여행객과 장기 체류객들이 방문하기 편리한
                위치에 자리하고 있습니다.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-zinc-400 sm:text-base">
                방문 전 코스와 이용시간을 미리 확인하고
                원하는 일정에 맞춰 예약하는 것을 권장합니다.
                아래에서는 강남스파의 기본 정보와 가격,
                이용 방법 및 자주 묻는 질문을 순서대로 안내합니다.
              </p>

            </div>


            {/* 기본 정보 카드 */}

            <aside className="rounded-3xl border border-white/10 bg-[#111] p-7">

              <div className="text-sm font-black">
                기본 정보
              </div>

              <dl className="mt-7 space-y-6 text-sm">

                <div>
                  <dt className="text-xs text-zinc-600">
                    업체명
                  </dt>

                  <dd className="mt-2 font-bold text-zinc-200">
                    강남스파
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-zinc-600">
                    영문명
                  </dt>

                  <dd className="mt-2 font-bold text-zinc-200">
                    GANGNAM SPA
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-zinc-600">
                    지역
                  </dt>

                  <dd className="mt-2 font-bold text-zinc-200">
                    하노이 미딩
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-zinc-600">
                    주소
                  </dt>

                  <dd className="mt-2 leading-6 text-zinc-300">
                    18 Ng. 1 Đ. Đình Thôn,
                    <br />
                    Đình Thôn, Nam Từ Liêm,
                    <br />
                    Hà Nội
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-zinc-600">
                    영업시간
                  </dt>

                  <dd className="mt-2 font-bold text-zinc-200">
                    12:00 ~ 01:00
                  </dd>
                </div>

              </dl>

            </aside>

          </div>

        </div>
      </section>


      {/* =========================================================
          PRICE
      ========================================================== */}

      <section className="border-b border-white/10 bg-[#080808]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="text-center">

            <div className="text-xs font-black tracking-[0.35em] text-red-500">
              PRICE
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              코스 & 가격
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
              강남스파 가격표는 제공해주신 최신 가격표 이미지를
              기준으로 정리했습니다.
            </p>

          </div>


          {/* 가격 카드 */}

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {courses.map((course) => (

              <article
                key={course.name}
                className={[
                  "relative overflow-hidden rounded-3xl border p-7 transition",
                  course.featured
                    ? "border-red-600/50 bg-[#151010] shadow-[0_0_50px_rgba(220,38,38,0.08)]"
                    : "border-white/10 bg-[#111]",
                ].join(" ")}
              >

                {course.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-red-600 px-3 py-1 text-[10px] font-black tracking-wider">
                    RECOMMENDED
                  </div>
                )}

                <div className="text-sm font-black tracking-[0.2em] text-zinc-500">
                  GANGNAM SPA
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">

                  <div>
                    <h3 className="text-3xl font-black">
                      {course.name}
                    </h3>

                    <div className="mt-2 text-sm text-zinc-500">
                      이용시간 {course.time}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-black text-red-500">
                      {course.price}
                    </div>

                    <div className="mt-1 text-[11px] text-zinc-600">
                      VND
                    </div>
                  </div>

                </div>


                <div className="my-7 h-px bg-white/10" />


                <div className="space-y-3">

                  {course.items.map((item, index) => (

                    <div
                      key={`${course.name}-${index}`}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >

                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-[10px] text-red-500">
                        ✓
                      </span>

                      <span>
                        {item}
                      </span>

                    </div>

                  ))}

                </div>


                <div className="mt-8 rounded-2xl border border-white/5 bg-black/20 p-4">

                  <div className="text-[11px] font-bold tracking-wider text-zinc-600">
                    COURSE
                  </div>

                  <div className="mt-1 text-sm font-bold text-zinc-300">
                    {course.time} · {course.price}
                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* 가격 안내 */}

          <div className="mt-8 rounded-2xl border border-yellow-500/10 bg-yellow-500/[0.03] p-5">

            <div className="flex gap-3">

              <span className="text-yellow-500">
                !
              </span>

              <p className="text-xs leading-6 text-zinc-500">
                가격 및 코스 구성은 방문 시 변경될 수 있으므로
                예약 전에 최신 내용을 확인하는 것을 권장합니다.
                본 페이지의 가격은 제공된 가격표를 기준으로 작성했습니다.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          GALLERY
      ========================================================== */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="text-xs font-black tracking-[0.35em] text-red-500">
            GALLERY
          </div>

          <h2 className="mt-4 text-3xl font-black">
            강남스파 갤러리
          </h2>

          <p className="mt-4 text-sm text-zinc-500">
            강남스파 관련 사진을 확인할 수 있습니다.
          </p>


          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {galleryImages.map((image) => (

              <div
                key={image.src}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111]"
              >

                <div className="aspect-[16/10]">

                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-16">

                  <div className="text-sm font-bold">
                    {image.title}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          LOCATION
      ========================================================== */}

      <section className="border-b border-white/10 bg-[#080808]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[1fr_420px]">

            <div>

              <div className="text-xs font-black tracking-[0.35em] text-red-500">
                LOCATION
              </div>

              <h2 className="mt-4 text-3xl font-black">
                위치 안내
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400">
                강남스파는 하노이 미딩 지역의 딘톤 거리 인근에
                위치한 것으로 안내되고 있습니다.
                처음 방문하는 경우 지도 앱에서 주소를 직접 검색하거나
                예약 시 정확한 위치를 확인하는 것이 좋습니다.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-[#111] p-6">

                <div className="text-xs font-bold tracking-wider text-zinc-600">
                  ADDRESS
                </div>

                <div className="mt-3 text-base font-bold leading-7 text-zinc-200">
                  18 Ng. 1 Đ. Đình Thôn,
                  <br />
                  Đình Thôn, Nam Từ Liêm,
                  <br />
                  Hà Nội
                </div>

              </div>

            </div>


            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">

              <div className="text-sm font-black">
                방문 전 체크
              </div>

              <div className="mt-7 space-y-5">

                <div className="flex gap-4">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-xs font-black text-red-500">
                    01
                  </div>

                  <div>
                    <div className="font-bold">
                      위치 확인
                    </div>

                    <p className="mt-1 text-xs leading-6 text-zinc-500">
                      방문 전에 지도 앱으로 주소를 다시 확인하세요.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-xs font-black text-red-500">
                    02
                  </div>

                  <div>
                    <div className="font-bold">
                      예약 확인
                    </div>

                    <p className="mt-1 text-xs leading-6 text-zinc-500">
                      원하는 시간에 이용하려면 미리 예약하는 것을 권장합니다.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-xs font-black text-red-500">
                    03
                  </div>

                  <div>
                    <div className="font-bold">
                      최신 가격 확인
                    </div>

                    <p className="mt-1 text-xs leading-6 text-zinc-500">
                      코스와 가격은 방문 전 최신 정보를 확인하세요.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INFORMATION
      ========================================================== */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="max-w-4xl">

            <div className="text-xs font-black tracking-[0.35em] text-red-500">
              INFORMATION
            </div>

            <h2 className="mt-4 text-3xl font-black">
              강남스파 이용 안내
            </h2>


            <div className="mt-10 space-y-8">

              <div>

                <h3 className="text-xl font-black">
                  01. 방문 전 예약
                </h3>

                <p className="mt-3 text-sm leading-8 text-zinc-400">
                  원하는 시간대에 이용하려면 방문 전에 예약 가능 여부를
                  확인하는 것이 좋습니다.
                  특히 저녁 시간이나 여행객이 많이 방문하는 시간대에는
                  미리 문의하는 것을 권장합니다.
                </p>

              </div>


              <div>

                <h3 className="text-xl font-black">
                  02. 코스 선택
                </h3>

                <p className="mt-3 text-sm leading-8 text-zinc-400">
                  강남스파는 A, B, C 코스로 구분되어 있으며
                  이용시간과 구성에 따라 가격이 달라집니다.
                  방문 전 원하는 이용시간을 먼저 정한 뒤
                  코스를 확인하면 보다 편리합니다.
                </p>

              </div>


              <div>

                <h3 className="text-xl font-black">
                  03. 결제 및 이용
                </h3>

                <p className="mt-3 text-sm leading-8 text-zinc-400">
                  현장에서 최종 코스와 금액을 확인한 후 이용하시기 바랍니다.
                  가격표와 실제 운영 조건이 달라질 수 있으므로
                  결제 전에 금액을 다시 확인하는 것이 좋습니다.
                </p>

              </div>


              <div>

                <h3 className="text-xl font-black">
                  04. 운영시간
                </h3>

                <p className="mt-3 text-sm leading-8 text-zinc-400">
                  안내된 운영시간은 12:00부터 01:00까지입니다.
                  마지막 이용 가능 시간은 당일 상황에 따라 달라질 수 있으므로
                  늦은 시간 방문 예정이라면 사전에 확인하세요.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================== */}

      <section className="border-b border-white/10 bg-[#080808]">

        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">

          <div className="text-center">

            <div className="text-xs font-black tracking-[0.35em] text-red-500">
              FAQ
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              자주 묻는 질문
            </h2>

          </div>


          <div className="mt-12 space-y-4">


            {/* FAQ 1 */}

            <details className="group rounded-2xl border border-white/10 bg-[#111]">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6">

                <span className="text-sm font-bold sm:text-base">
                  강남스파는 어디에 있나요?
                </span>

                <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="border-t border-white/5 px-6 pb-6 pt-5 text-sm leading-7 text-zinc-500">
                하노이 미딩 지역 딘톤 거리 인근에 위치한 것으로
                안내되고 있습니다.
                정확한 방문 위치는 예약 전에 지도에서 다시 확인하는 것을 권장합니다.
              </div>

            </details>


            {/* FAQ 2 */}

            <details className="group rounded-2xl border border-white/10 bg-[#111]">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6">

                <span className="text-sm font-bold sm:text-base">
                  영업시간은 어떻게 되나요?
                </span>

                <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="border-t border-white/5 px-6 pb-6 pt-5 text-sm leading-7 text-zinc-500">
                안내된 운영시간은 12:00부터 01:00까지입니다.
                늦은 시간 방문할 경우 당일 운영 여부를
                미리 확인하는 것이 좋습니다.
              </div>

            </details>


            {/* FAQ 3 */}

            <details className="group rounded-2xl border border-white/10 bg-[#111]">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6">

                <span className="text-sm font-bold sm:text-base">
                  코스는 몇 가지인가요?
                </span>

                <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="border-t border-white/5 px-6 pb-6 pt-5 text-sm leading-7 text-zinc-500">
                제공된 가격표 기준으로 A코스, B코스, C코스
                세 가지 코스로 정리되어 있습니다.
                각각 이용시간과 가격이 다르므로 방문 전에 확인하세요.
              </div>

            </details>


            {/* FAQ 4 */}

            <details className="group rounded-2xl border border-white/10 bg-[#111]">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6">

                <span className="text-sm font-bold sm:text-base">
                  가격은 얼마인가요?
                </span>

                <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="border-t border-white/5 px-6 pb-6 pt-5 text-sm leading-7 text-zinc-500">
                제공해주신 가격표 기준으로 A코스 140만동,
                B코스 180만동, C코스 210만동입니다.
                실제 방문 시 가격이 변경될 수 있으므로
                예약 전에 최신 금액을 확인하세요.
              </div>

            </details>


            {/* FAQ 5 */}

            <details className="group rounded-2xl border border-white/10 bg-[#111]">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6">

                <span className="text-sm font-bold sm:text-base">
                  예약을 미리 하는 것이 좋나요?
                </span>

                <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="border-t border-white/5 px-6 pb-6 pt-5 text-sm leading-7 text-zinc-500">
                원하는 시간대에 방문하려면 사전 예약을 권장합니다.
                특히 저녁이나 주말 등 방문객이 많은 시간에는
                예약 가능 여부를 먼저 확인하는 것이 좋습니다.
              </div>

            </details>


            {/* FAQ 6 */}

            <details className="group rounded-2xl border border-white/10 bg-[#111]">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6">

                <span className="text-sm font-bold sm:text-base">
                  처음 방문하는 경우 무엇을 확인하면 되나요?
                </span>

                <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="border-t border-white/5 px-6 pb-6 pt-5 text-sm leading-7 text-zinc-500">
                방문 전 위치, 운영시간, 원하는 코스와 가격을
                먼저 확인하는 것을 권장합니다.
                주소와 운영 조건은 변경될 수 있으므로
                예약 시 최종 내용을 다시 확인하세요.
              </div>

            </details>

          </div>

        </div>

      </section>


      {/* =========================================================
          SUMMARY
      ========================================================== */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="rounded-3xl border border-white/10 bg-[#111] p-7 sm:p-10">

            <div className="grid gap-8 md:grid-cols-4">

              <div>
                <div className="text-[10px] font-black tracking-[0.25em] text-zinc-600">
                  LOCATION
                </div>

                <div className="mt-3 font-bold text-zinc-200">
                  하노이 미딩
                </div>
              </div>


              <div>
                <div className="text-[10px] font-black tracking-[0.25em] text-zinc-600">
                  HOURS
                </div>

                <div className="mt-3 font-bold text-zinc-200">
                  12:00 ~ 01:00
                </div>
              </div>


              <div>
                <div className="text-[10px] font-black tracking-[0.25em] text-zinc-600">
                  COURSE
                </div>

                <div className="mt-3 font-bold text-zinc-200">
                  A · B · C
                </div>
              </div>


              <div>
                <div className="text-[10px] font-black tracking-[0.25em] text-zinc-600">
                  PRICE
                </div>

                <div className="mt-3 font-bold text-zinc-200">
                  140만 ~ 210만동
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BACK
      ========================================================== */}

      <section>

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">

          <Link
            href={`/${city}/massage`}
            className="inline-flex rounded-xl bg-red-600 px-6 py-3 text-sm font-black transition hover:bg-red-500"
          >
            마사지 목록으로 돌아가기
          </Link>

        </div>

      </section>

    </main>
  );
}
