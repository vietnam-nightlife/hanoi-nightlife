import Link from "next/link";

export default function EcoGirlPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          프로필 미리보기
      ========================= */}
      <section className="container px-4 py-14 sm:py-20">

        <div className="mb-8">
          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            PROFILE
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            하노이 에코걸 프로필
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            하노이 에코걸 프로필을 사진으로 먼저 확인해보세요.
            원하는 프로필을 클릭하면 사진을 크게 볼 수 있습니다.
          </p>
        </div>

        {/* 프로필 1개 */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
              <img
                src="/하노이눈탱이방지피씨.webp"
                alt="하노이 에코걸 프로필"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4 text-center">
              <p className="text-xs font-black text-red-500">
                HANOI
              </p>

              <p className="mt-1 text-sm font-black">
                프로필
              </p>
            </div>
          </div>

        </div>

        {/* 문의하기 */}
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-red-500/60 bg-red-600 px-8 py-3 text-sm font-black transition hover:bg-red-500"
          >
            문의하기 →
          </Link>
        </div>

      </section>


      {/* =========================
          베트남 에코걸 소개
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            VIETNAM ECOGIRL
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            베트남 에코걸이란?
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              베트남 에코걸은 베트남 여행객을 위한
              <strong className="text-white">
                {" "}1:1 맞춤형 통역 및 관광 가이드 서비스
              </strong>
              를 의미합니다.
              패키지 여행처럼 정해진 일정에 따라 움직이는 방식보다
              여행객의 일정과 취향에 맞춰 자유롭게 여행을 즐길 수 있다는
              점이 특징입니다.
            </p>

            <p>
              하노이·다낭·호치민 등 베트남 주요 도시에서 이용할 수 있으며,
              현지 언어와 문화에 익숙하지 않은 여행객에게 통역과
              일정 안내를 제공해 보다 편안하게 여행할 수 있도록
              도움을 주는 방식으로 운영됩니다.
            </p>

            <p>
              여행지의 유명 관광지를 둘러보는 것은 물론 현지 음식,
              카페, 쇼핑, 문화 체험 등 여행객이 원하는 일정에 맞춰
              계획할 수 있다는 것이 일반적인 단체 관광과 다른 점입니다.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          추천 코스
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            RECOMMENDED COURSE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            베트남 에코걸 추천 코스
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            에코걸 서비스를 이용할 때는 여행객이 원하는 관광지와
            음식점, 카페, 쇼핑 등을 중심으로 일정을 구성하는 것이
            가장 편리합니다. 특히 처음 방문하는 여행객이라면
            현지 가이드와 함께 이동하면서 주요 관광지를 둘러보는
            코스를 추천합니다.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                COURSE 01
              </p>

              <h3 className="mt-2 text-lg font-black">
                관광 & 통역
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                하노이 주요 관광지를 방문하면서 현지 이동과
                의사소통을 편하게 해결할 수 있는 기본 코스입니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                COURSE 02
              </p>

              <h3 className="mt-2 text-lg font-black">
                맛집 & 로컬 체험
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                현지 음식점과 카페 등을 방문하며 베트남의
                음식과 생활 문화를 직접 경험할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs font-black text-red-500">
                COURSE 03
              </p>

              <h3 className="mt-2 text-lg font-black">
                자유 일정
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                정해진 패키지 일정에서 벗어나 여행객이 원하는
                장소와 시간을 중심으로 자유롭게 구성할 수 있습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          비용 및 이용 방법
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            PRICE & GUIDE
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            베트남 에코걸 비용 및 이용 방법
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">

            <p>
              에코걸 서비스 비용은 지역과 일정, 가이드의 경험과
              언어 능력 등에 따라 달라질 수 있습니다.
              원문 기준으로 안내된 지역별 비용은
              하노이 약 800만~1,000만 동,
              다낭 약 1,000만 동,
              호치민 약 800만 동 수준입니다.
            </p>

            <p>
              실제 이용 비용은 선택하는 일정과 서비스 구성에 따라
              달라질 수 있으므로 예약 전에 전체 비용과 포함되는
              서비스를 미리 확인하는 것이 좋습니다.
            </p>

            <p>
              프로필을 확인할 때는 가이드 경험과 언어 구사 능력,
              이용 후기 등을 함께 살펴보는 것이 좋습니다.
              단순히 가격만 비교하기보다 여행 목적과 일정에
              잘 맞는 프로필을 선택하는 것이 중요합니다.
            </p>

          </div>

          {/* 가격 카드 */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                HANOI
              </p>

              <h3 className="mt-2 text-xl font-black">
                800만 ~ 1,000만 동
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                원문 기준 안내 가격이며
                일정과 구성에 따라 달라질 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                DANANG
              </p>

              <h3 className="mt-2 text-xl font-black">
                약 1,000만 동
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                지역과 일정에 따라 실제 비용은
                달라질 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-xs font-black text-red-500">
                HO CHI MINH
              </p>

              <h3 className="mt-2 text-xl font-black">
                약 800만 동
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                이용 일정과 서비스 구성에 따라
                비용을 확인해야 합니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          이용시간
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-zinc-500">
            SERVICE HOURS
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            에코걸 서비스 이용시간
          </h2>

          <div className="mt-6 max-w-4xl rounded-2xl border border-white/10 bg-zinc-950 p-6">

            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              에코걸 서비스는 여행객의 일정에 맞춰 이용 시간을
              협의하는 방식으로 운영됩니다. 관광 일정과 이동 계획에
              맞춰 시간과 장소를 미리 조율하면 보다 효율적으로
              여행 일정을 구성할 수 있습니다.
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
              업체나 에이전트를 이용할 경우 예약 방식과 결제 조건,
              포함 서비스 등을 사전에 확인하는 것이 좋습니다.
              특히 선결제를 요구하거나 공식적인 정보가 부족한 경우에는
              충분히 확인한 후 이용하는 것을 권장합니다.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          추천 이유
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            WHY ECOGIRL
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            베트남 에코걸을 추천하는 이유
          </h2>

          <div className="mt-10 space-y-5">

            {/* 01 */}
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">

              <p className="text-xs font-black text-red-500">
                01
              </p>

              <h3 className="mt-2 text-xl font-black">
                개인 일정에 맞춘 여행
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                정해진 단체 관광 일정과 달리 여행객이 원하는
                관광지와 음식점, 쇼핑 장소 등을 중심으로 일정을
                구성할 수 있습니다. 여행 스타일에 맞춰
                보다 자유롭게 움직일 수 있다는 점이 장점입니다.
              </p>

            </div>

            {/* 02 */}
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">

              <p className="text-xs font-black text-red-500">
                02
              </p>

              <h3 className="mt-2 text-xl font-black">
                통역과 현지 이동 도움
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                베트남어가 익숙하지 않은 여행객이라면 현지에서
                음식 주문이나 이동, 관광지 이용 과정에서
                의사소통에 어려움을 겪을 수 있습니다.
                통역과 현지 안내를 함께 받을 수 있어
                처음 방문하는 여행객에게 특히 편리합니다.
              </p>

            </div>

            {/* 03 */}
            <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">

              <p className="text-xs font-black text-red-500">
                03
              </p>

              <h3 className="mt-2 text-xl font-black">
                이용 후기와 프로필 확인
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                에코걸을 선택할 때는 사진만 확인하기보다
                가이드 경험과 언어 능력, 이용 후기 등을
                함께 확인하는 것이 좋습니다.
                실제 여행 목적과 잘 맞는 프로필을 선택하면
                보다 만족스러운 여행 일정을 구성할 수 있습니다.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          이용 전 체크
      ========================= */}
      <section className="border-t border-white/10">
        <div className="container px-4 py-14 sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-zinc-500">
            CHECK POINT
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            이용 전 체크사항
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="font-black">
                01. 비용 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                예약 전에 전체 비용과 포함되는 서비스,
                추가 비용 여부를 확인하세요.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="font-black">
                02. 프로필 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                가이드 경험과 언어 능력, 이용 후기 등을
                함께 확인하는 것이 좋습니다.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="font-black">
                03. 예약 조건 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                이용 시간과 만남 장소, 취소 및 변경 조건을
                예약 전에 미리 확인하세요.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="font-black">
                04. 업체 확인
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                공식적인 정보가 부족하거나 과도한 선결제를
                요구하는 곳은 주의해서 확인하는 것이 좋습니다.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          문의
      ========================= */}
      <section className="border-t border-white/10 bg-[#080808]">
        <div className="container px-4 py-16 text-center sm:py-20">

          <p className="text-xs font-black tracking-[0.25em] text-red-500">
            CONTACT
          </p>

          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            하노이 에코걸이 궁금하신가요?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            프로필과 이용 방법, 일정 및 비용이 궁금하다면
            문의를 통해 자세한 내용을 확인해보세요.
          </p>

          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-3 text-sm font-black transition hover:bg-red-500"
            >
              문의하기 →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
