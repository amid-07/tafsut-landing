import EmailForm from './EmailForm';
import { Sparkles, ShieldCheck, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-6 md:pt-12 pb-16 px-4 md:px-6 overflow-hidden">
      {/* GLOW DE FOND - Ajusté pour mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1000px] h-[400px] md:h-[600px] bg-[#EAE6DA]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* HEADER - Plus compact sur mobile */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12 md:mb-24 px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-3xl bg-[#59647A]/10 border border-[#EAE6DA]/5 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-3 md:gap-4 group">
          <div className="w-9 h-9 md:w-11 h-11 rounded-lg md:rounded-xl bg-[#EAE6DA] p-1.5 md:p-2 shadow-lg">
            <img src="/logo.png" alt="Tafsut" className="w-full h-full object-contain" />
          </div>
          <span className="text-[#EAE6DA] font-black tracking-tighter text-xl md:text-2xl uppercase">TAFSUT</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE6DA]/5 border border-[#EAE6DA]/20 text-[#EAE6DA] text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
            <Lock size={10} /> <span className="hidden xs:inline">100%</span> ANONYME
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge Confidentialité - Texte plus petit sur mobile */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#59647A]/30 border border-[#EAE6DA]/10 mb-6 md:mb-10">
          <ShieldCheck size={14} className="text-[#EAE6DA]" />
          <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#EAE6DA] opacity-80 text-center">
            Confidentialité Totale • Anonymat Garanti
          </span>
        </div>

        {/* Titre - TAILLE ADAPTATIVE (Important) */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 leading-[1] md:leading-[0.85] tracking-tighter text-[#EAE6DA]">
          Reprenez le <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#EAE6DA] to-[#59647A]">Contrôle.</span>
        </h1>
        
        {/* Pitch - Ajusté pour la lecture mobile */}
        <p className="text-base md:text-2xl opacity-60 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-light text-[#EAE6DA] px-2">
          <b>Tafsut</b> est un espace sécurisé qui unit l'expertise des <b>Psychologues</b>, 
          le soutien d'un <b>Coach IA</b> et l'analyse de votre <b>Journal</b>.
        </p>

        {/* Formulaire - Largeur totale sur mobile */}
        <div className="flex justify-center w-full">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}