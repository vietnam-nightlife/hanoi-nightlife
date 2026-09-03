"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const galleryImages = [
  {
    src: "/하노이 수 사우나 메인.webp",
    title: "수 사우나 메인",
  },
  {
    src: "/하노이 수 사우나 외관.webp",
    title: "수 사우나 외관",
  },
  {
    src: "/하노이 수 사우나 리셉션.webp",
    title: "수 사우나 리셉션",
  },
  {
    src: "/하노이 수 사우나 로비.webp",
    title: "수 사우나 로비",
  },
  {
    src: "/하노이 수 사우나 룸1.webp",
    title: "수 사우나 룸 1",
  },
  {
    src: "/하노이 수 사우나 룸2.webp",
    title: "수 사우나 룸 2",
  },
  {
    src: "/하노이 수 사우나 포스터.webp",
    title: "수 사우나 포스터",
  },
];

const faqItems = [
  {
    q: "수 사우나는 어디에 있나요?",
    a: "하노이 미딩 딘톤 지역에 위치해 있습니다. 주소는 32 Ng. 154 Đ. Đình Thôn이며, 백제갈비 뒤편에서 찾을 수 있습니다. 지도 앱에서는 Lolly Spa로 검색하면 위치를 확인할 수 있습니다.",
  },
  {
    q: "수 사우나는 예약제로 운영되나요?",
    a: "100% 예약제로 운영되는 곳으로 안내되어 있습니다. 방문 전에 원하는 날짜와 시간을 미리 문의하고 이용 가능 여부를 확인하는 것을 권장합니다.",
  },
  {
    q: "영업시간은 어떻게 되나요?",
    a: "기본 안내 기준으로 매일 12:00부터 익일 01:00까지 운영됩니다. 당일 운영 상황이나 예약 가능 여부는 방문 전에 다시 확인해 주세요.",
  },
  {
    q: "수 사우나 가격은 어떻게 되나요?",
    a: "제공받은 가격표 기준으로 A코스 30분 190만 동, B코스 60분 250만 동, C코스 90분 450만 동, D코스 90분 450만 동입니다. 실제 결제 전 최신 금액을 확인해 주세요.",
  },
  {
    q: "지도에서는 어떤 이름으로 검색하면 되나요?",
    a: "지도 앱에서는 Lolly Spa라는 이름으로 검색하면 위치를 찾을 수 있습니다. 처음 방문한다면 예약 담당자에게 위치를 한 번 더 확인하는 것이 좋습니다.",
  },
];

export default function SuSaunaPage() {
  const params = useParams();
  const city =
    typeof params?.city === "string" ? params.city : "hanoi";

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
              HANOI · MY DINH · SAUNA
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              하노이 수 사우나
            </h1>

            <div className="mt-3 text-lg font-medium tracking-[0.25em] text-zinc-500">
              SU SAUNA · LOLLY SPA
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400 md:text-base">
              하노이 미딩 딘톤 지역에서 오랫동안 운영되어 온
              수 사우나를 정리했습니다. 위치와 운영시간, 시설,
              코스 및 가격 정보를 한눈에 확인할 수 있도록
              구성했습니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                미딩 · 딘톤
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                12:00 ~ 01:00
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                사우나 · 스파
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                100% 예약제
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
                SU SAUNA
              </div>

              <div className="mt-2 text-xl font-black">
                하노이 수 사우나
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
            수 사우나의 외관과 리셉션, 로비 및 내부 공간을
            확인해 보세요. 사진을 클릭하면 전체 화면으로
            확대해서 볼 수 있습니다.
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
              수 사우나 가격표
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              제공받은 가격 정보를 기준으로 정리했습니다.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[#8c6a3d]/40 bg-gradient-to-b from-[#17130e] to-[#0c0c0c] shadow-2xl">

            {/* PRICE HEADER */}
            <div className="border-b border-[#8c6a3d]/30 px-6 py-8 text-center md:px-10">
              <div className="text-2xl font-black tracking-[0.25em] text-[#e5c28d]">
                SU SAUNA
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
                    <p>30분 기본 코스</p>
                    <p>짧은 시간에 이용하기 좋은 구성</p>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">
                  <div className="text-2xl font-black text-[#e7c793]">
                    190만동
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
                    <p>60분 기본 코스</p>
                    <p>가장 무난하게 선택하기 좋은 구성</p>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">
                  <div className="text-2xl font-black text-[#e7c793]">
                    250만동
                  </div>
                </div>

              </div>
            </div>

            {/* C COURSE */}
            <div className="border-b border-white/10 px-6 py-9 md:px-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black text-[#e7c793]">
                      C코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (90분 · 1:1)
                    </span>
                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">
                    <p>90분 1:1 구성</p>
                    <p>시간을 여유 있게 이용하는 코스</p>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">
                  <div className="text-2xl font-black text-[#e7c793]">
                    450만동
                  </div>
                </div>

              </div>
            </div>

            {/* D COURSE */}
            <div className="px-6 py-9 md:px-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black text-[#e7c793]">
                      D코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (90분 · 2:1)
                    </span>
                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">
                    <p>90분 2:1 릴레이 구성</p>
                    <p>제공된 가격표 기준으로 안내</p>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">
                  <div className="text-2xl font-black text-[#e7c793]">
                    450만동
                  </div>
                </div>

              </div>
            </div>

            <div className="border-t border-[#8c6a3d]/30 px-6 py-7 text-center">
              <div className="text-sm font-bold text-[#c9aa7b]">
                실제 이용 전 최신 가격과 조건을 확인해 주세요
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
              하노이 미딩 · 딘톤
            </div>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              32 Ng. 154 Đ. Đình Thôn, Đình Thôn,
              Từ Liêm, Hà Nội. 백제갈비 뒤편에 위치하며
              지도에서는 Lolly Spa로 검색할 수 있습니다.
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
              매일 운영 기준으로 안내되어 있습니다.
              방문 전 당일 운영 및 예약 가능 여부를
              확인하는 것을 권장합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
            <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
              CATEGORY
            </div>

            <div className="mt-4 text-lg font-black">
              사우나 · 스파
            </div>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              미딩 딘톤 권역에서 오래 운영되어 온
              사우나·스파 업소로 소개되고 있습니다.
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
              하노이 수 사우나 소개
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-zinc-400 md:text-base">

              <p>
                하노이 미딩 딘톤 지역에서 오래 운영되어 온
                수 사우나는 현지에서 Lolly Spa라는 이름으로
                지도 검색이 가능한 곳입니다. 딘톤 거리
                안쪽에서 접근할 수 있으며 백제갈비 뒤편에
                위치한 것으로 안내되어 있습니다.
              </p>

              <p>
                오랜 기간 같은 지역에서 운영되어 왔다는 점과
                한국인 이용객이 꾸준히 찾는다는 점이 특징입니다.
                처음 방문하는 경우에도 예약 과정에서 위치와
                이용 방법을 미리 확인하면 보다 편하게 방문할
                수 있습니다.
              </p>

              <p>
                이용 시간과 구성에 따라 A부터 D까지 코스가
                나뉘어 있어 원하는 시간에 맞춰 선택할 수
                있습니다. 30분부터 90분까지 구성되어 있어
                짧게 이용하거나 여유 있게 방문하는 방식으로
                선택할 수 있습니다.
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
            "사우나 시설",
            "리셉션 공간",
            "휴게 공간",
            "개별 이용 공간",
            "샤워 시설",
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
                    실제 운영 및 이용 가능 여부는 방문 전 확인해 주세요.
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
                주소는 32 Ng. 154 Đ. Đình Thôn,
                Đình Thôn, Từ Liêm, Hà Nội입니다.
                미딩 딘톤 거리 안쪽에 있으며 백제갈비
                뒤편에서 찾을 수 있습니다.
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-400">
                지도 앱에서는 Lolly Spa로 검색할 수 있습니다.
                초행이라면 출발 전에 지도 위치를 확인하고
                예약 담당자에게 정확한 위치를 다시 확인하는
                것이 좋습니다.
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
                    택시 · 그랩 이동
                  </div>

                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    기사에게 지도상의 위치를 보여주거나
                    예약 담당자에게 정확한 위치를 전달받은
                    후 이동하는 것을 권장합니다.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
                  <div className="font-bold">
                    예약 후 방문
                  </div>

                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    100% 예약제로 안내되어 있으므로 방문 전
                    날짜와 시간을 미리 확인하는 것이 좋습니다.
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
              "Lolly Spa 지도 위치 확인",
              "당일 운영 상황 확인",
              "최신 가격 변동 여부 확인",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-5 py-4"
              >
                <span className="text-red-500">
                  ✓
                </span>

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
                  <span>
                    {item.q}
                  </span>

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
            SU SAUNA
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            하노이 수 사우나를 확인해 보세요
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            방문 전 코스와 가격, 운영시간 및 위치를
            확인하고 예약 가능 여부를 문의해 주세요.
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
