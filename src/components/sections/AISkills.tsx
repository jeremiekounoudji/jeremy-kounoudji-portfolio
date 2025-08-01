import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, MessageSquare, Code2, Sparkles, Bot } from 'lucide-react';

const AISkills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94]as [number, number, number, number] },
    },
  };

  const aiSkills = [
    {
      icon: Brain,
      title: 'AI-Powered Development',
      description: 'Leveraging Cursor AI and Kiro IDE for 10x productivity in coding and development workflows.',
      color: 'from-purple-500 to-pink-500',
      technologies: ['Cursor AI', 'Kiro IDE', 'GitHub Copilot']
    },
    {
      icon: MessageSquare,
      title: 'Advanced Prompting',
      description: 'Expert in crafting effective prompts for OpenAI models to generate high-quality code and solutions.',
      color: 'from-blue-500 to-cyan-500',
      technologies: ['Prompt Engineering', 'OpenAI', 'AI Optimization']
    },
    {
      icon: Code2,
      title: 'AI Integration',
      description: 'Building applications with integrated AI capabilities using OpenAI API and modern frameworks.',
      color: 'from-green-500 to-emerald-500',
      technologies: ['OpenAI API', 'AI Integration', 'Machine Learning']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automating development processes and AI integration workflows using n8n and custom automation tools.',
      color: 'from-yellow-500 to-orange-500',
      technologies: ['n8n', 'AI Automation', 'Workflow Design']
    },
    {
      icon: Sparkles,
      title: 'AI-Enhanced UX',
      description: 'Creating intelligent user experiences with AI-powered features and recommendations using OpenAI.',
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Smart UI', 'OpenAI Integration', 'Personalization']
    }
  ];

  return (
    <section id="ai-skills" className="section-padding bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="neural-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 0 50 Q 25 25 50 50 T 100 50"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-yellow-500"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="2"
                fill="currentColor"
                className="text-yellow-500"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI & <span className="text-yellow-500">Productivity</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Harnessing the power of AI tools and technologies to achieve 10x productivity and build intelligent applications
            </p>
          </motion.div>

          {/* AI Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                className="group"
              >
                <div className="card-base card-hover h-full">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Productivity Stats */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">10x</div>
                <p className="text-gray-400">Productivity Increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50%</div>
                <p className="text-gray-400">Faster Development</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
                <p className="text-gray-400">Code Quality Improvement</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISkills;