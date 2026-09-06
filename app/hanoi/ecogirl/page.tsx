import Link from "next/link";

export default function EcoGirlPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          HERO / 프로필
      ========================= */}
      <section className="container px-4 py-14 sm:py-20">

        <div className="mb-10">
          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            HANOI ECOGIRL
          </p>

          <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
            하노이 에코걸 가이드
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            베트남 여행을 조금 더 편하게 즐기고 싶다면,
            현지 통역과 일정 안내를 함께 받을 수 있는
            1:1 에코걸 가이드 서비스를 이용해보세요.
            하노이 여행 일정과 취향에 맞춰 보다 자유로운 여행을 계획할 수 있습니다.
          </p>
        </div>

        {/* 프로필 1 */}
        <div className="max-w-sm">

          <Link
            href="/hanoi/ecogirl/profiles"
            className="group block overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition hover:border-red-500/70"
          >
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
              <img
                src="/하노이눈탱이방지피씨.webp"
                alt="하노이 에코걸 프로필"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5 text-center">
              <p className="text-xs font-black tracking-[0.2em] text-red-500">
                HANOI
              </p>

              <p className="mt-2 text-lg font-black">
                에코걸 프로필 1
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                프로필 및 이용 안내 확인
              </p>
            </div>
          </Link>

        </div>

        {/* 문의하기 */}
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-3.5 text-sm font-black transition hover:bg-red-500"
          >
            문의하기 →
          </a>
        </div>

      </section>


      {/* =========================
          에코걸 소개
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            ABOUT ECOGIRL
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 에코걸이란?
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              베트남 에코걸은 현지 여행에서 필요한 통역과 일정 안내,
              여행 동행 등을 1:1 형태로 받을 수 있는 맞춤형 가이드 서비스입니다.
              패키지 여행처럼 정해진 일정에 맞춰 움직이는 것이 아니라
              여행객의 취향과 일정에 맞춰 보다 자유롭게 여행할 수 있다는 점이 특징입니다.
            </p>

            <p>
              하노이에서는 관광지 방문부터 현지 음식점, 카페,
              야간 문화 체험까지 여행객이 원하는 일정에 맞춰
              동선을 구성할 수 있습니다. 베트남 현지 언어가 익숙하지 않은
              여행객이라면 통역과 일정 조율을 함께 받을 수 있다는 점도 장점입니다.
            </p>

            <p>
              특히 처음 하노이를 방문하는 여행객이라면 현지에서 이동하거나
              식당을 찾고 일정을 조율하는 과정이 생각보다 번거로울 수 있습니다.
              에코걸 가이드와 함께하면 이러한 부분을 보다 편하게 해결하면서
              여행에 집중할 수 있습니다.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          서비스 특징
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            SERVICE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 에코걸 서비스
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            여행객의 일정과 취향에 따라 필요한 부분을 선택해
            보다 자유롭게 하노이를 둘러볼 수 있습니다.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* 01 */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                01
              </p>

              <h3 className="mt-3 text-xl font-black">
                1:1 맞춤 일정
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                정해진 패키지 일정이 아니라 여행객의 일정과
                관심사에 맞춰 자유롭게 여행 동선을 구성할 수 있습니다.
              </p>
            </div>

            {/* 02 */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                02
              </p>

              <h3 className="mt-3 text-xl font-black">
                통역 및 현지 안내
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                베트남어가 익숙하지 않은 여행객도 음식점,
                이동, 쇼핑 등 현지에서 필요한 의사소통을 보다 편하게
                진행할 수 있습니다.
              </p>
            </div>

            {/* 03 */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                03
              </p>

              <h3 className="mt-3 text-xl font-black">
                자유로운 여행
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                하노이 관광부터 맛집, 카페, 현지 문화 체험까지
                원하는 일정에 맞춰 유연하게 계획할 수 있습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          추천 코스
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            RECOMMENDED COURSE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 추천 코스
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            처음 하노이를 방문한다면 관광과 현지 음식,
            야간 분위기를 적절하게 섞어 일정을 구성하는 것을 추천합니다.
          </p>

          <div className="mt-10 space-y-4">

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <div className="flex items-start gap-4">
                <span className="text-sm font-black text-red-500">
                  DAY 01
                </span>

                <div>
                  <h3 className="text-lg font-black">
                    하노이 시내 관광
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    호안끼엠 주변과 구시가지 등 하노이의 대표적인
                    관광지를 둘러보고 현지 음식과 카페를 함께 즐기는 코스입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <div className="flex items-start gap-4">
                <span className="text-sm font-black text-red-500">
                  DAY 02
                </span>

                <div>
                  <h3 className="text-lg font-black">
                    맛집 & 현지 문화 체험
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    현지에서만 경험할 수 있는 음식점과 카페,
                    쇼핑 등을 중심으로 여유롭게 일정을 구성할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <div className="flex items-start gap-4">
                <span className="text-sm font-black text-red-500">
                  NIGHT
                </span>

                <div>
                  <h3 className="text-lg font-black">
                    하노이 야간 일정
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    저녁 식사 이후 여행객의 취향에 맞춰
                    바, 라운지, 야시장 등 하노이의 야간 분위기를
                    경험하는 일정도 구성할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          비용 안내
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            PRICE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            베트남 에코걸 비용
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            에코걸 서비스 비용은 지역과 일정, 가이드의 경력 및
            언어 능력 등에 따라 달라질 수 있습니다.
            하노이의 경우 일반적으로 약 800만~1,000만 동 수준으로
            안내되는 경우가 있으며, 정확한 비용은 예약 전 확인이 필요합니다.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">

            <div className="grid grid-cols-2 border-b border-white/10 bg-zinc-950">
              <div className="p-5 text-sm font-black">
                지역
              </div>
              <div className="p-5 text-sm font-black">
                일반적인 비용 범위
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-white/10">
              <div className="p-5 text-sm text-zinc-400">
                하노이
              </div>
              <div className="p-5 text-sm font-bold text-white">
                약 800만 ~ 1,000만 동
              </div>
            </div>

            <div className="grid grid-cols-2 border-b border-white/10">
              <div className="p-5 text-sm text-zinc-400">
                다낭
              </div>
              <div className="p-5 text-sm font-bold text-white">
                약 1,000만 동
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="p-5 text-sm text-zinc-400">
                호치민
              </div>
              <div className="p-5 text-sm font-bold text-white">
                약 800만 동
              </div>
            </div>

          </div>

          <p className="mt-4 text-xs leading-5 text-zinc-600">
            ※ 위 금액은 참고용이며 실제 비용은 일정과 서비스 조건에 따라 달라질 수 있습니다.
            예약 전 최종 금액을 반드시 확인해주세요.
          </p>

        </div>
      </section>


      {/* =========================
          이용 방법
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-zinc-500">
            HOW TO USE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            이용 방법
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-3xl font-black text-red-500">
                01
              </p>

              <h3 className="mt-4 font-black">
                프로필 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                프로필과 가이드 정보를 먼저 확인해주세요.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-3xl font-black text-red-500">
                02
              </p>

              <h3 className="mt-4 font-black">
                일정 문의
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                여행 날짜와 인원, 원하는 일정 등을 알려주시면
                이용 가능한 조건을 안내해드립니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-3xl font-black text-red-500">
                03
              </p>

              <h3 className="mt-4 font-black">
                예약 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                비용과 일정, 이용 조건을 최종 확인한 후
                예약을 진행합니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          이용 전 확인사항
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-zinc-500">
            CHECK POINT
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            이용 전 확인사항
          </h2>

          <div className="mt-8 space-y-3">

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <p className="text-sm font-bold">
                일정과 비용을 예약 전에 확인하세요.
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                이용 날짜와 시간, 포함 서비스 및 최종 비용을
                사전에 확인하면 현장에서 발생할 수 있는 혼선을 줄일 수 있습니다.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <p className="text-sm font-bold">
                신뢰할 수 있는 업체를 선택하세요.
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                예약금이나 추가 비용을 요구하는 경우 조건을 꼼꼼히 확인하고,
                예약 전 이용 후기와 업체 정보를 충분히 확인하는 것을 권장합니다.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <p className="text-sm font-bold">
                여행 일정에 맞춰 여유 있게 예약하세요.
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                인기 있는 일정이나 특정 프로필을 원하는 경우
                여행 전에 미리 가능 여부를 확인하는 것이 좋습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CONTACT
      ========================= */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#080808]"
      >
        <div className="container px-4 py-16 text-center sm:py-24">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            CONTACT
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            하노이 에코걸 문의
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            여행 날짜와 인원, 원하는 일정 등을 남겨주시면
            이용 가능한 프로필과 서비스 조건을 안내해드립니다.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-10 py-4 text-sm font-black transition hover:bg-red-500"
            >
              문의하기 →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
