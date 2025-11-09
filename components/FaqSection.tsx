// src/components/FaqSection.tsx
import React from "react";

const FaqSection: React.FC = () => {
  const FAQS = [
    {
      q: "AI 음악을 개인 유튜브 영상에 사용해도 되나요?",
      a: "Emotion Gap 표기와 함께라면 개인 · 비상업 콘텐츠에 사용 가능합니다. 상세 정책은 문의 및 추후 약관 페이지에서 안내될 예정입니다.",
    },
    {
      q: "상업적 사용 또는 브랜드 콜라보는 어떻게 신청하나요?",
      a: "광고, 기업 채널, 브랜드 콜라보 등 상업적 활용 시에는 별도 라이선스 계약이 필요합니다. 안내된 이메일 또는 폼으로 연락 주시면 개별 답변드립니다.",
    },
    {
      q: "음원 파일 직접 다운로드는 가능한가요?",
      a: "현재는 웹 스트리밍 전용으로 제공되며, 추후 구독 회원 전용 다운로드 기능을 검토 중입니다.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-white py-20 text-gray-800 border-t border-gray-200"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          자주 묻는 질문 / 라이선스 안내
        </h2>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-emerald-400/60 transition"
            >
              <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
              <p className="text-gray-600 text-sm md:text-base">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
