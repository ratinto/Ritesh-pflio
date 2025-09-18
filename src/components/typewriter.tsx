"use client";

import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export function Typewriter({
  words,
  loop = true,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isWaiting) {
        timeout = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenWords);
        return;
      }

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text.length === currentWord.length) {
          if (loop) {
            setIsWaiting(true);
          }
        }
      }
    };

    timeout = setTimeout(
      type,
      isDeleting ? deletingSpeed : isWaiting ? delayBetweenWords : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isWaiting, wordIndex, words, loop, typingSpeed, deletingSpeed, delayBetweenWords]);

  return <span className="text-purple-500">{text}</span>;
}
