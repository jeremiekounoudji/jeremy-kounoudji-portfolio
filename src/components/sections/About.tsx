import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Users, Award, Coffee } from 'lucide-react';

const About: React.FC = () => {
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

  const stats = [
    { icon: Code, label: 'Years Experience', value: '4+', color: 'text-blue-400' },
    { icon: Smartphone, label: 'Projects Completed', value: '25+', color: 'text-green-400' },
    { icon: Database, label: 'Technologies', value: '20+', color: 'text-purple-400' },
  ];

  const highlights = [
    {
      icon: Award,
      title: 'Professional Experience',
      description: '4+ years of experience building web and mobile applications, from simple projects to complex enterprise solutions.',
    },
    {
      icon: Code,
      title: 'Full-Stack Expertise',
      description: 'Specialized in Flutter, Next.js, and Node.js with expertise in modern development practices and Docker containerization.',
    },
    {
      icon: Smartphone,
      title: 'Mobile & Web Development',
      description: 'Cross-platform mobile apps with Flutter and responsive web applications with React and Next.js.',
    },
    {
      icon: Coffee,
      title: 'Emerging Technologies',
      description: 'Passionate about Web3, blockchain security, AI integration, and staying current with cutting-edge technologies.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-900">
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
              About <span className="text-yellow-500">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Full-stack developer passionate about building innovative applications with modern technologies
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Photo and Info */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                {/* Professional Photo */}
                <div className="relative mx-auto lg:mx-0 w-80 h-80 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 p-1">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src="/my-images/jeremie-2.png"
                      alt="Jeremie Kounoudji - Full-Stack Developer"
                      className="w-full h-full object-cover"
                     
                    />
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-center" style={{ display: 'none' }}>
                      <div>
                        <div className="text-6xl font-bold text-white mb-2">JK</div>
                        <p className="text-gray-400 text-sm">Jeremie Kounoudji</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Code size={24} />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-3 rounded-lg shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Smartphone size={24} />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Hi, I'm Kounoudji Jeremie
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  With <span className="text-blue-400 font-semibold">5+ years of experience</span> in 
                  full-stack development, I specialize in creating modern web and mobile applications 
                  that solve real-world problems.
                </p>
                
                <p>
                  I've had the privilege of working at <span className="text-purple-400 font-semibold">Bandesoft Ltd</span>, 
                  where I contributed to high-impact projects including large-scale voting platforms, 
                  blockchain applications, and mobile solutions that serve thousands of users.
                </p>
                
                <p>
                  My expertise spans across <span className="text-green-400 font-semibold">React</span>, 
                  <span className="text-green-400 font-semibold"> Next.js</span>, 
                  <span className="text-green-400 font-semibold"> TypeScript</span>, 
                  <span className="text-green-400 font-semibold"> Flutter</span>, and modern backend technologies. 
                  I'm passionate about writing clean, efficient code and delivering exceptional user experiences.
                </p>
              </div>

              {/* CTA Button */}
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className={`${stat.color} mx-auto mb-3`} size={32} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
              What I Bring to the Table
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <highlight.icon className="text-blue-400 mb-4" size={32} />
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;