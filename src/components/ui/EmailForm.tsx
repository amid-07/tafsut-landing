import { useState } from 'react';
import { ShieldCheck, ArrowRight, Loader2, CheckCircle, Users, Lock, AlertCircle } from 'lucide-react';

export default function EmailForm() {
  // On gère les 4 états : repos, chargement, succès, erreur
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // On récupère l'email directement depuis le formulaire
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  // 1. ÉCRAN DE SUCCÈS (Une fois l'email envoyé)
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 p-8 bg-[#EAE6DA] text-[#2F3A4A] rounded-[2.5rem] font-bold animate-fade-in shadow-2xl w-full max-w-md mx-auto">
        <div className="bg-[#2F3A4A] p-3 rounded-full text-[#EAE6DA]">
          <CheckCircle size={32} />
        </div>
        <div className="text-center">
          <p className="text-2xl tracking-tighter uppercase">Bienvenue chez Tafsut</p>
          <p className="text-sm opacity-70 font-medium mt-2">
            Votre place sur la liste d'attente est confirmée. Surveillez votre boîte mail !
          </p>
        </div>
      </div>
    );
  }

  // 2. FORMULAIRE PRINCIPAL
  return (
    <div className="w-full max-w-md px-2 md:px-0 group">
      {/* Preuve sociale (Waitlist) */}
     

      <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
        <div className="relative">
          <input
            type="email"
            name="email" // INDISPENSABLE pour récupérer la valeur
            required
            placeholder="votre@email.com"
            disabled={status === 'loading'}
            className="w-full px-8 py-5 md:py-6 rounded-2xl md:rounded-3xl bg-[#59647A]/20 border-2 border-[#EAE6DA]/10 text-[#EAE6DA] placeholder:text-[#EAE6DA]/30 outline-none transition-all focus:border-[#EAE6DA]/50 focus:bg-[#59647A]/40 backdrop-blur-md text-base md:text-lg disabled:opacity-50"
          />
        </div>
        
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#EAE6DA] hover:bg-white text-[#2F3A4A] font-black py-5 md:py-6 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(234,230,218,0.2)] transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group disabled:opacity-70"
        >
          {status === 'loading' ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              Rejoindre l'accès prioritaire
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Message d'erreur si l'API échoue */}
      {status === 'error' && (
        <div className="mt-4 flex items-center justify-center gap-2 text-red-400 text-xs font-bold animate-shake">
          <AlertCircle size={14} />
          <span>Une erreur est survenue. Veuillez réessayer.</span>
        </div>
      )}
      
      {/* Badges de Confidentialité */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#EAE6DA]/5 rounded-xl border border-[#EAE6DA]/10 shadow-inner">
           <Lock size={10} className="text-[#EAE6DA]/60" />
           <p className="text-[8px] md:text-[9px] text-[#EAE6DA]/60 uppercase tracking-[0.2em] font-bold">
             Chiffrement Militaire • Zéro Trace Publicitaire
           </p>
        </div>
        <div className="flex items-center gap-1.5 opacity-30">
          <ShieldCheck size={12} className="text-[#EAE6DA]" />
          <p className="text-[9px] text-[#EAE6DA] uppercase tracking-widest font-bold">
            Confidentialité & Anonymat TAFSUT
          </p>
        </div>
      </div>
    </div>
  );
}