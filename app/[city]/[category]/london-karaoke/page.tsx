"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const galleryImages = [
  { src: "/하노이 런던 가라오케 메인.webp", title: "런던 가라오케 메인" },
  { src: "/하노이 런던 가라오케 외관.webp", title: "런던 가라오케 외관" },
  { src: "/하노이 런던 가라오케 리셉션.webp", title: "런던 가라오케 리셉션" },
  { src: "/하노이 런던 가라오케 룸1.webp", title: "런던 가라오케 룸 1" },
  { src: "/하노이 런던 가라오케 룸2.webp", title: "런던 가라오케 룸 2" },
  { src: "/하노이 런던 가라오케 룸3.webp", title: "런던 가라오케 룸 3" },
  { src: "/하노이 런던 가라오케 룸4.webp", title: "런던 가라오케 룸 4" },
  { src: "/하노이 런던 가라오케 룸5.webp", title: "런던 가라오케 룸 5" },
  { src: "/하노이 런던 가라오케 룸6.webp", title: "런던 가라오케 룸 6" },
];

const faqItems = [
  {
    q: "하노이 런던 가라오케는 어디에 있나요?",
    a: "온라인에 확인되는 런던 가라오케 정보 중 이 페이지는 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội 지점을 기준으로 정리했습니다. 런던이라는 상호의 다른 지점도 검색될 수 있으므로 예약 전 주소와 지도 핀을 다시 확인하는 것이 좋습니다.",
  },
  {
    q: "런던 가라오케는 어떤 분위기인가요?",
    a: "공개된 안내와 사진을 보면 대형 화면과 LED 조명, 컬러 조명, 넓은 소파형 좌석을 활용한 모던한 룸 구성이 특징입니다. 룸마다 색감과 연출이 달라 인원과 선호 분위기에 맞춰 상담하는 방식이 좋습니다.",
  },
  {
    q: "룸은 몇 명까지 이용할 수 있나요?",
    a: "공개된 예약 정보에는 소규모 룸부터 20명 이상이 이용할 수 있는 VIP룸까지 다양한 크기의 룸이 안내되어 있습니다. 실제 배정 가능한 룸과 수용 인원은 방문 날짜에 따라 달라질 수 있어 예약 시 인원을 먼저 전달하는 것을 권장합니다.",
  },
  {
    q: "런던 가라오케 가격은 어떻게 확인하나요?",
    a: "온라인에 표시된 가격은 지점과 룸, 시간 및 이용 조건에 따라 차이가 있어 이 페이지에서는 고정 가격을 안내하지 않습니다. 정확한 최신 가격과 포함 항목은 현지 가라오케에 직접 문의해 확인하는 것이 좋습니다.",
  },
  {
    q: "영업시간은 어떻게 되나요?",
    a: "온라인 정보마다 10:00~24:00, 10:00~01:00, 10:00~02:30 등 안내가 서로 다릅니다. 따라서 방문 당일 영업시간과 마감시간은 현지 가라오케에 다시 확인하는 것을 권장합니다.",
  },
];

export default function LondonKaraokePage() {
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
              HANOI · MY DINH · KARAOKE
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              하노이 런던 가라오케
            </h1>

            <div className="mt-3 text-lg font-medium tracking-[0.2em] text-zinc-500">
              LONDON KARAOKE
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-8 text-zinc-400 md:text-base">
              하노이 Cầu Giấy의 Thành Thái 거리에 위치한 런던 가라오케를 정리했습니다.
              대형 LED 화면과 화려한 조명, 넓은 소파형 좌석을 갖춘 모던한 룸 구성이 특징이며,
              소규모부터 단체까지 인원에 맞는 룸을 상담할 수 있습니다.
              위치와 시설, 분위기 및 이용 정보를 한눈에 확인할 수 있도록 구성했습니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs text-red-300">
                Cầu Giấy · Dịch Vọng
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                Thành Thái
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                대형 LED 룸
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                단체 룸 상담
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

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6">

              <div className="text-xs font-bold tracking-[0.25em] text-red-400">
                LONDON KARAOKE
              </div>

              <div className="mt-2 text-xl font-black">
                하노이 런던 가라오케
              </div>

              <div className="mt-1 text-xs text-zinc-300">
                사진을 클릭하면 크게 볼 수 있습니다
              </div>

            </div>
          </button>

        </div>
      </section>


      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

        <div className="mb-8">

          <div className="text-xs font-black tracking-[0.3em] text-red-500">
            GALLERY
          </div>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            런던 가라오케 시설 사진
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500">
            런던 가라오케의 간판과 외관, 로비, 리셉션 및
            내부 룸 분위기를 확인해 보세요.
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

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-4 pt-10 text-left">

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
          BASIC INFORMATION
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#090909]">

        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">

              <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
                LOCATION
              </div>

              <div className="mt-4 text-lg font-black">
                하노이 Cầu Giấy · Dịch Vọng
              </div>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                5 Ng. 1 Đ. Đình Thôn, Đình Thôn,
                Từ Liêm, Hà Nội.
                Thành Thái의 28 Thành Thái 건물이 특징입니다.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">

              <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
                OPENING HOURS
              </div>

              <div className="mt-4 text-lg font-black">
                영업시간 확인 필요
              </div>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                저녁 6시부터 영업하는 것으로 안내되어 있으며,
                마감 시간은 현지 운영 상황에 따라 달라질 수 있습니다.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">

              <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
                CATEGORY
              </div>

              <div className="mt-4 text-lg font-black">
                가라오케 · KTV
              </div>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                Cầu Giấy 권역에서 깔끔한 룸과 편리한 접근성을
                원하는 한국인 여행객이 확인하기 좋은 가라오케입니다.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="border-b border-white/10 bg-[#080808]">

        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

          <div className="max-w-4xl">

            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              ABOUT
            </div>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              하노이 런던 가라오케 소개
            </h2>

            <div className="mt-7 space-y-6 text-sm leading-8 text-zinc-400 md:text-base">
              <p>
                하노이 런던 가라오케는 Cầu Giấy의 Thành Thái 거리에 위치한
                대형 룸 중심의 로컬 가라오케입니다. 공개된 사진을 보면
                건물 외관부터 내부 룸까지 규모감이 있고, 각 룸마다
                LED 화면과 컬러 조명을 적극적으로 활용한 모습이 확인됩니다.
              </p>

              <p>
                런던의 가장 눈에 띄는 부분은 룸 분위기입니다. 블루·퍼플·오렌지·그린 등
                룸마다 조명과 인테리어 콘셉트가 다르게 구성되어 있고,
                벽면과 천장을 채우는 대형 화면이 있어 일반적인 노래방보다
                파티형 분위기를 내기 좋습니다.
              </p>

              <p>
                공개된 예약 정보에는 4~6명 정도의 소규모 룸부터 15~20명,
                20명 이상을 수용할 수 있는 VIP룸까지 다양한 크기의 룸이 안내되어 있습니다.
                단체 모임이나 회식, 생일 등 인원이 많은 자리라면 예약할 때
                인원수를 먼저 전달하고 적합한 룸을 확인하는 편이 좋습니다.
              </p>

              <p>
                음향과 화면 역시 런던이 강조하는 요소입니다. 온라인 소개에서는
                대형 화면, LED 조명, 고출력 음향과 무선 마이크, 다양한 장르의
                음악을 갖춘 공간으로 안내하고 있습니다. 음식과 음료를 룸 안에서
                주문할 수 있는 형태의 서비스도 함께 안내됩니다.
              </p>

              <p>
                다만 런던이라는 이름을 사용하는 가라오케가 하노이 여러 지역에서
                검색되기 때문에 주소 확인은 꼭 필요합니다. 이 페이지는
                28 Thành Thái, Dịch Vọng, Cầu Giấy 지점을 기준으로 작성했으며,
                예약 전 현지 담당자에게 정확한 지점과 지도 핀을 확인하는 것을 권장합니다.
              </p>

              <p>
                가격과 영업시간도 온라인 정보마다 차이가 있습니다.
                따라서 이 페이지에서는 고정 가격을 임의로 기재하지 않고,
                실제 방문 날짜와 인원, 룸에 맞는 최신 가격을 현지 가라오케에
                직접 문의해 확인하는 방식으로 안내합니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY LONDON
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

        <div className="text-xs font-black tracking-[0.3em] text-red-500">
          WHY LONDON
        </div>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          왜 런던 가라오케인가
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "대형 LED 중심의 룸",
              text: "천장과 벽면의 대형 화면, LED 조명과 컬러 조명으로 파티형 분위기를 연출하기 좋습니다.",
            },
            {
              title: "다양한 룸 크기",
              text: "소규모 룸부터 20명 이상을 수용할 수 있는 VIP룸까지 인원에 맞춰 상담할 수 있습니다.",
            },
            {
              title: "모던한 인테리어",
              text: "블루·퍼플·오렌지·그린 등 룸마다 다른 색감과 조명 콘셉트가 적용된 것이 특징입니다.",
            },
            {
              title: "음식·음료 주문 가능",
              text: "공개된 안내에서는 룸 안에서 음식과 음료를 주문할 수 있는 서비스가 함께 소개되어 있습니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#101010] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-sm font-black text-red-500">
                  ✓
                </div>
                <div>
                  <div className="font-bold">{item.title}</div>
                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

            <h2 className="mt-3 text-2xl font-bold">
              런던 가라오케 가격 안내
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/60">
              정확한 가격은 현지 가라오케 문의를 통해 확인해 주세요.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#101010] p-6 sm:p-8">
            <div className="text-lg font-black">
              최신 가격은 현지 가라오케 문의
            </div>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
              런던 가라오케는 온라인에 확인되는 지점과 룸별 안내가 서로 다를 수 있어
              이 페이지에서는 특정 금액을 고정해 안내하지 않습니다.
              방문 날짜, 인원, 룸 크기와 이용시간을 알려주고 현지 가라오케에
              최신 가격과 포함 항목을 직접 확인해 주세요.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "룸 이용요금",
                "이용시간",
                "음료·주류 및 음식",
                "추가 서비스 및 비용",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-zinc-300"
                >
                  <span className="mr-2 text-red-500">✓</span>
                  {item}는 현지 문의
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-5 text-sm leading-7 text-white/70">
            <p className="font-semibold text-red-400">
              • 온라인 가격은 지점·룸·시간에 따라 달라질 수 있으므로 고정 금액을 임의로 안내하지 않습니다.
            </p>
            <p className="mt-1">
              • 방문 전 룸 요금, 포함 음료·음식, 추가 비용과 결제 방법을 함께 확인해 주세요.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>

            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              LOCATION
            </div>

            <h2 className="mt-3 text-3xl font-black">
              런던 가라오케 위치
            </h2>

            <p className="mt-6 text-sm leading-8 text-zinc-400 md:text-base">
              런던 가라오케는 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội로
              안내되는 지점을 기준으로 정리했습니다.
            </p>

            <p className="mt-4 text-sm leading-8 text-zinc-400 md:text-base">
              Thành Thái 일대는 Cầu Giấy 권역의 상업·업무 지역으로,
              차량으로 이동하기 편한 편입니다. 다만 같은 이름의 런던 가라오케가
              다른 주소로 검색될 수 있으므로 출발 전에 정확한 지도 핀을 받는 것이 좋습니다.
            </p>
          </div>


          <div>
            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              TRANSPORT
            </div>

            <h2 className="mt-3 text-3xl font-black">
              찾아가는 방법
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
                <div className="font-bold">그랩 이용</div>
                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  목적지에 “28 Thành Thái, Cầu Giấy”를 입력하고 이동하는 방법이 편합니다.
                  도착 직전 현지 담당자에게 입구 위치를 다시 확인하면 지점 착오를 줄일 수 있습니다.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
                <div className="font-bold">예약 전 주소 확인</div>
                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  런던이라는 상호가 다른 지역에서도 검색될 수 있으므로 예약할 때
                  28 Thành Thái 지점이 맞는지 확인하고 지도 핀을 받아 두는 것을 권장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          CHECK
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#090909]">

        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

          <div className="rounded-3xl border border-white/10 bg-[#101010] p-7 md:p-10">

            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              CHECK
            </div>

            <h2 className="mt-3 text-3xl font-black">
              방문 전 확인사항
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              {[
                "방문 전 영업 여부 확인",
                "최신 가격 및 룸 요금 확인",
                "정확한 지점 주소 확인",
                "이용시간 및 마감시간 확인",
                "룸 수용 인원 확인",
                "음료·음식 포함 항목 확인",
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
            LONDON KARAOKE
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            하노이 런던 가라오케
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            Cầu Giấy에서 깔끔한 룸과 찾기 쉬운 위치를
            원한다면 런던 가라오케를 확인해 보세요.
            방문 전 영업 여부와 최신 이용 조건을 확인하는 것을 권장합니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <a
              href="#"
              className="rounded-xl bg-red-600 px-8 py-4 text-sm font-black transition hover:bg-red-500"
            >
              문의하기
            </a>

            <Link
              href="/hanoi/karaoke"
              className="rounded-xl border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-black transition hover:bg-white/[0.08]"
            >
              하노이 가라오케 더보기
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
