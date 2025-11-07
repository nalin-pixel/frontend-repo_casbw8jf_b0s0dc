import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roles from './components/Roles';
import Industries from './components/Industries';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Roles />
        <Industries />
      </main>
      <footer className="border-t border-white/10 bg-white/60 py-8 text-center text-sm text-slate-600 backdrop-blur dark:bg-slate-900/50 dark:text-slate-300">
        Built for modern businesses • FluxPOS © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
