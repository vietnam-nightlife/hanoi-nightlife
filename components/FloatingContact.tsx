"use client";

const KAKAO_URL = "https://open.kakao.com/o/sZ2KKD4h";
const TELEGRAM_URL = "https://t.me/boom3230";

export default function FloatingContact() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-4 z-[100] flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">

      {/* 카카오톡 */}
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center"
        aria-label="카카오톡 상담"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] shadow-lg transition-transform duration-200 group-hover:scale-110 sm:h-16 sm:w-16">
          <img
            src="/kakaotalk.webp"
            alt="카카오톡"
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
        </div>

        <span className="mt-1 rounded-full bg-black/80 px-2 py-1 text-[11px] font-bold text-white">
          카카오 상담
        </span>
      </a>

      {/* 텔레그램 */}
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center"
        aria-label="텔레그램 상담"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] shadow-lg transition-transform duration-200 group-hover:scale-110 sm:h-16 sm:w-16">
          <img
            src="/telegram.webp"
            alt="텔레그램"
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
        </div>

        <span className="mt-1 rounded-full bg-black/80 px-2 py-1 text-[11px] font-bold text-white">
          텔레그램
        </span>
      </a>

      {/* TOP */}
      <button
        type="button"
        onClick={goTop}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-sm font-black text-white shadow-lg transition-transform duration-200 hover:scale-110 sm:h-16 sm:w-16"
        aria-label="맨 위로 이동"
      >
        TOP
      </button>

    </div>
  );
}
