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
    <div className="w-full max-w-md mx-auto px-2">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-6 p-8 md:p-10 bg-[#EAE6DA] text-[#2F3A4A] rounded-[2.5rem] shadow-2xl"
          >
            <motion.div 
              initial={{ rotate: -45, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="bg-[#2F3A4A] p-4 rounded-full text-[#EAE6DA]"
            >
              <CheckCircle size={32} className="md:w-10 md:h-10" />
            </motion.div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Bienvenue chez Tafsut</h3>
              <p className="text-sm opacity-70 mt-2 font-medium">Votre accès prioritaire est confirmé.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }} className="w-full">
           

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="votre@email.com"
                disabled={status === 'loading'}
                className="w-full px-6 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-[#59647A]/20 border-2 border-[#EAE6DA]/10 text-[#EAE6DA] placeholder:text-[#EAE6DA]/30 outline-none text-base md:text-lg focus:border-[#EAE6DA]/50 backdrop-blur-md"
              />
              <motion.button 
                whileTap={{ scale: 0.98 }}
                disabled={status === 'loading'}
                className="w-full bg-[#EAE6DA] text-[#2F3A4A] font-black py-4 md:py-6 rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center gap-3 text-base md:text-lg"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>Rejoindre l'accès prioritaire <ArrowRight size={18} /></>
                )}
              </motion.button>
            </form>

            {status === 'error' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-center justify-center gap-2 text-red-400 text-xs font-bold">
                <AlertCircle size={14} /> Une erreur est survenue.
              </motion.div>
            )}

            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#EAE6DA]/5 rounded-lg border border-[#EAE6DA]/10">
                 <Lock size={10} className="text-[#EAE6DA]/60" />
                 <p className="text-[8px] md:text-[9px] text-[#EAE6DA]/60 uppercase tracking-[0.1em] font-bold">
                   Anonymat Garanti • Chiffrement Militaire
                 </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}