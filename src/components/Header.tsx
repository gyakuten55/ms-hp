'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'マンション・アパート清掃', href: '/mansion-cleaning' },
    { name: 'オフィス清掃', href: '/office-cleaning' },
    { name: 'コインパーキング清掃', href: '/parking-cleaning' },
    { name: '早朝ゴミ出し代行', href: '/garbage-service' },
    { name: 'コインランドリー清掃', href: '/laundry-cleaning' },
    { name: 'コンビニ清掃', href: '/convenience-cleaning' },
    { name: 'グリストラップ清掃', href: '/grease-trap' },
    { name: 'ゲームセンター清掃', href: '/arcade-cleaning' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 shadow-xl backdrop-blur-md border-b border-neutral-100'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="MS-Wip"
                width={180}
                height={60}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <a
              href="/"
              className="text-navy-700 hover:text-primary-600 font-light transition-all duration-200 relative group"
            >
              トップ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-navy-700 hover:text-primary-600 font-light transition-all duration-200 relative group">
                サービス
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-neutral-100 py-3 mt-1">
                  <div className="grid grid-cols-1 gap-1">
                    {services.map((service, index) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-5 py-3 text-sm text-navy-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 hover:translate-x-1"
                      >
                        <span className="font-light">{service.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/about"
              className="text-navy-700 hover:text-primary-600 font-light transition-all duration-200 relative group"
            >
              会社概要
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/faq"
              className="text-navy-700 hover:text-primary-600 font-light transition-all duration-200 relative group"
            >
              よくある質問
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/area"
              className="text-navy-700 hover:text-primary-600 font-light transition-all duration-200 relative group"
            >
              対応地域
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/careers"
              className="text-navy-700 hover:text-primary-600 font-light transition-all duration-200 relative group"
            >
              採用情報
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
              className="text-navy-700 hover:text-primary-600 font-light transition-all duration-200 relative group"
            >
              お問い合わせ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/request"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              資料請求
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-navy-700 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-xl">
            <nav className="px-4 py-6 space-y-2">
              <a
                href="/"
                className="block text-navy-700 hover:text-primary-600 font-light py-3 px-3 rounded-lg hover:bg-neutral-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                トップ
              </a>

              <div>
                <button
                  className="flex items-center justify-between w-full text-navy-700 font-medium py-2"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  サービス
                  <ChevronDownIcon className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-navy-600 hover:text-primary-600 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/about"
                className="block text-navy-700 hover:text-primary-600 font-medium py-3 px-3 rounded-lg hover:bg-neutral-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                会社概要
              </a>
              <a
                href="/faq"
                className="block text-navy-700 hover:text-primary-600 font-medium py-3 px-3 rounded-lg hover:bg-neutral-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                よくある質問
              </a>
              <a
                href="/area"
                className="block text-navy-700 hover:text-primary-600 font-medium py-3 px-3 rounded-lg hover:bg-neutral-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                対応地域
              </a>
              <a
                href="/careers"
                className="block text-navy-700 hover:text-primary-600 font-medium py-3 px-3 rounded-lg hover:bg-neutral-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                採用情報
              </a>
              <a
                href="/contact"
                className="block text-navy-700 hover:text-primary-600 font-medium py-3 px-3 rounded-lg hover:bg-neutral-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                お問い合わせ
              </a>
              <a
                href="/request"
                className="block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-semibold text-center mt-4 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                資料請求
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;