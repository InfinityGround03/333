import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-japanese text-red-800 mb-6">
            私たちについて
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl font-japanese text-gray-600 max-w-3xl mx-auto leading-relaxed">
            日本の伝統的な美しさと現代のイノベーションを融合させ、<br />
            心に響く体験を提供しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-japanese font-semibold text-red-800">品質への こだわり</h3>
              </div>
              <p className="font-japanese text-gray-600 leading-relaxed">
                一つ一つの作品に込められた職人の魂と、最高品質の素材へのこだわりをお楽しみください。
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-japanese font-semibold text-pink-800">おもてなしの心</h3>
              </div>
              <p className="font-japanese text-gray-600 leading-relaxed">
                お客様一人ひとりを大切にし、心からのおもてなしでお迎えいたします。
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-japanese font-semibold text-orange-800">伝統の継承</h3>
              </div>
              <p className="font-japanese text-gray-600 leading-relaxed">
                古くから受け継がれてきた日本の美しい伝統を、次の世代へと繋いでいきます。
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8 shadow-xl">
              <img 
                src="https://picsum.photos/500/400?random=1" 
                alt="日本の美しさ" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-japanese font-bold">和</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;