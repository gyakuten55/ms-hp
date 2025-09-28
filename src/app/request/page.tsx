'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

// Hardcoded services list (no database needed)
const services = [
  {
    id: 'mansion-cleaning',
    name: 'マンション・アパート清掃',
    description: '共用部の清掃（廊下・階段・ポスト・ゴミ置場など）'
  },
  {
    id: 'convenience-cleaning',
    name: 'コンビニエンスストア清掃',
    description: '店舗の清掃業務（床掃き・ゴミ箱整理・機械拭き・ガラス拭きなど）'
  },
  {
    id: 'arcade-cleaning',
    name: 'アーケード・ゲームセンター清掃',
    description: '夜間・早朝の店舗清掃業務'
  },
  {
    id: 'parking-cleaning',
    name: 'コインパーキング清掃',
    description: 'ゴミ拾い・落ち葉掃除・精算機拭きなど'
  },
  {
    id: 'grease-trap',
    name: 'グリストラップ清掃',
    description: '油脂汚泥の除去・バスケット洗浄・悪臭対策'
  },
  {
    id: 'garbage-service',
    name: '早朝ゴミ出し代行',
    description: 'ゴミ出し業務のサポート（10分〜20分）'
  }
];

export default function Request() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleServiceChange = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
    // Clear error when user selects services
    if (error) setError(null);
  };

  const handleSelectAll = () => {
    if (selectedServices.length === services.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices(services.map(service => service.id));
    }
    // Clear error when user interacts with services
    if (error) setError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setError('資料を選択してください。');
      return;
    }
    if (!formData.name || !formData.email) {
      setError('必須項目を入力してください。');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/request-simple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedServices
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'エラーが発生しました');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : '送信中にエラーが発生しました。もう一度お試しください。');
      console.error('Error submitting request:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center bg-neutral-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">
            資料請求ありがとうございます
          </h2>
          <p className="text-navy-600 mb-8">
            ご請求いただいた資料を<br />
            メールに添付してお送りいたしました。ご確認ください。
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setSelectedServices([]);
              setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                message: ''
              });
            }}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            新しい資料請求
          </button>
        </motion.div>
      </div>
    );
  }

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
              資料請求
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              清掃サービスの詳細資料をご請求ください
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
                資料請求
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content */}
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
                ご希望のサービス資料を選択してください
              </h2>
              <p className="text-lg text-navy-600">
                選択されたサービスの詳細資料をPDFファイルでお送りいたします
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error Display */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800">{error}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Service Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-neutral-50 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-navy-900">
                    資料を選択 <span className="text-red-500">*</span>
                  </h3>
                  <button
                    type="button"
                    onClick={handleSelectAll}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    {selectedServices.length === services.length ? '全て解除' : '全て選択'}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <label className="relative flex items-start p-4 bg-white border border-neutral-200 rounded-lg cursor-pointer hover:border-primary-300 transition-colors">
                        <input
                          type="checkbox"
                          value={service.id}
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleServiceChange(service.id)}
                          className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center">
                            <DocumentTextIcon className="h-5 w-5 text-primary-600 mr-2" />
                            <span className="font-semibold text-navy-900 text-sm">
                              {service.name}
                            </span>
                          </div>
                          <p className="text-sm text-navy-600 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </label>
                    </motion.div>
                  ))}
                </div>

                <p className="text-sm text-navy-600 mt-4">
                  選択された資料は、PDFファイルとしてメールに添付してお送りいたします。
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-neutral-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-6">
                  お客様情報
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="山田太郎"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="株式会社サンプル"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    ご質問・ご要望
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="ご質問やご要望がございましたらお書きください"
                  ></textarea>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : '資料を請求する'}
                </button>

                <p className="text-sm text-neutral-600 mt-4">
                  お預かりした個人情報は、資料送付および関連するご連絡以外の目的では使用いたしません
                </p>
              </motion.div>
            </form>
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
              お急ぎの方はお電話でお問い合わせください
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              お見積りやご質問も承っております
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