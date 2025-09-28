'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function OfficeCleaning() {
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
              オフィス清掃
            </motion.h1>
            <motion.p
              className="text-lg text-neutral-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              働きやすいオフィス環境をサポート
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
                オフィス清掃
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="mb-8">
                <svg className="w-24 h-24 text-primary-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                  準備中
                </h2>
                <p className="text-xl text-navy-600 leading-relaxed">
                  オフィス清掃サービスのページは現在準備中です。<br />
                  サービス開始まで今しばらくお待ちください。
                </p>
              </div>

              <div className="bg-neutral-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  お問い合わせについて
                </h3>
                <p className="text-navy-600 mb-6">
                  オフィス清掃に関するご質問やご相談がございましたら、<br />
                  お気軽にお問い合わせフォームよりご連絡ください。
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  お問い合わせ
                </a>
              </div>

              <div className="text-center">
                <Link
                  href="/"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  ← トップページに戻る
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}