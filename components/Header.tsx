
import React from 'react';

interface HeaderProps {
  onApplyClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  return (
    <header className="bg-neutral-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          AI<span className="text-brand-primary">Master</span>Class
        </h1>
        <button
          onClick={onApplyClick}
          className="bg-brand-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-primary/90 transition-colors duration-300 transform hover:scale-105"
        >
          강의 신청
        </button>
      </div>
    </header>
  );
};

export default Header;
