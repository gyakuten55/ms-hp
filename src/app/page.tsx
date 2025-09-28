'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  BuildingOfficeIcon,
  HomeIcon,
  TruckIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyYenIcon,
  MapPinIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  WrenchScrewdriverIcon,
  ShoppingBagIcon,
  CogIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [activeTab, setActiveTab] = useState('daily');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'エラーが発生しました');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: HomeIcon,
      title: 'マンション・アパート清掃',
      href: '/mansion-cleaning'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'オフィス清掃',
      href: '/office-cleaning'
    },
    {
      icon: TruckIcon,
      title: 'コインパーキング清掃',
      href: '/parking-cleaning'
    },
    {
      icon: ClockIcon,
      title: '早朝ゴミ出し代行',
      href: '/garbage-service'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'コインランドリー清掃',
      href: '/laundry-cleaning'
    },
    {
      icon: ShoppingBagIcon,
      title: 'コンビニ清掃',
      href: '/convenience-cleaning'
    },
    {
      icon: CogIcon,
      title: 'グリストラップ清掃',
      href: '/grease-trap'
    },
    {
      icon: PuzzlePieceIcon,
      title: 'ゲームセンター清掃',
      href: '/arcade-cleaning'
    }
  ];

  const pricingTabs = [
    { id: 'daily', label: '日常清掃' },
    { id: 'garbage', label: '早朝ゴミ出し' },
    { id: 'parking', label: 'コインパーキング' },
    { id: 'special', label: '特殊清掃' }
  ];

  const pricingData = {
    daily: [
      {
        service: 'マンション・アパート清掃',
        price: '2,500円〜',
        unit: '1回あたり',
        features: ['共用部掃き掃除', '階段・手すり清掃', 'ポスト・ガラス清掃']
      },
      {
        service: 'オフィス清掃',
        price: 'お見積り',
        unit: '規模により',
        features: ['トイレ清掃', '机上拭き', 'ガラス清掃', 'ゴミ回収']
      }
    ],
    garbage: [
      {
        service: '早朝ゴミ出し代行',
        price: '1,500円〜',
        unit: '袋数により変動',
        features: ['可燃・不燃・資源ゴミ対応', '搬出後の簡易清掃', '写真報告サービス']
      }
    ],
    parking: [
      {
        service: 'コインパーキング清掃',
        price: '1,500円〜',
        unit: '規模に応じて',
        features: ['ゴミ拾い・草むしり', '精算機・看板拭き', '区画線清掃']
      }
    ],
    special: [
      {
        service: 'グリストラップ清掃',
        price: '3,500円〜',
        unit: '規模による',
        features: ['油脂・汚泥除去', '悪臭・害虫対策', '廃棄物処理対応']
      },
      {
        service: 'コンビニ清掃',
        price: '8,000円〜',
        unit: '夜間・早朝対応',
        features: ['床洗浄・ガラス清掃', 'トイレ清掃', 'ゴミ置き場整理']
      },
      {
        service: 'ゲームセンター清掃',
        price: '8,000円〜',
        unit: '定期清掃',
        features: ['床・ガラス・トイレ清掃', 'ゲーム機外装拭き', 'ゴミ回収']
      }
    ]
  };

  const strengths = [
    {
      icon: CurrencyYenIcon,
      title: '直契約で低コスト',
      description: '中間マージンなしで大手より低価格を実現'
    },
    {
      icon: ClockIcon,
      title: '時間厳守',
      description: 'ゴミ収集前や営業時間外に確実対応'
    },
    {
      icon: ShieldCheckIcon,
      title: '安心の写真報告',
      description: '清掃前後の写真報告で作業を見える化'
    },
    {
      icon: MapPinIcon,
      title: '地域密着サービス',
      description: '東京・埼玉・千葉・神奈川エリアを中心に展開'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-navy-50 to-primary-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                信頼と実績の<br />
                <span className="text-primary-600">清掃管理サービス</span>
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-navy-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                マンション・オフィス・店舗・駐車場など<br />
                多様な物件の清掃管理を幅広く対応いたします
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="/request"
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                >
                  資料請求
                </a>
                <a
                  href="tel:048-400-0407"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors"
                >
                  お電話でのお問い合わせ
                </a>
              </motion.div>
            </div>

            {/* Right Contact Form */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-navy-900 mb-4 text-center">
                無料お見積り
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-md font-bold text-navy-900 mb-2">
                    お見積り依頼ありがとうございます
                  </h4>
                  <p className="text-sm text-navy-600 mb-4">
                    1営業日以内にお見積りをお送りいたします。
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceType: '',
                        message: ''
                      });
                    }}
                    className="bg-primary-600 text-white px-4 py-2 text-sm rounded font-semibold hover:bg-primary-700 transition-colors"
                  >
                    新しい見積り依頼
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <p className="text-xs text-red-800">{error}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-3 py-1.5 text-sm border border-neutral-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="山田太郎"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">
                      電話番号 *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-3 py-1.5 text-sm border border-neutral-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="03-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-3 py-1.5 text-sm border border-neutral-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">
                      サービス種類
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">選択してください</option>
                      <option value="mansion">マンション・アパート清掃</option>
                      <option value="office">オフィス清掃</option>
                      <option value="parking">コインパーキング清掃</option>
                      <option value="garbage">早朝ゴミ出し代行</option>
                      <option value="laundry">コインランドリー清掃</option>
                      <option value="convenience">コンビニ清掃</option>
                      <option value="grease">グリストラップ清掃</option>
                      <option value="arcade">ゲームセンター清掃</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">
                      ご要望・詳細
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-3 py-1.5 text-sm border border-neutral-300 rounded focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="清掃頻度、物件の詳細、ご希望等をお聞かせください"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white py-2.5 text-sm rounded font-semibold hover:bg-primary-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '送信中...' : '無料見積りを依頼する'}
                  </button>
                </form>
              )}

              <p className="text-xs text-neutral-600 mt-2 text-center">
                個人情報は見積り連絡以外に使用しません
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              清掃する施設から探す
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              お客様の施設に合わせた最適な清掃サービスをご提供いたします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.a
                key={service.title}
                href={service.href}
                className="flex items-center bg-white p-4 rounded-lg border border-primary-600 hover:bg-primary-50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0" />
                <span className="text-navy-900 font-medium text-sm flex-grow">
                  {service.title}
                </span>
                <ChevronRightIcon className="h-5 w-5 text-primary-600 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            ))}
          </div>

        </div>
      </section>

      {/* Strengths Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/ofisu-qing-saono-shi-huawosuru-ren.jpg"
            alt="オフィス清掃の様子"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - empty space for image */}
            <div className="hidden lg:block"></div>

            {/* Right side - Content Box */}
            <motion.div
              className="bg-primary-600 rounded-lg p-8 text-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <div className="bg-yellow-400 text-primary-900 px-3 py-1 rounded text-sm font-bold inline-block mb-4">
                  プロ意識が高い！
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  MS-Wipが選ばれる理由
                </h2>
                <p className="text-primary-100 leading-relaxed mb-6">
                  MS-Wipでは直契約による中間マージンなしの低コストと、
                  時間厳守・柔軟対応を実現しています。清掃前後の写真報告による
                  見える化で安心感をお届けし、東京・埼玉・千葉・神奈川エリアを
                  中心とした地域密着サービスで、住宅・オフィス・商業施設・飲食店
                  まで幅広い清掃管理を承ります。
                </p>
                <a
                  href="/about"
                  className="inline-block bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
                >
                  会社概要
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              明確な料金体系
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              分かりやすい料金設定で安心してご利用いただけます
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-white shadow-sm border border-neutral-200 p-1">
              {pricingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-md transform scale-105'
                      : 'text-navy-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
          >
            {pricingData[activeTab as keyof typeof pricingData].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-white rounded-xl border border-neutral-200 p-8 hover:shadow-xl hover:border-primary-300 transition-all duration-300 group w-full max-w-xs"
              >
                {/* Popular Badge for certain services */}
                {(item.service === 'マンション・アパート清掃' || item.service === '早朝ゴミ出し代行') && (
                  <div className="absolute -top-3 left-6 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    人気
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.service}
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {item.price}
                  </div>
                  <p className="text-navy-500 text-sm font-medium">
                    {item.unit}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="h-px bg-neutral-200"></div>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-navy-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center block group-hover:bg-primary-700"
                  >
                    お見積り依頼
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-8">
              お得な割引制度
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-navy-700 font-medium">定期契約で最大20%OFF</span>
              </div>
              <div className="flex items-center gap-3">
                <BuildingOfficeIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span className="text-navy-700 font-medium">複数物件契約で10%OFF</span>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <span className="text-navy-700 font-medium">初回清掃50%OFF</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            無料お見積りから対応いたします。<br />
            お客様のご要望に合わせた最適なプランをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-neutral-50 transition-colors"
            >
              資料請求
            </a>
            <a
              href="tel:048-400-0407"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-primary-700"
            >
              048-400-0407
            </a>
          </div>
          <p className="text-primary-200 mt-6">
            対応エリア：東京・埼玉・千葉・神奈川
          </p>
        </div>
      </section>
    </div>
  );
}