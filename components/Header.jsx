import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-red-100 z-50 transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-japanese text-red-800 tracking-wide">
              和
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="font-japanese text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                ホーム
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-japanese text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                私たちについて
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-japanese text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                サービス
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="font-japanese text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                ギャラリー
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-japanese text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                お問い合わせ
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-red-100">
              <button
                onClick={() => scrollToSection('home')}
                className="font-japanese text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                ホーム
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-japanese text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                私たちについて
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-japanese text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                サービス
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="font-japanese text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                ギャラリー
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-japanese text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                お問い合わせ
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

window.Header = Header;