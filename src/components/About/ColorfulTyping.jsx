import React, { useState, useEffect } from 'react';

const phrases = [
  'Fullstack Developer',
  'Frontend Developer',
  'Backend Developer',
  'MERN Stack Coder',
  'Software Engineer',
];

const colors = [
  'text-purple-400',
  'text-pink-400',
  'text-indigo-400',
  'text-cyan-400',
  'text-green-400',
];

const ColorfulTyping = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];
      setDisplayText(currentPhrase.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === currentPhrase.length) {
        setTimeout(() => {
          setCharIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setDisplayText('');
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(typing);
  }, [charIndex, phraseIndex]);

  return (
    <span>
      {displayText.split('').map((char, index) => (
        <span
          key={index}
          className={`${colors[index % colors.length]} transition-colors duration-300`}
        >
          {char}
        </span>
      ))}
      <span className="text-purple-400">|</span>
    </span>
  );
};

export default ColorfulTyping;
