'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Area() {
  // Get current date in Japanese format
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${year}年${month}月${day}日`;

  // Japan prefectures organized by region
  const regions = [
    {
      name: '北海道・東北',
      prefectures: ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県']
    },
    {
      name: '関東',
      prefectures: ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県']
    },
    {
      name: '中部',
      prefectures: ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県']
    },
    {
      name: '近畿',
      prefectures: ['三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県']
    },
    {
      name: '中国',
      prefectures: ['鳥取県', '島根県', '岡山県', '広島県', '山口県']
    },
    {
      name: '四国',
      prefectures: ['徳島県', '香川県', '愛媛県', '高知県']
    },
    {
      name: '九州・沖縄',
      prefectures: ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県']
    }
  ];

  // Currently supported areas
  const supportedAreas = ['東京都', '埼玉県', '千葉県', '神奈川県'];

  // Detailed coverage for supported areas
  // const supportedDetails = [
  //   {
  //     area: '東京都',
  //     details: ['23区全域', '多摩地区', '島しょ部']
  //   },
  //   {
  //     area: '埼玉県',
  //     details: ['さいたま市', '川口市', '川越市', '所沢市', 'その他主要市町村']
  //   },
  //   {
  //     area: '千葉県',
  //     details: ['千葉市', '船橋市', '柏市', '市川市', 'その他主要市町村']
  //   },
  //   {
  //     area: '神奈川県',
  //     details: ['横浜市', '川崎市', '相模原市', '藤沢市', 'その他主要市町村']
  //   }
  // ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              対応地域
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {formattedDate}現在の対応地域
            </motion.p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-neutral-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-primary-600 hover:text-primary-700">
                  トップ
                </Link>
              </li>
              <li className="text-neutral-500">
                <span className="mx-2">›</span>
                対応地域
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* All Japan Prefectures Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                全国都道府県一覧
              </h2>
              <p className="text-lg text-navy-600 mb-6">
                青色ハイライト：現在対応中　｜　グレー：今後対応予定
              </p>
              <div className="bg-neutral-50 rounded-lg p-6">
                <p className="text-navy-700 text-lg">
                  <span className="font-semibold text-primary-600">対応地域は随時拡大予定です</span>
                  <br />
                  上記以外の地域についても、お気軽にお問い合わせください
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {regions.map((region, regionIndex) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: regionIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border border-neutral-200 p-6"
                >
                  <h3 className="text-lg font-bold text-navy-900 mb-4 border-b border-neutral-200 pb-2">
                    {region.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {region.prefectures.map((prefecture) => (
                      <div
                        key={prefecture}
                        className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                          supportedAreas.includes(prefecture)
                            ? 'bg-primary-600 text-white'
                            : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        {prefecture}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              お客様の地域での清掃サービスをお探しですか？
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              対応可能地域については、お気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                お問い合わせ
              </a>
              <a
                href="tel:048-400-0407"
                className="bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-primary-700"
              >
                048-400-0407
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}