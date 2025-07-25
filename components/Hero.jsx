import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="absolute top-20 right-20 w-32 h-32 animate-float opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-300">
          <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.3"/>
          <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      
      <div className="absolute bottom-32 left-20 w-24 h-24 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400">
          <polygon points="50,15 85,85 15,85" fill="currentColor" opacity="0.4"/>
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-japanese text-red-800 mb-6 tracking-wide">
            日本の美しさ
          </h1>
          <p className="text-xl sm:text-2xl font-japanese text-gray-700 mb-8 leading-relaxed">
            伝統と現代が調和する<br className="sm:hidden" />
            美しい世界へようこそ
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg font-japanese font-medium hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              詳しく見る
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-transparent border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-japanese font-medium hover:bg-red-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

window.Hero = Hero;