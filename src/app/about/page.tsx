'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const companyData = [
    { label: '商号', value: '株式会社MS-Wip' },
    { label: '代表取締役', value: '田中マークアントニー' },
    { label: '本社所在地', value: '埼玉県川口市東領家1丁目3番14号' },
    { label: '電話番号', value: '048-400-0407' },
    { label: 'メールアドレス', value: 'info@ms-wip.com' },
    { label: '事業内容', value: '清掃管理全般・日常清掃・定期清掃・巡回清掃・臨時清掃' },
    { label: '対応エリア', value: '東京・埼玉・千葉・神奈川' }
  ];

  const historyData = [
    { year: '2018年', event: '設立（WEB制作・映像編集開始）' },
    { year: '2019年', event: 'フィリピン支部設立' },
    { year: '2019年', event: '現地企業と映像制作提携' },
    { year: '2020年', event: '日本国内でWEB制作事業を拡大' },
    { year: '2020年', event: 'コロナでフィリピン事業一時停止' },
    { year: '2021〜2024年', event: 'WEB・映像制作継続／清掃業準備' },
    { year: '2025年', event: '清掃業スタート（マンション・アパート清掃開始）' },
    { year: '2025年', event: 'コンビニ・コインパーキング清掃開始' },
    { year: '2025年', event: 'グリストラップ清掃開始' },
    { year: '2025年', event: 'コインランドリー清掃開始' },
    { year: '2025年', event: 'ゲームセンター清掃開始' }
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
              会社概要
            </motion.h1>
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
                会社概要
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-primary-600 mb-2 border-b-2 border-primary-600 inline-block pb-1">
                会社概要
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden"
            >
              <table className="w-full">
                <tbody>
                  {companyData.map((item, index) => (
                    <tr key={item.label} className="border-b border-neutral-200 last:border-b-0">
                      <td className="bg-neutral-50 px-6 py-4 font-semibold text-navy-900 w-1/3 border-r border-neutral-200">
                        {item.label}
                      </td>
                      <td className="px-6 py-4 text-navy-700">
                        {item.label === 'メールアドレス' ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="text-primary-600 hover:text-primary-700 underline"
                          >
                            {item.value}
                          </a>
                        ) : item.label === '電話番号' ? (
                          <a
                            href={`tel:${item.value}`}
                            className="text-primary-600 hover:text-primary-700"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Representative Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-primary-600 mb-2 border-b-2 border-primary-600 inline-block pb-1">
                代表挨拶
              </h2>
              <div className="mt-8 bg-neutral-50 rounded-lg p-8">
                <div className="max-w-3xl">
                  <p className="text-navy-700 leading-relaxed mb-6">
                    株式会社MS-Wipは、2018年に映像編集・WEB制作の会社として設立いたしました。
                    日本での制作業務からスタートし、2年目にはフィリピン・マニラにも拠点を構え、海外でも映像制作サービスを展開してまいりました。
                  </p>
                  <p className="text-navy-700 leading-relaxed mb-6">
                    しかし、コロナ禍の影響で仕事が減少し、特にマニラでは長期のロックダウンにより現地での事業継続が困難になりました。
                    その経験を通じて「なくならない仕事」「地域に欠かせないサービス」を追求した結果、清掃業へと事業を広げる決意をいたしました。
                  </p>
                  <p className="text-navy-700 leading-relaxed mb-6">
                    株式会社MS-Wipは、もともと映像編集やホームページ制作を中心に事業を行ってまいりましたが、
                    「見た目を整え、心地よい空間や体験をつくる」という点では、映像もWEBも清掃も本質は同じだと考えています。
                  </p>
                  <p className="text-navy-700 leading-relaxed mb-6">
                    2025年より新たに清掃事業をスタートし、マンション・アパートの共用部清掃、コインランドリー清掃、コインパーキングの維持管理、
                    コンビニやゲームセンターの夜間清掃、飲食店のグリストラップ清掃、さらには早朝のゴミ出し代行まで、幅広く対応しております。
                  </p>
                  <p className="text-navy-700 leading-relaxed mb-6">
                    私たちが大切にしているのは「丁寧な仕事」と「安心して任せてもらえる信頼関係」です。
                    作業後には写真による報告を行い、遠方のオーナー様でも現場の様子を確認いただける仕組みを整えております。
                    また、夜間・早朝の清掃にも対応し、オーナー様・店舗様の負担をできるだけ軽減できるよう努めています。
                  </p>
                  <p className="text-navy-700 leading-relaxed mb-8">
                    MS-Wipの強みは、清掃業だけでなく、もともと持っている映像やWEBの知識を活かし、
                    「わかりやすく・見える形」で成果をお伝えできることです。
                    これからも地域の皆様とともに歩み、快適な環境づくりに貢献してまいります。
                  </p>
                  <div className="text-right">
                    <p className="text-navy-900 font-semibold">株式会社MS-Wip</p>
                    <p className="text-navy-900 font-semibold">代表取締役　田中マークアントニー</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Company History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-primary-600 mb-2 border-b-2 border-primary-600 inline-block pb-1">
                沿革
              </h2>
              <div className="mt-8 bg-white border border-neutral-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {historyData.map((item, index) => (
                      <tr key={index} className="border-b border-neutral-200 last:border-b-0">
                        <td className="bg-neutral-50 px-6 py-4 font-semibold text-navy-900 w-1/4 border-r border-neutral-200">
                          {item.year}
                        </td>
                        <td className="px-6 py-4 text-navy-700">
                          {item.event}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
              清掃管理のことならMS-Wipにお任せください
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