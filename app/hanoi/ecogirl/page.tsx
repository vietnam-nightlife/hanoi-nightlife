{/* =========================================
    프로필 미리보기
========================================= */}
<section className="container py-14 sm:py-20">

  <div className="mb-8">
    <p className="text-xs font-black tracking-[0.25em] text-red-500">
      PROFILE
    </p>

    <h2 className="mt-2 text-3xl font-black sm:text-4xl">
      하노이 에코걸 프로필
    </h2>

    <p className="mt-3 text-sm leading-7 text-zinc-500">
      프로필을 확인한 후 자세한 정보를 확인해주세요.
    </p>
  </div>


  {/* 프로필 3장 */}
  <div className="grid grid-cols-3 gap-3 sm:gap-5">

    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src="/ecogirl-01.webp"
          alt="하노이 에코걸 프로필 1"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 sm:p-5 sm:pt-14">
        <div className="text-xs font-black tracking-wider text-white sm:text-sm">
          PROFILE 01
        </div>
      </div>
    </div>


    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src="/ecogirl-02.webp"
          alt="하노이 에코걸 프로필 2"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 sm:p-5 sm:pt-14">
        <div className="text-xs font-black tracking-wider text-white sm:text-sm">
          PROFILE 02
        </div>
      </div>
    </div>


    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src="/ecogirl-03.webp"
          alt="하노이 에코걸 프로필 3"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 sm:p-5 sm:pt-14">
        <div className="text-xs font-black tracking-wider text-white sm:text-sm">
          PROFILE 03
        </div>
      </div>
    </div>

  </div>


  {/* 더보기 */}
  <div className="mt-7 text-center">

    <Link
      href="/hanoi/ecogirl/profile"
      className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-black transition hover:border-red-500/50 hover:bg-red-500/10"
    >
      프로필 더보기
      <span className="ml-2 text-red-500">→</span>
    </Link>

  </div>

</section>
