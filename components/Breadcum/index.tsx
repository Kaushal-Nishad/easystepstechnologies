'use client';

import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcumProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description: string; // New prop for the dynamic paragraph content
}

const Breadcum: React.FC<BreadcumProps> = ({ breadcrumbs, title, description }) => {
  return (
    <div className="w-full bg-gradient-to-r from-red-400 to-slate-50 px-4 py-4 text-center">
      <nav className="flex mb-4 justify-center" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1">
          {breadcrumbs.map((item, index) => (
            <li key={index}>
              {item.href ? (
                <Link href={item.href} className="text-gray-700 hover:text-indigo-600">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span className="text-gray-400"> /</span>}
            </li>
          ))}
        </ol>
      </nav>
      <h2 className="text-4xl font-extrabold text-indigo-900">{title}</h2>
      <div>
        {/* Dynamic paragraph content */}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Breadcum;
