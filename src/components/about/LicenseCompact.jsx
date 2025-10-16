// components/LicenseCompact.jsx
'use client';

import { motion } from 'framer-motion';
import { FileCheck } from 'lucide-react';

export function LicenseCompact({ isClient }) {
  const content = (
    <div className="bg-white rounded-xl p-4 shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <FileCheck className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">Официальная лицензия</h4>
          <p className="text-gray-500 text-xs">Лицензия №1095974</p>
        </div>
        <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </div>
    </div>
  );

  if (!isClient) {
    return (
      <a href="/license" className="block no-underline">
        {content}
      </a>
    );
  }

  return (
    <motion.a
      href="/license"
      className="block no-underline"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.a>
  );
}