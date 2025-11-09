// src/App.tsx
import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import FaqSection from "./components/FaqSection";

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [scrollTarget, setScrollTarget] = useState<"playlists" | "faq" | null>(
    null
  );

  useEffect(() => {
    if (!showContent || !scrollTarget) return;
    const el = document.getElementById(scrollTarget);
    if (!el) return;

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
    }, 80);

    setScrollTarget(null);
  }, [showContent, scrollTarget]);

  const handleShowPlaylists = () => {
    setShowContent(true);
    setScrollTarget("playlists");
  };

  const handleShowFaq = () => {
    setShowContent(true);
    setScrollTarget("faq");
  };

  return (
    <>
      <HeroSection
        onShowPlaylists={handleShowPlaylists}
        onShowFaq={handleShowFaq}
      />

      {showContent && (
        <>
          <CoursesSection />
          <FaqSection />
          <footer className="bg-gray-50 text-gray-500 text-center py-6 text-xs md:text-sm border-t border-gray-200">
            © 2025 Emotion Gap · AI Music Library
          </footer>
        </>
      )}
    </>
  );
};

export default App;
