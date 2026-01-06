import { motion } from 'framer-motion';
import { Users, Bot, BookOpen, Coins } from 'lucide-react';

const solutions = [
  { title: "Marketplace Experts", desc: "Le psychologue spécialisé qui vous correspond, sans intermédiaire.", icon: <Users /> },
  { title: "Coach IA 24/7", desc: "Un soutien constant pour gérer vos moments de vulnérabilité, jour et nuit.", icon: <Bot /> },
  { title: "Journal IA", desc: "Une analyse profonde de vos notes pour comprendre vos schémas émotionnels.", icon: <BookOpen /> },
  { title: "Calculateur", desc: "Visualisez l'argent et le temps de vie gagnés depuis votre premier jour.", icon: <Coins /> }
];

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-10 rounded-[3rem] bg-[#59647A]/10 border border-[#EAE6DA]/5 hover:bg-[#59647A]/30 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#EAE6DA] text-[#2F3A4A] rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#EAE6DA]">{s.title}</h3>
                  <p className="text-[#EAE6DA]/40 leading-relaxed font-light">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}