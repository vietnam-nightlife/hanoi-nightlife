"use client";

import { useState } from "react";

export default function EcoGirlPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const profiles = [
    "/하노이 에코걸 1.webp",
    "/하노이 에코걸 2.webp",
    "/하노이 에코걸 3.webp",
    "/하노이 에코걸 4.webp",
    "/하노이 에코걸 5.webp",
    "/하노이 에코걸 6.webp",
    "/하노이 에코걸 7.webp",
    "/하노이 에코걸 8.webp",
    "/하노이 에코걸 9.webp",
  ];

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? profiles.length - 1
        : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === profiles.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

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

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            하노이 에코걸 프로필을 사진으로 먼저 확인하고
            원하는 프로필을 선택해 자세한 정보를 확인해보세요.
          </p>
        </div>

        {/* =========================
            프로필 9개
            PC / 모바일 모두 3열
        ========================= */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5">

          {profiles.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left transition hover:border-red-500/70"
            >
              <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
                <img
                  src={image}
                  alt={`하노이 에코걸 프로필 ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-3 text-center sm:p-4">
                <p className="text-xs font-black text-red-500">
                  HANOI
                </p>

                <p className="mt-1 text-sm font-black">
                  프로필 {index + 1}
                </p>
              </div>
            </button>
          ))}

        </div>

        {/* =========================
            문의하기
        ========================= */}
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
            베트남 에코걸 비용 및 이용 안내
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              베트남 에코걸은 개인 여행객을 위한 맞춤형 통역 및
              관광 가이드 서비스로, 하노이·다낭·호치민 등 베트남
              주요 지역에서 이용할 수 있습니다. 패키지 여행과 달리
              여행자의 일정과 취향에 맞춰 자유롭게 일정을 구성할 수
              있다는 점이 특징입니다.
            </p>

            <p>
              에코걸은 여행 중 통역과 관광 가이드 역할을 하며,
              현지 음식과 관광지를 함께 둘러보는 등 보다 자유로운
              여행을 원하는 분들에게 적합합니다. 지역과 프로필에
              따라 비용과 이용 조건이 달라질 수 있으므로 예약 전
              세부 내용을 확인하는 것이 좋습니다.
            </p>

          </div>

          {/* 정보 카드 */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                01
              </p>

              <h3 className="mt-2 text-lg font-black">
                1:1 맞춤형 일정
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                단체 패키지와 달리 여행자의 일정에 맞춰
                관광과 식사 등 원하는 코스를 자유롭게
                구성할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                02
              </p>

              <h3 className="mt-2 text-lg font-black">
                통역 및 관광 가이드
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                현지 이동과 관광 과정에서 통역과 일정 안내를
                받을 수 있어 베트남 여행이 처음인 분들도
                보다 편하게 이용할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                03
              </p>

              <h3 className="mt-2 text-lg font-black">
                지역별 비용 확인
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                하노이·다낭·호치민 등 지역과 프로필에 따라
                비용이 달라질 수 있으므로 예약 전 가격과
                포함 사항을 확인하는 것이 좋습니다.
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

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            RECOMMENDED COURSE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            베트남 에코걸 추천 코스
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <h3 className="text-xl font-black">
                관광 가이드 코스
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                여행자가 원하는 관광지를 중심으로 일정을
                구성하고 현지 음식과 명소 등을 함께 둘러보는
                방식입니다. 자유로운 여행 일정을 원하는 분께
                잘 맞습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <h3 className="text-xl font-black">
                자유 일정 코스
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                정해진 패키지 일정에서 벗어나 여행자의 취향과
                시간에 맞춰 일정을 조정할 수 있습니다. 식사,
                관광, 현지 문화 체험 등을 자유롭게 계획할 수
                있습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          이용시간 / 주의사항
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-zinc-500">
            GUIDE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            이용 전 확인사항
          </h2>

          <div className="mt-8 space-y-4">

            <div className="rounded-xl border border-white/10 bg-black p-5">
              <h3 className="font-black">
                01. 이용시간
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                이용 가능한 시간과 일정은 예약 전에 에이전트와
                협의하여 여행 일정에 맞게 조정하는 것이 좋습니다.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black p-5">
              <h3 className="font-black">
                02. 비용 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                지역과 프로필에 따라 비용이 달라질 수 있으므로
                예약 전 총 비용과 포함되는 서비스 내용을
                반드시 확인해주세요.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black p-5">
              <h3 className="font-black">
                03. 예약 및 안전 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                사칭 업체나 불분명한 업체가 있을 수 있으므로
                예약 전에 업체 정보와 결제 조건을 충분히
                확인하는 것을 권장합니다.
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
            하노이 에코걸 문의
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            프로필과 이용 일정, 비용 등 궁금한 사항이 있다면
            편하게 문의해주세요.
          </p>

        </div>
      </section>


      {/* =========================
          이미지 확대 모달
          클릭 후 좌우 슬라이드
      ========================= */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedIndex(null)}
        >

          {/* 닫기 */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white backdrop-blur transition hover:bg-white/20"
            aria-label="닫기"
          >
            ×
          </button>


          {/* 왼쪽 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-3xl text-white transition hover:bg-white/20 sm:left-6"
            aria-label="이전 사진"
          >
            ‹
          </button>


          {/* 이미지 */}
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={profiles[selectedIndex]}
              alt={`하노이 에코걸 프로필 ${selectedIndex + 1}`}
              className="max-h-[88vh] max-w-[85vw] rounded-2xl object-contain shadow-2xl"
            />

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur">
              {selectedIndex + 1} / {profiles.length}
            </div>
          </div>


          {/* 오른쪽 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-3xl text-white transition hover:bg-white/20 sm:right-6"
            aria-label="다음 사진"
          >
            ›
          </button>

        </div>
      )}

    </main>
  );
}
