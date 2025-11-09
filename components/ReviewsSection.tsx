
import React from 'react';
import { REVIEWS } from '../constants';
import ReviewCard from './ReviewCard';

const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          실제 수강생들의 생생한 후기
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
          <div className="p-6 bg-neutral-dark rounded-lg flex items-center justify-center h-full min-h-[200px] lg:min-h-0">
             <img src="https://picsum.photos/400/500?random=2" alt="Satisfied students" className="rounded-lg shadow-lg object-cover w-full h-full"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
