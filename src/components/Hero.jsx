import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/90 dark:from-slate-900/60 dark:via-slate-900/70 dark:to-slate-900/95"></div>
      </div>
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-slate-800/60 dark:text-slate-200">
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></span>
          Multi-purpose POS • Retail • Coffee • Barber • Laundry
        </span>
        <h1 className="text-balance bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-slate-200 dark:to-cyan-200">
          Sell anywhere. Manage everything.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-slate-700 sm:text-lg dark:text-slate-300">
          A modern point-of-sale with built‑in CMS and role-based access for owners, admins, and cashiers. Fast, beautiful, and ready for any business.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30">
            Launch Demo
          </button>
          <button className="rounded-md border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 backdrop-blur hover:bg-white/90 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100">
            Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
