import { Calendar, Sparkles, LineChart, BrainCircuit } from 'lucide-react';

const steps = [
  {
    title: "Journal Quotidien",
    desc: "Déposez vos pensées chaque jour. L'IA apprend de vos émotions en temps réel pour mieux vous comprendre.",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    title: "Analyse Profonde",
    desc: "Le système croise vos données pour identifier vos déclencheurs et vos moments de vulnérabilité.",
    icon: <BrainCircuit className="w-5 h-5" />
  },
  {
    title: "Bilan Hebdomadaire",
    desc: "Chaque fin de semaine, recevez un rapport complet de votre progression et votre plan d'action personnalisé.",
    icon: <LineChart className="w-5 h-5" />
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#59647A]/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-[#EAE6DA] opacity-50 mb-4">
            <Sparkles size={18} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Intelligence Personnalisée</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#EAE6DA] tracking-tighter leading-tight">
            Votre journal devient <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAE6DA] to-[#59647A]/50">votre boussole.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="group relative p-10 rounded-[3rem] bg-[#59647A]/10 border border-[#EAE6DA]/5 hover:bg-[#59647A]/20 transition-all duration-700 shadow-xl">
              <span className="absolute top-8 right-10 text-5xl font-black opacity-[0.03] text-[#EAE6DA] italic group-hover:opacity-10 transition-opacity">0{i+1}</span>
              <div className="w-12 h-12 bg-[#EAE6DA] text-[#2F3A4A] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#EAE6DA] tracking-tight">{step.title}</h3>
              <p className="text-[#EAE6DA]/40 leading-relaxed font-light text-lg">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bloc récapitulatif du Bilan Hebdo */}
        <div className="mt-16 p-8 md:p-12 rounded-[3.5rem] bg-gradient-to-br from-[#EAE6DA]/10 to-transparent border border-[#EAE6DA]/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 text-left">
              <h4 className="text-2xl md:text-3xl font-bold text-[#EAE6DA]">Le Bilan de fin de semaine</h4>
              <p className="text-[#EAE6DA]/60 leading-relaxed italic border-l-2 border-[#EAE6DA]/20 pl-6 text-lg">
                "Ce n'est pas juste un résumé. C'est une cartographie de votre progression, calculant vos économies et prédisant vos zones de risque pour la semaine à venir."
              </p>
            </div>
            <div className="shrink-0">
              <div className="px-8 py-4 rounded-2xl bg-[#59647A]/30 border border-[#EAE6DA]/20 text-[#EAE6DA] font-bold text-sm flex items-center gap-3">
                <LineChart size={18} /> Disponible chaque fin de semaine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}