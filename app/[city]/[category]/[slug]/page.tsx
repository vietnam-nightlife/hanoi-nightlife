import Link from "next/link";

export default function GangnamSpaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,190,90,0.14),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 text-xs font-black tracking-[0.35em] text-red-500">
              HANOI · MY DINH · MASSAGE
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              강남 스파
            </h1>

            <p className="mt-4 text-lg font-semibold tracking-[0.18em] text-zinc-400 md:text-xl">
              GANGNAM SPA
            </p>

            <p className="mt-8 max-w-3xl text-sm leading-8 text-zinc-400 md:text-base">
              하노이 미딩 한인타운 인근에서 이용할 수 있는 강남 스파
              상세 안내입니다. 위치와 운영시간, 코스 및 가격 정보를
              한눈에 확인할 수 있도록 정리했습니다.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-zinc-300">
                미딩 지역
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-zinc-300">
                12:00 ~ 01:00
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-zinc-300">
                사전 예약 권장
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INFO
      ========================================================= */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 md:grid-cols-3">
          <div className="bg-[#080808] px-6 py-8 md:px-8">
            <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
              LOCATION
            </div>

            <div className="mt-3 text-lg font-bold">
              하노이 미딩
            </div>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              딘톤 거리 인근
            </p>
          </div>

          <div className="bg-[#080808] px-6 py-8 md:px-8">
            <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
              OPENING HOURS
            </div>

            <div className="mt-3 text-lg font-bold">
              12:00 ~ 01:00
            </div>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              방문 전 운영시간 확인 권장
            </p>
          </div>

          <div className="bg-[#080808] px-6 py-8 md:px-8">
            <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
              CATEGORY
            </div>

            <div className="mt-3 text-lg font-bold">
              마사지 · 스파
            </div>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              하노이 미딩 지역 업소
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="text-xs font-black tracking-[0.35em] text-red-500">
              ABOUT
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              하노이 강남 스파
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-8 text-zinc-400 md:text-base">
              <p>
                강남 스파는 하노이 미딩 지역에서 찾을 수 있는 마사지 및
                스파 업소입니다. 미딩 한인타운과 딘톤 거리 인근에 위치해
                있어 한국인 여행객이나 장기 체류객이 이동하기 편리한
                지역에 자리하고 있습니다.
              </p>

              <p>
                하노이 여행 중 피로를 풀거나 하루 일정을 마무리하면서
                편하게 이용할 수 있도록 코스별 시간과 가격이 구분되어
                있습니다.
              </p>

              <p>
                방문을 계획한다면 원하는 코스와 방문 시간을 미리 확인한
                뒤 예약하고 방문하는 것을 권장합니다. 운영시간과 가격은
                현지 사정에 따라 변경될 수 있으므로 예약 전에 최신
                정보를 확인하는 것이 좋습니다.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-[#101010] p-7">
            <div className="text-sm font-black">
              기본 정보
            </div>

            <dl className="mt-7 space-y-6 text-sm">
              <div>
                <dt className="text-zinc-600">
                  업체명
                </dt>
                <dd className="mt-2 font-semibold text-zinc-200">
                  강남 스파 (Gangnam Spa)
                </dd>
              </div>

              <div>
                <dt className="text-zinc-600">
                  지역
                </dt>
                <dd className="mt-2 text-zinc-300">
                  하노이 미딩 · 딘톤
                </dd>
              </div>

              <div>
                <dt className="text-zinc-600">
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
                <dt className="text-zinc-600">
                  운영시간
                </dt>
                <dd className="mt-2 text-zinc-300">
                  12:00 ~ 01:00
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* =========================================================
          HIGHLIGHTS
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="text-xs font-black tracking-[0.35em] text-red-500">
            HIGHLIGHTS
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            강남 스파 이용 포인트
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">
              <div className="text-2xl">01</div>

              <h3 className="mt-6 text-lg font-black">
                미딩 지역
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                하노이 미딩 한인타운 및 딘톤 거리 인근에서
                접근할 수 있는 위치입니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">
              <div className="text-2xl">02</div>

              <h3 className="mt-6 text-lg font-black">
                다양한 코스
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                30분, 60분, 90분으로 나뉘어 일정과 예산에
                맞춰 선택할 수 있습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">
              <div className="text-2xl">03</div>

              <h3 className="mt-6 text-lg font-black">
                예약 중심 이용
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                원하는 시간에 이용하려면 방문 전에 예약
                가능 여부를 확인하는 것이 좋습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111] p-7">
              <div className="text-2xl">04</div>

              <h3 className="mt-6 text-lg font-black">
                늦은 시간까지
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                저녁 일정 이후에도 이용할 수 있도록
                늦은 시간까지 운영하는 것으로 안내됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-xs font-black tracking-[0.35em] text-red-500">
            PRICE LIST
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            강남 스파 코스 & 가격
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
            아래 가격표는 제공해주신 강남 스파 가격표를 기준으로
            정리했습니다. 실제 결제 금액과 코스 구성은 방문 전
            최신 정보를 확인해주세요.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* A */}
          <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d]">
            <div className="border-b border-white/10 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs font-black tracking-[0.3em] text-zinc-600">
                    COURSE 01
                  </div>

                  <h3 className="mt-3 text-3xl font-black">
                    A코스
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-xs text-zinc-600">
                    30분
                  </div>

                  <div className="mt-1 text-2xl font-black text-amber-200">
                    140만동
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="text-xs font-bold tracking-[0.2em] text-zinc-600">
                COURSE INFORMATION
              </div>

              <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>30분 기본 코스</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>샤워 포함</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>마무리 케어</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl border border-amber-200/20 bg-amber-200/[0.04] p-5">
                <div className="text-xs text-zinc-500">
                  이용 시간
                </div>

                <div className="mt-2 font-bold">
                  30 MINUTES
                </div>
              </div>
            </div>
          </div>

          {/* B */}
          <div className="group overflow-hidden rounded-[2rem] border border-amber-200/30 bg-[#10100f] shadow-[0_0_60px_rgba(255,190,90,0.06)]">
            <div className="border-b border-white/10 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs font-black tracking-[0.3em] text-amber-200/60">
                    COURSE 02
                  </div>

                  <h3 className="mt-3 text-3xl font-black">
                    B코스
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-xs text-zinc-600">
                    60분
                  </div>

                  <div className="mt-1 text-2xl font-black text-amber-200">
                    180만동
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="text-xs font-bold tracking-[0.2em] text-zinc-600">
                COURSE INFORMATION
              </div>

              <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>60분 코스</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>샤워 포함</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>바디 케어 프로그램</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>마무리 케어</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl border border-amber-200/20 bg-amber-200/[0.04] p-5">
                <div className="text-xs text-zinc-500">
                  이용 시간
                </div>

                <div className="mt-2 font-bold">
                  60 MINUTES
                </div>
              </div>
            </div>
          </div>

          {/* C */}
          <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d]">
            <div className="border-b border-white/10 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs font-black tracking-[0.3em] text-zinc-600">
                    COURSE 03
                  </div>

                  <h3 className="mt-3 text-3xl font-black">
                    C코스
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-xs text-zinc-600">
                    90분
                  </div>

                  <div className="mt-1 text-2xl font-black text-amber-200">
                    210만동
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="text-xs font-bold tracking-[0.2em] text-zinc-600">
                COURSE INFORMATION
              </div>

              <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>90분 코스</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>샤워 포함</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>아로마탕 이용</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>바디 케어 프로그램</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-200">✓</span>
                  <span>마무리 케어</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl border border-amber-200/20 bg-amber-200/[0.04] p-5">
                <div className="text-xs text-zinc-500">
                  이용 시간
                </div>

                <div className="mt-2 font-bold">
                  90 MINUTES
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b0b0b] px-6 py-5 text-center text-sm text-zinc-500">
          모든 금액은 베트남 동(VND) 기준이며, 실제 가격 및 포함
          서비스는 방문 전 확인을 권장합니다.
        </div>
      </section>

      {/* =========================================================
          COURSE COMPARISON
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="text-xs font-black tracking-[0.35em] text-red-500">
            COMPARISON
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            코스 한눈에 비교
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-white/[0.04]">
                    <th className="px-6 py-5 font-bold">
                      코스
                    </th>

                    <th className="px-6 py-5 font-bold">
                      시간
                    </th>

                    <th className="px-6 py-5 font-bold">
                      가격
                    </th>

                    <th className="px-6 py-5 font-bold">
                      주요 구성
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-white/10">
                    <td className="px-6 py-6 font-black">
                      A코스
                    </td>

                    <td className="px-6 py-6 text-zinc-400">
                      30분
                    </td>

                    <td className="px-6 py-6 font-bold text-amber-200">
                      140만동
                    </td>

                    <td className="px-6 py-6 text-zinc-400">
                      샤워 · 기본 케어 · 마무리
                    </td>
                  </tr>

                  <tr className="border-t border-white/10">
                    <td className="px-6 py-6 font-black">
                      B코스
                    </td>

                    <td className="px-6 py-6 text-zinc-400">
                      60분
                    </td>

                    <td className="px-6 py-6 font-bold text-amber-200">
                      180만동
                    </td>

                    <td className="px-6 py-6 text-zinc-400">
                      샤워 · 바디 케어 · 마무리
                    </td>
                  </tr>

                  <tr className="border-t border-white/10">
                    <td className="px-6 py-6 font-black">
                      C코스
                    </td>

                    <td className="px-6 py-6 text-zinc-400">
                      90분
                    </td>

                    <td className="px-6 py-6 font-bold text-amber-200">
                      210만동
                    </td>

                    <td className="px-6 py-6 text-zinc-400">
                      샤워 · 아로마탕 · 바디 케어 · 마무리
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-black tracking-[0.35em] text-red-500">
              LOCATION
            </div>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              위치 안내
            </h2>

            <p className="mt-7 text-sm leading-8 text-zinc-400 md:text-base">
              강남 스파는 하노이 미딩 지역의 딘톤 거리 인근에
              위치한 것으로 안내되고 있습니다. 미딩 한인타운
              주변에서 이동하는 경우 비교적 찾기 편리한 지역입니다.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
                ADDRESS
              </div>

              <p className="mt-4 text-base font-semibold leading-7 text-zinc-200">
                18 Ng. 1 Đ. Đình Thôn,
                <br />
                Đình Thôn, Nam Từ Liêm,
                <br />
                Hà Nội, Vietnam
              </p>
            </div>

            <p className="mt-5 text-xs leading-6 text-zinc-600">
              ※ 주소 및 위치 정보는 온라인 공개 자료를 기준으로
              정리했으며, 실제 방문 전 최신 위치를 확인해주세요.
            </p>
          </div>

          <div className="flex min-h-[360px] items-center justify-center rounded-3xl border border-white/10 bg-[#0d0d0d]">
            <div className="text-center">
              <div className="text-xs font-black tracking-[0.3em] text-zinc-600">
                MY DINH · HANOI
              </div>

              <div className="mt-5 text-5xl">
                📍
              </div>

              <div className="mt-5 text-lg font-black">
                Gangnam Spa
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Đình Thôn · Nam Từ Liêm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISIT GUIDE
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="text-xs font-black tracking-[0.35em] text-red-500">
            VISIT GUIDE
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            방문 전 알아두면 좋은 점
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
                STEP 01
              </div>

              <h3 className="mt-5 text-xl font-black">
                방문 시간 확인
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                원하는 방문 시간을 정하고 당일 운영 여부를
                먼저 확인하는 것을 권장합니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
                STEP 02
              </div>

              <h3 className="mt-5 text-xl font-black">
                코스 선택
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                30분, 60분, 90분 코스 중 일정과 예산에 맞는
                프로그램을 선택합니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
                STEP 03
              </div>

              <h3 className="mt-5 text-xl font-black">
                가격 재확인
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                온라인에 게시된 가격은 변경될 수 있으므로
                예약 또는 방문 전에 최신 가격을 확인하세요.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
                STEP 04
              </div>

              <h3 className="mt-5 text-xl font-black">
                위치 확인
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                처음 방문한다면 지도 앱에서 주소를 검색해
                현재 위치와 이동 시간을 확인하는 것이 좋습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
                STEP 05
              </div>

              <h3 className="mt-5 text-xl font-black">
                현지 결제 준비
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                결제 가능한 수단은 방문 전에 확인하고 필요한
                베트남 동(VND)을 준비하는 것이 편리합니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-bold tracking-[0.25em] text-zinc-600">
                STEP 06
              </div>

              <h3 className="mt-5 text-xl font-black">
                예약 후 방문
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                피크 시간대 방문을 계획한다면 사전에 예약 가능
                여부를 확인하는 것이 안전합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <div className="text-xs font-black tracking-[0.35em] text-red-500">
            FAQ
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            자주 묻는 질문
          </h2>

          <p className="mt-5 text-sm text-zinc-500">
            강남 스파 방문 전에 많이 확인하는 내용을 정리했습니다.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <details className="group rounded-2xl border border-white/10 bg-[#101010]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-6 font-bold">
              <span>
                강남 스파는 어디에 있나요?
              </span>

              <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-white/10 px-6 py-6 text-sm leading-7 text-zinc-500">
              하노이 미딩 지역의 딘톤 거리 인근으로 안내되고
              있습니다. 주소는 18 Ng. 1 Đ. Đình Thôn,
              Đình Thôn, Nam Từ Liêm, Hà Nội로 확인됩니다.
              방문 전 최신 위치를 다시 확인하는 것을 권장합니다.
            </div>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#101010]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-6 font-bold">
              <span>
                영업시간은 어떻게 되나요?
              </span>

              <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-white/10 px-6 py-6 text-sm leading-7 text-zinc-500">
              현재 확인되는 공개 정보 기준으로 12:00부터
              01:00까지 운영하는 것으로 안내되고 있습니다.
              운영시간은 현지 사정에 따라 변경될 수 있으므로
              방문 당일 확인을 권장합니다.
            </div>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#101010]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-6 font-bold">
              <span>
                코스는 몇 가지인가요?
              </span>

              <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-white/10 px-6 py-6 text-sm leading-7 text-zinc-500">
              제공해주신 가격표 기준으로 A코스 30분,
              B코스 60분, C코스 90분의 세 가지 코스로
              구성했습니다.
            </div>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#101010]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-6 font-bold">
              <span>
                가격은 얼마인가요?
              </span>

              <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-white/10 px-6 py-6 text-sm leading-7 text-zinc-500">
              제공해주신 가격표 기준으로 A코스 140만동,
              B코스 180만동, C코스 210만동입니다.
              실제 가격은 변경될 수 있으므로 방문 전 최신
              가격을 확인해주세요.
            </div>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#101010]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-6 font-bold">
              <span>
                예약을 하고 방문하는 게 좋은가요?
              </span>

              <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-white/10 px-6 py-6 text-sm leading-7 text-zinc-500">
              원하는 시간에 방문하려면 사전에 예약 가능 여부를
              확인하는 것을 권장합니다. 특히 저녁 시간이나
              주말에는 방문 전에 시간을 확인하는 것이 좋습니다.
            </div>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-[#101010]">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-6 font-bold">
              <span>
                현장에서 가격이 달라질 수 있나요?
              </span>

              <span className="text-xl text-zinc-600 transition group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-white/10 px-6 py-6 text-sm leading-7 text-zinc-500">
              온라인에 게시된 정보는 업데이트 시점에 따라
              차이가 있을 수 있습니다. 실제 이용 전 코스와
              가격을 다시 확인하는 것을 권장합니다.
            </div>
          </details>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 md:py-24">
          <div className="text-xs font-black tracking-[0.35em] text-red-500">
            GANGNAM SPA
          </div>

          <h2 className="mt-5 text-3xl font-black md:text-5xl">
            하노이 강남 스파
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-zinc-500">
            미딩 지역에서 마사지와 스파를 찾고 있다면 위치,
            운영시간, 코스 정보를 확인한 뒤 방문 계획을 세워보세요.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/hanoi/massage"
              className="rounded-xl bg-red-600 px-8 py-4 text-sm font-black transition hover:bg-red-500"
            >
              마사지 목록으로
            </Link>

            <Link
              href="/hanoi"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black transition hover:bg-white/[0.08]"
            >
              하노이 홈으로
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================= */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <p className="text-center text-xs leading-6 text-zinc-700">
            본 페이지의 업소 정보와 가격은 공개된 자료 및 제공된
            가격표를 바탕으로 작성되었습니다. 영업시간, 가격,
            코스 구성 및 운영 방식은 현지 사정에 따라 변경될 수
            있으므로 실제 방문 전 최신 정보를 확인하시기 바랍니다.
          </p>
        </div>
      </section>
    </main>
  );
}
