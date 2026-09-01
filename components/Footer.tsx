import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="container py-10">

        {/* 사이트 설명 */}
        <div className="mb-8">
          <div className="text-lg font-black tracking-tight">
            하노이{" "}
            <span className="red">눈탱이 방지 위원회</span>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            하노이의 마사지, 가라오케, 에코걸 등 여행 정보를
            비교하고 확인할 수 있는 정보 사이트입니다.
          </p>
        </div>

        {/* 메뉴 */}
        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400">

          <Link
            href="/"
            className="hover:text-white"
          >
            하노이
          </Link>

          <Link
            href="/hanoi/massage"
            className="hover:text-white"
          >
            하노이 마사지
          </Link>

          <Link
            href="/hanoi/karaoke"
            className="hover:text-white"
          >
            하노이 가라오케
          </Link>

          <Link
            href="/hanoi/ecogirl"
            className="hover:text-white"
          >
            하노이 에코걸
          </Link>

        </nav>

      </div>
    </footer>
  );
}
