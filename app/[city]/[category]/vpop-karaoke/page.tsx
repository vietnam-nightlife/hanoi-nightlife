"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const galleryImages = [
  { src: "/하노이 vpop 가라오케 메인.webp", title: "브이팝 가라오케 메인" },
  { src: "/하노이 vpop 가라오케 로비.webp", title: "브이팝 가라오케 로비" },
  { src: "/하노이 vpop 가라오케 룸1.webp", title: "브이팝 가라오케 룸 1" },
  { src: "/하노이 vpop 가라오케 룸2.webp", title: "브이팝 가라오케 룸 2" },
  { src: "/하노이 vpop 가라오케 룸3.webp", title: "브이팝 가라오케 룸 3" },
  { src: "/하노이 vpop 가라오케 룸4.webp", title: "브이팝 가라오케 룸 4" },
  { src: "/하노이 vpop 가라오케 룸5.webp", title: "브이팝 가라오케 룸 5" },
  { src: "/하노이 vpop 가라오케 룸6.webp", title: "브이팝 가라오케 룸 6" },
];

const faqItems = [
  {
    q: "하노이 브이팝 가라오케는 어디에 있나요?",
    a: "50 P. Trung Hòa, Yên Hòa, Hà Nội에 위치해 있습니다. 미딩과는 별개 권역인 중화(Trung Hòa) 지역에 있어 그랩으로 주소를 찍고 이동하는 것이 편합니다.",
  },
  {
    q: "브이팝 가라오케는 어떤 방식으로 계산하나요?",
    a: "일반적인 한인 KTV의 주대 패키지 방식이 아니라, 룸 이용료와 주류·음료·안주 등을 항목별로 계산하는 로컬 소비제 방식으로 안내됩니다. 주문한 항목을 기준으로 정산하는 구조라 가볍게 이용하기 좋습니다.",
  },
  {
    q: "브이팝 가라오케 룸은 몇 개 있나요?",
    a: "5층 규모의 통건물형 로컬 KTV로 총 20개 룸을 운영하는 것으로 안내됩니다. 소규모부터 여러 명이 함께 이용할 수 있는 룸까지 인원에 맞춰 선택할 수 있습니다.",
  },
  {
    q: "브이팝 가라오케 가격은 어떻게 확인하나요?",
    a: "페이지의 가격표 이미지는 제공받은 현장 가격표 기준입니다. 실제 결제 금액과 적용 조건은 방문 시점에 달라질 수 있으므로 룸·주류·안주 등 최신 가격은 현지 가라오케에 직접 문의해 확인하는 것을 권장합니다.",
  },
  {
    q: "영업시간은 어떻게 되나요?",
    a: "오전 11시부터 새벽 3시까지 운영되는 것으로 안내되어 있습니다. 야간 업종 특성상 당일 영업 여부와 마감시간은 방문 전에 다시 확인하는 것이 좋습니다.",
  },
];

export default function VpopKaraokePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openGallery = (index: number) => setSelectedImage(index);
  const closeGallery = () => setSelectedImage(null);

  const previousImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
    );
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
    );
  };

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
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
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <div className="mb-8">
            <div className="text-xs font-black tracking-[0.35em] text-red-500">
              HANOI · TRUNG HÒA · KARAOKE
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
              하노이 브이팝 가라오케
            </h1>

            <div className="mt-3 text-lg font-medium tracking-[0.2em] text-zinc-500">
              V-POP KARAOKE
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-8 text-zinc-400 md:text-base">
              얼마 나올지 몰라 불안한 로컬 KTV가 부담스럽다면 브이팝을 눈여겨볼 만합니다.
              중화(Trung Hòa)에 위치한 베트남 현지 운영 로컬 KTV로,
              한인 KTV식 주대 패키지보다 마신 만큼·시킨 만큼 항목별로 정산하는
              소비제 방식이 특징입니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs text-red-300">
                Trung Hòa · Yên Hòa
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                5층 통건물
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                총 20룸
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                11:00 ~ 03:00
              </span>
            </div>
          </div>

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
                V-POP KARAOKE
              </div>
              <div className="mt-2 text-xl font-black">하노이 브이팝 가라오케</div>
              <div className="mt-1 text-xs text-zinc-300">
                사진을 클릭하면 크게 볼 수 있습니다
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-8">
          <div className="text-xs font-black tracking-[0.3em] text-red-500">GALLERY</div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">브이팝 가라오케 시설 사진</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500">
            브이팝의 로비와 내부 룸 분위기를 확인해 보세요. 사진을 클릭하면 전체 화면으로 확대할 수 있습니다.
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
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-4 pt-10 text-left">
                  <div className="text-sm font-bold">{image.title}</div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* BASIC INFORMATION */}
      <section className="border-y border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-black tracking-[0.25em] text-zinc-600">LOCATION</div>
              <div className="mt-4 text-lg font-black">하노이 Trung Hòa · Yên Hòa</div>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                50 P. Trung Hòa, Yên Hòa, Hà Nội. 미딩과는 별개 권역의 중화 지역입니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-black tracking-[0.25em] text-zinc-600">OPENING HOURS</div>
              <div className="mt-4 text-lg font-black">11:00 ~ 03:00</div>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                오전부터 새벽까지 이용할 수 있는 것으로 안내되어 있습니다. 당일 영업 여부는 방문 전 확인해 주세요.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
              <div className="text-xs font-black tracking-[0.25em] text-zinc-600">SYSTEM</div>
              <div className="mt-4 text-lg font-black">로컬 소비제 · 20룸</div>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                주대 패키지보다 주문 항목별로 정산하는 로컬 방식이 핵심 특징입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-4xl">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">ABOUT</div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">하노이 브이팝 가라오케 소개</h2>

            <div className="mt-7 space-y-6 text-sm leading-8 text-zinc-400 md:text-base">
              <p>
                하노이에서 <strong className="text-white">“얼마 나올지 몰라 불안한”</strong> 그 느낌 없이
                노래방을 즐기고 싶다면 브이팝을 한번 눈여겨보십시오. 이곳은 중화(Trung Hòa) 지역에 있는
                베트남 현지 운영 로컬 KTV로, 한인 KTV의 주대 패키지와는 셈법 자체가 다릅니다.
                마신 만큼, 시킨 만큼만 항목별로 정산하는 로컬 소비제라 가볍게 한두 잔만 걸치면 부담이 줄어드는 구조입니다.
              </p>

              <p>
                브이팝을 정리하는 이유는 단순합니다. 로컬 방식이 처음인 형님이 구조를 모르고 들어갔다가
                당황하는 일이 없도록 결제 방식과 룸 규모, 실제 이용 흐름을 담백하게 짚어두기 위해서입니다.
                낮 시간 가벼운 자리부터 늦은 밤까지 폭이 넓어 일정 앞뒤로 끼워 넣기에도 좋습니다.
              </p>

              <p>
                특히 브이팝은 5층 통건물을 통째로 쓰는 대형 로컬 KTV로 안내되며,
                총 20개 룸을 갖추고 있습니다. 미딩과는 별개 권역인 중화에 자리해
                미딩 밀집형 한인 업소와는 다른 현지 감성을 원하는 분에게 잘 맞습니다.
              </p>

              <p>
                주대를 깔아 놓고 정해진 패키지를 이용하는 방식이 아니라 항목마다 정가가 붙는 구조라,
                적게 마실수록 가성비가 분명해지는 것이 브이팝의 핵심 매력입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VPOP */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-xs font-black tracking-[0.3em] text-red-500">WHY V-POP</div>
        <h2 className="mt-3 text-3xl font-black md:text-4xl">왜 브이팝 가라오케인가</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "항목별 정찰 소비제",
              text: "주대 패키지 대신 룸·주류·음료·안주 등을 항목별로 계산하는 방식이라 주문한 만큼 비용을 관리하기 좋습니다.",
            },
            {
              title: "5층 통건물 · 20룸",
              text: "5층 전체를 사용하는 대형 로컬 KTV로 소규모 일행부터 여러 명이 함께하는 자리까지 룸 선택 폭이 넓습니다.",
            },
            {
              title: "중화(Trung Hòa) 현지 감성",
              text: "미딩과는 다른 권역에 있어 한인 KTV 밀집 지역과 다른 로컬 분위기를 경험하고 싶은 분에게 적합합니다.",
            },
            {
              title: "낮부터 새벽까지",
              text: "오전 11시부터 새벽 3시까지로 안내되어 있어 낮 시간 가벼운 자리부터 늦은 밤 일정까지 활용하기 좋습니다.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-[#101010] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-sm font-black text-red-500">
                  ✓
                </div>
                <div>
                  <div className="font-bold">{item.title}</div>
                  <p className="mt-2 text-sm leading-7 text-zinc-500">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROOM / FACILITIES */}
      <section className="border-y border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <div className="text-xs font-black tracking-[0.3em] text-red-500">ROOM & FACILITIES</div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">브이팝 룸·시설·분위기</h2>

          <div className="mt-7 space-y-5 text-sm leading-8 text-zinc-400 md:text-base">
            <p>
              브이팝은 5층 통건물을 전부 사용하는 대형 로컬 KTV라 룸이 넉넉하고,
              한국식 접대형 KTV와는 결이 다른 현지 감성에 가까운 분위기를 갖추고 있습니다.
            </p>
            <p>
              총 20개 룸을 운영하는 것으로 안내되어 있어 작은 방부터 여럿이 둘러앉는 큰 방까지
              인원과 분위기에 맞춰 선택하기 좋습니다. 피크 시간대에 큰 룸을 원하는 일행이라면
              미리 문의하는 편이 안전합니다.
            </p>
            <p>
              노래 화면과 마이크는 로컬 KTV 이용에 맞춰 실용적으로 구성되어 있으며,
              테이블에는 주문한 항목을 중심으로 음료와 안주가 올라오는 방식입니다.
            </p>
            <p>
              여럿이 오는 날에는 넓은 룸을 잡아 편하게 둘러앉을 수 있고,
              가볍게 즐길 때는 맥주와 간단한 안주만 주문해 자리의 규모를 조절하기 좋습니다.
            </p>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <div className="text-xs font-black tracking-[0.3em] text-red-500">SYSTEM</div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">세트·이용 시스템</h2>

          <div className="mt-7 space-y-5 text-sm leading-8 text-zinc-400 md:text-base">
            <p>
              브이팝에는 정해진 주대 세트나 2차 패키지가 없습니다. 대신 시킨 항목으로 자리 성격이 갈립니다.
              가볍게 가려면 맥주 위주로만 시켜 노래에 집중하고, 제대로 자리를 잡으려면 안주와 음료를 더해 술자리를 만들면 됩니다.
            </p>
            <p>
              물티슈 같은 소소한 편의 항목까지 정가가 매겨져 있어 영수증을 기준으로 확인하기 쉬운 것이
              로컬 소비제의 핵심입니다. 총액이 궁금하면 인원당 마실 양과 안주 수를 먼저 가늠해 단가를 곱해보면 됩니다.
            </p>
            <p>
              로컬 방식이 처음이라면 주문 전에 메뉴 단가를 확인하고, 추가 주문이 생길 때마다 항목별 가격을
              체크하는 습관을 들이면 예상 밖의 지출을 줄이는 데 도움이 됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
    PRICE - VPOP KARAOKE
    ========================================================= */}
<section
  id="price"
  className="border-y border-white/10 bg-[#090909]"
>
  <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">

    {/* TITLE */}
    <div className="text-center">
      <div className="text-xs font-black tracking-[0.3em] text-red-500">
        PRICE
      </div>

      <h2 className="mt-3 text-2xl font-bold md:text-3xl">
        브이팝 가라오케 가격표
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60">
        브이팝은 주대 없이 룸 이용료와 주류·음료·안주 등을
        항목별로 정산하는 로컬 소비제 방식입니다.
      </p>
    </div>

    {/* =====================================================
        PRICE CARDS
        ===================================================== */}
    <div className="mt-10 grid gap-5 md:grid-cols-2">

      {/* ===================================================
          1. 노래방 이용료
          =================================================== */}
      <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-lg">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            1. 노래방 이용료
          </h3>

          <span className="text-xs font-bold tracking-wider text-red-400">
            KARAOKE ROOM
          </span>
        </div>

        <div className="divide-y divide-white/10">

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              GH05 - VIP ROOM
            </span>
            <span className="text-sm font-bold text-white">
              600,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              GH04 - LARGE ROOM (대형)
            </span>
            <span className="text-sm font-bold text-white">
              480,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              GH03 - MEDIUM ROOM (중형)
            </span>
            <span className="text-sm font-bold text-white">
              430,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              GH01 - SMALL ROOM (소형)
            </span>
            <span className="text-sm font-bold text-white">
              330,000đ
            </span>
          </div>

        </div>
      </div>

      {/* ===================================================
          2. 주류 및 음료
          =================================================== */}
      <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-lg">
        <h3 className="mb-5 text-lg font-bold text-white">
          2. 주류 및 음료
        </h3>

        <div className="mb-3 text-xs font-bold tracking-wider text-white/40">
          BEER · 맥주
        </div>

        <div className="divide-y divide-white/10">

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              Corona Extra
            </span>
            <span className="text-sm font-bold text-white">
              69,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              Heineken
            </span>
            <span className="text-sm font-bold text-white">
              50,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              Budweiser
            </span>
            <span className="text-sm font-bold text-white">
              48,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              Tiger Beer
            </span>
            <span className="text-sm font-bold text-white">
              45,000đ
            </span>
          </div>

        </div>

        <div className="my-5 border-t border-white/10 pt-4">
          <div className="mb-3 text-xs font-bold tracking-wider text-white/40">
            SOFT DRINK · 음료
          </div>

          <div className="divide-y divide-white/10">

            <div className="flex items-center justify-between gap-4 py-3">
              <span className="text-sm text-white/75">
                과일 주스
              </span>
              <span className="text-sm font-bold text-white">
                66,000đ
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-3">
              <span className="text-sm text-white/75">
                에너지 드링크
              </span>
              <span className="text-sm font-bold text-white">
                65,000đ
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-3">
              <span className="text-sm text-white/75">
                레몬 물
              </span>
              <span className="text-sm font-bold text-white">
                50,000đ
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-3">
              <span className="text-sm text-white/75">
                소프트 드링크
              </span>
              <span className="text-sm font-bold text-white">
                30,000đ
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 py-3">
              <span className="text-sm text-white/75">
                물 / 차
              </span>
              <span className="text-sm font-bold text-white">
                20,000đ
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ===================================================
          3. 안주 및 스낵
          =================================================== */}
      <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-lg">
        <h3 className="mb-5 text-lg font-bold text-white">
          3. 안주 및 스낵
        </h3>

        <div className="divide-y divide-white/10">

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              프리미엄 과일 세트
            </span>
            <span className="text-sm font-bold text-white">
              510,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              마른 오징어
            </span>
            <span className="text-sm font-bold text-white">
              510,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              바삭 닭튀김
            </span>
            <span className="text-sm font-bold text-white">
              500,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              프리미엄 과일 단품
            </span>
            <span className="text-sm font-bold text-white">
              350,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              프리미엄 안주
            </span>
            <span className="text-sm font-bold text-white">
              99,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              모듬 소시지
            </span>
            <span className="text-sm font-bold text-white">
              80,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              간식 모듬
            </span>
            <span className="text-sm font-bold text-white">
              55,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              감자튀김
            </span>
            <span className="text-sm font-bold text-white">
              30,000đ
            </span>
          </div>

        </div>
      </div>

      {/* ===================================================
          4. 프리미엄 양주
          =================================================== */}
      <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-lg">
        <h3 className="mb-5 text-lg font-bold text-white">
          4. 프리미엄 양주
        </h3>

        <div className="divide-y divide-white/10">

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              Macallan (UK)
            </span>
            <span className="text-sm font-bold text-white">
              5,200,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              Macallan 12 Years
            </span>
            <span className="text-sm font-bold text-white">
              4,150,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3">
            <span className="text-sm text-white/75">
              Chivas 18 Years
            </span>
            <span className="text-sm font-bold text-white">
              2,500,000đ
            </span>
          </div>

        </div>
      </div>

      {/* ===================================================
          5. 기타
          =================================================== */}
      <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-lg md:col-span-2">
        <h3 className="mb-5 text-lg font-bold text-white">
          5. 기타
        </h3>

        <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">

          <div className="flex items-center justify-between gap-4 py-3 md:pr-6">
            <span className="text-sm text-white/75">
              담배 (555)
            </span>
            <span className="text-sm font-bold text-white">
              70,000đ
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 py-3 md:pl-6">
            <span className="text-sm text-white/75">
              담배 (Marlboro)
            </span>
            <span className="text-sm font-bold text-white">
              55,000đ
            </span>
          </div>

        </div>
      </div>

    </div>

    {/* =====================================================
        PRICE NOTICE
        ===================================================== */}
    <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-5 text-sm leading-7 text-white/70">

      <p className="font-semibold text-red-400">
        가격은 방문 시점의 실제 적용 조건을 현지 가라오케에 직접 문의해 확인해 주세요.
      </p>

      <p className="mt-1">
        룸 이용료, 주류·음료, 안주 및 기타 항목의 최신 가격과
        결제 조건은 방문 전에 함께 확인하는 것을 권장합니다.
      </p>

    </div>

  </div>
</section>

      {/* FIELD TIPS */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <div className="text-xs font-black tracking-[0.3em] text-red-500">FIELD TIPS</div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">직접 짚는 현장 포인트</h2>

          <div className="mt-8 space-y-3">
            {[
              "주대가 없는 소비제이니 마실 양과 안주 수를 미리 정해두면 총액 관리가 수월합니다.",
              "가볍게 즐길 계획이면 맥주 위주로 시키십시오. 적게 마실수록 로컬 소비제의 장점이 분명해집니다.",
              "룸이 20개라 선택 폭이 넓지만 피크 시간 큰 방을 원한다면 미리 문의하는 편이 좋습니다.",
              "주문 전 메뉴 단가를 확인하고 추가 주문이 생길 때마다 금액을 체크하면 정산이 깔끔합니다.",
              "현금(베트남 동)이 보편적입니다. 카드 가능 여부와 적용 기준은 방문 전 확인하십시오.",
            ].map((text, index) => (
              <div key={index} className="flex gap-4 rounded-xl border border-white/10 bg-black p-5">
                <span className="shrink-0 text-sm font-black text-red-500">0{index + 1}</span>
                <p className="text-sm leading-6 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDED */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <div className="text-xs font-black tracking-[0.3em] text-red-500">RECOMMENDED</div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">이런 분께 딱</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["주대 없이 마신 만큼 내고 싶은 분", "한인 KTV식 패키지보다 항목별로 계산하는 로컬 소비제가 편한 분에게 잘 맞습니다."],
              ["가볍게 맥주 한두 잔 즐길 분", "많이 마시지 않는 자리에서 주문량을 조절하며 노래를 즐기고 싶은 분에게 적합합니다."],
              ["20룸 규모를 원하는 일행", "소규모부터 단체까지 인원에 맞는 룸을 선택하고 싶은 분에게 유리합니다."],
              ["미딩과 다른 현지 분위기를 찾는 분", "중화(Trung Hòa) 권역의 로컬 KTV를 경험하고 싶은 분에게 좋은 선택지입니다."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs font-black tracking-[0.3em] text-red-500">LOCATION</div>
              <h2 className="mt-3 text-3xl font-black">찾아가는 길</h2>
              <p className="mt-6 text-sm leading-8 text-zinc-400 md:text-base">
                브이팝 가라오케는 <strong className="text-white">50 P. Trung Hòa, Yên Hòa, Hà Nội</strong>에 있습니다.
                중화 지역으로 미딩과는 별개 권역이므로 미딩 숙소라면 그랩 이동 시간을 넉넉히 잡아두는 것이 좋습니다.
              </p>
              <p className="mt-4 text-sm leading-8 text-zinc-400 md:text-base">
                목적지에 주소를 그대로 입력하고, 출발 전에 현지 담당자에게 지도 핀을 한 번 더 확인하면
                같은 이름의 업소나 주변 건물로 잘못 이동하는 일을 줄일 수 있습니다.
              </p>
            </div>

            <div>
              <div className="text-xs font-black tracking-[0.3em] text-red-500">TRANSPORT</div>
              <h2 className="mt-3 text-3xl font-black">이동 팁</h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
                  <div className="font-bold">그랩 이용</div>
                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    “50 P. Trung Hòa, Yên Hòa”를 목적지로 입력해 이동하는 방법이 편합니다.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
                  <div className="font-bold">미딩과 구분</div>
                  <p className="mt-2 text-sm leading-7 text-zinc-500">
                    미딩 중심 업소와 같은 권역이 아니므로 숙소에서 이동시간을 미리 확인하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHECK */}
      <section className="border-y border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="rounded-3xl border border-white/10 bg-[#101010] p-7 md:p-10">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">CHECK</div>
            <h2 className="mt-3 text-3xl font-black">방문 전 확인사항</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "방문 전 영업 여부 확인",
                "최신 룸·주류·안주 가격 확인",
                "정확한 지점 주소와 지도 핀 확인",
                "이용시간 및 마감시간 확인",
                "원하는 룸 규모와 이용 가능 여부 확인",
                "결제 방법과 추가 비용 확인",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-5 py-4">
                  <span className="text-red-500">✓</span>
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <div className="text-center">
            <div className="text-xs font-black tracking-[0.3em] text-red-500">FAQ</div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">자주 묻는 질문</h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/10 bg-[#101010]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-bold">
                  <span>{item.q}</span>
                  <span className="text-xl text-zinc-500 transition group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-500">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#171717] to-[#0c0c0c] p-8 text-center md:p-14">
          <div className="text-xs font-black tracking-[0.3em] text-red-500">V-POP KARAOKE</div>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">하노이 브이팝 가라오케</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            주대 패키지보다 마신 만큼·시킨 만큼 계산하는 로컬 소비제를 선호한다면
            브이팝을 후보에 올려보세요. 방문 전 최신 가격과 이용 조건을 현지 가라오케에 문의하는 것을 권장합니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#price"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById("price")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl bg-red-600 px-8 py-4 text-sm font-black transition hover:bg-red-500"
            >
              가격표 보기
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

      {/* LIGHTBOX */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <button
            type="button"
            onClick={closeGallery}
            aria-label="닫기"
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white/10"
          >
            ×
          </button>

          <button
            type="button"
            onClick={previousImage}
            aria-label="이전 사진"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl text-white transition hover:bg-white/10 md:left-8"
          >
            ‹
          </button>

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

          <button
            type="button"
            onClick={nextImage}
            aria-label="다음 사진"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-3xl text-white transition hover:bg-white/10 md:right-8"
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-xs text-zinc-600">
            ← → 사진 이동 · ESC 닫기
          </div>
        </div>
      )}
    </main>
  );
}
