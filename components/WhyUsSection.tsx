
import React from 'react';
import { WHY_US_ITEMS } from '../constants';

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          왜 'AI 마스터 클래스'를 선택해야 할까요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_ITEMS.map((item, index) => (
            <div key={index} className="text-center p-6 bg-gray-900 rounded-lg border border-neutral-medium/30">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-neutral-dark mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-neutral-light/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
