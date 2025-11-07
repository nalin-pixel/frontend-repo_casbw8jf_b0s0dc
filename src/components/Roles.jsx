import React from 'react';
import { ShieldCheck, UserCog, BadgeCheck } from 'lucide-react';

const roles = [
  {
    name: 'Owner',
    icon: <BadgeCheck className="h-5 w-5" />,
    privileges: [
      'Business profile & settings',
      'Staff management & roles',
      'Full analytics and exports'
    ]
  },
  {
    name: 'Admin',
    icon: <UserCog className="h-5 w-5" />,
    privileges: [
      'Inventory & catalog management',
      'Discounts, promos, and CMS',
      'Daily reports'
    ]
  },
  {
    name: 'Cashier',
    icon: <ShieldCheck className="h-5 w-5" />,
    privileges: [
      'Checkout & receipts',
      'Hold orders & split payments',
      'Quick role switch after login'
    ]
  }
];

export default function Roles() {
  return (
    <section id="roles" className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Role-based access, built-in.</h2>
        <p className="mt-3 text-base text-slate-700 dark:text-slate-300">Authenticate as an owner or employee and switch to Admin or Cashier mode after login.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {roles.map((r) => (
          <div key={r.name} className="rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm ring-1 ring-black/5 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow">
              {r.icon}
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{r.name}</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {r.privileges.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
