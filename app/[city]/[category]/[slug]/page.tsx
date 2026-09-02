import type { Metadata } from "next";
import Link from "next/link";
import ImageGallery from "@/components/ImageGallery";

const GANGNAM_SLUG = "gangnam-spa";

const mainImage = "/하노이 강남스파 메인.webp";

const galleryImages = [
  {
    src: "/하노이 강남스파 외관.webp",
    title: "강남스파 외관",
  },
  {
    src: "/하노이 강남스파 리셉션.webp",
    title: "강남스파 리셉션",
  },
  {
    src: "/하노이 강남스파 룸1.webp",
    title: "강남스파 마사지룸",
  },
  {
    src: "/하노이 강남스파 룸2.webp",
    title: "강남스파 마사지룸 2",
  },
  {
    src: "/하노이 강남스파 휴게실.webp",
    title: "강남스파 휴게실",
  },
  {
    src: "/하노이 강남스파 스낵바.webp",
    title: "강남스파 스낵바",
  },
];

const galleryForComponent = galleryImages.map((image) => image.src);

const courses = [
  {
    name: "A코스",
    time: "30분",
    price: "140만동",
    description: "짧은 시간 동안 기본적인 휴식과 케어를 받을 수 있는 코스입니다.",
    items: ["샤워", "기본 케어", "마무리"],
  },
  {
    name: "B코스",
    time: "60분",
    price: "180만동",
    description: "보다 여유롭게 스파와 마사지 케어를 이용할 수 있는 코스입니다.",
    items: ["샤워", "바디 케어", "마사지", "마무리"],
  },
  {
    name: "C코스",
    time: "90분",
    price: "210만동",
    description: "충분한 시간을 두고 스파와 마사지 케어를 이용하는 코스입니다.",
    items: ["샤워", "아로마탕", "바디 케어", "마사지", "마무리"],
  },
];

export function generateStaticParams() {
  return [
    {
      city: "hanoi",
      category: "massage",
      slug: GANGNAM_SLUG,
    },
  ];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "하노이 강남스파 | Gangnam Spa Hanoi",
    description:
      "하노이 미딩·딘톤 지역 강남스파의 위치, 영업시간, 시설 사진, 마사지 코스와 가격 정보를 확인하세요.",
    keywords: [
      "하노이 강남스파",
      "강남스파",
      "하노이 마사지",
      "하노이 스파",
      "미딩 마사지",
      "미딩 스파",
      "딘톤 마사지",
      "Gangnam Spa Hanoi",
      "Hanoi Massage",
    ],
    alternates: {
      canonical: "/hanoi/massage/gangnam-spa",
    },
    openGraph: {
      title: "하노이 강남스파",
      description:
        "하노이 미딩·딘톤 강남스파 위치, 시설, 사진, 영업시간과 가격 안내",
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

function BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "하노이 강남스파",
    alternateName: "Gangnam Spa Hanoi",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nam Tu Liem",
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
  params: Promise<{
    city: string;
    category: string;
    slug: string;
  }>;
}) {
  const { city, category, slug } = await params;

  if (
    city !== "hanoi" ||
    category !== "massage" ||
    slug !== GANGNAM_SLUG
  ) {
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
          src={mainImage}
          alt="하노이 강남스파 메인 사진"
          className="h-full w-full object-cover brightness-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-10 md:pb-14">
            <p className="text-xs font-black tracking-[0.35em] text-amber-400">
              HANOI · MASSAGE & SPA
            </p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              하노이 강남스파
            </h1>

            <p className="mt-3 text-lg font-bold text-zinc-300">
              GANGNAM SPA · MỸ ĐÌNH · ĐÌNH THÔN
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
              하노이 미딩·딘톤 지역에서 이용할 수 있는 강남스파의
              위치와 시설, 마사지 코스 및 가격 정보를 정리했습니다.
              방문 전에 필요한 정보를 한곳에서 확인해보세요.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-300 backdrop-blur">
                인기 스파
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                미딩 · 딘톤
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                12:00 - 01:00
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                마사지 · 스파
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
          강남스파 사진
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
          외관부터 리셉션, 마사지룸과 휴게공간까지
          강남스파의 시설 사진을 한곳에서 확인해보세요.
        </p>

        <div className="mt-8">
          <ImageGallery
            images={galleryForComponent}
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
            강남스파 가격 안내
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
            아래 가격은 제공받은 가격표를 기준으로 정리했습니다.
            실제 방문 시 가격이나 코스 구성은 변경될 수 있으므로
            방문 전에 최신 정보를 확인해주세요.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={course.name}
              className={`rounded-3xl border bg-[#111114] p-7 ${
                index === 0
                  ? "border-white/10"
                  : index === 1
                    ? "border-amber-400/30"
                    : "border-red-400/30"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-black tracking-[0.25em] text-amber-400">
                    {course.name}
                  </span>

                  <h3 className="mt-3 text-2xl font-black">
                    {course.time}
                  </h3>
                </div>

                <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 px-4 py-3 text-right">
                  <p className="text-xs text-zinc-500">
                    PRICE
                  </p>

                  <p className="mt-1 text-lg font-black text-amber-300">
                    {course.price}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-zinc-500">
                {course.description}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-bold tracking-wider text-zinc-600">
                  COURSE
                </p>

                <div className="space-y-2">
                  {course.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-amber-400">
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
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-5 text-center">
          <p className="text-sm font-bold text-amber-300">
            모든 금액은 제공받은 가격표 기준입니다.
          </p>

          <p className="mt-2 text-xs leading-6 text-zinc-500">
            가격 및 코스 구성은 변경될 수 있으므로
            실제 이용 전 최신 내용을 확인하시기 바랍니다.
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
              마사지 · 스파
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <p className="text-xs text-zinc-500">
              위치
            </p>

            <p className="mt-2 font-black">
              미딩 · 딘톤
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
              지역
            </p>

            <p className="mt-2 font-black">
              Hanoi · Nam Tu Liem
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
            하노이 강남스파는 미딩과 딘톤 지역에서
            마사지와 스파를 찾는 여행객들이 확인할 수 있는
            업소 정보입니다.
          </p>

          <p>
            이 페이지에서는 강남스파의 위치와 영업시간,
            시설 사진, 이용 가능한 코스와 가격 정보를
            한곳에서 확인할 수 있도록 정리했습니다.
          </p>

          <p>
            하노이에서 마사지나 스파를 선택할 때는
            가격뿐만 아니라 매장 위치와 이동 거리,
            영업시간, 시설 상태 및 실제 이용조건을
            함께 확인하는 것이 좋습니다.
          </p>

          <p>
            특히 가격과 운영시간은 변경될 수 있으므로
            방문 예정일에 최신 정보를 다시 확인하는 것을
            권장합니다.
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
            하노이 미딩·딘톤 지역에 위치한 강남스파입니다.
            정확한 방문 위치는 방문 전에 최신 지도 정보를
            다시 확인하는 것을 권장합니다.
          </p>

          <div className="mt-8 rounded-2xl bg-black/40 p-6">
            <p className="text-xs text-zinc-500">
              지역
            </p>

            <p className="mt-2 text-lg font-black">
              Đình Thôn · Nam Từ Liêm · Hà Nội
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Mỹ Đình · Đình Thôn 일대
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
              영업시간은 변경될 수 있으므로
              방문 당일 다시 확인하는 것을 권장합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 md:p-10">
            <p className="text-xs font-black tracking-[0.35em] text-red-500">
              RESERVATION
            </p>

            <h2 className="mt-3 text-3xl font-black">
              예약 안내
            </h2>

            <p className="mt-8 text-2xl font-black">
              방문 전 예약 권장
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              저녁시간이나 주말 등 이용객이 많은 시간에는
              원하는 시간에 이용하기 위해 미리 예약 여부를
              확인하는 것이 좋습니다.
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
              스파 시설
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              스파와 휴식을 위한 공간을 이용할 수 있습니다.
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
              편안하게 마사지와 휴식을 받을 수 있는
              개별 공간이 마련되어 있습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111114] p-7">
            <div className="text-3xl">
              ☕
            </div>

            <h3 className="mt-4 text-xl font-black">
              휴게공간
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              이용 전후 편하게 휴식할 수 있는
              휴게공간을 확인할 수 있습니다.
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
              하노이 미딩 지역에서는 Grab 등의 차량 호출 서비스를
              이용하면 편리하게 이동할 수 있습니다.
            </p>

            <p>
              차량 호출 전 업소의 정확한 위치와 목적지를
              확인하는 것을 권장합니다.
            </p>

            <p>
              처음 방문하는 경우 예약 시 숙소 위치를 전달하고
              이동 방법을 함께 확인하면 더욱 편리합니다.
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
            "원하는 마사지 코스 확인",
            "최신 가격 확인",
            "코스에 포함되는 내용 확인",
            "추가 비용 여부 확인",
            "결제 방법 확인",
            "예약 가능 여부 확인",
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
              하노이 강남스파 영업시간은?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              현재 안내되는 영업시간은
              12:00 - 01:00입니다.
              영업시간은 변경될 수 있으므로
              방문 당일 다시 확인하세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              강남스파는 어디에 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              하노이 미딩·딘톤 지역에 위치한 것으로
              안내되고 있습니다.
              방문 전 정확한 위치를 지도에서 확인하세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              마사지 가격은 얼마인가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              제공받은 가격표 기준으로 A코스 140만동,
              B코스 180만동, C코스 210만동으로
              정리되어 있습니다.
              가격은 변경될 수 있으므로 방문 전 최신 가격을
              확인하세요.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              예약이 필요한가요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              이용객이 많은 시간에는 원하는 시간에 이용하기 위해
              방문 전에 예약 가능 여부를 확인하는 것을 권장합니다.
            </p>
          </details>

          <details className="rounded-2xl border border-white/10 bg-[#111114] p-6">
            <summary className="cursor-pointer font-black">
              사진으로 시설을 확인할 수 있나요?
            </summary>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              페이지 상단 GALLERY에서 외관, 리셉션,
              마사지룸과 휴게공간 등의 사진을 확인할 수 있습니다.
            </p>
          </details>
        </div>
      </section>

      {/* =====================================================
          SEO CONTENT
      ===================================================== */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl">
          <p className="text-xs font-black tracking-[0.35em] text-amber-400">
            HANOI MASSAGE GUIDE
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            하노이 강남스파를 찾는 여행객을 위한 안내
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-8 text-zinc-400">
            <p>
              하노이 미딩과 딘톤 지역에서 마사지와 스파를
              찾는 여행객이라면 매장의 위치와 영업시간,
              시설 및 가격을 함께 비교하는 것이 좋습니다.
            </p>

            <p>
              강남스파 역시 미딩·딘톤 지역에서 확인할 수 있는
              마사지·스파 정보 중 하나이며,
              방문 전 이용 가능한 코스와 가격을 확인하면
              보다 편리하게 이용할 수 있습니다.
            </p>

            <p>
              이 페이지에서는 하노이 강남스파의 시설 사진과
              기본 정보, 가격표, 방문 전 체크사항 및
              자주 묻는 질문을 한곳에 정리했습니다.
            </p>

            <p>
              가격과 영업시간, 코스 구성은 매장 사정에 따라
              변경될 수 있으므로 실제 방문 전 최신 정보를
              다시 확인하시기 바랍니다.
            </p>
          </div>
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
            위치와 시설 사진, 가격 및 방문 전 확인사항을
            확인하고 하노이 여행을 준비해보세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/hanoi/massage"
              className="rounded-xl bg-red-600 px-7 py-3 text-sm font-black transition hover:bg-red-500"
            >
              하노이 마사지 더보기
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-black transition hover:bg-white/10"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
