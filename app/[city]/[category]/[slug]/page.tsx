"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const galleryImages = [
  {
    src: "/하노이 강남스파 메인.webp",
    title: "강남스파 메인",
  },
  {
    src: "/하노이 강남스파 외관.webp",
    title: "강남스파 외관",
  },
  {
    src: "/하노이 강남스파 리셉션.webp",
    title: "강남스파 리셉션",
  },
  {
    src: "/하노이 강남스파 스낵바.webp",
    title: "강남스파 스낵바",
  },
  {
    src: "/하노이 강남스파 휴게실.webp",
    title: "강남스파 휴게실",
  },
  {
    src: "/하노이 강남스파 룸1.webp",
    title: "강남스파 룸1",
  },
  {
    src: "/하노이 강남스파 룸2.webp",
    title: "강남스파 룸2",
  },
];

const faqItems = [
  {
    q: "강남스파는 어디에 있나요?",
    a: "하노이 미딩 지역에서 이용할 수 있는 마사지·스파 업소입니다. 방문 전 정확한 위치와 픽업 가능 여부를 문의해 주세요.",
  },
  {
    q: "예약은 어떻게 하나요?",
    a: "카카오톡 또는 텔레그램 상담을 통해 원하는 날짜와 시간을 문의하시면 예약 안내를 받을 수 있습니다.",
  },
  {
    q: "영업시간은 어떻게 되나요?",
    a: "기본 안내 기준 영업시간은 12:00 ~ 01:00입니다. 당일 이용 가능 여부는 방문 전 확인을 권장합니다.",
  },
  {
    q: "가격은 어떻게 확인하나요?",
    a: "위 가격표에서 기본 코스와 금액을 확인할 수 있습니다. 실제 이용 전에는 변동 여부를 확인해 주세요.",
  },
  {
    q: "처음 방문해도 이용하기 어렵지 않나요?",
    a: "처음 방문하는 분들도 이용할 수 있도록 기본적인 코스와 시설을 안내하고 있습니다. 궁금한 사항은 예약 전에 문의하시면 됩니다.",
  },
];

export default function GangnamSpaPage() {
  const params = useParams();
  const city = typeof params?.city === "string" ? params.city : "hanoi";

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openGallery = (index: number) => {
    setSelectedImage(index);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === 0
        ? galleryImages.length - 1
        : selectedImage - 1
    );
  };

  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === galleryImages.length - 1
        ? 0
        : selectedImage + 1
    );
  };

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">

          <div className="mb-8">
            <div className="text-xs font-black tracking-[0.35em] text-red-500">
              HANOI · MY DINH · MASSAGE
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              강남 스파
            </h1>

            <div className="mt-3 text-lg font-medium tracking-[0.25em] text-zinc-500">
              GANGNAM SPA
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400 md:text-base">
              하노이 미딩 지역에서 이용할 수 있는 강남스파 마사지·스파
              안내입니다. 위치와 영업시간, 시설, 코스 및 가격 정보를 한눈에
              확인할 수 있도록 정리했습니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                미딩 지역
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                12:00 ~ 01:00
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                마사지 · 스파
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                사전 예약 권장
              </span>
            </div>
          </div>

          {/* =========================================================
              MAIN IMAGE
          ========================================================= */}
          <button
            type="button"
            onClick={() => openGallery(0)}
            className="group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-[#101010] text-left"
          >
            <div className="aspect-[16/8] overflow-hidden">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-xs font-bold tracking-[0.25em] text-red-400">
                GANGNAM SPA
              </div>

              <div className="mt-2 text-xl font-black">
                강남스파
              </div>

              <div className="mt-1 text-xs text-zinc-300">
                사진을 클릭하면 크게 볼 수 있습니다
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* =========================================================
          FACILITY GALLERY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

        <div className="mb-8">
          <div className="text-xs font-black tracking-[0.3em] text-red-500">
            GALLERY
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            시설 사진
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-500">
            강남스파의 외관과 내부 시설을 확인해 보세요.
            사진을 클릭하면 전체 화면으로 확대해서 볼 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.slice(1).map((image, index) => {
            const realIndex = index + 1;

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => openGallery(realIndex)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-left">
                  <div className="text-sm font-bold">
                    {image.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          PRICE
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">

          <div className="text-center">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              PRICE
            </div>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              강남스파 가격표
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              아래 금액은 제공된 가격표를 기준으로 정리했습니다.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[#8c6a3d]/40 bg-gradient-to-b from-[#17130e] to-[#0c0c0c] shadow-2xl">

            {/* PRICE HEADER */}
            <div className="border-b border-[#8c6a3d]/30 px-6 py-8 text-center md:px-10">
              <div className="text-2xl font-black tracking-[0.25em] text-[#e5c28d]">
                GANGNAM SPA
              </div>

              <div className="mt-2 text-xs tracking-[0.4em] text-[#9d896c]">
                PRICE MENU
              </div>

              <div className="mx-auto mt-5 h-px max-w-xs bg-[#8c6a3d]/50" />
            </div>

            {/* A COURSE */}
            <div className="border-b border-white/10 px-6 py-9 md:px-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black text-[#e7c793]">
                      A코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (30분)
                    </span>
                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">
                    <p>샤워 + 핸플</p>
                    <p>립 마무리</p>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">
                  <div className="text-2xl font-black text-[#e7c793]">
                    140만동
                  </div>
                </div>

              </div>
            </div>

            {/* B COURSE */}
            <div className="border-b border-white/10 px-6 py-9 md:px-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black text-[#e7c793]">
                      B코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (60분)
                    </span>
                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">
                    <p>샤워 + 바디 및 전립선</p>
                    <p>+ 누루 서비스 + 핸플, 립 마무리</p>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">
                  <div className="text-2xl font-black text-[#e7c793]">
                    180만동
                  </div>
                </div>

              </div>
            </div>

            {/* C COURSE */}
            <div className="px-6 py-9 md:px-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black text-[#e7c793]">
                      C코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (90분)
                    </span>
                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">
                    <p>샤워 + 아로마탕 목욕</p>
                    <p>+ 바디, 전립선 + 누루</p>
                    <p>+ 핸플, 립 마무리</p>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">
                  <div className="text-2xl font-black text-[#e7c793]">
                    210만동
                  </div>
                </div>

              </div>
            </div>

            <div className="border-t border-[#8c6a3d]/30 px-6 py-7 text-center">
              <div className="text-sm font-bold text-[#c9aa7b]">
                모든 금액은 팁 포함 가격입니다
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          BASIC INFORMATION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
            <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
              LOCATION
            </div>

            <div className="mt-4 text-lg font-black">
              하노이 미딩
            </div>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              미딩 지역에서 방문하기 좋은 마사지·스파 업소입니다.
              정확한 위치는 예약 시 확인해 주세요.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
            <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
              OPENING HOURS
            </div>

            <div className="mt-4 text-lg font-black">
              12:00 ~ 01:00
            </div>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              운영시간은 현지 상황에 따라 달라질 수 있으므로
              방문 전 확인을 권장합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
            <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
              CATEGORY
            </div>

            <div className="mt-4 text-lg font-black">
              마사지 · 스파
            </div>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              마사지와 스파 코스를 함께 이용할 수 있는 업소입니다.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

          <div className="max-w-4xl">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              ABOUT
            </div>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              강남스파 소개
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-zinc-400 md:text-base">
              <p>
                강남스파는 하노이 미딩 지역에서 이용할 수 있는
                마사지·스파 업소로 안내되고 있습니다.
              </p>

              <p>
                기본적인 마사지 코스부터 시간별로 구성된 다양한
                코스를 확인할 수 있으며, 방문 전 원하는 코스와
                이용 가능 여부를 상담하는 것을 권장합니다.
              </p>

              <p>
                특히 처음 방문하는 경우 예약 전에 위치와 운영시간,
                가격 및 코스 내용을 다시 확인하면 보다 편하게
                이용할 수 있습니다.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          FACILITIES
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

        <div className="text-xs font-black tracking-[0.3em] text-red-500">
          FACILITIES
        </div>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          시설 및 이용환경
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">

          {[
            "샤워 시설",
            "마사지 공간",
            "휴식 공간",
            "예약 상담",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-[#101010] p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/10 text-sm font-black text-red-500">
                  ✓
                </div>

                <div>
                  <div className="font-bold">
                    {item}
                  </div>

                  <div className="mt-1 text-xs leading-6 text-zinc-600">
                    이용 전 실제 운영 여부를 확인해 주세요.
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =========================================================
          LOCATION / TRANSPORT
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <div className="text-xs font-black tracking-[0.3em] text-red-500">
                LOCATION
              </div>

              <h2 className="mt-3 text-3xl font-black">
                위치 및 방문 안내
              </h2>

              <p className="mt-6 text-sm leading-8 text-zinc-400">
                강남스파는 하노이 미딩 지역에서 이용할 수 있는
                마사지·스파 업소로 안내되고 있습니다.
                예약 전 정확한 주소와 이동 방법을 확인해 주세요.
              </p>
            </div>

            <div>
              <div className="text-xs font-black tracking-[0.3em] text-red-500">
                TRANSPORT
              </div>

              <h2 className="mt-3 text-3xl font-black">
                이동 및 방문
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
                  <div className="font-bold">
                    택시 · 차량 이동
                  </div>

                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    기사에게 정확한 업소 위치를 보여주거나
                    예약 담당자에게 위치를 확인한 후 이동하는 것을
                    권장합니다.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
                  <div className="font-bold">
                    예약 후 방문
                  </div>

                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    방문 전 예약 가능 여부와 운영시간을 확인하면
                    더욱 편리하게 이용할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CHECK
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

        <div className="rounded-3xl border border-white/10 bg-[#101010] p-7 md:p-10">

          <div className="text-xs font-black tracking-[0.3em] text-red-500">
            CHECK
          </div>

          <h2 className="mt-3 text-3xl font-black">
            방문 전 확인사항
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "방문 전 영업시간 확인",
              "원하는 코스 및 가격 확인",
              "예약 가능 여부 확인",
              "정확한 위치 확인",
              "당일 운영 상황 확인",
              "가격 변동 여부 확인",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-5 py-4"
              >
                <span className="text-red-500">✓</span>
                <span className="text-sm text-zinc-300">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">

          <div className="text-center">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              FAQ
            </div>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              자주 묻는 질문
            </h2>
          </div>

          <div className="mt-10 space-y-3">

            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-[#101010]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-bold">
                  <span>{item.q}</span>

                  <span className="text-xl text-zinc-500 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-500">
                  {item.a}
                </div>
              </details>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#171717] to-[#0c0c0c] p-8 text-center md:p-14">

          <div className="text-xs font-black tracking-[0.3em] text-red-500">
            GANGNAM SPA
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            강남스파 이용을 원하시나요?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            예약 전 코스와 가격, 운영시간 및 위치를 확인하고
            편하게 문의해 주세요.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <a
              href="#"
              className="rounded-xl bg-red-600 px-8 py-4 text-sm font-black transition hover:bg-red-500"
            >
              문의하기
            </a>

            <Link
              href={`/${city}/massage`}
              className="rounded-xl border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-black transition hover:bg-white/[0.08]"
            >
              하노이 마사지 더보기
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          IMAGE LIGHTBOX
      ========================================================= */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeGallery();
            }
          }}
        >

          {/* CLOSE */}
          <button
            type="button"
            onClick={closeGallery}
            aria-label="닫기"
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white/10"
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={previousImage}
            aria-label="이전 사진"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl text-white transition hover:bg-white/10 md:left-8"
          >
            ‹
          </button>

          {/* IMAGE */}
          <div className="relative flex max-h-[90vh] max-w-[92vw] flex-col items-center">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="max-h-[82vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
            />

            <div className="mt-4 text-center text-sm text-zinc-300">
              {galleryImages[selectedImage].title}
            </div>

            <div className="mt-1 text-xs text-zinc-600">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={nextImage}
            aria-label="다음 사진"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl text-white transition hover:bg-white/10 md:right-8"
          >
            ›
          </button>

          {/* BOTTOM HINT */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-xs text-zinc-600">
            ← → 사진 이동 · ESC 닫기
          </div>

        </div>
      )}

    </main>
  );
}
