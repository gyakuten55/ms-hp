'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MansionCleaning() {
  const serviceFeatures = [
    {
      title: '定期清掃対応',
      description: '週1回・隔週・月1回など柔軟な定期清掃',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: '共用部専門',
      description: 'エントランス・階段・廊下等の共用部を重点的に',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'プロ清掃技術',
      description: '専用機材・洗剤による徹底清掃',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '管理組合対応',
      description: '管理組合様への詳細報告書・写真提出',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const serviceContents = [
    'エントランス・ロビー清掃（床洗浄・ワックス掛け）',
    '階段・手すり清掃（手すり除菌・階段掃き拭き）',
    '廊下・共用通路清掃（掃き・拭き・ゴミ回収）',
    'エレベーター内清掃（床・壁・ボタン除菌）',
    'ガラス・サッシ清掃（出入口・共用部ガラス）',
    'ポスト・掲示板清掃',
    '集合ゴミ置き場整理・清掃'
  ];

  // const responseFormats = [
  //   {
  //     title: '時間帯調整',
  //     description: '住民の迷惑にならない時間帯での作業を徹底'
  //   },
  //   {
  //     title: '長期定期契約',
  //     description: '年間契約で品質安定とコスト削減を実現'
  //   },
  //   {
  //     title: '管理会社連携',
  //     description: '管理会社様と連携した円滑な清掃サービス'
  //   }
  // ];

  const pricingData = [
    { scale: '小規模（〜20世帯）', price: '2,500〜4,000円' },
    { scale: '中規模（20〜50世帯）', price: '4,000〜6,500円' },
    { scale: '大規模（50世帯以上）', price: '6,500円〜' }
  ];

  const serviceFlow = [
    { step: '1', title: 'お問い合わせ', description: 'お電話またはWebフォームからお気軽にご相談ください' },
    { step: '2', title: '現地確認', description: 'マンション規模や清掃箇所、管理状況を詳しく確認' },
    { step: '3', title: 'お見積り', description: '世帯数や清掃内容に応じて最適なプランをご提案' },
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
              マンション・アパート清掃
            </motion.h1>
            <motion.p
              className="text-lg text-neutral-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              住民の皆様が快適に過ごせる住環境をサポート
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
                サービス一覧
              </li>
              <li className="text-neutral-500">
                <span className="mx-2">›</span>
                マンション・アパート清掃
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              サービスの特徴
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              マンション・アパートの共用部を専門とした清掃サービスです
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-navy-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Contents */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              清掃内容
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceContents.map((content, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-navy-700">{content}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              料金の目安
            </h2>
            <p className="text-lg text-navy-600">
              マンション規模に応じた明確な料金設定
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.map((pricing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-neutral-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  {pricing.scale}
                </h3>
                <div className="text-3xl font-bold text-primary-600 mb-4">
                  {pricing.price}
                </div>
                <p className="text-navy-600 text-sm">
                  1回あたり（税別）
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-navy-600 mb-6">
              ※ 清掃頻度・内容により料金が変動いたします。詳しくはお見積りください。
            </p>
            <a
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              無料見積りを依頼する
            </a>
          </div>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              ご利用の流れ
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {serviceFlow.map((flow, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {flow.step}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
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
          <h2 className="text-3xl font-bold text-white mb-6">
            マンション清掃のことなら<br />お気軽にご相談ください
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            無料お見積りから対応いたします。<br />
            管理組合様のご要望に合わせた最適なプランをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-50 transition-colors"
            >
              資料請求
            </a>
            <a
              href="/contact"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-primary-700"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}