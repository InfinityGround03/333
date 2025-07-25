import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-japanese font-bold text-red-400 mb-4">
              和
            </h3>
            <p className="font-japanese text-gray-300 leading-relaxed mb-4">
              日本の美しい伝統文化を現代に伝える架け橋として、
              心に響く体験をお届けしています。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 8.25V6.718c0-1.233.997-2.234 2.229-2.234h2.234V1.25h-2.234A5.25 5.25 0 008.996 6.5v1.75H6.25v3.234h2.746V20h3.234v-8.516H15L15.75 8.25h-3.733z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-japanese font-semibold text-red-400 mb-4">
              サービス
            </h4>
            <ul className="space-y-2 font-japanese text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">茶道体験</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">華道教室</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">書道レッスン</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">着物着付け</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">料理教室</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">文化ツアー</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-japanese font-semibold text-red-400 mb-4">
              お役立ち情報
            </h4>
            <ul className="space-y-2 font-japanese text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">よくある質問</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">アクセス</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">料金表</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">キャンセル規定</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">プライバシーポリシー</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">利用規約</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-japanese text-gray-400 text-sm">
              © {currentYear} 和 - 日本の美しさ. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-japanese text-gray-400 hover:text-white text-sm transition-colors duration-300">
                プライバシーポリシー
              </a>
              <a href="#" className="font-japanese text-gray-400 hover:text-white text-sm transition-colors duration-300">
                利用規約
              </a>
              <a href="#" className="font-japanese text-gray-400 hover:text-white text-sm transition-colors duration-300">
                サイトマップ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;