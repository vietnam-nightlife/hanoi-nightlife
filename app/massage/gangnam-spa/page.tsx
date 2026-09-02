import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const mainImage = "/하노이 강남스파 메인.webp";

const spaImages = [
  "/하노이 강남스파 외관.webp",
  "/하노이 강남스파 리셉션.webp",
  "/하노이 강남스파 룸1.webp",
  "/하노이 강남스파 룸2.webp",
  "/하노이 강남스파 휴게실.webp",
  "/하노이 강남스파 스낵바.webp",
];

export const metadata: Metadata = {
  title: "하노이 강남스파 | 미딩 마사지 · 강남 스파",
  description:
    "하노이 미딩 강남스파(GANGNAM SPA) 위치, 시설 사진, 마사지 코스와 가격, 영업시간 및 방문 전 확인사항을 한눈에 확인하세요.",
  keywords: [
    "하노이 강남스파",
    "하노이 강남 스파",
    "강남스파",
    "Gangnam Spa Hanoi",
    "하노이 마사지",
    "하노이 스파",
    "하노이 마사지 추천",
    "하노이 마사지샵",
    "미딩 마사지",
    "미딩 스파",
    "미딩 마사지 추천",
    "딘톤 마사지",
    "딘톤 스파",
    "하노이 마사지 가격",
    "하노이 스파 가격",
  ],
  alternates: {
    canonical: "/massage/gangnam-spa",
  },
  openGraph: {
    title: "하노이 강남스파 | GANGNAM SPA",
    description:
      "하노이 미딩 강남스파의 위치, 시설, 마사지 코스와 가격 및 이용정보",
    type: "website",
    images: [
      {
        url: mainImage,
        alt: "하노이 강남스파",
      },
    ],
  },
};

function BreadcrumbJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "하노이",
        item: "/hanoi",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "마사지",
        item: "/massage",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "하노이 강남스파",
        item: "/massage/gangnam-spa",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

function BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "하노이 강남스파",
    alternateName: "GANGNAM SPA",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Ng. 1 Đ. Đình Thôn",
      addressLocality: "Nam Từ Liêm",
      addressRegion: "Hà Nội",
      addressCountry: "VN",
    },
    openingHours: "Mo-Su 12:00-01:00",
    url: "/massage/gangnam-spa",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

export default function GangnamSpaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08080a] text-white">

      <BreadcrumbJsonLd />
      <BusinessJsonLd />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[430px] overflow-hidden sm:h-[500px] md:h-[600px]">

        <img
          src={mainImage}
          alt="하노이 강남스파 GANGNAM SPA"
          className="h-full w-full object-cover brightness-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/0" />

        <div className="absolute bottom-0 left-0 right-0">

          <div className="container pb-10 md:pb-14">

            <p className="text-xs font-black tracking-[0.35em] text-amber-400">
              HANOI · MASSAGE & SPA
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              하노이 강남스파
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              하노이 미딩 지역에서 마사지와 스파를 찾는 분들을 위한
              강남스파(GANGNAM SPA) 이용정보입니다.
              매장 위치와 시설 사진, 마사지 코스와 가격,
              영업시간 및 방문 전 확인사항을 한곳에서 확인하세요.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                GANGNAM SPA
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                미딩
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                딘톤
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                12:00 - 01:00
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-amber-400">
          GALLERY
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          하노이 강남스파 사진
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
          하노이 강남스파의 외관부터 리셉션,
          마사지룸과 휴게공간까지 실제 준비된 사진을 확인해보세요.
        </p>

        <div className="mt-8">

          <ImageGallery
            images={spaImages}
            name="하노이 강남스파"
          />

        </div>

      </section>


      {/* =====================================================
          PRICE
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <div className="text-center">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            PRICE GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            하노이 강남스파 가격
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            강남스파에서 안내되는 코스별 이용시간과 가격입니다.
            가격 및 코스 구성은 변경될 수 있으므로 방문 전 최신 내용을 확인하세요.
          </p>

        </div>


        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {/* A */}

          <div className="rounded-3xl border border-cyan-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-cyan-400">
              A COURSE
            </span>

            <h3 className="mt-3 text-2xl font-black">
              A코스
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              30분
            </p>

            <div className="mt-7 border-t border-white/10 pt-6">

              <p className="text-xs text-zinc-500">
                이용시간
              </p>

              <p className="mt-2 text-lg font-black">
                30분
              </p>

              <p className="mt-6 text-xs text-zinc-500">
                가격
              </p>

              <p className="mt-2 text-3xl font-black text-cyan-300">
                1,400,000
                <span className="ml-1 text-base">
                  VND
                </span>
              </p>

            </div>

          </div>


          {/* B */}

          <div className="rounded-3xl border border-amber-400/40 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-amber-400">
              B COURSE
            </span>

            <h3 className="mt-3 text-2xl font-black">
              B코스
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              60분
            </p>

            <div className="mt-7 border-t border-white/10 pt-6">

              <p className="text-xs text-zinc-500">
                이용시간
              </p>

              <p className="mt-2 text-lg font-black">
                60분
              </p>

              <p className="mt-6 text-xs text-zinc-500">
                가격
              </p>

              <p className="mt-2 text-3xl font-black text-amber-300">
                1,800,000
                <span className="ml-1 text-base">
                  VND
                </span>
              </p>

            </div>

          </div>


          {/* C */}

          <div className="rounded-3xl border border-fuchsia-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-fuchsia-400">
              C COURSE
            </span>

            <h3 className="mt-3 text-2xl font-black">
              C코스
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              90분
            </p>

            <div className="mt-7 border-t border-white/10 pt-6">

              <p className="text-xs text-zinc-500">
                이용시간
              </p>

              <p className="mt-2 text-lg font-black">
                90분
              </p>

              <p className="mt-6 text-xs text-zinc-500">
                가격
              </p>

              <p className="mt-2 text-3xl font-black text-fuchsia-300">
                2,100,000
                <span className="ml-1 text-base">
                  VND
                </span>
              </p>

            </div>

          </div>

        </div>


        <p className="mt-7 text-center text-xs text-zinc-600">
          ※ 가격은 제공된 가격표 기준이며 매장 사정에 따라 변경될 수 있습니다.
        </p>

      </section>


      {/* =====================================================
          BASIC INFO
      ===================================================== */}

      <section className="container py-12">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <p className="text-xs text-zinc-500">
              업종
            </p>

            <p className="mt-2 font-black">
              마사지 · 스파
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <p className="text-xs text-zinc-500">
              지역
            </p>

            <p className="mt-2 font-black">
              하노이 미딩 · 딘톤
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <p className="text-xs text-zinc-500">
              영업시간
            </p>

            <p className="mt-2 font-black">
              12:00 - 01:00
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <p className="text-xs text-zinc-500">
              상호명
            </p>

            <p className="mt-2 font-black">
              GANGNAM SPA
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-amber-400">
          ABOUT GANGNAM SPA
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          하노이 강남스파
        </h2>

        <div className="mt-8 max-w-4xl space-y-6 text-[15px] leading-8 text-zinc-400">

          <p>
            하노이 강남스파(GANGNAM SPA)는
            하노이 미딩 지역 딘톤에 위치한 마사지 및 스파 시설입니다.
          </p>

          <p>
            미딩 한인타운 인근에 위치하고 있어
            하노이에서 마사지나 스파를 찾는 한국인 여행객과
            출장객들이 방문하기 편리한 위치입니다.
          </p>

          <p>
            매장에는 리셉션과 마사지룸,
            휴게공간 및 스낵바 등의 시설이 있으며
            실제 매장 사진을 갤러리에서 확인할 수 있습니다.
          </p>

          <p>
            마사지 코스는 A, B, C 코스로 구분되어 있으며
            이용시간에 따라 가격이 달라집니다.
            방문 전 원하는 코스와 가격을 다시 확인하는 것을 권장합니다.
          </p>

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="container py-12">

        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            LOCATION
          </p>

          <h2 className="mt-3 text-3xl font-black">
            하노이 강남스파 위치
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400">
            강남스파는 하노이 미딩 지역의 딘톤 거리에 위치하고 있습니다.
            차량 호출 서비스를 이용할 경우 주소를 그대로 입력하여
            목적지를 확인하는 것이 좋습니다.
          </p>


          <div className="mt-8 rounded-2xl bg-black/40 p-6">

            <p className="text-xs text-zinc-500">
              ADDRESS
            </p>

            <p className="mt-3 text-lg font-black leading-8">
              18 Ng. 1 Đ. Đình Thôn,
              Đình Thôn, Nam Từ Liêm,
              Hà Nội, Vietnam
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              하노이 미딩 · 딘톤 지역
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          OPENING HOURS
      ===================================================== */}

      <section className="container py-12">

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs font-black tracking-[0.35em] text-amber-400">
              OPENING HOURS
            </p>

            <h2 className="mt-3 text-3xl font-black">
              영업시간
            </h2>

            <p className="mt-8 text-4xl font-black">
              12:00 - 01:00
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              매장 운영시간은 변경될 수 있으므로
              방문 당일 최신 정보를 확인하는 것을 권장합니다.
            </p>

          </div>


          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs font-black tracking-[0.35em] text-amber-400">
              RESERVATION
            </p>

            <h2 className="mt-3 text-3xl font-black">
              예약 방문
            </h2>

            <p className="mt-8 text-2xl font-black">
              방문 전 문의 권장
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              저녁시간이나 방문객이 많은 시간대에는
              원하는 시간에 이용할 수 있도록
              방문 전에 예약 가능 여부를 확인하는 것이 좋습니다.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-amber-400">
          FACILITIES
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          하노이 강남스파 시설
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🛋️
            </div>

            <h3 className="mt-4 text-xl font-black">
              리셉션
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              매장 입구와 리셉션 공간을
              실제 사진으로 확인할 수 있습니다.
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🛏️
            </div>

            <h3 className="mt-4 text-xl font-black">
              마사지룸
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              마사지 이용공간의 내부 모습을
              제공된 사진을 통해 확인할 수 있습니다.
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🥤
            </div>

            <h3 className="mt-4 text-xl font-black">
              스낵바 & 휴게공간
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              스낵바와 휴게공간도 준비되어 있으며
              제공된 시설 사진에서 확인할 수 있습니다.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRANSPORT
      ===================================================== */}

      <section className="container py-12">

        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            TRANSPORT
          </p>

          <h2 className="mt-3 text-3xl font-black">
            찾아가는 방법
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-400">

            <p>
              하노이 미딩 지역에서 차량 호출 서비스를 이용하면
              강남스파까지 편리하게 이동할 수 있습니다.
            </p>

            <p>
              Grab 등의 지도 및 차량 호출 앱에서
              주소를 입력한 뒤 목적지를 확인하는 것을 권장합니다.
            </p>

            <p>
              딘톤 지역은 미딩 한인타운과 가까워
              주변 식당이나 숙소에서 함께 이동하기 편리합니다.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHECK
      ===================================================== */}

      <section className="container py-12">

        <p className="text-xs font-black tracking-[0.35em] text-amber-400">
          GOOD TO KNOW
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          방문 전 체크사항
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {[
            "방문 당일 영업시간 확인",
            "정확한 매장 위치 확인",
            "원하는 코스 및 이용시간 확인",
            "최신 가격 확인",
            "가격에 포함되는 내용 확인",
            "추가 비용 여부 확인",
            "예약 가능 여부 확인",
            "최종 결제금액 확인",
          ].map((item) => (

            <div
              key={item}
              className="rounded-xl border border-white/10 bg-[#111114] p-5 text-sm text-zinc-300"
            >

              <span className="mr-3 text-amber-400">
                ✓
              </span>

              {item}

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-amber-400">
          FAQ
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          하노이 강남스파 자주 묻는 질문
        </h2>


        <div className="mt-8 space-y-4">

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              하노이 강남스파는 어디에 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              하노이 미딩 지역 딘톤에 위치하고 있습니다.
              주소는 18 Ng. 1 Đ. Đình Thôn,
              Đình Thôn, Nam Từ Liêm, Hà Nội입니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              강남스파 영업시간은 어떻게 되나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 확인되는 안내 기준 영업시간은
              매일 12:00부터 다음날 01:00까지입니다.
              방문 전 당일 운영 여부를 확인하는 것을 권장합니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              하노이 강남스파 가격은 얼마인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              제공된 가격표 기준으로 A코스 30분 1,400,000동,
              B코스 60분 1,800,000동,
              C코스 90분 2,100,000동입니다.
              가격은 변경될 수 있으므로 방문 전 다시 확인하세요.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              마사지 코스는 몇 가지인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 제공된 가격표에는 A, B, C 세 가지 코스가
              안내되어 있으며 각각 30분, 60분, 90분으로 구성되어 있습니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              미딩에서 찾아가기 편한가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              미딩 한인타운 인근 딘톤 지역에 위치해 있어
              Grab 등의 차량 호출 서비스를 이용하면 편리하게 방문할 수 있습니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              방문 전에 예약해야 하나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              방문객이 많은 시간대에는 원하는 시간에 이용하기 위해
              방문 전에 예약 가능 여부를 확인하는 것을 권장합니다.
            </p>

          </details>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="container py-14 md:py-20">

        <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-b from-amber-950/20 to-[#111114] p-8 text-center md:p-14">

          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            GANGNAM SPA HANOI
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            하노이 강남스파
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            하노이 미딩 강남스파의 시설 사진,
            마사지 코스와 가격, 위치 및 이용정보를 확인해보세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/massage"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-black transition hover:bg-white/10"
            >
              하노이 마사지 더보기
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
