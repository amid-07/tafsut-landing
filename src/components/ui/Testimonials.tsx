"use client";

import { motion } from 'framer-motion';
import { Calendar, Sparkles, LineChart, BrainCircuit } from 'lucide-react';

const steps = [
  { title: "Journal Quotidien", desc: "Déposez vos pensées chaque jour. L'IA apprend de vos émotions.", icon: <Calendar /> },
  { title: "Analyse Profonde", desc: "Le système identifie vos déclencheurs et vos schémas de pensée.", icon: <BrainCircuit /> },
  { title: "Bilan Hebdomadaire", desc: "Chaque fin de semaine, recevez votre plan d'action personnalisé.", icon: <LineChart /> }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-[#59647A]/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-[#EAE6DA] opacity-50 mb-4">
            <Sparkles size={18} />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Intelligence Personnalisée</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-[#EAE6DA] tracking-tighter leading-tight">
            Votre journal devient <br/>
            <span className="opacity-40 font-light">votre boussole.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-[#59647A]/10 border border-[#EAE6DA]/5 hover:bg-[#59647A]/20 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-[#EAE6DA] text-[#2F3A4A] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#EAE6DA]">{step.title}</h3>
              <p className="text-[#EAE6DA]/40 leading-relaxed font-light text-base md:text-lg">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bloc Bilan Hebdo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-12 md:mt-20 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-[#EAE6DA]/10 to-transparent border border-[#EAE6DA]/10 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4">
              <h4 className="text-2xl md:text-4xl font-bold text-[#EAE6DA]">Le Bilan de fin de semaine</h4>
              <p className="text-[#EAE6DA]/60 leading-relaxed italic border-l-2 border-[#EAE6DA]/20 pl-6 text-sm md:text-xl">
                "Ce n'est pas juste un résumé. C'est une cartographie de votre progression, vos économies et vos zones de risque."
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="px-6 py-4 rounded-2xl bg-[#59647A]/40 border border-[#EAE6DA]/20 text-[#EAE6DA] font-bold text-xs flex items-center justify-center gap-3">
                <LineChart size={18} /> Généré chaque semaine
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}