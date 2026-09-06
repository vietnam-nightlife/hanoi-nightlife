import Link from "next/link";

const profiles = [
  {
    image: "/하노이눈팅이방지피씨.webp",
    title: "하노이 에코걸 프로필 1",
  },
  {
    image: "/하노이눈팅이방지모바일.webp",
    title: "하노이 에코걸 프로필 2",
  },
  {
    image: "/하노이눈팅이방지피씨.webp",
    title: "하노이 에코걸 프로필 3",
  },
  {
    image: "/하노이눈팅이방지모바일.webp",
    title: "하노이 에코걸 프로필 4",
  },
  {
    image: "/하노이눈팅이방지피씨.webp",
    title: "하노이 에코걸 프로필 5",
  },
  {
    image: "/하노이눈팅이방지모바일.webp",
    title: "하노이 에코걸 프로필 6",
  },
];

export default function EcoGirlPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          HERO
      ========================= */}
      <section className="border-b border-white/10 bg-black">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.3em] text-red-500">
            HANOI ECOGIRL
          </p>

          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            하노이 에코걸
            <br />
            1:1 맞춤 여행 가이드
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            베트남 여행을 보다 편하게 즐기고 싶다면 에코걸 서비스를
            이용해보세요. 관광 가이드부터 현지 통역, 식사와 여행 일정까지
            여행객의 일정에 맞춰 편하게 계획할 수 있습니다.
          </p>

          <div className="mt-7">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-xl bg-red-600 px-7 py-3 text-sm font-black transition hover:bg-red-500"
            >
              문의하기 →
            </Link>
          </div>

        </div>
      </section>


      {/* =========================
          PROFILE
      ========================= */}
      <section className="bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <div className="mb-8">
            <p className="text-xs font-black tracking-[0.25em] text-red-500">
              PROFILE
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              하노이 에코걸 프로필
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              프로필 사진을 확인하고 원하는 스타일을 비교해보세요.
              사진은 좌우로 밀어서 다음 프로필을 확인할 수 있습니다.
            </p>
          </div>


          {/* =========================
              가로 스크롤 프로필
              3개 × 2줄
          ========================= */}
          <div className="overflow-x-auto pb-5 [scrollbar-width:thin]">

            <div
              className="
                grid
                grid-flow-col
                grid-rows-2
                auto-cols-[calc((100vw-3rem)/1.15)]
                gap-3
                sm:auto-cols-[calc((100vw-5rem)/2.15)]
                lg:auto-cols-[calc((100vw-10rem)/3.15)]
              "
            >

              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-zinc-950
                    shadow-lg
                    transition
                    hover:border-red-500/60
                  "
                >

                  {/* 사진 */}
                  <div className="aspect-[3/4] overflow-hidden bg-zinc-900">

                    <img
                      src={profile.image}
                      alt={profile.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  </div>

                  {/* 제목 */}
                  <div className="p-3 text-center sm:p-4">

                    <p className="text-[10px] font-black tracking-[0.2em] text-red-500 sm:text-xs">
                      HANOI ECOGIRL
                    </p>

                    <p className="mt-1 text-sm font-black">
                      {profile.title}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* 스크롤 안내 */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-zinc-500">
            <span>←</span>
            <span>사진을 좌우로 밀어보세요</span>
            <span>→</span>
          </div>

        </div>
      </section>


      {/* =========================
          INTRO
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            ABOUT
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            베트남 에코걸이란?
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              베트남 에코걸은 여행객의 일정에 맞춰 현지 관광과
              통역을 도와주는 1:1 맞춤형 가이드 서비스입니다.
              패키지 여행보다 자유로운 개인 여행을 선호하는 분들이
              자신의 일정에 맞춰 이용하기 좋은 것이 특징입니다.
            </p>

            <p>
              하노이를 비롯해 다낭, 호치민 등 베트남 주요 지역에서
              이용할 수 있으며, 지역마다 서비스 구성과 비용에 차이가
              있을 수 있습니다.
            </p>

            <p>
              여행 일정과 원하는 활동을 미리 상담하고 자신에게 맞는
              프로필을 선택하면 보다 편안하게 현지 여행을 즐길 수 있습니다.
            </p>

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
            하노이 에코걸 추천 코스
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            하노이 여행 일정에 맞춰 관광과 식사, 현지 문화 체험 등을
            자유롭게 구성할 수 있습니다. 단체 패키지와 달리 원하는
            장소와 시간을 중심으로 일정을 조정할 수 있다는 점이 장점입니다.
          </p>


          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                01
              </p>

              <h3 className="mt-3 text-xl font-black">
                관광 &amp; 가이드
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                하노이 주요 관광지를 둘러보고 현지 이동과
                의사소통을 편하게 할 수 있도록 일정을 구성합니다.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                02
              </p>

              <h3 className="mt-3 text-xl font-black">
                현지 음식 &amp; 맛집
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                베트남 현지 음식과 하노이의 다양한 맛집을
                여행 일정에 맞춰 방문할 수 있습니다.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                03
              </p>

              <h3 className="mt-3 text-xl font-black">
                자유 일정
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                정해진 패키지 일정이 아니라 여행객이 원하는
                시간과 장소를 중심으로 일정을 조정할 수 있습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          이용 정보
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            INFORMATION
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            에코걸 비용 및 이용 방법
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              에코걸 서비스의 비용은 지역과 프로필, 이용 시간 및
              일정 구성에 따라 달라질 수 있습니다. 하노이의 경우
              일반적으로 상담을 통해 일정과 서비스 내용을 먼저 확인한
              후 최종 비용을 안내받는 방식으로 이용할 수 있습니다.
            </p>

            <p>
              프로필을 확인할 때는 가이드 경험과 언어 구사 능력,
              고객 후기 등을 함께 확인하는 것이 좋습니다.
              이용 전에 포함되는 서비스와 추가 비용 여부를
              미리 확인하면 보다 편하게 여행 일정을 계획할 수 있습니다.
            </p>

          </div>


          {/* 정보 카드 */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
              <p className="text-xs font-black text-red-500">
                SERVICE
              </p>

              <h3 className="mt-2 font-black">
                1:1 맞춤형
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                여행 일정에 맞춰 자유롭게 구성
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
              <p className="text-xs font-black text-red-500">
                GUIDE
              </p>

              <h3 className="mt-2 font-black">
                관광 &amp; 통역
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                현지 이동과 의사소통을 편하게
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
              <p className="text-xs font-black text-red-500">
                SCHEDULE
              </p>

              <h3 className="mt-2 font-black">
                일정 상담
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                원하는 시간과 장소를 사전 상담
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
              <p className="text-xs font-black text-red-500">
                CONTACT
              </p>

              <h3 className="mt-2 font-black">
                예약 문의
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                프로필 확인 후 문의 가능
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          이용시간
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            GUIDE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            이용 안내
          </h2>


          <div className="mt-8 space-y-4">

            <div className="rounded-2xl border border-white/10 bg-black p-5 sm:p-6">
              <h3 className="font-black">
                01. 프로필 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                위 프로필 사진을 좌우로 넘겨 원하는 프로필을
                확인해주세요.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-black p-5 sm:p-6">
              <h3 className="font-black">
                02. 일정 상담
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                여행 날짜와 원하는 관광 일정, 이용 시간 등을
                상담해주세요.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-black p-5 sm:p-6">
              <h3 className="font-black">
                03. 비용 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                프로필과 일정에 따른 비용 및 포함 서비스를
                사전에 확인해주세요.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-black p-5 sm:p-6">
              <h3 className="font-black">
                04. 예약 진행
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                일정과 조건을 확인한 후 예약을 진행할 수 있습니다.
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
        className="border-t border-white/10 bg-black"
      >
        <div className="container px-4 py-16 text-center sm:py-24">

          <p className="text-xs font-black tracking-[0.3em] text-red-500">
            CONTACT
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            하노이 에코걸 문의
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">
            원하는 프로필과 여행 일정이 있다면 편하게 문의해주세요.
            이용 가능 여부와 일정에 맞는 서비스를 안내해드립니다.
          </p>

          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center rounded-xl bg-red-600 px-8 py-3.5 text-sm font-black transition hover:bg-red-500"
            >
              문의하기 →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
