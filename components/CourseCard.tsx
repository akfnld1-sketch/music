
import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onApplyClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onApplyClick }) => {
  const levelColor =
    course.level === '초급'
      ? 'bg-green-500'
      : course.level === '중급'
      ? 'bg-yellow-500'
      : 'bg-red-500';

  return (
    <div className="bg-neutral-dark border border-neutral-medium/50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{course.title}</h3>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${levelColor}`}>
            {course.level}
          </span>
        </div>
        <p className="text-sm text-neutral-medium mb-4">{course.instructor}</p>
        <p className="text-neutral-light/90 mb-6 text-sm flex-grow">{course.description}</p>
        <div className="flex flex-wrap gap-2">
          {course.keywords.map((keyword) => (
            <span key={keyword} className="text-xs bg-neutral-medium/50 text-brand-secondary px-2 py-1 rounded">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 bg-neutral-dark/50 mt-auto">
        <button onClick={onApplyClick} className="w-full bg-brand-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-secondary/90 transition-colors duration-300">
          자세히 보기 및 신청
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
