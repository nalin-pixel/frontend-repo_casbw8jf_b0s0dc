import React from 'react';

const industries = [
  {
    name: 'Retail',
    desc: 'Categories, variants, barcodes, and stock alerts.'
  },
  {
    name: 'Coffee Shop',
    desc: 'Modifiers, sizes, menus, and kitchen tickets.'
  },
  {
    name: 'Barber',
    desc: 'Services, durations, chairs, and stylist assignment.'
  },
  {
    name: 'Laundry',
    desc: 'Per‑kg pricing, service types, and delivery notes.'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-gradient-to-tr from-slate-50 to-white p-8 ring-1 ring-black/5 dark:from-slate-900/40 dark:to-slate-900/60">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div key={i.name} className="rounded-xl border border-slate-200 bg-white/70 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{i.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{i.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">Start with an industry preset and customize workflows anytime.</p>
      </div>
    </section>
  );
}
