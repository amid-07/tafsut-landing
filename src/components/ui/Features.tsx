"use client";

import { motion } from 'framer-motion';
import { Users, Bot, BookOpen, Coins } from 'lucide-react';

const solutions = [
  { title: "Experts Psys", desc: "Le spécialiste qui vous correspond, sans intermédiaire.", icon: <Users /> },
  { title: "Coach IA 24/7", desc: "Un soutien constant, jour et nuit, pour gérer les crises.", icon: <Bot /> },
  { title: "Journal IA", desc: "Comprenez vos émotions grâce à l'analyse profonde.", icon: <BookOpen /> },
  { title: "Calculateur", desc: "Visualisez l'argent et le temps de vie gagnés.", icon: <Coins /> }
];

export default function Features() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {solutions.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-[#59647A]/10 border border-[#EAE6DA]/5 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#EAE6DA] text-[#2F3A4A] rounded-xl flex items-center justify-center shadow-xl">
                {s.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#EAE6DA]">{s.title}</h3>
                <p className="text-[#EAE6DA]/40 text-sm md:text-lg leading-relaxed font-light">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}