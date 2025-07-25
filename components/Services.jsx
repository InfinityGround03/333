import React from 'react';

function Services() {
  const services = [
    {
      title: "茶道体験",
      description: "伝統的な茶道の世界で、心の静けさと美しさを体験してください。",
      image: "https://picsum.photos/400/300?random=2",
      features: ["初心者歓迎", "英語対応可", "お茶菓子付き"]
    },
    {
      title: "華道教室",
      description: "季節の花を使った美しい生け花の技術を学べます。",
      image: "https://picsum.photos/400/300?random=3",
      features: ["個人指導", "材料込み", "作品お持ち帰り"]
    },
    {
      title: "書道レッスン",
      description: "筆と墨で表現する日本の美しい文字の世界を探求します。",
      image: "https://picsum.photos/400/300?random=4",
      features: ["基礎から応用", "道具レンタル", "作品展示会"]
    },
    {
      title: "着物着付け",
      description: "美しい着物の着付けを学び、日本の伝統美を身に着けます。",
      image: "https://picsum.photos/400/300?random=5",
      features: ["着物レンタル", "写真撮影", "ヘアセット込み"]
    },
    {
      title: "料理教室",
      description: "本格的な和食の調理法を学び、日本の食文化を体験します。",
      image: "https://picsum.photos/400/300?random=6",
      features: ["季節の食材", "レシピ提供", "試食付き"]
    },
    {
      title: "文化ツアー",
      description: "日本の歴史ある場所を巡り、深い文化を体験できます。",
      image: "https://picsum.photos/400/300?random=7",
      features: ["ガイド付き", "交通費込み", "昼食付き"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-japanese text-red-800 mb-6">
            サービス一覧
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl font-japanese text-gray-600 max-w-3xl mx-auto leading-relaxed">
            日本の伝統文化を深く体験できる<br />
            多彩なプログラムをご用意しております。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-japanese">
                  体験可能
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-japanese font-semibold text-red-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-japanese text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-japanese text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-japanese font-medium hover:from-red-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Services = Services;