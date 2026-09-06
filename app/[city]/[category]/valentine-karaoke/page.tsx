"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const galleryImages = [
  {
    src: "/하노이 발렌타인 가라오케 메인.webp",
    title: "발렌타인 가라오케 메인",
  },
  {
    src: "/하노이 발렌타인 가라오케 외관.webp",
    title: "발렌타인 가라오케 외관",
  },
  {
    src: "/하노이 발렌타인 가라오케 룸1.webp",
    title: "발렌타인 가라오케 룸 1",
  },
  {
    src: "/하노이 발렌타인 가라오케 룸2.webp",
    title: "발렌타인 가라오케 룸 2",
  },
  {
    src: "/하노이 발렌타인 가라오케 룸3.webp",
    title: "발렌타인 가라오케 룸 3",
  },
  {
    src: "/하노이 발렌타인 가라오케 룸4.webp",
    title: "발렌타인 가라오케 룸 4",
  },
  {
    src: "/하노이 발렌타인 가라오케 룸5.webp",
    title: "발렌타인 가라오케 룸 5",
  },
];

const faqItems = [
  {
    q: "발렌타인 가라오케는 어디에 있나요?",
    a: "하노이 미딩 중심 거리인 딘톤, 48 Đ. Đình Thôn, Đình Thôn, Từ Liêm, Hà Nội에 위치해 있습니다. 미딩 한인타운과 가까워 식사나 숙소에서 이동하기 편한 위치입니다.",
  },
  {
    q: "발렌타인 가라오케의 가장 큰 특징은 무엇인가요?",
    a: "주대에 맥주와 소주, 기본 안주가 포함되는 구성과 3인 이상 무료 픽업이 주요 특징입니다. 술자리 중심으로 이용할 때 비용을 비교적 쉽게 계산할 수 있는 것이 장점입니다.",
  },
  {
    q: "발렌타인 가라오케는 몇 시부터 이용할 수 있나요?",
    a: "도우미 운영은 저녁 7시부터 시작하는 것으로 안내되어 있습니다. 미딩 권역의 영업시간 규정이나 현지 운영 상황에 따라 변동될 수 있으므로 방문 전 확인을 권장합니다.",
  },
  {
    q: "3인 이상이면 픽업이 무료인가요?",
    a: "네. 안내 기준으로 3인 이상 방문 시 무료 픽업을 지원합니다. 미딩 초행이거나 숙소에서 바로 이동하는 경우 픽업을 이용하면 편리합니다.",
  },
  {
    q: "발렌타인 가라오케의 주대는 얼마인가요?",
    a: "1인 이용 기준 주대는 200만 동, 2인 이상이면 인당 150만 동으로 안내되어 있습니다. 맥주·소주와 기본 안주가 포함되는 구성입니다. 실제 가격과 이용 조건은 방문 전 확인하는 것을 권장합니다.",
  },
  {
    q: "방문 전에 확인해야 할 사항이 있나요?",
    a: "영업시간과 당일 이용요금, 포함 서비스, 추가 비용 여부를 방문 전에 확인하는 것이 좋습니다. 특히 늦은 시간 방문 예정이라면 당일 영업 여부를 먼저 확인하는 것을 권장합니다.",
  },
];

export default function ValentineKaraokePage() {
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
              하노이 발렌타인 가라오케
            </h1>

            <div className="mt-3 text-lg font-medium tracking-[0.2em] text-zinc-500">
              BALLANTINES KARAOKE
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-8 text-zinc-400 md:text-base">
              미딩 중심 거리인 딘톤에서 술자리 위주로 편하게
              한잔하고 싶다면 확인해볼 만한 발렌타인 가라오케를
              정리했습니다. 한국인 사장이 직접 응대를 챙기며,
              맥주·소주와 기본 안주가 포함된 구성과
              3인 이상 무료 픽업이 특징입니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs text-red-300">
                미딩 · 딘톤
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                19:00 ~
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                맥주 · 소주 무제한
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300">
                3인 이상 무료 픽업
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
                BALLANTINES KARAOKE
              </div>

              <div className="mt-2 text-xl font-black">
                하노이 발렌타인 가라오케
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
            발렌타인 가라오케 시설 사진
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500">
            발렌타인 가라오케의 외관과 내부 룸 분위기를
            사진으로 확인해 보세요. 사진을 클릭하면
            전체 화면으로 확대해서 볼 수 있습니다.
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
                48 Đ. Đình Thôn, Đình Thôn,
                Từ Liêm, Hà Nội.
                미딩 중심 거리인 딘톤에 위치해 있습니다.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">

              <div className="text-xs font-black tracking-[0.25em] text-zinc-600">
                OPENING HOURS
              </div>

              <div className="mt-4 text-lg font-black">
                저녁 7시부터
              </div>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                도우미 운영은 저녁 7시부터로 안내되어 있습니다.
                현지 운영 상황에 따라 변동될 수 있으므로
                방문 전 확인을 권장합니다.
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
                술자리 중심으로 편하게 이용하기 좋은
                미딩 딘톤의 한국식 가라오케입니다.
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
              하노이 발렌타인 가라오케 소개
            </h2>

            <div className="mt-7 space-y-6 text-sm leading-8 text-zinc-400 md:text-base">

              <p>
                미딩 중심에서 술자리 위주로 편하게 한잔하고
                싶다면 발렌타인 가라오케가 눈에 들어옵니다.
                미딩의 중심 거리인 딘톤에 자리한 한인 KTV로,
                한국인 사장이 직접 상주하며 응대를 챙기는 곳입니다.
              </p>

              <p>
                발렌타인의 가장 큰 장점은 계산 구조가 비교적
                단순하다는 점입니다. 주대에 맥주와 소주,
                기본 안주가 포함되어 있어 술을 즐기는 자리라면
                추가 주류 비용에 대한 부담을 줄일 수 있습니다.
              </p>

              <p>
                3인 이상이면 무료 픽업을 지원해 미딩이 처음인
                방문객도 이동 부담을 줄일 수 있습니다.
                미딩 한인타운 중심에 위치해 식사나 숙소에서
                함께 동선을 짜기에도 편리합니다.
              </p>

              <p>
                내부는 소파와 테이블을 중심으로 일행끼리
                편하게 앉아 노래와 술자리를 즐길 수 있는
                형태로 구성되어 있습니다. 룸마다 분위기가
                조금씩 달라 일행의 규모와 취향에 맞춰
                이용하기 좋습니다.
              </p>

              <p>
                늦은 시간 방문을 계획한다면 미딩 지역의
                영업시간 규정과 당일 운영 여부를 미리
                확인하는 것이 좋습니다. 가격과 이용 조건 역시
                방문 전에 최신 내용을 확인하는 것을 권장합니다.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY BALLANTINES
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

        <div className="text-xs font-black tracking-[0.3em] text-red-500">
          WHY BALLANTINES
        </div>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          왜 발렌타인 가라오케인가
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">

          {[
            {
              title: "무제한 술자리",
              text: "주대에 맥주·소주와 기본 안주가 포함되는 구성으로 술자리 비용을 비교적 쉽게 계산할 수 있습니다.",
            },
            {
              title: "3인 이상 무료 픽업",
              text: "3인 이상 방문 시 무료 픽업을 지원해 미딩 초행 방문객도 이동 부담을 줄일 수 있습니다.",
            },
            {
              title: "미딩 딘톤 중심 위치",
              text: "미딩 중심 거리인 딘톤에 위치해 주변 한인 식당과 숙소를 함께 이용하기 편리합니다.",
            },
            {
              title: "한국인 사장 직접 응대",
              text: "한국인 사장이 직접 응대를 챙겨 처음 방문하는 경우에도 기본적인 이용 안내를 받기 편합니다.",
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
          ROOM / SYSTEM
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#090909]">

        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">

          <div className="max-w-4xl">

            <div className="text-xs font-black tracking-[0.3em] text-red-500">
              ROOM & SYSTEM
            </div>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              발렌타인 룸·시설·분위기
            </h2>

            <div className="mt-7 space-y-6 text-sm leading-8 text-zinc-400 md:text-base">

              <p>
                발렌타인은 미딩 딘톤 중심에 위치한 만큼
                접근성이 좋고, 술자리와 노래에 집중하기
                좋은 룸 형태로 구성되어 있습니다.
              </p>

              <p>
                룸 내부는 넓은 소파와 테이블을 중심으로
                일행끼리 마주 보며 앉을 수 있도록 구성되어
                있으며, 조명과 화면을 활용해 가라오케 특유의
                분위기를 즐길 수 있습니다.
              </p>

              <p>
                소·중 인원으로 방문해 술과 노래를 함께
                즐기려는 모임에 특히 잘 맞는 형태입니다.
                처음 방문하는 경우에도 한국인 사장에게
                이용 방법과 기본적인 사항을 확인할 수 있습니다.
              </p>

            </div>

          </div>

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
              발렌타인 가라오케 가격 안내
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/60">
              맥주 · 소주 · 기본 안주 포함
            </p>

          </div>


          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">

            <table className="w-full text-sm">

              <thead className="bg-white/5">

                <tr className="border-b border-white/10">

                  <th className="px-4 py-4 text-left">
                    구분
                  </th>

                  <th className="px-4 py-4 text-left">
                    가격
                  </th>

                  <th className="px-4 py-4 text-left">
                    내용
                  </th>

                </tr>

              </thead>


              <tbody>

                <tr className="border-b border-white/10">

                  <td className="px-4 py-4 font-semibold">
                    1인
                  </td>

                  <td className="px-4 py-4 font-bold text-yellow-400">
                    200만 VND
                  </td>

                  <td className="px-4 py-4 text-white/70">
                    맥주 · 소주 · 기본 안주
                  </td>

                </tr>


                <tr className="border-b border-white/10">

                  <td className="px-4 py-4 font-semibold">
                    2인 이상
                  </td>

                  <td className="px-4 py-4 font-bold text-yellow-400">
                    150만 VND / 1인
                  </td>

                  <td className="px-4 py-4 text-white/70">
                    맥주 · 소주 · 기본 안주
                  </td>

                </tr>


                <tr className="border-b border-white/10">

                  <td className="px-4 py-4 font-semibold">
                    별도 서비스
                  </td>

                  <td className="px-4 py-4 font-bold text-yellow-400">
                    별도 확인
                  </td>

                  <td className="px-4 py-4 text-white/70">
                    이용 전 현장 안내 확인
                  </td>

                </tr>


                <tr>

                  <td className="px-4 py-4 font-semibold">
                    픽업
                  </td>

                  <td className="px-4 py-4 font-bold text-yellow-400">
                    무료
                  </td>

                  <td className="px-4 py-4 text-white/70">
                    3인 이상
                  </td>

                </tr>

              </tbody>

            </table>

          </div>


          <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 text-sm leading-7 text-white/70">

            <p>
              • 2인 이상이면 주대가 인당 150만 동으로 안내됩니다.
            </p>

            <p>
              • 3인 이상 방문 시 무료 픽업을 이용할 수 있습니다.
            </p>

            <p>
              • 실제 가격과 포함 서비스는 방문 전 최신 내용을 확인하세요.
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
              발렌타인 가라오케 위치
            </h2>

            <p className="mt-6 text-sm leading-8 text-zinc-400 md:text-base">
              발렌타인 가라오케는 미딩 딘톤 중심 거리의
              48 Đ. Đình Thôn, Đình Thôn, Từ Liêm, Hà Nội에
              위치해 있습니다.
            </p>

            <p className="mt-4 text-sm leading-8 text-zinc-400 md:text-base">
              미딩 한인타운과 가까워 주변 식당이나 숙소에서
              이동하기 편하며, 3인 이상이라면 무료 픽업을
              이용할 수 있습니다.
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
                  무료 픽업
                </div>

                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  3인 이상이라면 숙소에서 무료 픽업을
                  이용할 수 있어 미딩 초행 방문객도
                  편하게 이동할 수 있습니다.
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-[#111] p-5">

                <div className="font-bold">
                  그랩 이용
                </div>

                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  그랩 목적지에 주소를 입력해 이동하는
                  방법도 편리합니다. 주소를 기사에게
                  보여주면 찾기 수월합니다.
                </p>

              </div>


              <div className="rounded-2xl border border-white/10 bg-[#111] p-5">

                <div className="font-bold">
                  미딩 딘톤 거리
                </div>

                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  미딩 중심 거리인 딘톤에 위치해 주변
                  한인 식당과 숙소를 함께 이용하기 좋습니다.
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
                "맥주·소주 포함 여부 확인",
                "추가 비용 여부 확인",
                "3인 이상 무료 픽업 확인",
                "늦은 시간 방문 시 운영 여부 확인",
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
            BALLANTINES KARAOKE
          </div>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            하노이 발렌타인 가라오케
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            미딩 딘톤에서 무제한 술자리와 편리한 픽업을
            원하는 분이라면 발렌타인 가라오케를 확인해 보세요.
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
