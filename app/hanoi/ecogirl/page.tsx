import Link from "next/link";
import ContactButtons from "@/components/ContactButtons";

export default function EcoGirlPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.12),transparent_45%)]" />

        <div className="container relative py-20 sm:py-28">

          <div className="mb-5 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-xs font-black tracking-[0.2em] text-yellow-300">
            HANOI ECO GIRL
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            하노이
            <br />
            <span className="text-yellow-400">
              에코걸 정보
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            하노이 여행 중 에코걸 관련 정보를 한곳에서 확인하세요.
            프로필과 이용 조건, 위치 및 상담 방법 등을 확인한 후
            본인에게 맞는 서비스를 선택할 수 있도록 정리했습니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#profiles"
              className="rounded-xl bg-yellow-500 px-7 py-4 text-sm font-black text-black transition hover:bg-yellow-400"
            >
              에코걸 정보 보기 →
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition hover:bg-white/10"
            >
              상담 문의하기
            </a>
          </div>

        </div>
      </section>


      {/* 안내 */}
      <section className="container py-16">

        <div className="mb-10">
          <div className="text-xs font-black tracking-[0.25em] text-yellow-400">
            INFORMATION
          </div>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 에코걸 이용 안내
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
            이용 전 기본적인 조건과 위치, 상담 가능 여부를 먼저
            확인하는 것을 권장합니다.
          </p>
        </div>


        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* 카드 1 */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
            <div className="text-2xl">👤</div>

            <h3 className="mt-4 text-lg font-black">
              프로필 확인
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              프로필과 기본 정보를 확인하고 원하는 조건에 맞는
              선택지를 비교해 보세요.
            </p>
          </div>


          {/* 카드 2 */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
            <div className="text-2xl">📍</div>

            <h3 className="mt-4 text-lg font-black">
              위치 확인
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              이용 가능한 지역과 만남 장소 등 필요한 위치 정보를
              상담을 통해 확인할 수 있습니다.
            </p>
          </div>


          {/* 카드 3 */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
            <div className="text-2xl">💬</div>

            <h3 className="mt-4 text-lg font-black">
              상담 후 결정
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              이용 가능 여부와 조건을 먼저 상담한 후
              최종적으로 결정하는 것을 권장합니다.
            </p>
          </div>

        </div>

      </section>


      {/* 프로필 영역 */}
      <section
        id="profiles"
        className="border-y border-white/10 bg-[#080808]"
      >
        <div className="container py-16">

          <div className="mb-10">
            <div className="text-xs font-black tracking-[0.25em] text-yellow-400">
              ECO GIRL
            </div>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              하노이 에코걸 정보
            </h2>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              현재 등록된 프로필과 이용 가능 여부는 상담을 통해
              최신 정보를 확인해 주세요.
            </p>
          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* 프로필 카드 */}
            <div className="overflow-hidden rounded-2xl border border-yellow-400/30 bg-black shadow-[0_0_25px_rgba(234,179,8,0.08)]">

              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-yellow-500/10 via-black to-red-500/10">
                <div className="text-center">
                  <div className="text-5xl">👤</div>
                  <div className="mt-3 text-xs font-black tracking-[0.2em] text-yellow-400">
                    PROFILE
                  </div>
                </div>
              </div>

              <div className="p-6">

                <div className="text-xs font-black tracking-[0.2em] text-yellow-400">
                  HANOI
                </div>

                <h3 className="mt-2 text-xl font-black">
                  프로필 준비중
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  최신 프로필 및 이용 가능 여부는
                  상담을 통해 확인해 주세요.
                </p>

                <a
                  href="#contact"
                  className="mt-5 block rounded-xl bg-yellow-500 px-5 py-3 text-center text-sm font-black text-black transition hover:bg-yellow-400"
                >
                  상담 문의 →
                </a>

              </div>
            </div>


            {/* 추가 카드 */}
            <div className="flex min-h-[430px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/30 p-6 text-center">
              <div>
                <div className="text-4xl">+</div>

                <h3 className="mt-4 text-lg font-black text-zinc-300">
                  새로운 프로필
                </h3>

                <p className="mt-2 text-sm text-zinc-600">
                  준비되는 프로필은 순차적으로 추가됩니다.
                </p>
              </div>
            </div>


            <div className="flex min-h-[430px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/30 p-6 text-center">
              <div>
                <div className="text-4xl">+</div>

                <h3 className="mt-4 text-lg font-black text-zinc-300">
                  새로운 프로필
                </h3>

                <p className="mt-2 text-sm text-zinc-600">
                  최신 정보를 확인해 주세요.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 주의사항 */}
      <section className="container py-16">

        <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-7 sm:p-9">

          <div className="text-xs font-black tracking-[0.25em] text-yellow-400">
            CHECK BEFORE CONTACT
          </div>

          <h2 className="mt-3 text-2xl font-black">
            상담 전 확인해주세요
          </h2>

          <div className="mt-6 grid gap-4 text-sm leading-6 text-zinc-400 sm:grid-cols-2">

            <div>
              • 이용 가능 여부는 실시간 상황에 따라 달라질 수 있습니다.
            </div>

            <div>
              • 위치와 이용 조건은 상담 시 정확하게 확인해 주세요.
            </div>

            <div>
              • 등록 정보와 실제 이용 조건이 다를 경우 상담 내용을 우선 확인하세요.
            </div>

            <div>
              • 현지 법률과 안전 수칙을 준수해 주세요.
            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#080808]"
      >
        <div className="container py-16">

          <div className="mx-auto max-w-2xl text-center">

            <div className="text-xs font-black tracking-[0.25em] text-yellow-400">
              CONTACT
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              하노이 에코걸 상담
            </h2>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              최신 프로필과 이용 가능 여부,
              위치 및 기타 궁금한 사항은 상담을 통해 확인해 주세요.
            </p>

            <div className="mx-auto mt-8 max-w-xl">
              <ContactButtons />
            </div>

          </div>

        </div>
      </section>


      {/* 하단 네비게이션 */}
      <section className="border-t border-white/10">
        <div className="container flex flex-wrap gap-4 py-8 text-sm text-zinc-500">

          <Link
            href="/"
            className="hover:text-white"
          >
            하노이 홈
          </Link>

          <Link
            href="/hanoi/massage"
            className="hover:text-white"
          >
            하노이 마사지
          </Link>

          <Link
            href="/hanoi/karaoke"
            className="hover:text-white"
          >
            하노이 가라오케
          </Link>

        </div>
      </section>

    </main>
  );
}
