import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";
import bgVideo from "@assets/generated_videos/purple_and_gold_birthday_balloons_with_confetti.mp4";

export default function Hero() {
  const [clickCount, setClickCount] = useState(0);
  
  const buttonTexts = ["💜 You're amazing!", "buffff...", "semmaaa po nee", "hmm hmm"];

  const handleButtonClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#9b5de5', '#f15bb5', '#fee440']
    });
    
    const newCount = (clickCount + 1) % buttonTexts.length;
    setClickCount(newCount);
    
    if (newCount === 0) {
      document.getElementById('memory-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video Loop */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
          src={bgVideo}
        />
        <div className="absolute inset-0 bg-purple-900/50 backdrop-blur-[1px]"></div>
      </div>

      <motion.div 
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Header Badge */}
        <motion.div
          variants={textVariants}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-sans tracking-wide uppercase">
            It's your special day
          </span>
        </motion.div>
        
        {/* Main Title with Continuous Handwriting Animation */}
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-script text-white mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { duration: 0.5 } }
          }}
          initial="initial"
          animate="animate"
        >
          <motion.span
            animate={{ 
              opacity: [0.6, 1, 0.6],
              filter: ["drop-shadow(0 0 10px rgba(168,85,247,0))", "drop-shadow(0 0 20px rgba(168,85,247,0.6))", "drop-shadow(0 0 10px rgba(168,85,247,0))"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Happy Birthday
          </motion.span>
          <br />
          <motion.span
            className="text-purple-300"
            animate={{ 
              opacity: [0.6, 1, 0.6],
              filter: ["drop-shadow(0 0 10px rgba(241,91,181,0))", "drop-shadow(0 0 20px rgba(241,91,181,0.6))", "drop-shadow(0 0 10px rgba(241,91,181,0))"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            Sakthi!
          </motion.span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="max-w-xl mx-auto text-lg md:text-xl text-purple-100 font-sans leading-relaxed mt-8"
          variants={textVariants}
        >
          To the most amazing person I know. Today is all about you, your smile, and your magic.
        </motion.p>

        {/* Interactive Button */}
        <motion.div 
          className="mt-12"
          variants={textVariants}
        >
          <motion.button 
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, 8, 0],
            }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white text-purple-900 px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
          >
            <motion.span
              key={buttonTexts[clickCount]}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              💜 {buttonTexts[clickCount]}
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}