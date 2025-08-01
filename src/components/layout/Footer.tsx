import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Heart } from 'lucide-react';
import { DEVELOPER_INFO, SOCIAL_LINKS } from '../../utils/constants';
import { Typography } from '../ui';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: SOCIAL_LINKS.email, label: 'Email' },
  ];

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="container-custom section-padding">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Typography variant="h5" className="mb-4">
              Get In Touch
            </Typography>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail size={18} className="text-accent-primary" />
                <a
                  href={SOCIAL_LINKS.email}
                  className="hover:text-accent-primary transition-colors duration-200"
                >
                  {DEVELOPER_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin size={18} className="text-accent-primary" />
                <span>{DEVELOPER_INFO.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Typography variant="h5" className="mb-4">
              Quick Links
            </Typography>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-text-secondary hover:text-accent-primary transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Typography variant="h5" className="mb-4">
              Connect With Me
            </Typography>
            <div className="flex gap-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-bg-tertiary border border-border rounded-lg text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <Typography variant="body-small" className="text-text-muted">
              Available for freelance opportunities
            </Typography>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-border"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-text-muted">
              <Typography variant="body-small">
                © {currentYear} {DEVELOPER_INFO.name}. Made with
              </Typography>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <Typography variant="body-small">
                using React & Tailwind CSS
              </Typography>
            </div>

            <div className="flex items-center gap-4 text-text-muted">
              <Typography variant="body-small">
                {DEVELOPER_INFO.experience} • {DEVELOPER_INFO.company}
              </Typography>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
