'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConvenienceCleaning() {
  const serviceFeatures = [
    {
      title: '深夜・早朝対応',
      description: '深夜・早朝対応可能（営業に影響なし）',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      title: 'スピード仕上げ',
      description: '経験豊富なスタッフによるスピード仕上げ',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: '品質安定化',
      description: '定期契約で清掃品質を安定化',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '安心の報告',
      description: '報告書・写真提出対応で安心',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const serviceContents = [
    '床洗浄、ワックス掛け（自動洗浄機or手作業対応）',
    'ガラス、サッシ清掃（出入口・ショーケースなど）',
    'トイレ清掃、除菌',
    'ゴミ置場整理、搬出補助',
    '店内什器、棚、レジ周りの拭き掃除'
  ];

  const responseFormats = [
    {
      title: '夜間対応時間',
      description: '夜間22時〜翌朝6時までの作業に対応'
    },
    {
      title: '柔軟な契約形態',
      description: '定期契約で「毎週・隔週・月1回」など柔軟に対応可能'
    },
    {
      title: '内容調整可能',
      description: '床洗浄+ガラス清掃のみ/トイレこみなど内容で調整可能'
    }
  ];

  const pricingData = [
    { scale: '小規模（〜20坪）', price: '8,000〜12,000円' },
    { scale: '中規模（20〜40坪）', price: '12,000〜18,000円' },
    { scale: '大規模（40坪以上）', price: '18,000円〜' }
  ];

  const serviceFlow = [
    { step: '1', title: 'お問い合わせ', description: 'お電話またはWebフォームからお気軽にご相談ください' },
    { step: '2', title: '現地確認', description: '店舗の規模や清掃内容、営業時間を詳しく確認' },
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
              コンビニ清掃サービス
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              夜間22時〜翌朝6時までの作業で営業に影響なし
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
                サービス
              </li>
              <li className="text-neutral-500">
                <span className="mx-2">›</span>
                コンビニ清掃
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
                コンビニ清掃の特徴
              </h2>
              <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                24時間営業のコンビニエンスストアに最適な清掃サービス
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

      {/* Response Format Section */}
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
                対応形態
              </h2>
              <p className="text-lg text-navy-600">
                お客様のニーズに合わせた柔軟な対応
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {responseFormats.map((format, index) => (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-primary-600 mb-4">
                    {format.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    {format.description}
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
                <span className="font-semibold text-primary-600">複数店舗契約の場合は割引あり</span>
                <br />
                チェーン店様やフランチャイズオーナー様への特別料金もご用意しております
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
              コンビニ清掃のお問い合わせはこちら
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