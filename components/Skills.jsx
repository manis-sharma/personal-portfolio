'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
      { name: 'React', color: 'from-blue-400 to-blue-600' },
      { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500' },
      { name: 'Next.js', color: 'from-gray-800 to-black' },
    ],
  },
  {
    title: 'Backend & Languages',
    skills: [
      { name: 'Python', color: 'from-yellow-600 to-red-600' },
      { name: 'Node.js', color: 'from-green-600 to-green-800' },
      { name: 'Firebase', color: 'from-orange-400 to-orange-600' },
      { name: 'SQL & Databases', color: 'from-blue-500 to-indigo-600' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Docker', color: 'from-blue-400 to-blue-600' },
      { name: 'Git & GitHub', color: 'from-gray-700 to-gray-900' },
      { name: 'AWS', color: 'from-orange-500 to-orange-700' },
      { name: 'Automation Tools', color: 'from-purple-500 to-pink-600' },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          My Skills
        </h2>
        <div className="h-1 w-20 bg-accent rounded mb-8" />
        <p className="text-gray-300 text-base mb-16 max-w-2xl leading-relaxed">
          Expertise across frontend, backend, and DevOps with a focus on scalable, maintainable solutions.
        </p>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div key={categoryIdx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-amber-400 rounded" />
                {category.title}
              </h3>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={item}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-full px-4 py-2.5 flex items-center justify-center text-center transition-all duration-300 group-hover:bg-blue-900/40 group-hover:border-blue-500/60 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                      <p className="text-xs md:text-sm font-semibold text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
