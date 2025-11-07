import React from 'react';
import { Lock, Store, LayoutDashboard, ReceiptText, Database, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: 'Unified Dashboard',
    desc: 'Track sales, inventory, and staff performance in one place with real-time insights.'
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: 'Role-based Access',
    desc: 'Owners, admins, and cashiers get just the right tools with secure authentication.'
  },
  {
    icon: <ReceiptText className="h-5 w-5" />,
    title: 'Fast Checkout',
    desc: 'Scan items, apply discounts, and accept cards, cash, or wallets — lightning fast.'
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: 'Built-in CMS',
    desc: 'Manage menus, services, promos, and content across channels from a central CMS.'
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: 'Payments Ready',
    desc: 'Connect your preferred gateway for secure, compliant transactions.'
  },
  {
    icon: <Store className="h-5 w-5" />,
    title: 'Multi-Industry',
    desc: 'Retail, coffee shops, barbers, laundries — tailor workflows with presets.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Everything you need to sell.</h2>
        <p className="mt-3 text-base text-slate-700 dark:text-slate-300">Flexible modules that adapt to your business — from storefront to back office.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="group rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm ring-1 ring-black/5 transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow">
              {f.icon}
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
