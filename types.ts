import { ReactNode } from 'react';

export interface Course {
  title: string;
  instructor: string;
  level: '초급' | '중급' | '고급';
  description: string;
  keywords: string[];
}

export interface Review {
  nickname: string;
  rating: number;
  comment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WhyUsItem {
  icon: ReactNode;
  title: string;
  description: string;
}
