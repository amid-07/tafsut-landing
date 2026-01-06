import { Users, Bot, BookOpen, Coins } from 'lucide-react';

const solutions = [
  { 
    title: "Marketplace Experts", 
    desc: "Trouvez le psychologue spécialisé qui vous correspond et réservez votre séance en un clic.", 
    icon: <Users /> 
  },
  { 
    title: "Coach IA 24/7", 
    desc: "Une présence constante pour gérer vos moments de crise et répondre à vos questions, jour et nuit.", 
    icon: <Bot /> 
  },
  { 
    title: "Journal de Bord IA", 
    desc: "Écrivez librement. Notre IA analyse vos journées et vous propose un bilan pour comprendre vos déclencheurs.", 
    icon: <BookOpen /> 
  },
  { 
    title: "Calculateur de Victoires", 
    desc: "Visualisez en temps réel l'argent économisé et le temps de vie gagné depuis votre arrêt.", 
    icon: <Coins /> 
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#EAE6DA] text-center text-3xl md:text-5xl font-black mb-20 uppercase tracking-tighter">
          Un arsenal complet contre l'addiction
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="group p-10 rounded-[3rem] bg-[#59647A]/20 border border-[#EAE6DA]/5 hover:border-[#EAE6DA]/20 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 shrink-0 bg-[#EAE6DA] text-[#2F3A4A] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#EAE6DA]">{s.title}</h3>
                  <p className="text-[#EAE6DA]/50 leading-relaxed font-light">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}