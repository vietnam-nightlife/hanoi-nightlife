"use client";

import { useState } from "react";

export default function EcoGirlPage() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          프로필 미리보기
      ========================= */}
      <section className="container px-4 py-14 sm:py-20">

        <div className="mb-8 text-center">
          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            PROFILE
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 에코걸 프로필
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            하노이 에코걸 프로필을 사진으로 먼저 확인하고
            원하는 일정과 이용 방법을 상담해보세요.
          </p>
        </div>

        {/* 프로필 사진 1개 가운데 */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowProfile(true)}
            className="group w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition hover:border-red-500/70"
          >
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
              <img
                src="/하노이눈탱이방지피씨.webp"
                alt="하노이 에코걸 프로필"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4 text-center">
              <p className="text-xs font-black text-red-500">
                HANOI
              </p>

              <p className="mt-1 text-sm font-black">
                프로필 사진 크게 보기
              </p>
            </div>
          </button>
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
          하노이 에코걸 소개
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
            베트남 에코걸은 여행객의 일정에 맞춰 관광과 통역,
            현지 체험 등을 함께할 수 있는 1:1 맞춤형 가이드 서비스입니다.
            하노이를 비롯해 다낭, 호치민 등 베트남 주요 지역에서
            이용할 수 있으며, 여행 스타일과 일정에 따라
            다양한 방식으로 계획할 수 있습니다.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            하노이 에코걸은 여행 일정에 맞춰 관광지 방문이나
            현지 음식 체험, 통역 등의 도움을 받을 수 있어
            자유여행을 계획하는 분들에게 편리한 선택지가 될 수 있습니다.
            이용 전에는 프로필과 서비스 범위, 비용 및 예약 조건을
            미리 확인하는 것이 좋습니다.
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
                등록된 프로필 사진을 확인하고
                원하는 일정과 스타일에 맞는 서비스를 상담해보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                GUIDE
              </p>

              <h3 className="mt-2 text-lg font-black">
                맞춤형 일정
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                관광과 통역, 식사 및 현지 체험 등
                여행 일정에 맞춰 상담을 통해 계획할 수 있습니다.
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
                이용 일정과 비용, 가능한 프로필 등을
                상담을 통해 미리 확인할 수 있습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          추천 코스
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-zinc-500">
            RECOMMENDED COURSE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            추천 코스
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                DAY
              </p>

              <h3 className="mt-2 text-xl font-black">
                관광·통역 중심 코스
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                하노이 주요 관광지를 둘러보며 현지 음식과
                문화를 경험하고 통역 도움까지 받을 수 있는
                자유여행 중심 코스입니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                NIGHT
              </p>

              <h3 className="mt-2 text-xl font-black">
                저녁·야간 일정
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                낮 일정 이후에는 현지 식사나 바 등
                여행객이 원하는 장소를 중심으로
                자유롭게 일정을 구성할 수 있습니다.
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
                프로필 사진을 확인한 후 원하는 일정과
                이용 조건을 상담해주세요.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black p-5">
              <h3 className="font-black">
                02. 일정 및 비용 상담
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                원하는 날짜와 일정, 인원 등을 알려주시면
                이용 가능한 조건과 비용을 확인할 수 있습니다.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black p-5">
              <h3 className="font-black">
                03. 예약 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                상담을 통해 일정과 이용 조건을 확인한 후
                예약을 진행해주세요.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          상담
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
            하노이 에코걸 상담 문의
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            원하는 날짜와 일정, 이용 인원을 알려주시면
            가능한 프로필과 이용 조건을 상담해드립니다.
          </p>

        </div>
      </section>


      {/* =========================
          프로필 사진 확대 모달
      ========================= */}
      {showProfile && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowProfile(false)}
        >

          <div
            className="relative flex max-h-[95vh] max-w-[95vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setShowProfile(false)}
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl font-bold text-white transition hover:bg-black"
              aria-label="닫기"
            >
              ×
            </button>

            <img
              src="/하노이눈탱이방지피씨.webp"
              alt="하노이 에코걸 프로필 확대"
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            />

          </div>
        </div>
      )}

    </main>
  );
}
