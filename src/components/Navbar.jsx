import React from 'react';
import { Rocket, User, Shield, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="relative z-10 w-full border-b border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">FluxPOS</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Features</a>
            <a href="#roles" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Roles</a>
            <a href="#industries" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Industries</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-slate-900 backdrop-blur transition hover:bg-white/20 dark:text-white">
              <User size={16} /> Log in
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30">
              <Shield size={16} /> Get Started
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="block rounded p-2 text-slate-800 hover:bg-white/20 dark:text-white md:hidden" aria-label="Toggle Menu">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="space-y-1 pb-4 pt-2">
              <a href="#features" className="block rounded px-3 py-2 text-sm text-slate-700 hover:bg-white/10 dark:text-slate-200">Features</a>
              <a href="#roles" className="block rounded px-3 py-2 text-sm text-slate-700 hover:bg-white/10 dark:text-slate-200">Roles</a>
              <a href="#industries" className="block rounded px-3 py-2 text-sm text-slate-700 hover:bg-white/10 dark:text-slate-200">Industries</a>
              <div className="mt-2 flex items-center gap-2 px-3">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-slate-900 backdrop-blur transition hover:bg-white/20 dark:text-white">
                  <User size={16} /> Log in
                </button>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/30">
                  <Shield size={16} /> Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
