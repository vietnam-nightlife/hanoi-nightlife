const KAKAO_URL = "https://open.kakao.com/o/snvQKD4h";
const TELEGRAM_URL = "https://t.me/boom3230";

export default function ContactButtons({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>

      {/* 카카오톡 */}
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-xl transition hover:brightness-110"
      >
        <img
          src="/kakaotalk.webp"
          alt="카카오톡 상담"
          className="h-auto w-[180px] object-contain"
        />
      </a>

      {/* 텔레그램 */}
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-xl transition hover:brightness-110"
      >
        <img
          src="/telegram.webp"
          alt="텔레그램 상담"
          className="h-auto w-[180px] object-contain"
        />
      </a>

    </div>
  );
}
