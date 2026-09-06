{/* =========================
    프로필 미리보기
========================= */}
<section className="container px-4 py-14 sm:py-20">

  <div className="mb-8 text-center">
    <p className="text-xs font-black tracking-[0.25em] text-red-500">
      PROFILE
    </p>

    <h1 className="mt-2 text-3xl font-black sm:text-4xl">
      하노이 에코걸 프로필
    </h1>

    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
      하노이 에코걸 프로필을 사진으로 먼저 확인하고
      원하는 일정과 이용 방법을 상담해보세요.
    </p>
  </div>

  {/* 프로필 6개 - PC / 모바일 모두 3열 */}
  <div className="grid grid-cols-3 gap-3 sm:gap-5">

    {/* 프로필 1 */}
    <button
      type="button"
      onClick={() => setShowProfile("/하노이눈탱이방지피씨.webp")}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left transition hover:border-red-500/70"
    >
      <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
        <img
          src="/하노이눈탱이방지피씨.webp"
          alt="하노이 에코걸 프로필 1"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 text-center sm:p-4">
        <p className="text-xs font-black text-red-500">
          HANOI
        </p>
        <p className="mt-1 text-sm font-black">
          프로필 01
        </p>
      </div>
    </button>


    {/* 프로필 2 */}
    <button
      type="button"
      onClick={() => setShowProfile("/하노이눈탱이방지모바일.webp")}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left transition hover:border-red-500/70"
    >
      <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
        <img
          src="/하노이눈탱이방지모바일.webp"
          alt="하노이 에코걸 프로필 2"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 text-center sm:p-4">
        <p className="text-xs font-black text-red-500">
          HANOI
        </p>
        <p className="mt-1 text-sm font-black">
          프로필 02
        </p>
      </div>
    </button>


    {/* 프로필 3 */}
    <button
      type="button"
      onClick={() => setShowProfile("/하노이눈탱이방지피씨.webp")}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left transition hover:border-red-500/70"
    >
      <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
        <img
          src="/하노이눈탱이방지피씨.webp"
          alt="하노이 에코걸 프로필 3"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 text-center sm:p-4">
        <p className="text-xs font-black text-red-500">
          HANOI
        </p>
        <p className="mt-1 text-sm font-black">
          프로필 03
        </p>
      </div>
    </button>


    {/* 프로필 4 */}
    <button
      type="button"
      onClick={() => setShowProfile("/하노이눈탱이방지모바일.webp")}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left transition hover:border-red-500/70"
    >
      <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
        <img
          src="/하노이눈탱이방지모바일.webp"
          alt="하노이 에코걸 프로필 4"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 text-center sm:p-4">
        <p className="text-xs font-black text-red-500">
          HANOI
        </p>
        <p className="mt-1 text-sm font-black">
          프로필 04
        </p>
      </div>
    </button>


    {/* 프로필 5 */}
    <button
      type="button"
      onClick={() => setShowProfile("/하노이눈탱이방지피씨.webp")}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left transition hover:border-red-500/70"
    >
      <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
        <img
          src="/하노이눈탱이방지피씨.webp"
          alt="하노이 에코걸 프로필 5"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 text-center sm:p-4">
        <p className="text-xs font-black text-red-500">
          HANOI
        </p>
        <p className="mt-1 text-sm font-black">
          프로필 05
        </p>
      </div>
    </button>


    {/* 프로필 6 */}
    <button
      type="button"
      onClick={() => setShowProfile("/하노이눈탱이방지모바일.webp")}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 text-left transition hover:border-red-500/70"
    >
      <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
        <img
          src="/하노이눈탱이방지모바일.webp"
          alt="하노이 에코걸 프로필 6"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3 text-center sm:p-4">
        <p className="text-xs font-black text-red-500">
          HANOI
        </p>
        <p className="mt-1 text-sm font-black">
          프로필 06
        </p>
      </div>
    </button>

  </div>


  {/* 문의하기 */}
  <div className="mt-8 text-center">
    <a
      href="#contact"
      className="inline-flex items-center justify-center rounded-xl border border-red-500/60 bg-red-600 px-8 py-3 text-sm font-black transition hover:bg-red-500"
    >
      문의하기 →
    </a>
  </div>

</section>
