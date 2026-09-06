"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const galleryImages = [
  { src: "/하노이 박카스 가라오케 메인.webp", title: "박카스 가라오케 메인" },
  { src: "/하노이 박카스 가라오케 분위기.webp", title: "박카스 가라오케 분위기" },
  { src: "/하노이 박카스 가라오케 외관.webp", title: "박카스 가라오케 외관" },
  { src: "/하노이 박카스 가라오케 룸1.webp", title: "박카스 가라오케 룸 1" },
  { src: "/하노이 박카스 가라오케 룸2.webp", title: "박카스 가라오케 룸 2" },
  { src: "/하노이 박카스 가라오케 룸3.webp", title: "박카스 가라오케 룸 3" },
  { src: "/하노이 박카스 가라오케 룸4.webp", title: "박카스 가라오케 룸 4" },
  { src: "/하노이 박카스 가라오케 안주.webp", title: "박카스 가라오케 안주" },
];

const faqItems = [
  { q: "하노이 박카스 가라오케는 어디에 있나요?", a: "34 Ngõ 2 P. Trần Văn Lai, Đình Thôn, Từ Liêm, Hà Nội, 미딩 한국인 밀집 구역에 위치해 있습니다. 그랩으로 이동하기 편하고 초행이라면 기사에게 Karaoke Bacchus, Trần Văn Lai, Đình Thôn을 보여주면 찾기 쉽습니다." },
  { q: "박카스 가라오케 영업시간은 어떻게 되나요?", a: "오후 2시부터 손님이 모두 빠질 때까지 길게 운영되는 것으로 안내되어 있습니다. 이른 저녁 모임부터 늦은 새벽 자리까지 일정에 맞추기 좋지만, 방문 전 당일 영업 여부와 마감 시간을 확인하는 것을 권장합니다." },
  { q: "박카스 가라오케의 특징은 무엇인가요?", a: "넓은 룸과 활기찬 분위기, 많은 출근 인원과 빠른 회전율이 특징입니다. 한국인 관리자가 상주해 주문과 기본적인 이용 안내를 한국어로 편하게 받을 수 있습니다." },
  { q: "박카스 가라오케 가격은 어떻게 구성되나요?", a: "주대에 기본 세트가 포함되는 방식이며, 1인은 200만 동, 2인 이상은 인당 150만 동으로 안내되어 있습니다. 추가 이용 조건과 비용은 인원과 구성에 따라 달라질 수 있으므로 방문 전 총액을 확인하는 것이 좋습니다." },
  { q: "방문 전에 확인해야 할 사항이 있나요?", a: "가격은 시즌·환율·인원 및 당일 운영 상황에 따라 달라질 수 있습니다. 방문 전 영업 여부, 최신 이용요금, 이용시간과 추가 비용을 확인하는 것을 권장합니다." },
];

export default function BacchusKaraokePage() {
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
              하노이 박카스 가라오케
            </h1>

            <div className="mt-3 text-lg font-medium tracking-[0.2em] text-zinc-500">
              BACCHUS KARAOKE
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-8 text-zinc-400 md:text-base">
              미딩 미딩 · 딘톤에서 박카스 외관이 눈에 들어오는 곳으로,
              넓은 룸과 활기찬 분위기가 특징인
              하노이 박카스 가라오케를 정리했습니다.
              위치와 시설, 분위기 및 이용 정보를 한눈에 확인할 수 있도록
              구성했습니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs text-red-300">
                미딩 · 딘톤
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                14:00 ~ 손님 퇴장까지
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                넓은 룸
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                미딩 · 딘톤
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
                BACCHUS KARAOKE
              </div>

              <div className="mt-2 text-xl font-black">
                하노이 박카스 가라오케
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
            박카스 가라오케 시설 사진
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500">
            박카스 가라오케의 외관과 내부 룸, 분위기 및
            기본 안주 구성을 확인해 보세요.
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
                하노이 미딩 · 딘톤
              </div>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                34 Ngõ 2 P. Trần Văn Lai, Đình Thôn,
                Từ Liêm, Hà Nội.
                미딩 한국인 밀집 구역에 위치해 있습니다.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">

              <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
                OPENING HOURS
              </div>

              <div className="mt-4 text-lg font-black">
                14:00 ~ 손님 퇴장까지
              </div>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                오후 2시부터 손님이 모두 빠질 때까지 운영되는 것으로
                안내되어 있으며, 마감 시간은 현지 운영 상황에 따라 달라질 수 있습니다.
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
                미딩 딘톤 권역에서 깔끔한 룸과 편리한 접근성을
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
              하노이 박카스 가라오케 소개
            </h2>

            <div className="mt-7 space-y-6 text-sm leading-8 text-zinc-400 md:text-base">
              <p>박카스는 넓은 룸과 활기찬 분위기로 제대로 놀기 좋은 하노이 대표 가라오케입니다. 초행 형님도 편하게 즐길 수 있어 강력추천합니다!</p>

              <p>하노이 미딩에서 어디로 갈지 고민이라면 박카스 가라오케부터 후보에 올려 볼 만합니다. 여긴 한국인 밀집 구역인 미딩에서 평판 상위로 꼽히는 한인 KTV로, 한국인 관리자가 상주하며 응대를 챙기고 출근 인원이 많아 자리 선택의 폭이 넓습니다. 회전율도 빠른 편이라 대기 부담이 적어, 미딩 첫 코스로 무난하게 잡기 좋은 곳입니다.</p>

              <p>박카스를 눈여겨보는 이유는 가격 구조가 또렷하다는 점입니다. 주대에 기본 세트가 묶이는 방식이라 구성을 정하면 총액 예상이 비교적 뚜렷하게 잡힙니다. 오후 2시부터 손님이 모두 빠질 때까지 길게 영업해 이른 저녁 모임부터 늦은 새벽 자리까지 일정에 맞추기도 좋습니다.</p>

              <p>한국인 관리자가 응대를 챙겨 주문과 기본 이용 안내를 한국어로 편하게 전할 수 있고, 출근 인원이 많은 편이라 일행이 여럿이거나 단체 자리에서도 선택의 폭을 잡기 좋습니다.</p>

              <p>가격은 2025년 11월 인상이 반영된 안내 기준이며, 시즌·환율·인원 및 당일 운영 상황에 따라 달라질 수 있습니다. 방문 전 최신 이용요금과 추가 비용을 확인하고, 합의되지 않은 추가금이나 과한 팁 요구가 없는지 미리 확인하는 것이 좋습니다.</p>

              <p>미딩에서 한국식 응대로 노래·술자리를 편하게 즐기고 싶은 형님, 출근 인원이 많아 선택 폭이 넓은 곳을 원하는 형님께 잘 맞습니다. 이른 저녁부터 늦은 새벽까지 일정에 맞춰 길게 놀고 싶거나 단체·접대 자리를 준비하는 형님께도 무난한 선택입니다.</p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY BACCHUS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

        <div className="text-xs font-black tracking-[0.3em] text-red-500">
          WHY BACCHUS
        </div>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          왜 박카스 가라오케인가
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">

          {[
            { title: "출근 인원이 많은 편", text: "출근 인원이 많아 자리 선택의 폭이 넓고 피크 시간에도 매칭을 잡기 수월한 편입니다." },
            { title: "빠른 회전", text: "회전율이 빠른 편이라 대기 부담을 줄이고 일행 일정에 맞춰 자리를 잡기 좋습니다." },
            { title: "한국인 관리자 상주", text: "한국인 관리자가 응대를 챙겨 주문과 기본 이용 안내를 한국어로 편하게 받을 수 있습니다." },
            { title: "또렷한 가격 구조", text: "주대에 기본 세트가 묶이는 구조라 인원과 구성을 정하면 예상 비용을 잡기 편합니다." },
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

                  <div className="font-bold">
                    {item.title}
                  </div>

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
        박카스 가라오케 가격 안내
      </h2>

      <p className="mt-4 text-sm leading-7 text-white/60">
        주대에 기본 세트 포함 · 추가 이용 조건은 별도 확인
      </p>
    </div>

    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-sm">
        <thead className="bg-white/5">
          <tr className="border-b border-white/10">
            <th className="px-4 py-4 text-left">구분</th>
            <th className="px-4 py-4 text-left">가격</th>
            <th className="px-4 py-4 text-left">내용</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-white/10"><td className="px-4 py-4 font-semibold">1인</td><td className="px-4 py-4 font-bold text-yellow-400">200만 VND</td><td className="px-4 py-4 text-white/70">주대 · 기본 세트 포함</td></tr>
          <tr className="border-b border-white/10"><td className="px-4 py-4 font-semibold">2인 이상</td><td className="px-4 py-4 font-bold text-yellow-400">150만 VND / 1인</td><td className="px-4 py-4 text-white/70">주대 · 기본 세트 포함</td></tr>
          <tr className="border-b border-white/10"><td className="px-4 py-4 font-semibold">추가 이용</td><td className="px-4 py-4 font-bold text-yellow-400">별도 확인</td><td className="px-4 py-4 text-white/70">인원 · 구성 · 이용시간에 따라 달라질 수 있음</td></tr>
          <tr><td className="px-4 py-4 font-semibold">영업시간</td><td className="px-4 py-4 font-bold text-yellow-400">14:00 ~ 막손</td><td className="px-4 py-4 text-white/70">손님이 모두 빠질 때까지</td></tr>
        </tbody>
      </table>
    </div>

    <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-sm leading-7 text-white/70">
      <p>• 가격은 2025년 11월 인상이 반영된 안내 기준입니다.</p>
      <p>• 시즌·환율·인원 및 당일 운영 상황에 따라 달라질 수 있습니다.</p>
      <p>• 방문 전 최신 이용요금과 추가 비용을 한 번 더 확인하는 것을 권장합니다.</p>
      <p className="font-semibold text-yellow-400">• 카드 결제 가능 여부와 환율 기준도 방문 전 확인해 주세요.</p>
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
              박카스 가라오케 위치
            </h2>

            <p className="mt-6 text-sm leading-8 text-zinc-400 md:text-base">
              박카스 가라오케는 미딩 딘톤의
              34 Ngõ 2 P. Trần Văn Lai, Đình Thôn,
              Từ Liêm, Hà Nội에 위치해 있습니다.
            </p>

            <p className="mt-4 text-sm leading-8 text-zinc-400 md:text-base">
              미딩 한국인 밀집 구역 안에 있어 그랩으로 이동하기 편하며,
              초행이라면 기사에게 “Karaoke Bacchus, Trần Văn Lai, Đình Thôn”을
              보여 주면 찾기 쉽습니다.
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

                <div className="font-bold">
                  그랩 이용
                </div>

                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  그랩 목적지에 주소를 입력하고 이동하는 방법이
                  가장 편리합니다. 도착 후 박카스 외관을
                  확인하면 위치를 찾기 쉽습니다.
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-[#111] p-5">

                <div className="font-bold">
                  미딩 미딩 · 딘톤
                </div>

                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  미딩 딘톤 권역에 위치하고 있어
                  주변 한인 식당 및 숙소와 함께 일정을
                  구성하기에도 편리합니다.
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
                "최신 이용요금 확인",
                "이용시간 확인",
                "추가 비용 여부 확인",
                "당일 출근 인원 및 운영 상황 확인",
                "그랩 목적지 및 위치 확인",
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
            BACCHUS KARAOKE
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            하노이 박카스 가라오케
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            미딩에서 넓은 룸과 활기찬 분위기로
            편하게 즐길 곳을 찾는다면 박카스 가라오케를 확인해 보세요.
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
