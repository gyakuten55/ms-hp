import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MS-Wip</h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              清掃管理全般を幅広く対応する専門企業として、マンション・オフィス・店舗・駐車場など多様な物件にサービスを提供しています。
            </p>
            <p className="text-neutral-400 text-sm">
              株式会社MS-Wip
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">主なサービス</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>マンション・アパート清掃</li>
              <li>オフィス清掃</li>
              <li>コインパーキング清掃</li>
              <li>早朝ゴミ出し代行</li>
              <li>グリストラップ清掃</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-neutral-300">
              <p>対応エリア：</p>
              <p className="text-sm">東京・埼玉・千葉・神奈川</p>
              <div className="mt-4">
                <a
                  href="/contact"
                  className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  お見積り依頼
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2025 株式会社MS-Wip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;