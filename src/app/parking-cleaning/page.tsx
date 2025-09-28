'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ParkingCleaning() {
  const serviceFeatures = [
    {
      title: '地域密着対応',
      description: '埼玉・東京・千葉・神奈川エリアで迅速対応',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'コスト削減',
      description: '中間マージンなし直契約だからコスト削減',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: '柔軟な時間対応',
      description: '夜間・早朝の清掃も対応可能',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '写真報告',
      description: '清掃前後写真報告で安心',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const serviceContents = [
    '駐車場内ゴミ拾い（吸い殻・空き缶・落ち葉など）',
    '草むしり・除草剤の散布',
    '精算機・看板・フェンスなどの拭き掃除',
    '区画線・車止め周り清掃',
    '排水口泥さらい（必要に応じて対応）'
  ];

  const serviceTypes = [
    {
      type: '定期清掃',
      frequency: '週1回〜月1回',
      description: '継続的な清掃で駐車場の美観を保ちます',
      benefits: ['月額制で安定した管理', '定期契約割引適用', '計画的な清掃スケジュール']
    },
    {
      type: 'スポット清掃',
      frequency: '緊急時・必要時',
      description: '急な清掃が必要な際にも迅速に対応',
      benefits: ['緊急対応可能', '単発での利用可能', '柔軟なスケジュール調整']
    }
  ];

  const pricingData = [
    { scale: '小規模（5~10台程度）', price: '1,500~3,000円' },
    { scale: '中規模（10~30台程度）', price: '2,500~3,500円' },
    { scale: '大規模（30台以上）', price: '5,000~10,000円' }
  ];

  const serviceFlow = [
    { step: '1', title: 'お問い合わせ', description: 'お電話またはWebフォームからお気軽にご相談ください' },
    { step: '2', title: '現地確認', description: '駐車場の規模や清掃範囲を詳しく確認いたします' },
    { step: '3', title: 'お見積り', description: '駐車場の規模や清掃内容に応じて最適なプランをご提案' },
    { step: '4', title: 'サービス開始', description: '定期契約またはスポット対応でサービスを開始いたします' }
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
              コインパーキング清掃サービス
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              駐車場の美観と安全性を保つプロフェッショナル清掃
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
                コインパーキング清掃
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
                MS-Wipが選ばれる理由
              </h2>
              <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                コインパーキング清掃において、お客様に選ばれ続ける理由があります
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

      {/* Service Types Section */}
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
                お客様のニーズに合わせて定期・スポット清掃に対応
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {serviceTypes.map((serviceType, index) => (
                <motion.div
                  key={serviceType.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">
                    {serviceType.type}
                  </h3>
                  <p className="text-lg text-navy-700 mb-4">
                    {serviceType.frequency}
                  </p>
                  <p className="text-navy-600 mb-6">
                    {serviceType.description}
                  </p>
                  <div className="space-y-3">
                    {serviceType.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center justify-center space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                        <span className="text-navy-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
                駐車場の規模に応じた明確な料金体系（税抜）
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
                    <th className="px-6 py-4 text-left font-semibold">規模</th>
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
                <span className="font-semibold text-primary-600">複数箇所まとめてご契約いただくと、月額割引も可能です</span>
                <br />
                複数のコインパーキングを所有されている方は、ぜひご相談ください
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
              コインパーキング清掃のお問い合わせはこちら
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