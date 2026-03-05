import { motion } from 'framer-motion';

const technologies = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
];

function TechCard({ name, icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 min-w-[100px] mx-6">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-900/20 border border-blue-500/30 rounded-2xl p-3 flex items-center justify-center hover:border-accent/60 hover:bg-blue-900/40 hover:scale-110 transition-all duration-300">
        <img src={icon} alt={name} className="w-10 h-10 md:w-12 md:h-12" />
      </div>
      <span className="text-xs md:text-sm font-medium text-gray-300">{name}</span>
    </div>
  );
}

export default function Skills() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Technologies I Work With
        </h2>
        <div className="h-1 w-20 bg-accent rounded mb-12" />
      </motion.div>

      {/* Marquee row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {doubled.map((tech, i) => (
            <TechCard key={`${tech.name}-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
