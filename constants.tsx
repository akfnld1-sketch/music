
import React from 'react';
import type { Course, Review, FaqItem, WhyUsItem } from './types';

export const COURSES: Course[] = [
  {
    title: 'Python 기반 머신러닝 입문',
    instructor: '김철수 교수',
    level: '초급',
    description: 'Python 기초부터 머신러닝의 핵심 개념(회귀, 분류, 군집)을 쉽고 재미있게 배웁니다. 실습 위주의 커리큘럼으로 빠르게 이해하고 적용할 수 있습니다.',
    keywords: ['#Python', '#머신러닝', '#데이터분석', '#AI입문'],
  },
  {
    title: '딥러닝과 신경망의 이해',
    instructor: '이영희 박사',
    level: '중급',
    description: '딥러닝의 기본 원리, 다양한 신경망 아키텍처(CNN, RNN), 그리고 실제 프로젝트 적용 사례를 학습합니다. TensorFlow/PyTorch 실습을 통해 전문가로 성장하세요.',
    keywords: ['#딥러닝', '#신경망', '#TensorFlow', '#PyTorch', '#AI전문가'],
  },
  {
    title: '자연어 처리(NLP) 실전 프로젝트',
    instructor: '박민수 연구원',
    level: '고급',
    description: '최신 자연어 처리 기술(BERT, GPT)을 활용하여 텍스트 분류, 감성 분석, 챗봇 개발 등 실전 프로젝트를 진행합니다. 실제 데이터셋으로 포트폴리오를 만들어보세요.',
    keywords: ['#NLP', '#자연어처리', '#BERT', '#GPT', '#AI프로젝트'],
  },
];

export const REVIEWS: Review[] = [
  {
    nickname: 'AI초보123',
    rating: 5,
    comment: 'AI를 처음 접하는데도 어렵지 않게 따라갈 수 있었습니다. 강사님의 친절한 설명과 자세한 실습 덕분에 자신감이 생겼어요!',
  },
  {
    nickname: '개발자K',
    rating: 4,
    comment: '이론만 알던 내용을 실제 코드로 구현해보면서 깊이 있는 이해를 할 수 있었습니다. 특히 프로젝트 중심의 강의가 매우 만족스러웠습니다.',
  },
  {
    nickname: '미래연구자',
    rating: 5,
    comment: '최신 트렌드를 반영한 커리큘럼이 인상 깊었습니다. 다른 강의에서는 찾아보기 힘든 고급 기술들을 배울 수 있어서 좋았습니다.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '강의 수강을 위한 선수 지식이 필요한가요?',
    answer: '강의별 난이도가 다르니 상세 페이지를 참고해 주세요. 초급 강의는 비전공자도 수강 가능합니다.',
  },
  {
    question: '수료증이 발급되나요?',
    answer: '네, 모든 강의 수료 시 디지털 수료증이 발급됩니다.',
  },
  {
    question: '결제는 어떻게 하나요?',
    answer: '신용카드, 계좌이체 등 다양한 결제 수단을 지원합니다.',
  },
];

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const UserGroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChatAlt2Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" />
    </svg>
);

export const WHY_US_ITEMS: WhyUsItem[] = [
    {
        icon: <CodeIcon />,
        title: '실무 중심 커리큘럼',
        description: '이론뿐만 아니라 실제 업무에 바로 적용 가능한 실습 위주 강의',
    },
    {
        icon: <UserGroupIcon />,
        title: '최고의 강사진',
        description: '각 분야의 전문가들이 직접 설계하고 강의하는 고품질 교육',
    },
    {
        icon: <ClockIcon />,
        title: '유연한 학습 환경',
        description: '온라인으로 언제 어디서든 원하는 시간에 학습 가능',
    },
    {
        icon: <ChatAlt2Icon />,
        title: '커뮤니티 지원',
        description: '활발한 질의응답과 학습자 간 네트워킹을 위한 커뮤니티 제공',
    }
];
