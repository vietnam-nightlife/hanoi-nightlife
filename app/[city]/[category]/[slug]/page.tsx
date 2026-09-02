import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const GANGNAM_SLUG = "gangnam-spa";

const mainImage = "/하노이 강남스파 메인.webp";

const galleryImages = [
  {
    src: "/하노이 강남스파 외관.webp",
    title: "강남스파 외관",
  },
  {
    src: "/하노이 강남스파 시설.webp",
    title: "강남스파 시설",
  },
  {
    src: "/하노이 강남스파 내부.webp",
    title: "강남스파 내부",
  },
  {
    src: "/하노이 강남스파 룸.webp",
    title: "강남스파 룸",
  },
];

/* =====================================================
   STATIC PARAMS
===================================================== */

export function generateStaticParams() {
  return [
    {
      city: "hanoi",
      category: "massage",
      slug: GANGNAM_SLUG,
    },
  ];
}

/* =====================================================
   METADATA
===================================================== */

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "하노이 강남스파 | Gangnam Spa | 미딩 마사지 위치·가격·시설",
    description:
      "하노이 미딩 강남스파의 위치, 영업시간, 시설, 코스와 가격 정보를 한눈에 확인하세요.",
    keywords: [
      "하노이 강남스파",
      "하노이 강남 스파",
      "Gangnam Spa Hanoi",
      "하노이 마사지",
      "미딩 마사지",
      "하노이 미딩 마사지",
      "하노이 스파",
      "강남스파 가격",
      "강남스파 위치",
    ],
    alternates: {
      canonical: "/hanoi/massage/gangnam-spa",
    },
    openGraph: {
      title: "하노이 강남스파 | Gangnam Spa",
      description:
        "하노이 미딩 강남스파의 위치, 시설, 영업시간과 가격 정보를 확인하세요.",
      type: "website",
      images: [
        {
          url: mainImage,
          alt: "하노이 강남스파",
        },
      ],
    },
  };
}

/* =====================================================
   BREADCRUMB JSON-LD
===================================================== */

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
        item: "/hanoi/massage",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "강남스파",
        item: "/hanoi/massage/gangnam-spa",
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

/* =====================================================
   BUSINESS JSON-LD
===================================================== */

function BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: "하노이 강남스파",
    alternateName: "Gangnam Spa",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Ng. 1 Đ. Đình Thôn",
      addressLocality: "Nam Từ Liêm",
      addressRegion: "Hà Nội",
      addressCountry: "VN",
    },
    openingHours: "Mo-Su 12:00-01:00",
    image: mainImage,
    url: "/hanoi/massage/gangnam-spa",
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

/* =====================================================
   PAGE
===================================================== */

export default async function GangnamSpaPage({
  params,
}: {
  params: Promise<{
    city: string;
    category: string;
    slug: string;
  }>;
}) {
  const { city, category, slug } = await params;

  /*
   * 이 페이지는 강남스파 전용입니다.
   * 다른 업소 slug에는 이 코드가 적용되지 않습니다.
   */
  if (
    city !== "hanoi" ||
    category !== "massage" ||
    slug !== GANGNAM_SLUG
  ) {
    notFound();
  }

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
          alt="하노이 강남스파"
          className="h-full w-full object-cover brightness-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/0" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-10 md:pb-14">
            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              HANOI · MASSAGE
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              하노이 강남스파
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              하노이 미딩 한인타운 인근에서 이용할 수 있는
              강남스파 정보를 정리했습니다.
              위치와 시설, 영업시간, 코스 및 가격 정보를
              방문 전에 확인해보세요.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                GANGNAM SPA
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                미딩
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                12:00 - 01:00
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                사전 문의 권장
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="container py-12 md:py-16">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          GALLERY
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          하노이 강남스파 사진
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
          강남스파의 외관과 내부 시설을 사진으로
          확인해보세요.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111114]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <p className="text-sm font-black">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
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
            강남스파 가격 안내
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            아래 가격은 제공받은 가격표를 기준으로 정리한
            안내이며, 실제 이용 전 최신 가격과 포함사항을
            확인하는 것을 권장합니다.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {/* A COURSE */}

          <div className="rounded-3xl border border-amber-400/30 bg-[#111114] p-7 transition hover:border-amber-300/60">
            <span className="text-xs font-black tracking-[0.25em] text-amber-400">
              A COURSE
            </span>

            <h3 className="mt-3 text-2xl font-black">
              A코스
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              30분
            </p>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-4xl font-black text-amber-300">
                140만동
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                기본 샤워 및 바디 케어가 포함된
                30분 코스입니다.
              </p>
            </div>
          </div>

          {/* B COURSE */}

          <div className="rounded-3xl border border-amber-400/30 bg-[#111114] p-7 transition hover:border-amber-300/60">
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
              <p className="text-4xl font-black text-amber-300">
                180만동
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                60분 동안 보다 여유롭게 이용할 수 있는
                기본 코스입니다.
              </p>
            </div>
          </div>

          {/* C COURSE */}

          <div className="rounded-3xl border border-amber-400/30 bg-[#111114] p-7 transition hover:border-amber-300/60">
            <span className="text-xs font-black tracking-[0.25em] text-amber-400">
              C COURSE
            </span>

            <h3 className="mt-3 text-2xl font-black">
              C코스
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              90분
            </p>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-4xl font-black text-amber-300">
                210만동
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                90분 동안 여유롭게 이용할 수 있는
                장시간 코스입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
          <p className="text-sm font-black text-amber-300">
            PRICE NOTE
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            가격 및 코스 구성은 변경될 수 있습니다.
            방문 전 최신 가격과 이용시간,
            포함사항을 반드시 확인해주세요.
          </p>
        </div>
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
              스파 · 마사지
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <p className="text-xs text-zinc-500">
              위치
            </p>

            <p className="mt-2 font-black">
              하노이 미딩
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
              예약
            </p>

            <p className="mt-2 font-black">
              사전 문의 권장
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="container py-12 md:py-16">
        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          ABOUT GANGNAM SPA
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          하노이 강남스파
        </h2>

        <div className="mt-8 max-w-4xl space-y-6 text-[15px] leading-8 text-zinc-400">

          <p>
            하노이 강남스파는 미딩 한인타운 인근에서
            이용할 수 있는 스파·마사지 업소로,
            한국인 여행객과 현지 거주자들이 찾는 곳으로
            소개되고 있습니다.
          </p>

          <p>
            미딩 지역은 한국 식당과 카페,
            호텔 및 다양한 편의시설이 모여 있어
            여행이나 출장 중 마사지와 휴식을 함께
            이용하기 좋은 지역입니다.
          </p>

          <p>
            강남스파 방문을 계획하고 있다면
            출발 전에 위치와 영업시간,
            당일 이용 가능 여부를 확인하는 것이 좋습니다.
          </p>

        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="container py-12">
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            LOCATION
          </p>

          <h2 className="mt-3 text-3xl font-black">
            강남스파 위치
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-400">
            하노이 미딩 지역의 Đình Thôn 일대에
            위치한 것으로 안내되고 있습니다.
            차량으로 이동할 경우 주소를 기사에게 보여주거나
            지도 앱에서 목적지를 다시 확인하는 것을 권장합니다.
          </p>

          <div className="mt-8 rounded-2xl bg-black/40 p-6">

            <p className="text-xs text-zinc-500">
              주소
            </p>

            <p className="mt-2 text-lg font-black">
              18 Ng. 1 Đ. Đình Thôn
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Đình Thôn, Nam Từ Liêm, Hà Nội
            </p>

            <p className="mt-4 text-xs text-zinc-600">
              Hanoi · Mỹ Đình · Đình Thôn
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

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              OPENING HOURS
            </p>

            <h2 className="mt-3 text-3xl font-black">
              영업시간
            </h2>

            <p className="mt-8 text-4xl font-black">
              12:00 - 01:00
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              온라인 자료에 따라 운영시간 안내가
              다르게 표시되는 경우가 있으므로
              방문 당일 영업 여부를 확인해주세요.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              RESERVATION
            </p>

            <h2 className="mt-3 text-3xl font-black">
              예약 방문
            </h2>

            <p className="mt-8 text-2xl font-black">
              사전 문의 권장
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              원하는 시간에 이용하려면 방문 전에
              영업 여부와 이용 가능한 코스를
              확인하는 것을 권장합니다.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className="container py-12 md:py-16">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          FACILITIES
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          강남스파 시설
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🛁
            </div>

            <h3 className="mt-4 text-xl font-black">
              샤워 시설
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              코스 이용 전후 편하게 사용할 수 있는
              기본 샤워 시설이 안내되어 있습니다.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🛋️
            </div>

            <h3 className="mt-4 text-xl font-black">
              프라이빗 공간
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              편안하게 이용할 수 있도록
              개인 공간 중심으로 구성된 시설입니다.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              💆
            </div>

            <h3 className="mt-4 text-xl font-black">
              마사지 공간
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              시간별 코스를 선택하여
              휴식과 바디 케어를 받을 수 있습니다.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          TRANSPORT
      ===================================================== */}

      <section className="container py-12">

        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            TRANSPORT
          </p>

          <h2 className="mt-3 text-3xl font-black">
            찾아가는 방법
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-400">

            <p>
              미딩 지역에서는 Grab 또는 현지 차량 호출
              서비스를 이용하면 편리하게 이동할 수 있습니다.
            </p>

            <p>
              목적지 검색 시
              <strong className="text-white">
                {" "}Gangnam Spa
              </strong>
              또는
              <strong className="text-white">
                {" "}18 Ng. 1 Đ. Đình Thôn
              </strong>
              을 확인해주세요.
            </p>

            <p>
              기사에게 주소를 보여주고 목적지를
              출발 전에 다시 확인하는 것이 좋습니다.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          CHECK
      ===================================================== */}

      <section className="container py-12">

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          GOOD TO KNOW
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          방문 전 체크사항
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {[
            "방문 당일 영업시간 확인",
            "정확한 매장 위치 확인",
            "이용 가능한 코스 확인",
            "최신 가격 확인",
            "코스별 이용시간 확인",
            "포함사항 확인",
            "추가 비용 여부 확인",
            "방문 전 예약 및 문의 확인",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-[#111114] p-5 text-sm text-zinc-300"
            >
              <span className="mr-3 text-red-500">
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

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          FAQ
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          자주 묻는 질문
        </h2>

        <div className="mt-8 space-y-4">

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              강남스파는 어디에 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              하노이 미딩 지역의 Đình Thôn 일대에
              위치한 것으로 안내되고 있습니다.
              주소는 18 Ng. 1 Đ. Đình Thôn이며,
              방문 전 지도에서 위치를 다시 확인해주세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              영업시간은 어떻게 되나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 안내 기준으로 12:00부터 01:00까지로
              확인됩니다. 운영시간은 변경될 수 있으므로
              방문 당일 확인하는 것을 권장합니다.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              가격은 얼마인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              제공받은 가격표 기준으로 A코스 30분
              140만동, B코스 60분 180만동,
              C코스 90분 210만동으로 안내됩니다.
              실제 가격은 방문 전 최신 정보를 확인해주세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              예약이 필요한가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              방문 전 영업 여부와 이용 가능한 코스를
              확인하는 것을 권장합니다. 특히 원하는
              시간대가 있다면 사전 문의가 편리합니다.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              미딩에서 찾아가기 어렵지 않나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Grab 등 차량 호출 서비스를 이용하면
              편리하게 이동할 수 있습니다.
              기사에게 정확한 주소를 보여주고
              목적지를 확인하는 것을 권장합니다.
            </p>
          </details>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="container py-14 md:py-20">

        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 to-[#111114] p-8 text-center md:p-14">

          <p className="text-xs font-black tracking-[0.35em] text-red-500">
            GANGNAM SPA HANOI
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            하노이 강남스파
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
            하노이 강남스파의 위치와 시설,
            사진 및 가격 정보를 확인해보세요.
            방문 전 최신 운영정보를 확인하는 것을 권장합니다.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/hanoi/massage"
              className="rounded-xl bg-red-600 px-7 py-3 text-sm font-black transition hover:bg-red-500"
            >
              하노이 마사지 더보기
            </Link>

            <Link
              href="/hanoi"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-black transition hover:bg-white/10"
            >
              하노이 홈으로
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
