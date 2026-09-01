import Link from "next/link";

export default function EcoGirlPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          프로필 미리보기
      ========================= */}
      <section className="container px-4 py-14 sm:py-20">

        <div className="mb-8">
          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            PROFILE
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 에코걸 프로필
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            하노이 에코걸 프로필을 사진으로 먼저 확인하고
            원하는 프로필의 상세 정보를 확인해보세요.
          </p>
        </div>

        {/* 프로필 3장 */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5">

          {/* 프로필 1 */}
          <Link
            href="/hanoi/ecogirl/profiles"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition hover:border-red-500/70"
          >
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
              <img
                src="/하노이눈탱이방지피씨.webp"
                alt="하노이 에코걸 프로필 1"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-3 text-center sm:p-4">
              <p className="text-xs font-black text-red-500">
                HANOI
              </p>

              <p className="mt-1 text-sm font-black">
                프로필 보기
              </p>
            </div>
          </Link>

          {/* 프로필 2 */}
          <Link
            href="/hanoi/ecogirl/profiles"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition hover:border-red-500/70"
          >
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
              <img
                src="/하노이눈탱이방지모바일.webp"
                alt="하노이 에코걸 프로필 2"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-3 text-center sm:p-4">
              <p className="text-xs font-black text-red-500">
                HANOI
              </p>

              <p className="mt-1 text-sm font-black">
                프로필 보기
              </p>
            </div>
          </Link>

          {/* 프로필 3 */}
          <Link
            href="/hanoi/ecogirl/profiles"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition hover:border-red-500/70"
          >
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
              <img
                src="/하노이눈탱이방지피씨.webp"
                alt="하노이 에코걸 프로필 3"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-3 text-center sm:p-4">
              <p className="text-xs font-black text-red-500">
                HANOI
              </p>

              <p className="mt-1 text-sm font-black">
                프로필 보기
              </p>
            </div>
          </Link>

        </div>

        {/* 프로필 더보기 */}
        <div className="mt-8 text-center">
          <Link
            href="/hanoi/ecogirl/profiles"
            className="inline-flex items-center justify-center rounded-xl border border-red-500/60 bg-red-600 px-8 py-3 text-sm font-black transition hover:bg-red-500"
          >
            프로필 더보기 →
          </Link>
        </div>

      </section>


      {/* =========================
          하노이 에코걸 정보
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            HANOI ECOGIRL
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 에코걸 정보
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            하노이 에코걸을 이용하기 전에 프로필과 기본적인
            이용 정보를 확인해보세요. 프로필별 상세 정보는
            프로필 페이지에서 확인할 수 있습니다.
          </p>

          {/* 정보 박스 */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                PROFILE
              </p>
              <h3 className="mt-2 text-lg font-black">
                프로필 확인
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                사진과 프로필을 먼저 확인한 후
                원하는 프로필의 상세 정보를 확인하세요.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                PRICE
              </p>
              <h3 className="mt-2 text-lg font-black">
                가격 문의
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                이용 요금과 가능한 일정은 상담을 통해
                확인할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                CONTACT
              </p>
              <h3 className="mt-2 text-lg font-black">
                상담 및 예약
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                카카오톡 또는 텔레그램을 통해
                상담 및 예약 문의가 가능합니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          이용 안내
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-zinc-500">
            GUIDE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            이용 안내
          </h2>

          <div className="mt-8 space-y-4">

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="font-black">
                01. 프로필 확인
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                프로필 사진과 정보를 확인한 후 원하는
                프로필을 선택해주세요.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="font-black">
                02. 상담 문의
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                카카오톡 또는 텔레그램으로 원하는 프로필과
                이용 일정을 문의해주세요.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="font-black">
                03. 예약 확인
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                상담을 통해 일정과 이용 조건을 확인한 후
                예약을 진행할 수 있습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          상담
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 text-center sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            CONTACT
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            궁금한 점이 있으신가요?
          </h2>

          <p className="mt-3 text-sm text-zinc-400">
            카카오톡 또는 텔레그램으로 편하게 문의해주세요.
          </p>

        </div>
      </section>

    </main>
  );
}
