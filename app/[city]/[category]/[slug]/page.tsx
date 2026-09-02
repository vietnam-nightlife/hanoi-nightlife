import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const GANGNAM_SLUG = "gangnam-spa";

const GITHUB_RAW =
  "https://raw.githubusercontent.com/vietnam-nightlife/thailand-nightlife/main";

const gangnamMainImage =
  `${GITHUB_RAW}/${encodeURIComponent("하노이 강남스파 메인.webp")}`;

const gangnamImages = [
  `${GITHUB_RAW}/${encodeURIComponent("하노이 강남스파 외관.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("하노이 강남스파 내부.webp")}`,
  `${GITHUB_RAW}/${encodeURIComponent("하노이 강남스파 시설.webp")}`,
];

export function generateStaticParams() {
  return [
    {
      slug: GANGNAM_SLUG,
    },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== GANGNAM_SLUG) {
    return {
      title: "하노이 마사지",
    };
  }

  return {
    title: "하노이 강남스파 | Gangnam Spa Hanoi",
    description:
      "하노이 미딩 강남스파 위치, 시설, 마사지 코스, 가격, 영업시간과 방문 전 확인사항을 한곳에서 확인하세요.",
    keywords: [
      "하노이 강남스파",
      "강남스파",
      "Gangnam Spa Hanoi",
      "하노이 마사지",
      "하노이 스파",
      "미딩 마사지",
      "미딩 스파",
      "딘톤 마사지",
      "하노이 마사지 가격",
      "하노이 마사지 추천",
    ],
    alternates: {
      canonical: `/hanoi/massage/${slug}`,
    },
    openGraph: {
      title: "하노이 강남스파",
      description:
        "하노이 미딩 강남스파 위치, 시설, 가격 및 이용정보",
      type: "website",
      images: [
        {
          url: gangnamMainImage,
          alt: "하노이 강남스파",
        },
      ],
    },
  };
}

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
        name: "하노이 강남스파",
        item: `/hanoi/massage/${GANGNAM_SLUG}`,
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
    name: "강남스파",
    alternateName: "Gangnam Spa Hanoi",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Ng. 1 Đ. Đình Thôn",
      addressLocality: "Nam Từ Liêm",
      addressRegion: "Hanoi",
      addressCountry: "VN",
    },
    openingHours: "Mo-Su 12:00-01:00",
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

export default async function GangnamSpaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== GANGNAM_SLUG) {
    return null;
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
          src={gangnamMainImage}
          alt="하노이 강남스파"
          className="h-full w-full object-cover brightness-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0" />

        <div className="absolute bottom-0 left-0 right-0">

          <div className="container pb-10 md:pb-14">

            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              HANOI · MASSAGE
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              하노이 강남스파
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              하노이 미딩·딘톤 지역에서 마사지와 스파를
              찾는 여행객을 위한 강남스파 정보입니다.
              위치, 시설, 가격, 영업시간과 방문 전
              확인사항을 한곳에서 확인하세요.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                하노이 미딩
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                마사지 · 스파
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                한국어 응대 가능
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

        <p className="text-xs font-black tracking-[0.35em] text-red-500">
          GALLERY
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          강남스파 시설 사진
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
          강남스파의 외관과 내부 시설을
          사진으로 확인해보세요.
        </p>

        <div className="mt-8">

          <ImageGallery
            images={gangnamImages}
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
            강남스파 마사지 가격 안내
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            제공해주신 강남스파 가격표를 기준으로
            보기 쉽게 정리했습니다.
            실제 이용 전 최신 가격을 다시 확인해주세요.
          </p>

        </div>


        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {/* A */}

          <div className="rounded-3xl border border-cyan-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-cyan-400">
              COURSE A
            </span>

            <h3 className="mt-3 text-2xl font-black">
              A 코스
            </h3>

            <div className="mt-7 border-t border-white/10">

              <div className="flex justify-between border-b border-white/10 py-5">
                <span className="text-zinc-400">
                  이용시간
                </span>

                <strong className="text-cyan-300">
                  30분
                </strong>
              </div>

              <div className="flex justify-between py-5">
                <span className="text-zinc-400">
                  가격
                </span>

                <strong className="text-cyan-300">
                  140만동
                </strong>
              </div>

            </div>

            <div className="mt-4 space-y-2 text-sm text-zinc-500">
              <p>✓ 샤워</p>
              <p>✓ 기본 케어</p>
              <p>✓ 마무리 샤워</p>
            </div>

          </div>


          {/* B */}

          <div className="rounded-3xl border border-amber-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-amber-400">
              COURSE B
            </span>

            <h3 className="mt-3 text-2xl font-black">
              B 코스
            </h3>

            <div className="mt-7 border-t border-white/10">

              <div className="flex justify-between border-b border-white/10 py-5">
                <span className="text-zinc-400">
                  이용시간
                </span>

                <strong className="text-amber-300">
                  60분
                </strong>
              </div>

              <div className="flex justify-between py-5">
                <span className="text-zinc-400">
                  가격
                </span>

                <strong className="text-amber-300">
                  180만동
                </strong>
              </div>

            </div>

            <div className="mt-4 space-y-2 text-sm text-zinc-500">
              <p>✓ 샤워</p>
              <p>✓ 바디 케어</p>
              <p>✓ 전신 관리</p>
              <p>✓ 추가 케어</p>
              <p>✓ 마무리 샤워</p>
            </div>

          </div>


          {/* C */}

          <div className="rounded-3xl border border-fuchsia-400/30 bg-[#111114] p-7">

            <span className="text-xs font-black tracking-[0.25em] text-fuchsia-400">
              COURSE C
            </span>

            <h3 className="mt-3 text-2xl font-black">
              C 코스
            </h3>

            <div className="mt-7 border-t border-white/10">

              <div className="flex justify-between border-b border-white/10 py-5">
                <span className="text-zinc-400">
                  이용시간
                </span>

                <strong className="text-fuchsia-300">
                  90분
                </strong>
              </div>

              <div className="flex justify-between py-5">
                <span className="text-zinc-400">
                  가격
                </span>

                <strong className="text-fuchsia-300">
                  210만동
                </strong>
              </div>

            </div>

            <div className="mt-4 space-y-2 text-sm text-zinc-500">
              <p>✓ 샤워</p>
              <p>✓ 아로마 탕</p>
              <p>✓ 바디 케어</p>
              <p>✓ 전신 관리</p>
              <p>✓ 추가 케어</p>
              <p>✓ 마무리 샤워</p>
            </div>

          </div>

        </div>

        <p className="mt-7 text-center text-xs text-zinc-600">
          ※ 가격 및 이용조건은 변경될 수 있으므로
          방문 전 최신 정보를 확인해주세요.
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
              위치
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
              응대
            </p>

            <p className="mt-2 font-black">
              한국어 응대 가능
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
            하노이 강남스파는 미딩·딘톤 지역에서
            마사지와 스파를 찾는 여행객들이 참고할 수 있는
            업소 정보입니다.
          </p>

          <p>
            미딩 지역은 한국인 여행객과 장기 체류객들이
            많이 찾는 지역 중 하나로,
            주변에 다양한 식당과 편의시설이 있어
            여행 일정 중 마사지나 스파를 함께 이용하기 좋습니다.
          </p>

          <p>
            강남스파 방문을 계획한다면 원하는 코스와
            이용시간을 미리 확인하고 방문하는 것을 권장합니다.
            특히 저녁 시간이나 주말에는 예약 가능 여부를
            먼저 확인하는 것이 좋습니다.
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
            강남스파는 하노이 미딩·딘톤 지역에
            위치한 것으로 안내되고 있습니다.
            처음 방문하는 경우 출발 전에 지도 앱에서
            정확한 위치를 다시 확인하는 것을 권장합니다.
          </p>

          <div className="mt-8 rounded-2xl bg-black/40 p-6">

            <p className="text-xs text-zinc-500">
              주소
            </p>

            <p className="mt-2 text-lg font-black">
              18 Ng. 1 Đ. Đình Thôn
            </p>

            <p className="mt-2 text-sm leading-7 text-zinc-500">
              Đình Thôn, Nam Từ Liêm,
              Hà Nội, Vietnam
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
              늦은 시간 방문 예정이라면
              당일 영업 여부를 미리 확인하세요.
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
              미리 예약 권장
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              원하는 시간대에 이용하려면
              방문 전 예약 가능 여부를 확인하는 것이 좋습니다.
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
              마사지 이용 전후로 편하게 이용할 수 있는
              샤워 시설을 안내하고 있습니다.
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
              마사지 코스와 이용시간에 맞춰
              편안하게 관리받을 수 있는 공간입니다.
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">

            <div className="text-3xl">
              🇰🇷
            </div>

            <h3 className="mt-4 text-xl font-black">
              한국어 응대
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              한국인 여행객이 방문하기 편하도록
              한국어 응대가 가능한 것으로 안내되고 있습니다.
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
              하노이 시내에서 강남스파로 이동할 경우
              Grab 또는 택시 서비스를 이용하면 편리합니다.
            </p>

            <p>
              목적지 주소를 기사에게 보여주거나
              지도 앱에 강남스파 주소를 입력하여
              정확한 위치를 확인하세요.
            </p>

            <p>
              미딩·딘톤 지역의 교통 상황에 따라
              이동시간이 달라질 수 있으므로
              예약시간보다 여유 있게 출발하는 것을 권장합니다.
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
            "매장 위치 확인",
            "원하는 마사지 코스 확인",
            "코스 이용시간 확인",
            "가격표 최신 내용 확인",
            "추가 비용 여부 확인",
            "예약 가능 여부 확인",
            "방문 전 최종 금액 확인",
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
              강남스파 영업시간은 언제인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              안내된 영업시간은
              12:00 - 01:00입니다.
              늦은 시간 방문 예정이라면
              당일 운영 여부를 다시 확인하는 것을 권장합니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              강남스파는 어디에 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              하노이 미딩·딘톤 지역에 위치한 것으로
              안내되고 있습니다.
              방문 전 지도 앱에서 정확한 위치를 확인하세요.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              마사지 가격은 얼마인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              제공해주신 가격표 기준으로
              A코스 140만동,
              B코스 180만동,
              C코스 210만동입니다.
              실제 방문 시 가격이 변경될 수 있으므로
              최신 가격을 확인하세요.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              한국어 응대가 가능한가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              한국인 여행객을 위한 한국어 응대가 가능한
              업소로 안내되고 있습니다.
              방문 전에 원하는 서비스를 정확하게 전달하기 위해
              예약 시 다시 확인하는 것을 권장합니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              예약을 미리 해야 하나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              원하는 시간대에 이용하려면
              사전 예약을 권장합니다.
              특히 저녁시간이나 주말에는 방문 전에
              이용 가능 여부를 확인하는 것이 좋습니다.
            </p>

          </details>


          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">

            <summary className="cursor-pointer font-black">
              가격 외에 추가 비용이 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              코스와 이용조건에 따라 추가 비용이 발생할 수 있으므로
              이용 전에 포함사항과 최종 금액을 확인하는 것을 권장합니다.
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
            강남스파의 위치와 시설,
            마사지 코스 및 가격 정보를 확인하고
            방문 전에 필요한 내용을 미리 체크해보세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/contact"
              className="rounded-xl bg-red-600 px-7 py-3 text-sm font-black transition hover:bg-red-500"
            >
              문의하기
            </Link>

            <Link
              href="/hanoi/massage"
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
