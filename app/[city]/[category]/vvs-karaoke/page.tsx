"use client";

import { useState } from "react";

export default function VVSKaraokePage() {
  const images = [
    "/하노이 vvs 가라오케 메인.webp",
    "/하노이 vvs 가라오케 외관.webp",
    "/하노이 vvs 가라오케 느낌.webp",
    "/하노이 vvs 가라오케 리셉션.webp",
    "/하노이 vvs 가라오케 룸1.webp",
    "/하노이 vvs 가라오케 룸2.webp",
    "/하노이 vvs 가라오케 골프존.webp",
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const prevImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === 0 ? images.length - 1 : selectedImage - 1
    );
  };

  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === images.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          HERO
      ========================= */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">

          <p className="text-xs font-black tracking-[0.3em] text-red-500">
            HANOI · MỄ TRÌ HẠ
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            하노이 VVS 가라오케
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg">
            노래와 술자리부터 스크린골프까지 한 건물에서 즐길 수 있는
            하노이 미딩·메찌 권역의 VVS 가라오케를 소개합니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold text-red-400">
              미딩 인접
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-zinc-300">
              룸 12개
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-zinc-300">
              스크린골프
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-zinc-300">
              14:00 ~ 02:00
            </span>
          </div>

        </div>
      </section>


      {/* =========================
          PHOTO GALLERY
      ========================= */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">

          <div className="mb-7">
            <p className="text-xs font-black tracking-[0.25em] text-red-500">
              VVS GALLERY
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              VVS 가라오케 사진
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              사진을 클릭하면 크게 확인할 수 있으며 좌우로 넘겨볼 수 있습니다.
            </p>
          </div>

          {/* 3개씩 3줄 */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10 bg-zinc-900"
              >
                <img
                  src={image}
                  alt={`하노이 VVS 가라오케 ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </button>
            ))}
          </div>

        </div>
      </section>


      {/* =========================
          INTRO
      ========================= */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            ABOUT VVS
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 VVS 가라오케 소개
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              하노이 미딩 권역에서 노래도 하고 술잔도 기울이면서
              사이사이 스크린골프까지 한 건물에서 즐기고 싶다면
              <strong className="text-white"> VVS 가라오케</strong>를
              먼저 살펴볼 만합니다.
            </p>

            <p>
              VVS는 메찌하 거리에 위치한
              <strong className="text-white"> VVS Glory Hotel 건물을
              통째로 활용하는 단일건물형 한인 KTV</strong>로,
              층마다 룸이 정돈되어 있으며 별도의 스크린골프 룸도
              마련되어 있습니다.
            </p>

            <p>
              특히 미딩 한인타운과 가까워 숙소나 식당가에서 이동하기
              편하다는 점도 장점입니다. 처음 하노이 미딩 지역을
              방문하는 분들도 비교적 쉽게 찾아갈 수 있는 위치입니다.
            </p>

            <p>
              VVS는 주대와 기본 TC를 구분해서 정산하는 방식이라
              인원과 이용시간을 먼저 정하면 대략적인 예산을 잡기
              편합니다. 한국어로 응대가 가능한 마담과 매니저가 있어
              주문이나 기본적인 요청을 전달하기에도 편리합니다.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          WHY VVS
      ========================= */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            WHY VVS
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            왜 VVS 가라오케인가
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            VVS의 가장 큰 특징은 노래와 술자리, 스크린골프를
            한 건물 안에서 이어갈 수 있다는 점입니다.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-2xl font-black text-red-500">01</p>
              <h3 className="mt-4 text-lg font-black">
                한 건물에서 해결
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                호텔 건물 전체를 활용하는 구조로 이동을 최소화하면서
                노래와 술자리, 골프를 함께 즐길 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-2xl font-black text-red-500">02</p>
              <h3 className="mt-4 text-lg font-black">
                룸 12개 운영
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                일행 규모에 따라 룸을 선택하기 좋으며
                깔끔하게 정돈된 공간에서 편하게 이용할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-2xl font-black text-red-500">03</p>
              <h3 className="mt-4 text-lg font-black">
                스크린골프
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                노래방 분위기를 잠시 바꾸고 싶을 때
                별도 스크린골프 룸을 이용할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-2xl font-black text-red-500">04</p>
              <h3 className="mt-4 text-lg font-black">
                한국어 응대
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                한국어로 상담과 요청을 전달할 수 있어
                처음 방문하는 분들도 비교적 편하게 이용할 수 있습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          BASIC INFO
      ========================= */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            BASIC INFORMATION
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            VVS 가라오케 기본 정보
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">

            <div className="grid grid-cols-[110px_1fr] border-b border-white/10">
              <div className="bg-zinc-950 p-4 text-sm font-black text-red-500">
                위치
              </div>

              <div className="p-4 text-sm leading-6 text-zinc-300">
                46 P. Mễ Trì Hạ, Nam Từ Liêm, Hà Nội
                <br />
                VVS Glory Hotel 건물 · 미딩 인접
              </div>
            </div>

            <div className="grid grid-cols-[110px_1fr] border-b border-white/10">
              <div className="bg-zinc-950 p-4 text-sm font-black text-red-500">
                영업시간
              </div>

              <div className="p-4 text-sm text-zinc-300">
                오후 2시 ~ 새벽 2시
              </div>
            </div>

            <div className="grid grid-cols-[110px_1fr] border-b border-white/10">
              <div className="bg-zinc-950 p-4 text-sm font-black text-red-500">
                룸
              </div>

              <div className="p-4 text-sm text-zinc-300">
                총 12개 룸 + 별도 스크린골프 룸
              </div>
            </div>

            <div className="grid grid-cols-[110px_1fr]">
              <div className="bg-zinc-950 p-4 text-sm font-black text-red-500">
                추천대상
              </div>

              <div className="p-4 text-sm leading-6 text-zinc-300">
                미딩 권역에서 노래·골프·술자리를
                한 건물에서 즐기고 싶은 한국인 여행객
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          FACILITIES
      ========================= */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            FACILITIES
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            VVS 룸·시설·분위기
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              호텔 건물을 통째로 사용하는 만큼 룸 배치가 비교적
              깔끔하게 정돈되어 있습니다. 층마다 복도를 따라
              룸이 배치되어 있어 일행 규모에 맞는 공간을 안내받을 수 있습니다.
            </p>

            <p>
              룸 내부에는 일행이 함께 앉기 편한 소파가 마련되어 있으며,
              조명은 가라오케 특유의 컬러감 있는 분위기로 구성되어 있습니다.
              편하게 음악을 틀어놓고 술자리를 즐기기에 적합한 분위기입니다.
            </p>

            <p>
              반주기는 금영·태진 계열을 갖추고 있어 한국 노래를
              찾기도 편합니다. 한국 최신곡을 비롯해 익숙한 노래를
              선택하면서 자연스럽게 분위기를 이어갈 수 있습니다.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          PRICE
      ========================= */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            PRICE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            VVS 가라오케 가격 안내
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            VVS는 주대와 기본 TC를 구분하여 정산하는 방식입니다.
            인원과 이용시간을 먼저 정하고 스크린골프나 시간 연장 등의
            추가 이용 여부를 함께 확인하면 예산을 잡기 편합니다.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">

            <div className="grid grid-cols-3 bg-zinc-950 text-xs font-black sm:grid-cols-4">
              <div className="p-4 text-red-500">구분</div>
              <div className="p-4 text-red-500">가격</div>
              <div className="p-4 text-red-500">시간/인원</div>
              <div className="hidden p-4 text-red-500 sm:block">내용</div>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10 text-sm sm:grid-cols-4">
              <div className="p-4 font-bold">주대</div>
              <div className="p-4 font-black">200만 동</div>
              <div className="p-4">1인</div>
              <div className="hidden p-4 text-zinc-500 sm:block">
                소주·맥주·기본 안주 무제한
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10 text-sm sm:grid-cols-4">
              <div className="p-4 font-bold">주대</div>
              <div className="p-4 font-black text-red-400">
                인당 150만 동
              </div>
              <div className="p-4">2인 이상</div>
              <div className="hidden p-4 text-zinc-500 sm:block">
                소주·맥주·안주 무제한
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10 text-sm sm:grid-cols-4">
              <div className="p-4 font-bold">기본 TC</div>
              <div className="p-4 font-black">50만 동</div>
              <div className="p-4">2시간</div>
              <div className="hidden p-4 text-zinc-500 sm:block">
                기본 TC
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10 text-sm sm:grid-cols-4">
              <div className="p-4 font-bold">스크린골프·연장</div>
              <div className="p-4 font-black">현장 문의</div>
              <div className="p-4">별도</div>
              <div className="hidden p-4 text-zinc-500 sm:block">
                골프룸 및 시간 연장
              </div>
            </div>

          </div>

          <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <p className="text-sm font-bold leading-6 text-red-300">
              주대와 TC는 별도 정산이며, 도우미 동반·스크린골프·시간
              연장 등의 추가 이용은 현장 안내를 확인해 주세요.
            </p>
          </div>

        </div>
      </section>


      {/* =========================
          SYSTEM
      ========================= */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            SYSTEM
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            세트·이용 시스템
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              VVS는 정해진 패키지 하나만 이용하는 방식보다는
              <strong className="text-white">
                {" "}주대와 기본 TC를 기준으로 인원과 시간,
                추가 이용 여부를 조합
              </strong>
              하는 형태로 이해하면 쉽습니다.
            </p>

            <p>
              1인 이용 시 주대는 200만 동이며, 2인 이상부터는
              인당 150만 동으로 내려갑니다. 주대에는 소주와 맥주,
              기본 안주가 포함되는 구조입니다.
            </p>

            <p>
              기본 TC는 2시간 기준 50만 동이며, 스크린골프 룸을
              함께 이용하거나 시간을 연장하는 경우에는 별도 비용이
              발생할 수 있으므로 이용 전에 확인하는 것이 좋습니다.
            </p>

            <p>
              결국 총액은 방문 인원과 이용시간, 그리고 골프룸이나
              추가 서비스 이용 여부에 따라 달라집니다.
              방문 전에 예산을 먼저 정해두고 필요한 구성만 선택하면
              정산을 보다 깔끔하게 관리할 수 있습니다.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          FIELD TIPS
      ========================= */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            FIELD TIPS
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            직접 짚는 현장 포인트
          </h2>

          <div className="mt-8 space-y-3">

            {[
              "두 명 이상이면 주대가 인당 150만 동으로 내려가기 때문에 일행을 함께 구성하면 1인 비용을 줄이는 데 도움이 됩니다.",
              "기본 TC는 2시간 기준이므로 이용 예정 시간을 미리 정하고 연장 여부를 생각해 두면 정산이 편합니다.",
              "스크린골프 룸을 함께 이용할 계획이라면 피크 시간대 이용 가능 여부를 입장할 때 미리 확인하는 것이 좋습니다.",
              "합의되지 않은 추가 비용이나 별도 팁이 발생하는 경우에는 이용 전에 비용을 확인해 두는 것이 좋습니다.",
              "현금으로 결제할 예정이라면 베트남 동을 준비하고, 카드 결제 가능 여부와 환율 기준도 방문 전에 확인해 주세요.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-white/10 bg-black p-5"
              >
                <span className="shrink-0 text-sm font-black text-red-500">
                  0{index + 1}
                </span>

                <p className="text-sm leading-6 text-zinc-400">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================
          WHO IS IT FOR
      ========================= */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            RECOMMENDED
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            이런 분께 추천합니다
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <h3 className="text-lg font-black">
                미딩·메찌 권역 숙소 이용객
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                미딩 한인타운과 가까운 곳에서 숙소와 식당가,
                가라오케 이동 동선을 짧게 가져가고 싶은 분들에게
                편리합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <h3 className="text-lg font-black">
                노래와 골프를 함께 즐기는 일행
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                노래방만 이용하기보다 중간에 스크린골프를 섞어
                분위기를 바꾸고 싶은 일행에게 잘 맞습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <h3 className="text-lg font-black">
                한국어 응대를 원하는 분
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                주문이나 기본적인 요청을 한국어로 편하게
                전달하고 싶은 여행객에게 적합합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <h3 className="text-lg font-black">
                비용을 미리 계산하고 싶은 분
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                주대와 기본 TC가 구분되어 있어 인원과 시간을
                기준으로 예산을 잡기 편합니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          LOCATION
      ========================= */}
      <section className="border-b border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            LOCATION
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            찾아가는 길
          </h2>

          <div className="mt-7 rounded-2xl border border-white/10 bg-black p-6 sm:p-8">

            <p className="text-lg font-black">
              VVS Glory Hotel
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              46 P. Mễ Trì Hạ, Nam Từ Liêm, Hà Nội
            </p>

            <div className="mt-6 h-px bg-white/10" />

            <div className="mt-6 space-y-4 text-sm leading-6 text-zinc-400">

              <p>
                VVS 가라오케는 미딩 한인타운과 가까운 메찌하 거리에
                위치해 있습니다.
              </p>

              <p>
                그랩을 이용한다면 기사에게
                <strong className="text-white">
                  {" "}“VVS Glory Hotel, Mễ Trì Hạ”
                </strong>
                를 보여주면 찾아가기 편합니다.
              </p>

              <p>
                단일 건물 형태라 건물 앞에서 입구를 확인하기
                비교적 쉽습니다. 초행이라면 숙소 위치를 미리 알려주고
                이동 동선을 맞춰두는 것도 좋습니다.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          FINAL SUMMARY
      ========================= */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

          <div className="rounded-3xl border border-red-500/20 bg-[#0c0c0c] p-7 sm:p-10">

            <p className="text-xs font-black tracking-[0.25em] text-red-500">
              VVS KARAOKE
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              하노이 미딩에서 한 번에 즐기는 VVS
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
              VVS 가라오케는 미딩·메찌 권역에서 노래와 술자리,
              스크린골프까지 한 건물에서 이어갈 수 있다는 점이
              가장 큰 특징입니다.
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
              룸 12개와 별도 골프룸을 갖추고 있으며,
              주대와 기본 TC를 구분해 정산하기 때문에
              인원과 시간을 먼저 정하고 이용 계획을 세우기 좋습니다.
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
              방문 전에는 실제 이용 인원과 시간, 골프룸 이용 여부,
              추가 비용 등을 미리 확인하고 방문하는 것을 추천합니다.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          IMAGE MODAL
      ========================= */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* 닫기 */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20"
            aria-label="닫기"
          >
            ×
          </button>

          {/* 이전 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-3xl text-white backdrop-blur transition hover:bg-white/20 sm:left-6"
            aria-label="이전 사진"
          >
            ‹
          </button>

          {/* 이미지 */}
          <div
            className="relative max-h-[90vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage]}
              alt={`VVS 가라오케 확대 사진 ${selectedImage + 1}`}
              className="max-h-[88vh] max-w-[95vw] rounded-xl object-contain"
            />

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          {/* 다음 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-3xl text-white backdrop-blur transition hover:bg-white/20 sm:right-6"
            aria-label="다음 사진"
          >
            ›
          </button>
        </div>
      )}

    </main>
  );
}
