import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "하노이 수 사우나 | 미딩 딘톤 사우나 · Lolly Spa",
  description:
    "하노이 미딩 딘톤에 위치한 수 사우나(Lolly Spa) 정보. 위치, 운영시간, 코스 및 가격, 시설, 예약 안내와 현장 이용 포인트를 정리했습니다.",
};

const galleryImages = [
  "/images/su-sauna/01.jpg",
  "/images/su-sauna/02.jpg",
  "/images/su-sauna/03.jpg",
  "/images/su-sauna/04.jpg",
  "/images/su-sauna/05.jpg",
  "/images/su-sauna/06.jpg",
];

const courses = [
  {
    name: "A",
    price: "190만 동",
    time: "30분",
    type: "기본 코스",
    description: "짧은 시간 동안 핵심적인 케어를 받고 싶은 분께 적합합니다.",
  },
  {
    name: "B",
    price: "250만 동",
    time: "60분",
    type: "표준 코스",
    description: "가장 무난하게 선택하기 좋은 한 시간 구성입니다.",
  },
  {
    name: "C",
    price: "450만 동",
    time: "90분",
    type: "1:1",
    description: "충분한 시간을 두고 전신 케어를 원하는 분께 추천합니다.",
  },
  {
    name: "D",
    price: "450만 동",
    time: "90분",
    type: "2:1 릴레이",
    description: "두 명이 함께 진행하는 릴레이 누루 구성입니다.",
  },
];

const faqs = [
  {
    question: "수 사우나는 어디에 있나요?",
    answer:
      "하노이 미딩 딘톤 지역의 32 Ng. 154 Đ. Đình Thôn에 있습니다. 백제갈비 뒤편에 위치하며 지도 앱에서는 Lolly Spa로 검색하면 찾기 편합니다.",
  },
  {
    question: "영업시간은 어떻게 되나요?",
    answer:
      "매일 정오 12시부터 다음 날 새벽 1시까지 운영하는 것으로 안내되어 있습니다. 100% 예약제로 운영되므로 방문 전 시간을 먼저 확인하는 것이 좋습니다.",
  },
  {
    question: "예약 없이 방문할 수 있나요?",
    answer:
      "100% 예약제로 운영되기 때문에 워크인 방문은 어려울 수 있습니다. 원하는 시간대가 있다면 미리 예약하는 것을 권장합니다.",
  },
  {
    question: "당일 출근부를 확인할 수 있나요?",
    answer:
      "당일 출근부를 확인한 뒤 선택할 수 있는 방식으로 안내되고 있습니다. 원하는 스타일이 있다면 예약 과정에서 미리 문의하는 것이 좋습니다.",
  },
  {
    question: "코스는 어떻게 구성되어 있나요?",
    answer:
      "A부터 D까지 총 네 가지 구성으로 나뉩니다. 30분부터 90분까지 선택할 수 있으며 1:1과 2:1 릴레이 구성으로 구분됩니다.",
  },
  {
    question: "결제는 어떻게 하나요?",
    answer:
      "베트남 동 현금 결제가 가장 무난하며, 카드 결제 가능 여부 등은 방문 전에 확인하는 것이 좋습니다.",
  },
];

export default function SuSaunaPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <img
              src="/images/su-sauna/main.jpg"
              alt="하노이 수 사우나 외관"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <p className="mb-2 text-sm font-medium text-white/80">
                HANOI · MY DINH · DINH THON
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                수 사우나
              </h1>

              <p className="mt-3 text-lg text-white/90">
                미딩 딘톤에서 오래 자리 잡은 Lolly Spa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
            SU SAUNA · LOLLY SPA
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            미딩에서 오래 찾는 수 사우나
          </h2>

          <div className="mt-7 space-y-5 text-[16px] leading-8 text-neutral-700">
            <p>
              하노이 미딩 딘톤 일대에서 오랫동안 운영된 곳을 찾는다면 수
              사우나는 빼놓기 어려운 선택지입니다. 딘톤 거리 끝쪽, 백제갈비
              뒤편에 자리하고 있으며 지도 앱에서는{" "}
              <strong className="font-semibold text-neutral-900">
                Lolly Spa
              </strong>
              라는 이름으로 확인할 수 있습니다.
            </p>

            <p>
              오랜 기간 같은 자리에서 운영되어 온 만큼 한국인 이용객들에게
              익숙한 곳이라는 점이 특징입니다. 특히 예약부터 코스 안내까지
              한국인 손님을 기준으로 비교적 편하게 이용할 수 있는 환경을
              갖추고 있습니다.
            </p>

            <p>
              기본적으로 예약을 먼저 잡고 방문하는 방식이며, 당일 출근부를
              확인한 뒤 선택할 수 있는 시스템도 운영되고 있습니다. 30분부터
              90분까지 시간별 구성이 나뉘어 있어 원하는 이용 시간에 맞춰
              선택하기 편합니다.
            </p>
          </div>
        </div>
      </section>

      {/* SUMMARY INFO */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
          <div className="grid gap-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white sm:grid-cols-2">
            <InfoRow
              label="위치"
              value="32 Ng. 154 Đ. Đình Thôn, Đình Thôn, Từ Liêm, Hà Nội"
            />

            <InfoRow
              label="검색명"
              value="Lolly Spa · 백제갈비 뒤편"
            />

            <InfoRow
              label="영업시간"
              value="매일 12:00 ~ 익일 01:00"
            />

            <InfoRow
              label="운영방식"
              value="100% 예약제"
            />

            <InfoRow
              label="코스"
              value="A ~ D · 30분 ~ 90분"
            />

            <InfoRow
              label="구성"
              value="1:1 / 2:1 릴레이"
            />
          </div>
        </div>
      </section>

      {/* WHY SU SAUNA */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
        <SectionHeading
          eyebrow="WHY SU SAUNA"
          title="수 사우나를 찾는 이유"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FeatureCard
            number="01"
            title="오랜 운영 경험"
            text="미딩 딘톤에서 오랫동안 운영되어 온 곳으로, 처음 생긴 신규 업소보다 익숙하고 안정적인 분위기를 선호하는 분들이 선택하기 좋습니다."
          />

          <FeatureCard
            number="02"
            title="한국인 직영"
            text="한국인 이용객을 대상으로 한 안내와 응대가 익숙해 처음 방문하더라도 코스와 이용 방법을 확인하기 편합니다."
          />

          <FeatureCard
            number="03"
            title="예약 중심 운영"
            text="100% 예약제로 운영되며 원하는 시간대를 미리 조율할 수 있어 대기 시간을 줄이고 차분하게 이용하기 좋습니다."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <p className="text-[16px] leading-8 text-neutral-700">
            수 사우나의 가장 큰 장점은 화려한 신규 매장보다는{" "}
            <strong className="font-semibold text-neutral-900">
              오랜 기간 운영되며 쌓인 익숙함과 안정감
            </strong>
            에 있습니다. 미딩에서 처음 방문하는 분이나 검증된 곳을 선호하는
            분이라면 이런 부분을 우선적으로 살펴볼 만합니다.
          </p>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-18">
          <SectionHeading
            dark
            eyebrow="ROOM · FACILITIES"
            title="룸과 시설 분위기"
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-xl bg-neutral-900 ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`수 사우나 내부 시설 ${index + 1}`}
                  className="h-full min-h-[220px] w-full object-cover transition duration-300 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl space-y-5 text-[16px] leading-8 text-white/75">
            <p>
              수 사우나는 미딩에서 오랫동안 운영되어 온 곳답게 전체적인
              이용 동선이 익숙하게 정리되어 있는 편입니다. 새로 생긴 곳의
              화려함보다는 단골집처럼 편하게 이용할 수 있는 분위기를
              선호한다면 이런 부분이 장점으로 느껴질 수 있습니다.
            </p>

            <p>
              예약제로 운영되기 때문에 방문 시간대를 미리 맞춰둘 수 있으며,
              당일 출근부를 확인한 뒤 선택할 수 있다는 점도 이용 전에
              확인해둘 만한 부분입니다.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
        <SectionHeading
          eyebrow="COURSE & PRICE"
          title="코스와 서비스 구성"
        />

        <p className="mt-6 max-w-3xl text-[16px] leading-8 text-neutral-700">
          코스는 이용 시간과 인원 구성에 따라 A부터 D까지 구분되어 있습니다.
          짧은 시간의 기본 코스부터 90분 구성까지 선택할 수 있으며, 90분
          코스는 1:1과 2:1 릴레이 방식으로 나뉩니다.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.name}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-semibold text-neutral-500">
                    COURSE
                  </span>

                  <h3 className="mt-1 text-3xl font-bold">
                    {course.name}
                  </h3>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold">{course.price}</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    {course.time}
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-neutral-100 pt-5">
                <p className="font-semibold text-neutral-900">
                  {course.type}
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-xl bg-neutral-100 p-5">
          <p className="text-sm leading-6 text-neutral-600">
            ※ 위 금액은 제공받은 자료를 기준으로 정리한 가격입니다. 실제
            결제 금액이나 프로모션은 방문 시점에 달라질 수 있으므로 예약
            전에 최신 조건을 확인하는 것을 권장합니다.
          </p>
        </div>
      </section>

      {/* FIELD TIPS */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
          <SectionHeading
            eyebrow="LOCAL TIPS"
            title="방문 전에 알아둘 현장 포인트"
          />

          <div className="mt-8 space-y-3">
            {[
              "100% 예약제로 운영되므로 원하는 시간대가 있다면 미리 예약하는 편이 좋습니다.",
              "당일 출근부 확인이 가능한 만큼 선호하는 스타일이 있다면 예약할 때 미리 문의해 두는 것이 편합니다.",
              "90분 코스는 C가 1:1, D가 2:1 릴레이 구성으로 구분되므로 예약 전에 원하는 방식을 정확히 확인하세요.",
              "결제는 베트남 동 현금이 가장 무난하며 카드 결제 가능 여부는 방문 전에 확인하는 것이 좋습니다.",
              "지도에서는 Lolly Spa로 검색하는 것이 편하며, 백제갈비 뒤편이라는 위치 정보를 함께 확인하면 초행길에 도움이 됩니다.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                  {index + 1}
                </span>

                <p className="text-[15px] leading-7 text-neutral-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMEND */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
        <SectionHeading
          eyebrow="RECOMMENDED FOR"
          title="이런 분께 잘 맞습니다"
        />

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <ul className="space-y-4">
            {[
              "미딩 딘톤에서 오래 운영된 곳을 우선적으로 찾는 분",
              "한국인 직영의 편한 안내와 소통을 선호하는 분",
              "예약을 잡고 비교적 차분하게 이용하고 싶은 분",
              "당일 출근부를 확인한 뒤 선택하고 싶은 분",
              "30분부터 90분까지 시간에 맞춰 코스를 고르고 싶은 분",
              "1:1뿐 아니라 2:1 릴레이 구성도 함께 확인하고 싶은 분",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[15px] leading-7 text-neutral-700"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
          <SectionHeading
            dark
            eyebrow="LOCATION & RESERVATION"
            title="찾아가는 길과 예약"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm font-semibold text-white/60">
                ADDRESS
              </p>

              <p className="mt-3 text-lg font-semibold leading-8">
                32 Ng. 154 Đ. Đình Thôn,
                <br />
                Đình Thôn, Từ Liêm, Hà Nội
              </p>

              <p className="mt-5 text-sm leading-7 text-white/65">
                미딩 딘톤 거리 끝쪽, 백제갈비 뒤편에 위치합니다. 지도 앱에서는
                Lolly Spa라는 검색명을 사용하는 것이 편합니다.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm font-semibold text-white/60">
                RESERVATION
              </p>

              <p className="mt-3 text-lg font-semibold">
                100% 예약제
              </p>

              <p className="mt-4 text-sm leading-7 text-white/65">
                방문 예정 시간과 원하는 코스를 미리 전달하고, 당일 출근부와
                최신 가격을 확인한 뒤 방문하는 것을 권장합니다.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://open.kakao.com/o/sZJKveyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
                >
                  카카오톡 문의
                </a>

                <a
                  href="https://t.me/nambamvn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  텔레그램 문의
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
        <SectionHeading
          eyebrow="PRICE"
          title="수 사우나 코스 가격표"
        />

        <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200">
          <table className="w-full border-collapse text-left">
            <thead className="bg-neutral-900 text-white">
              <tr>
                <th className="px-5 py-4 text-sm font-semibold">코스</th>
                <th className="px-5 py-4 text-sm font-semibold">가격</th>
                <th className="px-5 py-4 text-sm font-semibold">시간</th>
                <th className="hidden px-5 py-4 text-sm font-semibold sm:table-cell">
                  구성
                </th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={course.name}
                  className={
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-neutral-50"
                  }
                >
                  <td className="px-5 py-5 font-bold">
                    {course.name}
                  </td>

                  <td className="px-5 py-5 font-semibold">
                    {course.price}
                  </td>

                  <td className="px-5 py-5 text-neutral-600">
                    {course.time}
                  </td>

                  <td className="hidden px-5 py-5 text-neutral-600 sm:table-cell">
                    {course.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-2 text-sm leading-6 text-neutral-500">
          <p>
            <strong className="text-neutral-700">요금 안내 ·</strong>{" "}
            위 가격은 제공받은 자료를 바탕으로 정리한 기준입니다.
          </p>

          <p>
            시즌, 프로모션, 이용 조건 등에 따라 실제 결제 금액이 달라질
            가능성이 있으므로 방문 전 최신 가격과 조건을 확인하시기
            바랍니다.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
          <SectionHeading
            eyebrow="FAQ"
            title="자주 묻는 질문"
          />

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-neutral-200 bg-white"
              >
                <summary className="cursor-pointer list-none px-6 py-5 font-semibold">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>

                    <span className="text-xl text-neutral-400 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <div className="border-t border-neutral-100 px-6 py-5 text-sm leading-7 text-neutral-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">
          <p className="text-sm font-semibold tracking-widest text-white/50">
            HANOI · MY DINH
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            수 사우나 · Lolly Spa
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60">
            미딩 딘톤에서 오래 운영된 곳을 찾는다면 방문 전 위치와 예약
            가능 시간, 최신 코스 및 가격을 확인해 보세요.
          </p>

          <div className="mt-7 flex justify-center gap-3">
            <a
              href="https://open.kakao.com/o/sZJKveyi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-neutral-900"
            >
              카카오톡 문의
            </a>

            <a
              href="https://t.me/nambamvn"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white"
            >
              텔레그램
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------------------------------------
   COMPONENTS
--------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-sm font-semibold tracking-widest ${
          dark ? "text-white/50" : "text-neutral-500"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-neutral-100 p-5 last:border-b-0 sm:nth-last-[1]:border-b-0">
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
        {label}
      </p>

      <p className="mt-2 text-[15px] font-medium leading-6 text-neutral-800">
        {value}
      </p>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <span className="text-sm font-bold text-neutral-400">
        {number}
      </span>

      <h3 className="mt-4 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-neutral-600">
        {text}
      </p>
    </div>
  );
}
