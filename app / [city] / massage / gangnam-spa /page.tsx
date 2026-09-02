import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

const CITY = "hanoi";

export const metadata = {
  title: "하노이 강남스파 | 미딩 마사지 · 스파 이용안내",
  description:
    "하노이 미딩 강남스파의 위치, 영업시간, 코스 및 가격, 이용방법과 자주 묻는 질문을 한눈에 확인하세요.",
  keywords: [
    "하노이 강남스파",
    "강남스파",
    "하노이 마사지",
    "하노이 미딩 마사지",
    "미딩 마사지",
    "하노이 스파",
    "하노이 마사지 추천",
  ],
  alternates: {
    canonical: "/hanoi/massage/gangnam-spa",
  },
  openGraph: {
    title: "하노이 강남스파 | 미딩 마사지 · 스파",
    description:
      "하노이 미딩 강남스파의 기본정보와 코스, 가격, 이용방법을 확인하세요.",
    type: "article",
  },
};

export function generateStaticParams() {
  return [{ city: CITY }];
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 border-b border-white/10 py-5 last:border-b-0 sm:flex-row sm:items-start">
      <div className="w-full shrink-0 text-sm font-semibold text-white/45 sm:w-32">
        {label}
      </div>
      <div className="text-sm leading-7 text-white/80">{children}</div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <div className="mb-2 text-[11px] font-bold tracking-[0.28em] text-red-500">
        {eyebrow}
      </div>

      <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/50">
          {description}
        </p>
      )}
    </div>
  );
}

function CourseCard({
  name,
  duration,
  price,
  summary,
  items,
  featured = false,
}: {
  name: string;
  duration: string;
  price: string;
  summary: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border ${
        featured
          ? "border-amber-400/50 bg-gradient-to-b from-amber-500/[0.10] to-white/[0.03]"
          : "border-white/10 bg-white/[0.035]"
      } p-6 sm:p-7`}
    >
      {featured && (
        <div className="absolute right-5 top-5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[10px] font-bold tracking-wider text-amber-200">
          RECOMMENDED
        </div>
      )}

      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-[0.2em] text-white/40">
            COURSE
          </div>

          <h3 className="mt-2 text-2xl font-extrabold text-white">
            {name}
          </h3>

          <div className="mt-1 text-sm text-white/50">{duration}</div>
        </div>

        <div className="text-right">
          <div className="text-[11px] text-white/40">PRICE</div>
          <div className="mt-1 whitespace-nowrap text-2xl font-black text-amber-200">
            {price}
          </div>
        </div>
      </div>

      <div className="my-6 h-px bg-white/10" />

      <p className="text-sm leading-7 text-white/65">{summary}</p>

      <div className="mt-5 space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-black/20 px-4 py-3"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] text-amber-200">
              ✓
            </span>
            <span className="text-sm text-white/75">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/[0.035]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-6">
        <span className="text-sm font-bold leading-6 text-white">
          {question}
        </span>

        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-white/55 sm:px-6">
        {answer}
      </div>
    </details>
  );
}

export default async function GangnamSpaPage({ params }: PageProps) {
  const { city } = await params;

  if (city !== CITY) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "하노이 강남스파",
    alternateName: "GANGNAM SPA",
    description:
      "하노이 미딩 지역에 위치한 강남스파의 위치, 영업시간, 코스 및 이용 안내",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18 Ng. 1 Đ. Đình Thôn, Đình Thôn",
      addressLocality: "Nam Từ Liêm",
      addressRegion: "Hà Nội",
      addressCountry: "VN",
    },
    openingHours: "Mo-Su 12:00-01:00",
    areaServed: {
      "@type": "City",
      name: "Hanoi",
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(180,20,35,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(180,120,30,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <div className="max-w-4xl">
            <div className="mb-5 text-[11px] font-bold tracking-[0.35em] text-red-500">
              HANOI · MY DINH · MASSAGE
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              하노이 강남스파
            </h1>

            <p className="mt-3 text-lg font-medium tracking-[0.18em] text-white/45 sm:text-xl">
              GANGNAM SPA
            </p>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
              하노이 미딩 지역에서 방문하기 좋은 강남스파의 기본 정보와
              코스, 가격, 이용 방법을 한 페이지에서 확인할 수 있도록
              정리했습니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60">
                미딩 지역
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60">
                12:00 ~ 01:00
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60">
                사전 예약 권장
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INFO
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="text-[11px] font-bold tracking-widest text-white/35">
              LOCATION
            </div>
            <div className="mt-3 text-sm font-bold text-white">
              하노이 미딩
            </div>
            <div className="mt-1 text-xs leading-5 text-white/40">
              Đình Thôn 인근
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="text-[11px] font-bold tracking-widest text-white/35">
              HOURS
            </div>
            <div className="mt-3 text-sm font-bold text-white">
              12:00 ~ 01:00
            </div>
            <div className="mt-1 text-xs leading-5 text-white/40">
              방문 전 예약 확인 권장
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="text-[11px] font-bold tracking-widest text-white/35">
              AREA
            </div>
            <div className="mt-3 text-sm font-bold text-white">
              My Dinh
            </div>
            <div className="mt-1 text-xs leading-5 text-white/40">
              미딩 한인 상권 인근
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="text-[11px] font-bold tracking-widest text-white/35">
              RESERVATION
            </div>
            <div className="mt-3 text-sm font-bold text-white">
              사전 문의 권장
            </div>
            <div className="mt-1 text-xs leading-5 text-white/40">
              원하는 시간 미리 확인
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <SectionTitle
          eyebrow="ABOUT"
          title="강남스파 소개"
          description="하노이 미딩 지역에서 강남스파를 이용하려는 분들을 위한 기본 안내입니다."
        />

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-sm leading-8 text-white/65 sm:text-base">
              하노이 강남스파는 미딩 한인타운으로 알려진 Đình Thôn 지역
              인근에 위치한 마사지·스파 업소입니다. 하노이를 처음 방문하는
              여행객이라면 미딩 지역의 위치를 기준으로 이동 동선을 잡으면
              편리합니다.
            </p>

            <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">
              방문 전에는 원하는 코스와 이용 가능 시간을 확인하고 예약한
              뒤 방문하는 것을 권장합니다. 영업시간이나 가격 및 세부
              운영방식은 현장에서 변경될 수 있으므로 예약 시 최종 확인하는
              것이 좋습니다.
            </p>

            <div className="mt-7 rounded-2xl border border-amber-300/10 bg-amber-300/[0.04] p-5">
              <div className="text-xs font-bold text-amber-200">
                VISIT TIP
              </div>

              <p className="mt-2 text-sm leading-7 text-white/55">
                처음 방문하는 경우 주소를 지도 앱에 그대로 입력하거나
                예약 시 정확한 위치를 확인하면 보다 편하게 찾아갈 수
                있습니다.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <h3 className="text-lg font-bold">기본 정보</h3>

            <div className="mt-4">
              <InfoRow label="업체명">
                하노이 강남스파 (GANGNAM SPA)
              </InfoRow>

              <InfoRow label="지역">
                하노이 미딩 · Đình Thôn
              </InfoRow>

              <InfoRow label="주소">
                18 Ng. 1 Đ. Đình Thôn, Đình Thôn, Nam Từ Liêm, Hà Nội
              </InfoRow>

              <InfoRow label="영업시간">
                12:00 ~ 01:00
              </InfoRow>

              <InfoRow label="방문">
                사전 예약 및 운영 여부 확인 권장
              </InfoRow>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-18">
          <SectionTitle
            eyebrow="POINTS"
            title="강남스파 이용 포인트"
            description="방문 전에 알아두면 좋은 기본적인 이용 포인트를 정리했습니다."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="text-2xl">01</div>
              <h3 className="mt-5 text-lg font-bold">
                미딩 지역 접근성
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/50">
                미딩 한인 상권 및 Đình Thôn 지역을 기준으로 이동하면
                위치를 찾기 편합니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="text-2xl">02</div>
              <h3 className="mt-5 text-lg font-bold">
                사전 예약 권장
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/50">
                원하는 시간에 방문하려면 방문 전 운영 여부와 가능한
                시간을 확인하는 것이 좋습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="text-2xl">03</div>
              <h3 className="mt-5 text-lg font-bold">
                코스 사전 확인
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/50">
                코스별 시간과 가격을 미리 확인하고 예약할 때 최종
                금액과 포함 사항을 함께 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICE
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <SectionTitle
          eyebrow="PRICE"
          title="강남스파 코스 & 가격표"
          description="사용자가 제공한 가격표 이미지를 기준으로 정리한 코스 정보입니다."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          <CourseCard
            name="A 코스"
            duration="30분"
            price="140만동"
            summary="짧은 시간 동안 기본적인 스파 이용을 원하는 분들을 위한 기본 코스입니다."
            items={[
              "30분 코스",
              "샤워 포함",
              "세부 서비스는 예약 시 확인",
              "립 마무리 포함 표기",
            ]}
          />

          <CourseCard
            name="B 코스"
            duration="60분"
            price="180만동"
            summary="A 코스보다 여유 있는 시간으로 이용할 수 있는 중간 코스입니다."
            items={[
              "60분 코스",
              "샤워 포함",
              "바디 관리 포함 표기",
              "세부 서비스는 예약 시 확인",
            ]}
            featured
          />

          <CourseCard
            name="C 코스"
            duration="90분"
            price="210만동"
            summary="가장 긴 이용시간으로 구성된 상위 코스입니다."
            items={[
              "90분 코스",
              "샤워 포함",
              "아로마탕 이용 표기",
              "바디 관리 포함 표기",
              "세부 서비스는 예약 시 확인",
            ]}
          />
        </div>

        <div className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/[0.045] p-5">
          <div className="flex gap-3">
            <div className="mt-0.5 shrink-0 text-amber-200">※</div>

            <p className="text-xs leading-6 text-white/55">
              위 가격은 제공된 가격표 이미지를 기준으로 작성했습니다.
              실제 방문 시 가격, 코스 구성, 운영시간 및 포함 서비스가
              변경될 수 있으므로 예약 전에 최종 금액과 코스 내용을
              확인하세요.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICE DETAIL
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-18">
          <SectionTitle
            eyebrow="COURSE GUIDE"
            title="코스 선택 가이드"
          />

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="grid grid-cols-[0.7fr_0.8fr_1.5fr_0.8fr] border-b border-white/10 bg-white/[0.045] px-4 py-4 text-xs font-bold text-white/50 sm:px-6">
              <div>코스</div>
              <div>시간</div>
              <div>구성</div>
              <div className="text-right">가격</div>
            </div>

            <div className="grid grid-cols-[0.7fr_0.8fr_1.5fr_0.8fr] border-b border-white/10 px-4 py-5 text-sm sm:px-6">
              <div className="font-bold text-white">A</div>
              <div className="text-white/60">30분</div>
              <div className="text-white/55">
                기본 이용 · 샤워
              </div>
              <div className="text-right font-bold text-amber-200">
                140만동
              </div>
            </div>

            <div className="grid grid-cols-[0.7fr_0.8fr_1.5fr_0.8fr] border-b border-white/10 px-4 py-5 text-sm sm:px-6">
              <div className="font-bold text-white">B</div>
              <div className="text-white/60">60분</div>
              <div className="text-white/55">
                샤워 · 바디 관리 등
              </div>
              <div className="text-right font-bold text-amber-200">
                180만동
              </div>
            </div>

            <div className="grid grid-cols-[0.7fr_0.8fr_1.5fr_0.8fr] px-4 py-5 text-sm sm:px-6">
              <div className="font-bold text-white">C</div>
              <div className="text-white/60">90분</div>
              <div className="text-white/55">
                아로마탕 · 샤워 · 바디 관리 등
              </div>
              <div className="text-right font-bold text-amber-200">
                210만동
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW TO USE
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <SectionTitle
          eyebrow="HOW TO USE"
          title="이용 방법"
          description="처음 방문하는 경우 아래 순서대로 확인하면 편리합니다."
        />

        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              number: "01",
              title: "예약 문의",
              text: "방문 희망 날짜와 시간을 먼저 문의합니다.",
            },
            {
              number: "02",
              title: "코스 선택",
              text: "원하는 코스와 이용시간을 확인합니다.",
            },
            {
              number: "03",
              title: "위치 확인",
              text: "예약 후 정확한 주소와 찾아가는 방법을 확인합니다.",
            },
            {
              number: "04",
              title: "방문",
              text: "예약 시간에 맞춰 방문하고 최종 가격을 확인합니다.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="text-xs font-black tracking-widest text-red-500">
                {step.number}
              </div>

              <h3 className="mt-5 text-lg font-bold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <SectionTitle
            eyebrow="LOCATION"
            title="위치 및 찾아가는 방법"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="text-xs font-bold tracking-widest text-white/35">
                ADDRESS
              </div>

              <h3 className="mt-4 text-lg font-bold">
                하노이 미딩 · Đình Thôn
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                18 Ng. 1 Đ. Đình Thôn, Đình Thôn,
                Nam Từ Liêm, Hà Nội
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-xs font-bold text-white/40">
                  이동 TIP
                </div>

                <p className="mt-2 text-sm leading-7 text-white/55">
                  그랩이나 지도 앱에서 주소를 그대로 복사해 검색하면
                  보다 편리하게 이동할 수 있습니다. 예약 시 매장
                  정확한 위치를 한 번 더 확인하는 것을 권장합니다.
                </p>
              </div>
            </div>

            <div className="flex min-h-[280px] items-center justify-center rounded-3xl border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.07),transparent_60%)]">
              <div className="text-center">
                <div className="text-4xl">📍</div>

                <div className="mt-4 text-sm font-bold text-white">
                  MY DINH · HANOI
                </div>

                <div className="mt-2 text-xs text-white/35">
                  Đình Thôn
                </div>

                <div className="mt-5 text-xs text-white/35">
                  지도는 방문 전 최신 위치를 확인하세요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESERVATION
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <SectionTitle
          eyebrow="RESERVATION"
          title="예약 전 확인사항"
        />

        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-black/20 p-5">
              <div className="text-sm font-bold">방문 시간</div>
              <p className="mt-2 text-sm leading-7 text-white/50">
                원하는 시간에 방문하려면 미리 예약 가능 여부를
                확인하는 것이 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <div className="text-sm font-bold">가격 확인</div>
              <p className="mt-2 text-sm leading-7 text-white/50">
                예약 시 선택한 코스의 현재 가격과 포함 사항을
                최종 확인하세요.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <div className="text-sm font-bold">위치 확인</div>
              <p className="mt-2 text-sm leading-7 text-white/50">
                골목 안쪽 위치일 수 있으므로 방문 전 정확한
                위치와 안내를 확인하는 것을 권장합니다.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <div className="text-sm font-bold">운영 정보</div>
              <p className="mt-2 text-sm leading-7 text-white/50">
                영업시간과 코스는 변경될 수 있으므로 방문 당일
                최신 정보를 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
          <SectionTitle
            eyebrow="FAQ"
            title="자주 묻는 질문"
            description="강남스파 방문 전에 자주 확인하는 내용을 정리했습니다."
          />

          <div className="space-y-3">
            <FaqItem
              question="강남스파는 어디에 있나요?"
              answer="하노이 미딩 지역의 Đình Thôn 인근에 위치한 것으로 안내되어 있습니다. 정확한 주소는 18 Ng. 1 Đ. Đình Thôn, Đình Thôn, Nam Từ Liêm, Hà Nội이며 방문 전 예약 시 위치를 다시 확인하는 것을 권장합니다."
            />

            <FaqItem
              question="영업시간은 어떻게 되나요?"
              answer="현재 안내 기준 영업시간은 12:00부터 01:00까지입니다. 실제 운영시간은 변경될 수 있으므로 방문 당일 예약 과정에서 확인하는 것이 좋습니다."
            />

            <FaqItem
              question="가격은 얼마인가요?"
              answer="제공해주신 가격표 기준으로 A 코스 30분 140만동, B 코스 60분 180만동, C 코스 90분 210만동으로 정리했습니다. 가격은 변경될 수 있으므로 예약 전에 최종 금액을 확인하세요."
            />

            <FaqItem
              question="A, B, C 코스의 차이는 무엇인가요?"
              answer="가장 큰 차이는 이용시간과 코스 구성입니다. A는 30분, B는 60분, C는 90분으로 구성되어 있으며 상위 코스로 갈수록 이용시간과 포함되는 항목이 늘어나는 형태입니다. 세부 구성은 예약 시 확인하는 것이 좋습니다."
            />

            <FaqItem
              question="예약을 하고 방문해야 하나요?"
              answer="원하는 시간에 이용하려면 사전 예약을 권장합니다. 특히 저녁이나 방문객이 많은 시간대에는 예약 가능 여부를 먼저 확인하는 것이 좋습니다."
            />

            <FaqItem
              question="예약할 때 무엇을 말하면 되나요?"
              answer="방문 날짜, 희망 시간, 인원, 원하는 코스를 전달하면 됩니다. 예약 전에 현재 가격과 코스 구성, 정확한 위치도 함께 확인하면 더욱 편리합니다."
            />

            <FaqItem
              question="처음 방문하는 사람도 이용할 수 있나요?"
              answer="네. 처음 방문하는 경우 예약 과정에서 위치와 이용 절차를 안내받은 뒤 방문하는 방식이 가장 편리합니다. 궁금한 사항은 예약 전에 문의하세요."
            />

            <FaqItem
              question="가격표의 내용은 항상 동일한가요?"
              answer="가격이나 코스 구성은 매장 운영 상황에 따라 변경될 수 있습니다. 이 페이지의 가격은 제공받은 가격표를 기준으로 작성했으므로 실제 방문 전 최종 가격을 확인하세요."
            />

            <FaqItem
              question="찾아갈 때 어떤 주소를 사용하면 되나요?"
              answer="18 Ng. 1 Đ. Đình Thôn, Đình Thôn, Nam Từ Liêm, Hà Nội 주소를 기준으로 검색할 수 있습니다. 골목 위치는 지도 앱의 최신 정보를 확인하고 예약 시 매장에 정확한 위치를 확인하는 것을 권장합니다."
            />

            <FaqItem
              question="방문 전에 꼭 확인해야 할 것은 무엇인가요?"
              answer="영업 여부, 예약 가능 시간, 선택한 코스의 현재 가격, 포함 서비스, 정확한 위치를 확인한 뒤 방문하는 것이 좋습니다."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          NOTICE
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <div className="text-xs font-bold tracking-[0.2em] text-white/35">
            INFORMATION
          </div>

          <h3 className="mt-4 text-lg font-bold">
            방문 전 안내
          </h3>

          <p className="mt-4 text-sm leading-8 text-white/45">
            본 페이지의 업체 정보와 가격은 공개적으로 확인 가능한
            자료 및 제공된 가격표를 바탕으로 정리한 참고용 정보입니다.
            영업시간, 가격, 코스 구성, 위치 및 이용 조건은 현지 운영
            상황에 따라 변경될 수 있습니다.
          </p>

          <p className="mt-3 text-sm leading-8 text-white/45">
            실제 방문 전에는 반드시 업체 또는 예약처를 통해 최신
            정보를 확인하시기 바랍니다.
          </p>
        </div>
      </section>

      {/* =========================================================
          BACK LINK
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <Link
          href="/hanoi/massage"
          className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-5 transition hover:border-white/20 hover:bg-white/[0.055]"
        >
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-white/30">
              HANOI MASSAGE
            </div>

            <div className="mt-2 text-sm font-bold text-white">
              하노이 마사지 목록으로 돌아가기
            </div>
          </div>

          <div className="text-xl text-white/40 transition-transform group-hover:translate-x-1">
            →
          </div>
        </Link>
      </section>

      {/* =========================================================
          FOOTER NOTE
      ========================================================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-10 text-center sm:px-8">
          <div className="text-sm font-bold">
            하노이 논땡이 방지 위원회
          </div>

          <p className="mt-2 text-xs text-white/30">
            HANOI TRAVEL & NIGHTLIFE GUIDE
          </p>

          <p className="mx-auto mt-5 max-w-xl text-[11px] leading-6 text-white/25">
            본 페이지는 여행 및 지역 정보 제공을 위한 참고 자료입니다.
            실제 운영 정보는 방문 전 최신 내용을 확인하시기 바랍니다.
          </p>
        </div>
      </footer>
    </main>
  );
}
