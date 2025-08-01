import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]as [number, number, number, number] },
    },
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zustand', 'HTML5', 'CSS3'],
      icon: '⚛️'
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Firebase', 'Supabase', 'REST APIs', 'GraphQL', 'Docker', 'Express.js', 'MongoDB'],
      icon: '🟢'
    },
    {
      title: 'Mobile Development',
      color: 'from-purple-500 to-pink-500',
      skills: ['Flutter', 'Dart', 'GetX', 'iOS Development', 'Android Development', 'React Native'],
      icon: '📱'
    },
    {
      title: 'AI & Machine Learning',
      color: 'from-yellow-500 to-orange-500',
      skills: ['OpenAI API', 'Cursor AI', 'Kiro IDE', 'Prompt Engineering', 'AI Integration'],
      icon: '🤖'
    },
    {
      title: 'Blockchain & Web3',
      color: 'from-indigo-500 to-purple-500',
      skills: ['Solidity', 'Smart Contracts', 'Web3.js', 'Ethereum', 'Blockchain Security', 'DeFi'],
      icon: '⛓️'
    },
    {
      title: 'Design & Tools',
      color: 'from-pink-500 to-rose-500',
      skills: ['Figma', 'UI/UX Design', 'Testing'],
      icon: '🎨'
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-yellow-500">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <div className="card-base card-hover h-full">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-0.5 mr-4`}>
                      <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.4 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="bg-gray-800 hover:bg-yellow-500 text-gray-300 hover:text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 cursor-default border border-gray-700 hover:border-yellow-500"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>



          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-400 mb-6 text-lg">
              Interested in working together?
            </p>
            <motion.button
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's Build Something Amazing
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;