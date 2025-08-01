import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Dribbble } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const floatingBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/jeremiekounoudji',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'www.linkedin.com/in/jeremie-kounoudji',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:kounoudjijeremie@gmail.com',
      label: 'Email',
    },
    {
      icon: Dribbble,
      href: 'https://dribbble.com/jeremie-kounoudji',
      label: 'Portfolio',
    },
  ];

  const skillBadges = [
    {
      text: 'Tailwind CSS',
      position: { top: '5%', right: '-10%' },
      delay: 0.5,
    },
    {
      text: 'React + Vite',
      position: { top: '20%', left: '-15%' },
      delay: 0.7,
    },
    {
      text: 'Next.js',
      position: { top: '35%', right: '-15%' },
      delay: 0.9,
    },
    {
      text: 'Cursor AI',
      position: { bottom: '55%', left: '-20%' },
      delay: 1.1,
    },
    {
      text: 'Flutter & Dart',
      position: { top: '55%', right: '-20%' },
      delay: 1.3,
    },
    {
      text: 'Blockchain & Web3',
      position: { top: '80%', left: '-25%' },
      delay: 1.5,
    },
    {
      text: 'AI Integration',
      position: { bottom: '20%', right: '-10%' },
      delay: 1.7,
    },
    {
      text: 'Node.js',
      position: { bottom: '35%', left: '-15%' },
      delay: 1.9,
    },
    {
      text: 'Supabase',
      position: { bottom: '5%', right: '5%' },
      delay: 2.1,
    },
    {
      text: 'Firebase',
      position: { bottom: '0%', left: '15%' },
      delay: 2.3,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content - Takes 2/3 of space */}
          <motion.div
            variants={leftContentVariants}
            className="flex flex-col lg:col-span-2"
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="mb-2">
                  I'm <span className="text-yellow-400">JEREMIE</span>
                </div>
                <div className="mb-2">
                  <span className="text-yellow-400">KOUNOUDJI</span>
                </div>
                <div>Full-Stack Developer</div>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-gray-300 leading-relaxed max-w-md mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Passionate about building innovative web and mobile
                applications. With 4+ years of experience in development, I
                specialize in Flutter, Next.js, and Node.js. I leverage Docker
                for efficient deployment and stay current with emerging
                technologies like Web3, AI, and blockchain security.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-6 mb-8"
              >
                <motion.button
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-yellow-500/30 border-0 outline-none inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Let's Talk
                </motion.button>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="text-gray-400 text-sm">Find me at:</span>
              <div className="flex gap-3">
                {socialLinks.slice(0, 3).map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo with Floating Badges - Takes 1/3 of space */}
          <motion.div
            variants={rightContentVariants}
            className="relative flex justify-center lg:justify-center lg:col-span-1"
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Main Photo Container */}
            <div className="relative">
              {/* Yellow Circle Background */}
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 bg-yellow-500 rounded-full relative overflow-hidden p-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
              >
                {/* Photo Container */}
                <div className="w-full h-full bg-gray-700 rounded-full overflow-hidden relative">
                  {/* Placeholder Photo - Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    {/* You can replace this with an actual image */}
                    <img
                      src="/my-images/jeremie-3.png"
                      alt="Jeremie Kounoudji - Full-Stack Developer"
                      className="w-full h-full object-cover"
                     
                    />
                    {/* Fallback content */}
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        <div className="text-6xl font-bold mb-2">JK</div>
                        <p className="text-gray-300 text-sm">
                          Jeremie Kounoudji
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Skill Badges */}
              {skillBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className="absolute bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap"
                  style={badge.position}
                  variants={floatingBadgeVariants}
                  initial="hidden"
                  animate={{
                    ...floatingBadgeVariants.visible,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    delay: badge.delay,
                    duration: 0.6,
                    ease: 'easeOut',
                    y: {
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ChevronDown className="text-yellow-500" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
