import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  loop?: boolean;
  onComplete?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  speed = 50,
  delay = 0,
  cursor = true,
  // loop = false,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[currentTextIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing current text
          if (textArray.length > 1) {
            // Multiple texts - start deleting after pause
            setTimeout(() => setIsDeleting(true), 2000);
          } else {
            // Single text - call onComplete
            onComplete?.();
          }
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, delay + (isDeleting ? speed / 2 : speed));

    return () => clearTimeout(timeout);
  }, [currentIndex, currentText, isDeleting, speed, delay, textArray, onComplete]);

  useEffect(() => {
    if (!cursor) return;

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [cursor]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      {cursor && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </motion.span>
  );
};

export default AnimatedText;