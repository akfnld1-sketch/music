// src/components/HeroSection.tsx
import React from "react";

interface HeroSectionProps {
  onShowPlaylists: () => void;
  onShowFaq: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onShowPlaylists,
  onShowFaq,
}) => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 어둡게 오버레이 */}
      <div className="absolute inset-0 bg-black/45" />

      {/* 메인 카피 */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-snug drop-shadow-md">
          Emotion Gap · AI Music Library
        </h1>
        <p className="text-sm md:text-lg text-gray-100 mb-8 leading-relaxed">
          감정에 맞춘 AI 음악 컬렉션.
          <br className="hidden md:block" />
          카페, 브이로그, 힐링, 워킹, 겨울 감성까지 자유롭게 활용 가능한 BGM을
          제공합니다.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onShowPlaylists}
            className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-emerald-400 hover:text-white transition"
          >
            플레이리스트 보기
          </button>
          <button
            onClick={onShowFaq}
            className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
          >
            라이선스 / 자주 묻는 질문
          </button>
        </div>
      </div>

      {/* 아래 그라데이션 */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default HeroSection;
