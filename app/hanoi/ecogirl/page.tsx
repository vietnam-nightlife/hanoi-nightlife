import Link from "next/link";
import ContactButtons from "@/components/ContactButtons";

export default function EcogirlPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black to-black" />

        <div className="container relative py-20 sm:py-28">

          <div className="mb-5 inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs font-black tracking-[0.2em] text-red-400">
            HANOI EC O GIRL GUIDE
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            하노이
            <br />
            <span className="red">에코걸 정보</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            하노이 지역에서 이용할 수 있는 에코걸 관련 정보를
            <br className="hidden sm:block" />
            지역과 일정에 맞춰 확인할 수 있도록 정리했습니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#info"
              className="rounded-xl bg-red-600 px-6 py-3.5 text-sm font-black transition hover:bg-red-500"
            >
              정보 확인하기
            </Link>

            <Link
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-black transition hover:bg-white/10"
            >
              상담 문의
            </Link>
          </div>
        </div>
      </section>

      {/* 1. 정보 - 맨 위 */}
      <section id="info" className="container py-16 sm:py-20">
        <div className="mb-8">
          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            INFORMATION
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 에코걸 정보
          </h2>

          <p className="mt-3 text-sm leading-7 text-zinc-500">
            이용 전에 필요한 기본 정보를 먼저 확인해보세요.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <InfoCard
            number="01"
            title="진행 방식"
            description="원하는 일정과 조건을 상담한 후 가능한 일정과 진행 방법을 확인할 수 있습니다."
          />

          <InfoCard
            number="02"
            title="이용 시간"
            description="원하는 날짜와 시간을 미리 문의하면 가능한 일정과 관련 정보를 안내받을 수 있습니다."
          />

          <InfoCard
            number="03"
            title="지역 확인"
            description="하노이 지역과 숙소 위치에 따라 이용 가능 여부가 달라질 수 있습니다."
          />

          <InfoCard
            number="04"
            title="예약 상담"
            description="카카오톡 또는 텔레그램으로 원하는 날짜와 시간을 전달하면 상담을 받을 수 있습니다."
          />

          <InfoCard
            number="05"
            title="일정 확인"
            description="예약 전 가능한 일정과 이용 조건을 충분히 확인한 후 진행해주세요."
          />

          <InfoCard
            number="06"
            title="문의 방법"
            description="궁금한 사항은 상담 채널을 통해 문의하면 자세한 안내를 받을 수 있습니다."
          />

        </div>
      </section>

      {/* 2. 서비스 */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="container py-16 sm:py-20">

          <div className="mb-8">
            <p className="text-xs font-black tracking-[0.25em] text-red-500">
              SERVICE
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              하노이 에코걸 서비스
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
              일정과 위치를 기준으로 상담을 통해 이용 가능한 서비스를
              확인할 수 있습니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <ServiceCard
              title="일정 상담"
              description="원하는 날짜와 시간을 전달하면 가능한 일정과 관련 내용을 확인할 수 있습니다."
            />

            <ServiceCard
              title="숙소 위치 확인"
              description="하노이 내 숙소 위치를 알려주시면 해당 지역의 이용 가능 여부를 확인할 수 있습니다."
            />

            <ServiceCard
              title="예약 안내"
              description="상담을 통해 일정과 조건을 확인한 후 예약 진행 방법을 안내받을 수 있습니다."
            />

          </div>
        </div>
      </section>

      {/* 3. 예약 방법 */}
      <section className="container py-16 sm:py-20">

        <div className="mb-8">
          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            HOW TO BOOK
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            예약 방법
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">

          <Step number="01" title="문의" text="카카오톡 또는 텔레그램으로 문의해주세요." />

          <Step number="02" title="일정 전달" text="원하는 날짜와 시간을 알려주세요." />

          <Step number="03" title="가능 여부 확인" text="일정과 위치를 확인합니다." />

          <Step number="04" title="상담" text="이용 조건과 필요한 내용을 안내받습니다." />

          <Step number="05" title="예약" text="확인 후 예약을 진행합니다." />

        </div>
      </section>

      {/* 4. 이용안내 - 제일 밑 */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container py-16 sm:py-20">

          <div className="mb-8">
            <p className="text-xs font-black tracking-[0.25em] text-red-500">
              GUIDE
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              이용안내
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <ul className="space-y-5 text-sm leading-7 text-zinc-400">

              <li className="flex gap-3">
                <span className="font-black text-red-500">01</span>
                <span>
                  이용 전 일정과 이용 가능 여부를 반드시 확인해주세요.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="font-black text-red-500">02</span>
                <span>
                  정확한 이용 조건과 비용은 상담을 통해 확인해주세요.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="font-black text-red-500">03</span>
                <span>
                  예약 변경이나 취소가 필요한 경우 가능한 한 미리 알려주세요.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="font-black text-red-500">04</span>
                <span>
                  모든 이용은 현지 법률과 안전수칙을 준수하는 범위에서 진행해주세요.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="font-black text-red-500">05</span>
                <span>
                  서로의 안전과 개인정보 보호를 위해 상담 내용을 신중하게 확인해주세요.
                </span>
              </li>

            </ul>
          </div>
        </div>
      </section>

      {/* 문의 */}
      <section id="contact" className="border-t border-white/10">
        <div className="container py-16 text-center sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            CONTACT
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            궁금한 점이 있으신가요?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            원하는 날짜와 시간, 숙소 위치를 함께 알려주시면
            보다 빠르게 안내받을 수 있습니다.
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <ContactButtons />
          </div>

        </div>
      </section>

    </main>
  );
}


/* =========================
   정보 카드
========================= */

function InfoCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-500/40 hover:bg-red-500/[0.03]">

      <div className="text-xs font-black tracking-[0.2em] text-red-500">
        {number}
      </div>

      <h3 className="mt-4 text-xl font-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}


/* =========================
   서비스 카드
========================= */

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-6">

      <div className="mb-5 h-1 w-12 rounded-full bg-red-600" />

      <h3 className="text-xl font-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}


/* =========================
   예약 단계
========================= */

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="text-xs font-black tracking-[0.2em] text-red-500">
        STEP {number}
      </div>

      <h3 className="mt-3 text-lg font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-500">
        {text}
      </p>

    </div>
  );
}
