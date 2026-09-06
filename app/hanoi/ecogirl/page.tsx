"use client";

import { useEffect, useState } from "react";

const profiles = [
  "/하노이눈탱이방지피씨.webp",
  "/하노이눈탱이방지모바일.webp",
  "/하노이눈탱이방지피씨.webp",
  "/하노이눈탱이방지모바일.webp",
  "/하노이눈탱이방지피씨.webp",
  "/하노이눈탱이방지모바일.webp",
];

export default function EcoGirlPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex + 1) % profiles.length
    );
  };

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + profiles.length) % profiles.length
    );
  };

  /* ESC 키로 닫기 */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  /* 모바일 스와이프 */
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }

    setTouchStart(null);
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
            원하는 프로필을 선택해 자세히 확인해보세요.
          </p>
        </div>

        {/* =========================
            프로필 3 × 2
        ========================= */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5">

          {profiles.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left transition hover:border-red-500/70 focus:outline-none focus:ring-2 focus:ring-red-500/70"
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
            하노이 에코걸 소개
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              하노이 에코걸은 베트남 여행 중 현지 관광과
              통역, 일정 안내 등을 보다 편하게 이용할 수 있도록
              도와주는 1:1 맞춤형 가이드 서비스입니다.
            </p>

            <p>
              일반적인 단체 패키지 여행과 달리 여행객의 일정과
              취향에 맞춰 자유롭게 움직일 수 있다는 점이
              특징입니다. 하노이를 처음 방문하는 여행객이라면
              현지 음식과 관광지, 주변 상권 등을 편하게
              경험하는 데 도움을 받을 수 있습니다.
            </p>

            <p>
              에코걸을 선택할 때는 프로필과 경력, 언어 구사 능력,
              이용 후기 등을 꼼꼼하게 확인하는 것이 좋습니다.
              비용 역시 프로필과 서비스 구성에 따라 달라질 수
              있으므로 예약 전에 전체 비용과 이용 조건을
              확인하는 것을 권장합니다.
            </p>

          </div>

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
                사진과 프로필 정보를 먼저 확인한 후
                원하는 프로필을 선택해보세요.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                GUIDE
              </p>

              <h3 className="mt-2 text-lg font-black">
                맞춤형 여행
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                관광과 통역, 일정 안내 등 여행 일정에 맞춰
                편하게 이용할 수 있습니다.
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                CONTACT
              </p>

              <h3 className="mt-2 text-lg font-black">
                상담 및 문의
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                원하는 프로필과 여행 일정 등을 상담을 통해
                미리 확인할 수 있습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          추천 이용 방법
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
                위 프로필 사진을 클릭하면 큰 이미지로
                확인할 수 있으며 좌우로 다른 프로필을
                넘겨볼 수 있습니다.
              </p>
            </div>


            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="font-black">
                02. 원하는 프로필 선택
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                원하는 프로필을 확인한 후 여행 일정과
                원하는 이용 조건을 상담해주세요.
              </p>
            </div>


            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="font-black">
                03. 예약 및 일정 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                예약 전에 이용 요금과 일정, 포함 사항 및
                추가 비용 여부를 미리 확인하는 것을 권장합니다.
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
        className="border-t border-white/10 bg-[#080808]"
      >
        <div className="container px-4 py-14 text-center sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            CONTACT
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            하노이 에코걸 문의
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            원하는 프로필과 여행 일정, 이용 요금 등을
            상담을 통해 확인해보세요.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <button
              type="button"
              className="rounded-xl bg-red-600 px-7 py-3 text-sm font-black transition hover:bg-red-500"
            >
              카카오톡 문의
            </button>

            <button
              type="button"
              className="rounded-xl border border-white/10 bg-black px-7 py-3 text-sm font-black transition hover:border-red-500/60"
            >
              텔레그램 문의
            </button>

          </div>

        </div>
      </section>


      {/* =========================
          사진 확대 모달
      ========================= */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeModal}
        >

          {/* 닫기 */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="닫기"
            className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl font-light text-white transition hover:bg-white/10"
          >
            ×
          </button>


          {/* 이전 */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prevImage();
            }}
            aria-label="이전 사진"
            className="absolute left-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl text-white transition hover:bg-white/10 sm:left-6"
          >
            ‹
          </button>


          {/* 사진 */}
          <div
            className="relative flex h-full w-full max-w-5xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={profiles[selectedIndex]}
              alt={`하노이 에코걸 프로필 ${selectedIndex + 1}`}
              className="max-h-[88vh] max-w-full rounded-xl object-contain"
            />

            {/* 사진 번호 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white">
              {selectedIndex + 1} / {profiles.length}
            </div>
          </div>


          {/* 다음 */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="다음 사진"
            className="absolute right-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl text-white transition hover:bg-white/10 sm:right-6"
          >
            ›
          </button>

        </div>
      )}

    </main>
  );
}
