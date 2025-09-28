'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: '料金・契約について',
      questions: [
        {
          question: '見積もりは無料ですか？',
          answer: 'はい、お見積もりは完全無料です。現地調査から詳細なお見積書の作成まで、費用は一切かかりません。お気軽にお問い合わせください。'
        },
        {
          question: '定期契約と単発契約の違いは何ですか？',
          answer: '定期契約は月額制で継続的な清掃サービスを提供し、料金も割安になります。単発契約は必要な時だけのスポット対応で、緊急時や特別な清掃時にご利用いただけます。'
        },
        {
          question: '複数物件の契約で割引はありますか？',
          answer: 'はい、複数物件・複数店舗でのご契約の場合、特別割引をご用意しております。物件数や清掃頻度に応じて個別にお見積もりいたします。'
        },
        {
          question: '最低契約期間はありますか？',
          answer: '定期契約の場合、基本的に3ヶ月からの契約となります。ただし、お客様のご事情に応じて柔軟に対応いたしますので、お気軽にご相談ください。'
        },
        {
          question: '支払い方法は何がありますか？',
          answer: '銀行振込、口座振替をご利用いただけます。定期契約の場合は口座振替が便利です。詳細は契約時にご相談させていただきます。'
        }
      ]
    },
    {
      category: 'サービス内容について',
      questions: [
        {
          question: '早朝・夜間の対応は可能ですか？',
          answer: 'はい、可能です。早朝ゴミ出し代行サービスや、営業時間外の清掃作業など、お客様のご都合に合わせて柔軟に対応いたします。'
        },
        {
          question: '清掃後の報告はありますか？',
          answer: 'はい、清掃前後の写真報告を行っております。作業内容を「見える化」することで、お客様に安心してサービスをご利用いただけます。'
        },
        {
          question: 'どのような清掃用具を使用しますか？',
          answer: 'プロ仕様の清掃用具と、環境に優しい洗剤を使用しております。物件の材質や汚れの状況に応じて、最適な用具・薬剤を選択いたします。'
        },
        {
          question: 'グリストラップ清掃の廃棄物処理も対応できますか？',
          answer: 'はい、油脂・汚泥の除去から適切な廃棄物処理まで一貫して対応いたします。法的に適正な処理を行い、処理証明書もお渡しします。'
        },
        {
          question: '急な清掃依頼にも対応できますか？',
          answer: 'はい、可能な限り対応いたします。緊急時や臨時清掃のご依頼も、お電話一本でご相談ください。スケジュール調整の上、迅速に対応いたします。'
        }
      ]
    },
    {
      category: '対応エリア・時間について',
      questions: [
        {
          question: '対応エリア外でも相談できますか？',
          answer: '現在は東京・埼玉・千葉・神奈川を中心に対応しておりますが、エリア拡大を順次行っております。対象外地域でもお気軽にご相談ください。'
        },
        {
          question: '土日祝日の対応は可能ですか？',
          answer: 'はい、土日祝日も対応可能です。オフィス清掃や店舗清掃など、お客様の営業に合わせたスケジュールで作業いたします。'
        },
        {
          question: 'ゴミ収集車が来る前に確実に間に合いますか？',
          answer: 'はい、各地域のゴミ収集時間を把握し、確実に間に合うよう時間厳守で対応いたします。これがMS-Wipの強みの一つです。'
        }
      ]
    },
    {
      category: 'その他',
      questions: [
        {
          question: '清掃スタッフの教育はどうなっていますか？',
          answer: '全スタッフに対して定期的な研修を実施しております。清掃技術だけでなく、接客マナーや安全管理についても徹底した教育を行っています。'
        },
        {
          question: '損害保険には加入していますか？',
          answer: 'はい、賠償責任保険に加入しております。万が一の事故や損害に対しても適切に対応いたしますので、安心してお任せください。'
        },
        {
          question: '清掃中の破損等があった場合はどうなりますか？',
          answer: '当社の過失による破損等については、保険にて適切に補償いたします。作業前の事前確認も徹底し、トラブル防止に努めております。'
        }
      ]
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
              よくある質問
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
                <Link href="/" className="text-primary-600 hover:text-primary-700">
                  トップ
                </Link>
              </li>
              <li className="text-neutral-500">
                <span className="mx-2">›</span>
                よくある質問
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                お客様からよくいただくご質問
              </h2>
              <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                清掃サービスに関するご質問にお答えします
              </p>
            </motion.div>

            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-primary-600 mb-6 border-b-2 border-primary-600 inline-block pb-1">
                    {category.category}
                  </h3>

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);

                      return (
                        <div
                          key={faqIndex}
                          className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-100 transition-colors"
                          >
                            <span className="font-semibold text-navy-900 pr-4">
                              Q. {faq.question}
                            </span>
                            <ChevronDownIcon
                              className={`h-5 w-5 text-primary-600 transition-transform flex-shrink-0 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          <motion.div
                            initial={false}
                            animate={{
                              height: isOpen ? 'auto' : 0,
                              opacity: isOpen ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 pt-2 bg-white border-t border-neutral-200">
                              <span className="font-semibold text-primary-600 block mb-2">A.</span>
                              <p className="text-navy-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 text-center bg-neutral-50 rounded-lg p-8"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                その他のご質問がございましたら
              </h3>
              <p className="text-navy-700 mb-6">
                上記以外のご質問やご不明な点がございましたら、<br />
                お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  お問い合わせ
                </a>
                <a
                  href="tel:048-400-0407"
                  className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  048-400-0407
                </a>
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