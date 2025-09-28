'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, MapPinIcon, ClockIcon, CurrencyYenIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Careers() {
  const jobDetails = [
    {
      title: 'マンション・アパート共用部の清掃',
      description: '廊下・階段・ポスト・ゴミ置場など',
      time: '30分〜1時間',
      difficulty: '軽作業'
    },
    {
      title: 'コインパーキングの簡易清掃',
      description: 'ゴミ拾い・落ち葉掃除・精算機拭きなど',
      time: '20分〜40分',
      difficulty: '軽作業'
    },
    {
      title: 'コインランドリー清掃',
      description: '床掃き・ゴミ箱整理・機械拭き・ガラス拭き（最低30分は店内を清掃）',
      time: '30分以上',
      difficulty: '一般作業'
    },
    {
      title: 'コンビニ・飲食店・ゲームセンターなどの夜間・早朝清掃',
      description: '店舗の清掃業務',
      time: '1時間〜2時間',
      difficulty: '一般作業'
    },
    {
      title: '早朝のゴミ出し代行',
      description: 'ゴミ出し業務のサポート',
      time: '10分〜20分',
      difficulty: '軽作業'
    }
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
              採用情報
            </motion.h1>
            <motion.p
              className="text-lg text-neutral-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              清掃スタッフ募集｜業務委託
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
                採用情報
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Job Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-6">
                清掃スタッフ募集
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center p-6 bg-neutral-50 rounded-lg">
                  <div className="text-primary-600 mb-3">
                    <UserGroupIcon className="h-8 w-8 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">雇用形態</h3>
                  <p className="text-navy-600">業務委託</p>
                </div>
                <div className="text-center p-6 bg-neutral-50 rounded-lg">
                  <div className="text-primary-600 mb-3">
                    <MapPinIcon className="h-8 w-8 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">勤務地</h3>
                  <p className="text-navy-600">東京・埼玉・千葉・神奈川</p>
                </div>
                <div className="text-center p-6 bg-neutral-50 rounded-lg">
                  <div className="text-primary-600 mb-3">
                    <ClockIcon className="h-8 w-8 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">勤務時間</h3>
                  <p className="text-navy-600">シフト自由</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-8">仕事内容</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobDetails.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200"
                  >
                    <h3 className="font-semibold text-navy-900 mb-3">{job.title}</h3>
                    <p className="text-navy-600 mb-4">{job.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {job.time}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {job.difficulty}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Style & Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Work Style */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-navy-900 mb-6">勤務スタイル</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">地域密着型</h3>
                      <p className="text-navy-600">自宅から自転車で通える範囲の現場を担当</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">直行直帰OK</h3>
                      <p className="text-navy-600">効率的な働き方で時間を有効活用</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">シフト自由</h3>
                      <p className="text-navy-600">スキマ時間勤務OK（現場によっては時間指定あり）</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-navy-900 mb-6">募集対象</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-navy-700">年齢・経験不問、未経験歓迎</p>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-navy-700">主婦（夫）、子育て中の方、シニア、Wワーク歓迎</p>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-navy-700">扶養範囲内で働きたい方</p>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-navy-700">地域に根ざして長く働きたい方</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-8">報酬について</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center justify-center mb-6">
                  <CurrencyYenIcon className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  30分1,000円からのお仕事もあります
                </h3>
                <p className="text-navy-600 mb-6">
                  案件ごとに異なりますが、短時間案件から、しっかり収入につながる案件まで幅広くあります。
                </p>
                <p className="text-navy-700 font-medium">
                  複数現場を担当すれば、収入を増やしていけます。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">待遇・メリット</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">清掃道具は貸与または支給</h3>
                  <p className="text-navy-600">必要な道具は会社で用意いたします</p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">未経験でも簡単な研修あり</h3>
                  <p className="text-navy-600">安心してスタートできます</p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">家事や育児の合間にできる</h3>
                  <p className="text-navy-600">ライフスタイルに合わせた働き方</p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-900 mb-2">無理のないペースで長く続けられる</h3>
                  <p className="text-navy-600">持続可能な働き方をサポート</p>
                </div>
              </div>
            </motion.div>
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
              ご応募・お問い合わせ
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              ご質問やご応募をお待ちしております。お気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                お問い合わせフォーム
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