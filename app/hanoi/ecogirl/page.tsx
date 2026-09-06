"use client";

import { useState } from "react";

export default function EcoGirlPage() {
  const [showProfile, setShowProfile] = useState(false);

  const profiles = [
    {
      image: "/하노이눈탱이방지피씨.webp",
      title: "하노이 에코걸 프로필 1",
    },
    {
      image: "/하노이눈탱이방지모바일.webp",
      title: "하노이 에코걸 프로필 2",
    },
    {
      image: "/하노이눈탱이방지피씨.webp",
      title: "하노이 에코걸 프로필 3",
    },
    {
      image: "/하노이눈탱이방지모바일.webp",
      title: "하노이 에코걸 프로필 4",
    },
    {
      image: "/하노이눈탱이방지피씨.webp",
      title: "하노이 에코걸 프로필 5",
    },
    {
      image: "/하노이눈탱이방지모바일.webp",
      title: "하노이 에코걸 프로필 6",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          프로필
      ========================= */}
      <section className="container px-4 py-14 sm:py-20">

        <div className="mb-8">
          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            PROFILE
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 에코걸 프로필
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            하노이 에코걸을 이용하기 전 프로필과 기본 정보를
            확인해보세요. 원하는 프로필을 사진으로 먼저 확인하고
            자세한 상담을 통해 이용 일정을 확인할 수 있습니다.
          </p>
        </div>

        {/* 3개씩 2줄 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">

          {profiles.map((profile, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setShowProfile(profile.image)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left transition hover:border-red-500/70"
            >
              <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
                <img
                  src={profile.image}
                  alt={profile.title}
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
            </button>
          ))}

        </div>

        {/* 문의하기 */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-red-500/60 bg-red-600 px-8 py-3 text-sm font-black transition hover:bg-red-500"
          >
            문의하기 →
          </a>
        </div>

      </section>


      {/* =========================
          소개
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            HANOI ECOGIRL
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            베트남 에코걸 서비스 안내
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              베트남 에코걸은 여행객의 일정에 맞춰 통역과
              관광 가이드 역할을 제공하는 맞춤형 여행 서비스입니다.
              패키지 여행보다 자유로운 일정을 선호하는 분들이
              현지의 관광과 문화를 보다 편하게 경험할 수 있도록
              구성되어 있습니다.
            </p>

            <p>
              하노이, 다낭, 호치민 등 베트남 주요 지역에서
              이용할 수 있으며 지역과 일정, 서비스 구성에 따라
              비용과 이용 조건이 달라질 수 있습니다.
            </p>

            <p>
              이용 전에는 프로필과 후기, 가이드 경험 및
              언어 구사 능력 등을 확인하고 본인의 여행 일정에
              맞는 서비스를 선택하는 것이 좋습니다.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          추천 코스
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            RECOMMENDED COURSE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            추천 이용 코스
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                01
              </p>

              <h3 className="mt-2 text-lg font-black">
                관광 & 가이드
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                여행 일정에 맞춰 주요 관광지와 현지 음식,
                주변 명소 등을 보다 편하게 둘러볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                02
              </p>

              <h3 className="mt-2 text-lg font-black">
                통역 & 일정 지원
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                현지에서 발생할 수 있는 언어 문제를 줄이고
                여행 일정에 맞춰 보다 편하게 이동할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                03
              </p>

              <h3 className="mt-2 text-lg font-black">
                자유 일정
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                단체 패키지와 달리 개인 일정에 맞춰
                원하는 장소와 시간을 중심으로 계획할 수 있습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          이용 안내
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-zinc-500">
            GUIDE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            이용 안내
          </h2>

          <div className="mt-8 space-y-4">

            <div className="rounded-xl border border-white/10 bg-black p-5">
              <h3 className="font-black">
                01. 프로필 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                사진과 기본 정보를 확인한 후 원하는 프로필을
                선택해주세요.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black p-5">
              <h3 className="font-black">
                02. 상담 문의
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                원하는 일정과 지역을 전달하면 이용 가능한
                서비스와 조건을 확인할 수 있습니다.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black p-5">
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
          문의
      ========================= */}
      <section
        id="contact"
        className="border-t border-white/10"
      >
        <div className="container px-4 py-14 text-center sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            CONTACT
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            궁금한 점이 있으신가요?
          </h2>

          <p className="mt-3 text-sm text-zinc-400">
            이용 가능 일정과 자세한 내용은 문의를 통해 확인해주세요.
          </p>

        </div>
      </section>


      {/* =========================
          사진 확대 모달
      ========================= */}
      {showProfile && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowProfile(false)}
        >
          <div className="relative max-h-[95vh] max-w-[95vw]">

            <button
              type="button"
              onClick={() => setShowProfile(false)}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/70 px-4 py-2 text-xl font-black text-white"
              aria-label="닫기"
            >
              ×
            </button>

            <img
              src={showProfile}
              alt="프로필 확대"
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            />

          </div>
        </div>
      )}

    </main>
  );
}
