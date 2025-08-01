import React, { createContext, useContext, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';

interface AnimationContextType {
  reducedMotion: boolean;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  reducedMotion: false,
  animationSpeed: 1,
  setAnimationSpeed: () => {},
});

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

interface AnimationProviderProps {
  children: React.ReactNode;
}

const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const contextValue: AnimationContextType = {
    reducedMotion,
    animationSpeed,
    setAnimationSpeed,
  };

  return (
    <AnimationContext.Provider value={contextValue}>
      <MotionConfig
        reducedMotion={reducedMotion ? 'always' : 'never'}
        transition={{
          duration: reducedMotion ? 0.01 : 0.6 / animationSpeed,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </MotionConfig>
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;