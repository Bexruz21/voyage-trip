import { useLang } from '@/context/LangContext';
import { FileCheck } from 'lucide-react';
import Link from "next/link";

const licenseText = {
  title: {
    ru: 'Официальная лицензия',
    en: 'Official License',
    uz: 'Rasmiy litsenziya'
  },
  subtitle: {
    ru: 'Лицензия №1095974',
    en: 'License No. 1095974',
    uz: 'Litsenziya №1095974'
  }
};


export function LicenseCompact() {
  const { lang } = useLang()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <Link href="/license" className="block">
        <div className="bg-white rounded-xl p-4 shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-white" />
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm">
                {licenseText.title[lang]}
              </h4>
              <p className="text-gray-500 text-xs">
                {licenseText.subtitle[lang]}
              </p>
            </div>

            <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}