
import React, { useState, forwardRef } from 'react';
import { COURSES } from '../constants';

const ApplicationSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState({
    course: COURSES[0].title,
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    agreed: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
        alert("개인정보 수집 및 이용에 동의해주세요.");
        return;
    }
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section ref={ref} className="py-20 bg-neutral-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            지금 바로 당신의 AI 여정을 시작하세요!
          </h2>
          <p className="text-neutral-light/80 mb-8">
            관심 있는 강의를 선택하고 아래 신청 양식을 작성해 주세요. 전문 상담원이 빠르게 연락드리겠습니다.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-lg shadow-2xl">
          {isSubmitted ? (
            <div className="text-center p-8">
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">신청 완료!</h3>
                <p className="text-white">강의 신청이 성공적으로 완료되었습니다. 곧 연락드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-neutral-light mb-2">신청 강의 선택</label>
                <select id="course" name="course" value={formData.course} onChange={handleChange} className="w-full bg-neutral-dark border border-neutral-medium rounded-lg p-3 text-white focus:ring-brand-primary focus:border-brand-primary">
                  {COURSES.map((c) => (
                    <option key={c.title} value={c.title}>{c.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-light mb-2">이름</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-neutral-dark border border-neutral-medium rounded-lg p-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-light mb-2">이메일</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-neutral-dark border border-neutral-medium rounded-lg p-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-light mb-2">전화번호</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-neutral-dark border border-neutral-medium rounded-lg p-3 text-white focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-neutral-light mb-2">문의사항</label>
                <textarea id="inquiry" name="inquiry" value={formData.inquiry} onChange={handleChange} rows={4} className="w-full bg-neutral-dark border border-neutral-medium rounded-lg p-3 text-white focus:ring-brand-primary focus:border-brand-primary"></textarea>
              </div>
              <div className="flex items-center">
                <input id="agreed" name="agreed" type="checkbox" checked={formData.agreed} onChange={handleChange} className="h-4 w-4 text-brand-primary bg-neutral-dark border-neutral-medium rounded focus:ring-brand-primary" />
                <label htmlFor="agreed" className="ml-2 block text-sm text-neutral-light">개인정보 수집 및 이용 동의 (필수)</label>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/90 transition-colors duration-300 disabled:bg-neutral-medium" disabled={!formData.agreed}>
                  강의 신청 완료
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
});

ApplicationSection.displayName = "ApplicationSection";
export default ApplicationSection;
