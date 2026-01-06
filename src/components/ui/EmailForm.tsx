"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Loader2, CheckCircle, Users, Lock, AlertCircle } from 'lucide-react';

export default function EmailForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md px-2 md:px-0">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-6 p-8 md:p-10 bg-[#EAE6DA] text-[#2F3A4A] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl"
          >
            <motion.div 
              initial={{ rotate: -45, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="bg-[#2F3A4A] p-4 rounded-full text-[#EAE6DA]"
            >
              <CheckCircle size={40} />
            </motion.div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Bienvenue chez Tafsut</h3>
              <p className="opacity-70 mt-2 font-medium">Votre accès prioritaire est confirmé.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }}>
            

            <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="votre@email.com"
                disabled={status === 'loading'}
                className="w-full px-6 md:px-8 py-5 md:py-6 rounded-2xl md:rounded-3xl bg-[#59647A]/20 border-2 border-[#EAE6DA]/10 text-[#EAE6DA] placeholder:text-[#EAE6DA]/30 outline-none transition-all focus:border-[#EAE6DA]/50 backdrop-blur-md text-base md:text-lg"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'loading'}
                className="w-full bg-[#EAE6DA] hover:bg-white text-[#2F3A4A] font-black py-5 md:py-6 rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center gap-3 transition-colors text-base md:text-lg"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>Rejoindre l'accès prioritaire <ArrowRight size={20} /></>
                )}
              </motion.button>
            </form>

            {status === 'error' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-center justify-center gap-2 text-red-400 text-xs font-bold">
                <AlertCircle size={14} /> Une erreur est survenue.
              </motion.div>
            )}
            
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#EAE6DA]/5 rounded-xl border border-[#EAE6DA]/10">
                 <Lock size={10} className="text-[#EAE6DA]/60" />
                 <p className="text-[8px] md:text-[9px] text-[#EAE6DA]/60 uppercase tracking-[0.2em] font-bold">
                   Anonymat Garanti • Zéro Trace
                 </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}