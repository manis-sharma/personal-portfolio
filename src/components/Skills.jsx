import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-amber-500/20",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-cyan-500 to-blue-500",
    glow: "group-hover:shadow-cyan-500/20",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    glow: "group-hover:shadow-green-500/20",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-purple-500 to-violet-500",
    glow: "group-hover:shadow-purple-500/20",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-rose-500 to-pink-500",
    glow: "group-hover:shadow-rose-500/20",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const iconContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Tech Stack
        </h2>
        <div className="h-1 w-20 bg-accent rounded mb-12" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {categories.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative group rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-500 shadow-lg shadow-transparent ${cat.glow} group-hover:shadow-2xl`}
            >
              {/* Animated border glow */}
              <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500 blur-[1px] pointer-events-none`} />

              {/* Inner glow orb */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-[0.07] rounded-full blur-3xl transition-opacity duration-700 pointer-events-none`} />

              <div className="relative">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} p-[1px]`}
                  >
                    <div className="w-full h-full rounded-xl bg-[#0d1a32] flex items-center justify-center">
                      <CatIcon size={18} className="text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-base font-semibold text-white tracking-wide">
                    {cat.title}
                  </h3>
                  <span className="ml-auto text-xs text-gray-500 font-mono">
                    {cat.skills.length}
                  </span>
                </div>

                {/* Skill icons grid */}
                <motion.div
                  className="grid grid-cols-3 gap-3"
                  variants={iconContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={iconVariants}
                      whileHover={{
                        scale: 1.18,
                        y: -6,
                        transition: { type: "spring", stiffness: 400, damping: 15 },
                      }}
                      className="relative flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.08] transition-all duration-300 cursor-default group/icon"
                    >
                      {/* Icon glow on hover */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cat.color} opacity-0 group-hover/icon:opacity-[0.08] transition-opacity duration-300 pointer-events-none`} />
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="relative w-9 h-9 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] group-hover/icon:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-300"
                        loading="lazy"
                      />
                      <span className="relative text-[11px] font-medium text-gray-500 group-hover/icon:text-gray-200 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
