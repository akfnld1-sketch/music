import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-neutral-medium py-8">
      <div className="container mx-auto px-6 text-center text-sm">
        <p className="mb-2">Copyright © 2025 Hyun Woo. AI Master Class All rights reserved.</p>
        <div className="flex justify-center space-x-4">
            <p>문의: 010-2201-4524</p>
            <p>이메일: akfnld@naver.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;