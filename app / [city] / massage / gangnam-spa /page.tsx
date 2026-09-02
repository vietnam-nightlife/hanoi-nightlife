import Link from "next/link";

export const metadata = {
  title: "하노이 강남 스파 | GANGNAM SPA | 미딩 마사지",
  description:
    "하노이 미딩 딩톤 지역에 위치한 강남 스파(GANGNAM SPA) 이용정보, 코스, 가격, 위치, 영업시간 및 자주 묻는 질문을 정리했습니다.",
};

const courses = [
  {
    name: "A 코스",
    time: "30분",
    price: "1,400,000동",
    description: "기본 스파 관리와 샤워를 중심으로 구성된 간단한 코스입니다.",
    items: ["샤워", "기본 스파 관리", "마무리 샤워"],
  },
  {
    name: "B 코스",
    time: "60분",
    price: "1,800,000동",
    description:
      "샤워와 바디 관리가 함께 구성되어 보다 여유롭게 이용할 수 있는 코스입니다.",
    items: ["샤워", "바디 관리", "스파 관리", "마무리 샤워"],
  },
  {
    name: "C 코스",
    time: "90분",
    price: "2,100,000동",
    description:
      "아로마탕과 자쿠지를 포함해 보다 여유로운 시간을 원하는 분들을 위한 코스입니다.",
    items: ["샤워", "아로마탕", "자쿠지", "바디 관리", "마무리 샤워"],
  },
];

const faqs = [
  {
    q: "강남 스파는 어디에 있나요?",
    a: "하노이 미딩(My Dinh) 딩톤(Đình Thôn) 지역에 위치해 있습니다. 주소는 18 Ng. 1 Đ. Đình Thôn, Đình Thôn, Nam Từ Liêm, Hà Nội로 안내되고 있습니다.",
  },
  {
    q: "영업시간은 어떻게 되나요?",
    a: "확인된 자료 기준으로 오후 12시부터 새벽 1시까지 운영하는 것으로 안내되고 있습니다. 방문 전 당일 운영시간을 다시 확인하는 것을 권장합니다.",
  },
  {
    q: "예약을 하고 방문하는 것이 좋나요?",
    a: "처음 방문하거나 원하는 시간에 이용하고 싶다면 사전 문의 후 방문하는 것을 권장합니다. 특히 저녁 시간대에는 예약 가능 여부를 먼저 확인하는 것이 좋습니다.",
  },
  {
    q: "가격은 항상 동일한가요?",
    a: "마사지 업소의 코스와 가격은 변경될 수 있습니다. 페이지에 표시된 가격은 현재 확인된 자료를 기준으로 정리한 것이므로 실제 이용 전 최종 금액을 확인하시기 바랍니다.",
  },
  {
    q: "미딩 한인타운에서 찾아가기 쉬운가요?",
    a: "강남 스파는 미딩의 딩톤 지역에 위치해 있어 주변 식당이나 카페를 함께 이용하기 좋습니다. 처음 방문한다면 지도 위치를 확인하고 이동하는 것을 추천합니다.",
  },
  {
    q: "처음 방문할 때 무엇을 확인하면 되나요?",
    a: "방문 전 영업 여부, 이용 가능한 코스, 가격, 소요시간, 예약 가능 여부를 먼저 확인하면 보다 편하게 이용할 수 있습니다.",
  },
];

export default function GangnamSpaPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b3024_0%,#111_38%,#050505_75%)]" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold tracking-[0.35em] text-red-500">
              HANOI · MY DINH · SPA
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              하노이 강남 스파
            </h1>

            <p className="mt-4 text-2xl font-light tracking-[0.25em] text-[#d8b98a] md:text-3xl">
              GANGNAM SPA
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              하노이 미딩 딩톤 지역에서 이용할 수 있는 강남 스파의
              위치, 영업시간, 코스와 가격 정보를 한눈에 확인할 수 있도록
              정리했습니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#8e7655] bg-black/40 px-5 py-2 text-sm text-[#e7c999]">
                미딩 · 딩톤
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-gray-300">
                12:00 ~ 01:00
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-gray-300">
                A · B · C 코스
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        {/* BASIC INFO */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.35em] text-red-500">
              ABOUT
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              강남 스파 기본 정보
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="rounded-3xl border border-white/10 bg-[#101010] p-7 md:p-10">
              <h3 className="text-xl font-bold">강남 스파 소개</h3>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-300">
                <p>
                  강남 스파(GANGNAM SPA)는 하노이 미딩 지역의 딩톤
                  상권에 위치한 스파 업소입니다. 미딩 한인타운을 방문하는
                  여행객들이 함께 확인하기 좋은 위치에 있어 마사지와
                  주변 식사 일정을 함께 계획하기 좋습니다.
                </p>

                <p>
                  방문 전에는 원하는 코스의 소요시간과 가격을 확인하고,
                  당일 영업 여부와 예약 가능 여부를 문의한 뒤 방문하는
                  것이 가장 안전합니다.
                </p>

                <p>
                  아래에는 현재 확인된 강남 스파의 기본 정보와 코스,
                  가격, 이용 시 참고사항을 정리했습니다.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111111] p-7">
              <h3 className="text-lg font-bold">기본 정보</h3>

              <div className="mt-6 space-y-6">
                <InfoItem
                  label="업소명"
                  value="강남 스파 (GANGNAM SPA)"
                />

                <InfoItem
                  label="지역"
                  value="하노이 미딩 · 딩톤"
                />

                <InfoItem
                  label="주소"
                  value="18 Ng. 1 Đ. Đình Thôn, Đình Thôn, Nam Từ Liêm, Hà Nội"
                />

                <InfoItem
                  label="영업시간"
                  value="12:00 ~ 01:00"
                />

                <InfoItem
                  label="이용"
                  value="방문 전 예약 및 운영 여부 확인 권장"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRICE */}
        <section className="mt-24">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.35em] text-red-500">
              PRICE
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              강남 스파 가격표
            </h2>
            <p className="mt-4 text-gray-400">
              현재 확인된 코스별 시간과 가격을 정리했습니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course, index) => (
              <div
                key={course.name}
                className={`relative overflow-hidden rounded-3xl border bg-[#111] p-7 ${
                  index === 1
                    ? "border-[#b89461] shadow-[0_0_40px_rgba(184,148,97,0.10)]"
                    : "border-white/10"
                }`}
              >
                {index === 1 && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#b89461] px-3 py-1 text-[11px] font-bold text-black">
                    POPULAR
                  </div>
                )}

                <p className="text-sm tracking-[0.25em] text-[#d4b27e]">
                  COURSE {String.fromCharCode(65 + index)}
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  {course.name}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {course.time}
                </p>

                <div className="my-7 border-t border-white/10" />

                <p className="text-sm text-gray-400">이용 가격</p>

                <p className="mt-2 text-3xl font-black text-[#e3c18e]">
                  {course.price}
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {course.description}
                </p>

                <div className="mt-6 space-y-3">
                  {course.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#9d8158] text-[10px] text-[#d6b27b]">
                        ✓
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-[#4a3a27] bg-[#15120e] p-5 text-center text-sm leading-7 text-[#d8c4a5]">
            ※ 가격과 코스 구성은 변경될 수 있습니다. 방문 전 실제 이용
            가격과 포함 사항을 반드시 확인하시기 바랍니다.
          </div>
        </section>

        {/* COURSE DETAIL */}
        <section className="mt-24">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.35em] text-red-500">
              COURSE GUIDE
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              코스별 이용 안내
            </h2>
          </div>

          <div className="space-y-5">
            {courses.map((course, index) => (
              <div
                key={course.name}
                className="rounded-3xl border border-white/10 bg-[#101010] p-7 md:p-9"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a4865d] text-sm font-bold text-[#dfbd87]">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <div>
                        <h3 className="text-xl font-bold">
                          {course.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {course.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-xs text-gray-500">PRICE</p>
                    <p className="mt-1 text-2xl font-black text-[#e1bd83]">
                      {course.price}
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {course.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOCATION */}
        <section className="mt-24">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.35em] text-red-500">
              LOCATION
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              위치 및 찾아가는 방법
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#101010] p-8">
              <h3 className="text-xl font-bold">미딩 딩톤 지역</h3>

              <p className="mt-6 text-[15px] leading-8 text-gray-300">
                강남 스파는 하노이 미딩 지역의 딩톤 거리 인근에
                위치한 것으로 안내되고 있습니다. 미딩 한인타운 주변에서
                식사나 다른 여행 일정을 함께 잡았다면 동선을 묶어
                계획하기 좋습니다.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs text-gray-500">ADDRESS</p>
                <p className="mt-2 text-sm leading-7 text-gray-200">
                  18 Ng. 1 Đ. Đình Thôn,
                  <br />
                  Đình Thôn, Nam Từ Liêm,
                  <br />
                  Hà Nội, Vietnam
                </p>
              </div>
            </div>

            <div className="flex min-h-[330px] items-center justify-center rounded-3xl border border-white/10 bg-[#0d0d0d] p-8">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#9b7c51] text-2xl">
                  📍
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  GANGNAM SPA
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  My Dinh · Dinh Thon
                  <br />
                  Nam Tu Liem · Hanoi
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=18+Ng.+1+Đ.+Đình+Thôn+Đình+Thôn+Nam+Từ+Liêm+Hà+Nội"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-gray-200"
                >
                  Google Maps 위치 확인
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VISIT GUIDE */}
        <section className="mt-24">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.35em] text-red-500">
              VISIT GUIDE
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              이용 전 확인사항
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <GuideCard
              number="01"
              title="방문 전 예약 확인"
              text="원하는 시간에 이용하려면 방문 전에 영업 여부와 예약 가능 여부를 먼저 확인하는 것을 권장합니다."
            />

            <GuideCard
              number="02"
              title="코스와 가격 확인"
              text="A·B·C 코스의 소요시간과 가격을 확인하고 본인에게 맞는 코스를 선택하세요."
            />

            <GuideCard
              number="03"
              title="당일 가격 재확인"
              text="마사지 업소의 가격과 코스는 변경될 수 있으므로 실제 방문 전 최종 금액을 확인하는 것이 좋습니다."
            />

            <GuideCard
              number="04"
              title="위치 확인"
              text="처음 방문하는 경우 지도에서 딩톤 지역의 정확한 위치를 미리 확인해 두면 이동이 편합니다."
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.35em] text-red-500">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              자주 묻는 질문
            </h2>

            <p className="mt-4 text-gray-400">
              강남 스파 방문 전에 많이 확인하는 내용을 정리했습니다.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/10 bg-[#101010]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6">
                  <span className="flex items-start gap-4">
                    <span className="text-sm font-bold text-[#bd9766]">
                      Q{String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-bold text-gray-100">
                      {faq.q}
                    </span>
                  </span>

                  <span className="text-xl text-gray-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 pb-6 pt-5 pl-[4.5rem] text-sm leading-7 text-gray-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* SUMMARY */}
        <section className="mt-24">
          <div className="overflow-hidden rounded-3xl border border-[#57462f] bg-[radial-gradient(circle_at_top,#302619,#12100d_60%)] p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.35em] text-[#d0a96d]">
                GANGNAM SPA
              </p>

              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                하노이 미딩 강남 스파
              </h2>

              <p className="mt-5 text-sm leading-8 text-gray-300 md:text-base">
                하노이 미딩 딩톤 지역에서 강남 스파를 찾고 있다면
                위치와 영업시간, 코스별 소요시간과 가격을 먼저 확인한 후
                방문하는 것을 추천합니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm">
                  미딩 · 딩톤
                </span>

                <span className="rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm">
                  A · B · C 코스
                </span>

                <span className="rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm">
                  12:00 ~ 01:00
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BACK */}
        <div className="mt-14 text-center">
          <Link
            href="/hanoi/massage"
            className="inline-flex rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-gray-200 transition hover:bg-white/10"
          >
            ← 하노이 마사지 목록으로
          </Link>
        </div>
      </div>
    </main>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.15em] text-gray-600">
        {label}
      </p>

      <p className="mt-2 text-sm leading-7 text-gray-200">
        {value}
      </p>
    </div>
  );
}

function GuideCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#101010] p-7">
      <div className="flex items-start gap-5">
        <span className="text-sm font-black text-[#b99260]">
          {number}
        </span>

        <div>
          <h3 className="text-lg font-bold">{title}</h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
