import React, { useState } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryItems = [
    {
      id: 1,
      src: "https://picsum.photos/600/400?random=8",
      title: "桜の季節",
      category: "自然"
    },
    {
      id: 2,
      src: "https://picsum.photos/600/400?random=9",
      title: "茶道の心",
      category: "文化"
    },
    {
      id: 3,
      src: "https://picsum.photos/600/400?random=10",
      title: "京都の街並み",
      category: "建築"
    },
    {
      id: 4,
      src: "https://picsum.photos/600/400?random=11",
      title: "和食の美",
      category: "料理"
    },
    {
      id: 5,
      src: "https://picsum.photos/600/400?random=12",
      title: "着物の美しさ",
      category: "ファッション"
    },
    {
      id: 6,
      src: "https://picsum.photos/600/400?random=13",
      title: "庭園の静寂",
      category: "自然"
    },
    {
      id: 7,
      src: "https://picsum.photos/600/400?random=14",
      title: "書道作品",
      category: "芸術"
    },
    {
      id: 8,
      src: "https://picsum.photos/600/400?random=15",
      title: "陶芸の技",
      category: "工芸"
    },
    {
      id: 9,
      src: "https://picsum.photos/600/400?random=16",
      title: "華道の世界",
      category: "文化"
    }
  ];

  const categories = ["全て", ...new Set(galleryItems.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState("全て");

  const filteredItems = activeCategory === "全て" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-japanese text-red-800 mb-6">
            ギャラリー
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl font-japanese text-gray-600 max-w-3xl mx-auto leading-relaxed">
            日本の美しい瞬間を<br />
            写真で切り取りました。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-japanese font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-japanese font-semibold mb-1">{item.title}</h3>
                  <span className="text-sm bg-red-600 px-2 py-1 rounded">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-japanese font-semibold mb-2">{selectedImage.title}</h3>
                  <span className="bg-red-600 px-3 py-1 rounded text-sm">{selectedImage.category}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

window.Gallery = Gallery;