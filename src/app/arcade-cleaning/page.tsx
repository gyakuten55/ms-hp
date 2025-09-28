'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ArcadeCleaning() {
  const serviceFeatures = [
    {
      title: '精密機器への配慮',
      description: '精密機器に配慮した清掃で大切な資産を守ります',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'クレーム削減',
      description: '日常清掃管理でクレーム削減と稼働率アップをサポート',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: '丁寧な清掃',
      description: '壊さない・汚さない・丁寧な清掃でオーナー様の信頼に応えます',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: '営業に支障なし',
      description: '夜間・早朝対応で営業に支障なく清潔な店内を実現',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    }
  ];

  const serviceContents = [
    '店舗内の床清掃（掃き掃除・モップ掛け・洗浄）',
    'ゲーム機周りの拭き掃除（指紋・手垢・ホコリ除去）',
    'ガラス、出入口周りの清掃',
    'トイレ清掃、除菌',
    'ゴミ回収、ゴミ箱の整理'
  ];

  const cleaningCharacteristics = [
    {
      title: '機器への配慮',
      description: '機械の内部には触れず、外装や床を中心に丁寧に清掃'
    },
    {
      title: '営業時間外対応',
      description: '閉店後〜開店前の夜間・早朝対応可能'
    },
    {
      title: '定期契約中心',
      description: '定期契約（月1回〜週1回）での対応が中心です'
    }
  ];

  const pricingData = [
    { scale: '小規模（20〜30坪）', price: '8,000〜12,000円' },
    { scale: '中規模（30〜60坪）', price: '12,000〜18,000円' },
    { scale: '大規模（60坪以上）', price: '18,000円〜' }
  ];

  const serviceFlow = [
    { step: '1', title: 'お問い合わせ', description: 'お電話またはWebフォームからお気軽にご相談ください' },
    { step: '2', title: '現地確認', description: '店舗の規模や清掃範囲、ゲーム機の配置を詳しく確認' },
    { step: '3', title: 'お見積り', description: '店舗の広さや作業内容に応じて最適なプランをご提案' },
    { step: '4', title: 'サービス開始', description: '定期契約での清掃サービスを開始いたします' }
  ];

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
              ゲームセンター清掃サービス
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              閉店後〜開店前の夜間・早朝対応で営業に支障なく清潔な店内を実現
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
                <a href="/" className="text-primary-600 hover:text-primary-700">
                  トップ
                </a>
              </li>
              <li className="text-neutral-500">
                <span className="mx-2">›</span>
                サービス
              </li>
              <li className="text-neutral-500">
                <span className="mx-2">›</span>
                ゲームセンター清掃
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                ゲームセンター清掃の特徴
              </h2>
              <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                ゲームセンター特有の設備と営業形態に配慮したプロフェッショナル清掃
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Contents Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                清掃サービス内容
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="space-y-6">
                {serviceContents.map((content, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-navy-700 text-lg">{content}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cleaning Characteristics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                清掃の特徴
              </h2>
              <p className="text-lg text-navy-600">
                ゲームセンターならではの配慮と対応
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {cleaningCharacteristics.map((characteristic, index) => (
                <motion.div
                  key={characteristic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-primary-600 mb-4">
                    {characteristic.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    {characteristic.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                料金目安
              </h2>
              <p className="text-lg text-navy-600">
                店舗の広さ、作業内容により変動します（税抜）
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-lg"
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">店舗規模</th>
                    <th className="px-6 py-4 text-left font-semibold">料金（1回あたり）</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr key={index} className="border-b border-neutral-200 last:border-b-0">
                      <td className="px-6 py-4 font-medium text-navy-900">{item.scale}</td>
                      <td className="px-6 py-4 text-primary-600 font-semibold text-lg">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-primary-50 rounded-lg p-6 text-center"
            >
              <p className="text-navy-700 text-lg">
                <span className="font-semibold text-primary-600">定期契約（月1回〜週1回）での対応が中心です</span>
                <br />
                継続的な清掃で店内の美観と衛生環境を維持します
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Flow Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                サービスの流れ
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFlow.map((flow, index) => (
                <motion.div
                  key={flow.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {flow.step}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">
                    {flow.title}
                  </h3>
                  <p className="text-navy-600 text-sm">
                    {flow.description}
                  </p>
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
              ゲームセンター清掃のお問い合わせはこちら
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              無料お見積りから丁寧に対応いたします
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