"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const galleryImages = [
  {
    src: "/하노이 소라 마사지 메인.webp",
    title: "소라 마사지 메인",
  },
  {
    src: "/하노이 소라 마사지 입구.webp",
    title: "소라 마사지 매장 입구",
  },
  {
    src: "/하노이 소라 마사지 룸1.webp",
    title: "소라 마사지 프라이빗 룸",
  },
  {
    src: "/하노이 소라 마사지 룸2.webp",
    title: "소라 마사지 케어룸",
  },
  {
    src: "/하노이 소라 마사지 샤워.webp",
    title: "소라 마사지 전용 샤워시설",
  },
  {
    src: "/하노이 소라 마사지 룸3.webp",
    title: "소라 마사지 룸 내부",
  },
  {
    src: "/하노이 소라 마사지 로비.webp",
    title: "소라 마사지 로비",
  },
  {
    src: "/하노이 소라 마사지 시설.webp",
    title: "소라 마사지 시설",
  },
];

const faqItems = [
  {
    q: "소라 마사지는 어디에 있나요?",
    a: "소라 마사지는 하노이 미딩 딩톤시장 인근에 위치해 있습니다. 주소는 48 Ngh. 1/8 Đ. Đình Thôn, Đình Thôn, Từ Liêm, Hà Nội이며, 처음 방문한다면 예약 전에 정확한 위치를 확인하는 것을 권장합니다.",
  },
  {
    q: "소라 마사지 영업시간은 어떻게 되나요?",
    a: "현재 안내 기준으로 매일 11:00부터 익일 02:00까지 운영합니다. 현지 상황이나 매장 사정에 따라 운영시간이 변경될 수 있으므로 방문 전 최신 운영시간을 확인해 주세요.",
  },
  {
    q: "소라 마사지 코스는 어떻게 구성되어 있나요?",
    a: "A부터 F까지 시간과 구성에 따라 나뉘어 있습니다. A는 40분, B·C·F는 60분, D는 90분, E는 100분으로 안내되고 있으며 코스별 구성과 이용 가능 여부는 방문 전 확인하는 것이 좋습니다.",
  },
  {
    q: "소라 마사지 가격은 얼마인가요?",
    a: "현재 안내 기준으로 A 170만동, B 170만동, C 220만동, D 320만동, E 400만동, F 400만동입니다. 가격은 현지 사정이나 프로모션에 따라 변경될 수 있으므로 방문 전 최신 가격을 확인해 주세요.",
  },
  {
    q: "예약 없이 방문해도 되나요?",
    a: "예약 우선으로 운영되는 곳이므로 원하는 시간에 이용하려면 사전 문의를 권장합니다. 특히 저녁이나 주말에는 방문객이 몰릴 수 있어 미리 시간을 잡아두는 편이 좋습니다.",
  },
  {
    q: "소라 마사지의 가장 큰 특징은 무엇인가요?",
    a: "프라이빗 룸이 약 10개로 구성되어 있어 대기 부담이 적고, 룸마다 전용 샤워와 화장실이 마련되어 있다는 점이 주요 특징입니다. 한국인 매니저가 상주해 한국어로 코스와 요청사항을 확인하기에도 편리합니다.",
  },
];

export default function SoraMassagePage() {
  const params = useParams();

  const city =
    typeof params?.city === "string" ? params.city : "hanoi";

  const [selectedImage, setSelectedImage] =
    useState<number | null>(null);

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
              소라 마사지
            </h1>

            <div className="mt-3 text-lg font-medium tracking-[0.25em] text-zinc-500">
              SORA MASSAGE
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400 md:text-base">
              하노이 미딩 딩톤시장 인근에 위치한
              소라 마사지 안내입니다.
              프라이빗 룸과 전용 샤워시설,
              운영시간과 마사지 코스 및 가격 정보를
              한눈에 확인할 수 있도록 정리했습니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                미딩 딩톤시장 인근
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                11:00 ~ 02:00
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                마사지 · 스파
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                한국인 매니저
              </span>

            </div>
          </div>


          {/* MAIN IMAGE */}
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
                SORA MASSAGE
              </div>

              <div className="mt-2 text-xl font-black">
                하노이 소라 마사지
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
            소라 마사지의 매장 입구와 프라이빗 룸,
            샤워시설 및 내부 공간을 확인해 보세요.
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
              소라 마사지 가격표
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              2026년 7월 기준 정리 자료이며,
              실제 이용 전 최신 가격을 확인해 주세요.
            </p>

          </div>


          <div className="mt-10 overflow-hidden rounded-3xl border border-[#8c6a3d]/40 bg-gradient-to-b from-[#17130e] to-[#0c0c0c] shadow-2xl">

            {/* PRICE HEADER */}
            <div className="border-b border-[#8c6a3d]/30 px-6 py-8 text-center md:px-10">

              <div className="text-2xl font-black tracking-[0.25em] text-[#e5c28d]">
                SORA MASSAGE
              </div>

              <div className="mt-2 text-xs tracking-[0.4em] text-[#9d896c]">
                PRICE MENU
              </div>

              <div className="mx-auto mt-5 h-px max-w-xs bg-[#8c6a3d]/50" />

            </div>


            {/* A */}
            <div className="border-b border-white/10 px-6 py-9 md:px-10">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-baseline gap-3">

                    <span className="text-2xl font-black text-[#e7c793]">
                      A코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (40분)
                    </span>

                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">

                    <p>
                      40분 기본 마사지 코스
                    </p>

                    <p>
                      짧은 시간에 이용하기 좋은 구성
                    </p>

                  </div>

                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">

                  <div className="text-2xl font-black text-[#e7c793]">
                    170만동
                  </div>

                </div>

              </div>

            </div>


            {/* B */}
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

                    <p>
                      60분 표준 마사지 코스
                    </p>

                    <p>
                      가장 기본적으로 선택하기 좋은 구성
                    </p>

                  </div>

                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">

                  <div className="text-2xl font-black text-[#e7c793]">
                    170만동
                  </div>

                </div>

              </div>

            </div>


            {/* C */}
            <div className="border-b border-white/10 px-6 py-9 md:px-10">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-baseline gap-3">

                    <span className="text-2xl font-black text-[#e7c793]">
                      C코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (60분)
                    </span>

                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">

                    <p>
                      60분 업그레이드 구성
                    </p>

                    <p>
                      기본 코스보다 다양한 구성을 원하는 경우 선택
                    </p>

                  </div>

                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">

                  <div className="text-2xl font-black text-[#e7c793]">
                    220만동
                  </div>

                </div>

              </div>

            </div>


            {/* D */}
            <div className="border-b border-white/10 px-6 py-9 md:px-10">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-baseline gap-3">

                    <span className="text-2xl font-black text-[#e7c793]">
                      D코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (90분)
                    </span>

                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">

                    <p>
                      90분 장시간 마사지 구성
                    </p>

                    <p>
                      충분한 시간을 두고 케어받고 싶은 경우 적합
                    </p>

                  </div>

                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">

                  <div className="text-2xl font-black text-[#e7c793]">
                    320만동
                  </div>

                </div>

              </div>

            </div>


            {/* E */}
            <div className="border-b border-white/10 px-6 py-9 md:px-10">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-baseline gap-3">

                    <span className="text-2xl font-black text-[#e7c793]">
                      E코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (100분)
                    </span>

                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">

                    <p>
                      100분 장시간 풀 케어 구성
                    </p>

                    <p>
                      여유 있게 이용하고 싶은 경우 선택
                    </p>

                  </div>

                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">

                  <div className="text-2xl font-black text-[#e7c793]">
                    400만동
                  </div>

                </div>

              </div>

            </div>


            {/* F */}
            <div className="px-6 py-9 md:px-10">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex items-baseline gap-3">

                    <span className="text-2xl font-black text-[#e7c793]">
                      F코스
                    </span>

                    <span className="text-sm text-zinc-400">
                      (60분)
                    </span>

                  </div>

                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300 md:text-base">

                    <p>
                      60분 프리미엄 구성
                    </p>

                    <p>
                      짧은 시간에도 한 단계 높은 구성을 원하는 경우 선택
                    </p>

                  </div>

                </div>

                <div className="shrink-0 rounded-2xl border border-[#9b7545] px-7 py-4 text-center">

                  <div className="text-2xl font-black text-[#e7c793]">
                    400만동
                  </div>

                </div>

              </div>

            </div>


            <div className="border-t border-[#8c6a3d]/30 px-6 py-7 text-center">

              <div className="text-sm font-bold text-[#c9aa7b]">
                위 금액은 2026년 7월 기준 정리 자료이며,
                실제 가격과 코스는 방문 전 확인해 주세요.
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
              미딩 딩톤시장 인근에 위치한
              마사지·스파 업소입니다.
              주소는 48 Ngh. 1/8 Đ. Đình Thôn입니다.
            </p>

          </div>


          <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">

            <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
              OPENING HOURS
            </div>

            <div className="mt-4 text-lg font-black">
              11:00 ~ 02:00
            </div>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              매일 운영하는 것으로 안내되어 있으며,
              현지 상황에 따라 운영시간이 변경될 수 있으므로
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
              미딩 지역에서 이용할 수 있는
              프라이빗 룸 중심의 마사지·스파 업소입니다.
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
              소라 마사지 소개
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-zinc-400 md:text-base">

              <p>
                소라 마사지는 하노이 미딩 딩톤시장 인근에
                위치한 마사지·스파 업소입니다.
                한인 식당과 상점이 몰려 있는 미딩 권역에 있어
                주변 호텔과 레지던스에서 이동하기 편리한 것이 특징입니다.
              </p>

              <p>
                소라 마사지의 가장 큰 특징은
                프라이빗 룸을 약 10개 운영한다는 점입니다.
                손님이 몰리는 시간에도 대기 부담을 줄일 수 있으며,
                각 공간이 독립적으로 구성되어 있어
                조용하게 이용하기 좋은 환경을 갖추고 있습니다.
              </p>

              <p>
                특히 각 룸에 전용 샤워와 화장실이 마련되어 있어
                마사지 전후 정리를 한 공간에서 해결할 수 있습니다.
                공용 시설을 오가는 번거로움이 적어
                프라이버시를 중요하게 생각하는 방문객에게 편리합니다.
              </p>

              <p>
                한국인 매니저가 상주해
                코스와 가격을 한국어로 확인하기 편하며,
                마사지 강도나 원하는 관리 방향도
                비교적 편하게 전달할 수 있습니다.
              </p>

              <p>
                A부터 F까지 시간과 구성에 따라
                다양한 코스를 선택할 수 있어
                짧게 이용하는 방문객부터
                장시간 케어를 원하는 방문객까지
                자신의 일정에 맞춰 선택할 수 있습니다.
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
            "프라이빗 룸 약 10개",
            "룸별 전용 샤워시설",
            "룸별 전용 화장실",
            "마사지 케어 공간",
            "편안한 대기 및 로비 공간",
            "한국인 매니저 상주",
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
                소라 마사지는 하노이 미딩 딩톤시장 인근에
                위치하고 있습니다.
                주소는 48 Ngh. 1/8 Đ. Đình Thôn,
                Đình Thôn, Từ Liêm, Hà Nội입니다.
                딩톤 골목 안쪽에 위치하므로
                처음 방문한다면 예약 담당자에게
                정확한 위치를 미리 확인하는 것이 좋습니다.
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
                    택시 · Grab 이동
                  </div>

                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    48 Ngh. 1/8 Đ. Đình Thôn 주소를 기준으로
                    이동하면 됩니다.
                    골목 위치가 처음이라면 기사에게
                    정확한 위치를 보여주는 것을 권장합니다.
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-[#111] p-5">

                  <div className="font-bold">
                    딩톤시장 인근
                  </div>

                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    미딩 딩톤시장과 한인 상권이 가까워
                    주변 식당이나 숙박시설과 함께 이용하기 편리합니다.
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-[#111] p-5">

                  <div className="font-bold">
                    예약 후 방문
                  </div>

                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    방문 전 이용 가능한 코스와 운영시간,
                    정확한 위치를 확인하면
                    처음 방문할 때 더욱 편리합니다.
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
              "정확한 골목 위치 확인",
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
            SORA MASSAGE
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            소라 마사지 이용을 원하시나요?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            예약 전 코스와 가격, 운영시간 및 위치를 확인하고
            방문 전에 최신 정보를 문의해 주세요.
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
