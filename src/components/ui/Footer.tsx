import { Mail, ArrowUpRight, Lock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#2F3A4A] pt-32 pb-12 px-6 border-t border-[#EAE6DA]/10 relative overflow-hidden">
      {/* Effet décoratif en fond */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EAE6DA]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          
          {/* Section Marque */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-12 h-12 rounded-xl bg-[#EAE6DA] p-2 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <img src="/logo.png" alt="Libération" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black tracking-tighter text-[#EAE6DA]">TAFSUT</h3>
            </div>
            <p className="text-xl text-[#EAE6DA]/50 leading-relaxed font-light">
              La technologie au service de l'humain pour une libération durable et sans jugement.
            </p>
            <div className="flex items-center gap-3 text-[#EAE6DA]/40 text-xs font-bold uppercase tracking-widest">
              <Lock size={14} /> 
              <span>Chiffrement de bout en bout</span>
            </div>
          </div>

          {/* Section Navigation */}
          

          {/* Section Support & Urgence */}
          <div className="md:col-span-4 p-8 rounded-[2.5rem] bg-[#59647A]/20 border border-[#EAE6DA]/10 backdrop-blur-sm">
            <h4 className="font-bold text-[#EAE6DA] mb-4 text-sm flex items-center gap-2">
               <ShieldCheck size={18} /> Besoin d'aide ?
            </h4>
            <p className="text-[#EAE6DA]/60 text-xs leading-relaxed mb-6">
              Notre équipe est disponible pour vous orienter. Pour toute question sur notre méthode ou vos données :
            </p>
            <a href="mailto:contact@liberation.io" className="flex items-center gap-3 text-[#EAE6DA] font-bold hover:underline underline-offset-8 transition-all">
              <Mail size={18} /> contact@liberation.io
            </a>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="pt-12 border-t border-[#EAE6DA]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#EAE6DA]/30 text-[10px] uppercase tracking-[0.2em]">
            © 2026 LIBÉRATION — PROJET À IMPACT SOCIAL
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
            <a href="#" className="text-[#EAE6DA]/20 hover:text-[#EAE6DA] transition-colors">Confidentialité</a>
            <a href="#" className="text-[#EAE6DA]/20 hover:text-[#EAE6DA] transition-colors">Conditions</a>
          </div>
          <p className="flex items-center gap-1 text-[#EAE6DA]/30 text-[10px]">
            Fait avec <Heart size={10} className="text-red-400/50" /> pour votre liberté
          </p>
        </div>
      </div>
    </footer>
  );
}