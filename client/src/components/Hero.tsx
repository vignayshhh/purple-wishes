import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";
import heroBg from "@assets/stock_images/purple_balloons_birt_fa4c847a.jpg";

export default function Hero() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  const buttonTexts = ["❤️ Scroll down ❤️", "buffff...", "semmaaa po nee", "hmm hmm"];

  const handleButtonClick = () => {
    if (!buttonClicked) {
      setButtonClicked(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#9b5de5', '#f15bb5', '#fee440']
      });
    }
    
    const newCount = (clickCount + 1) % buttonTexts.length;
    setClickCount(newCount);
    
    if (newCount === 0) {
      document.getElementById('memory-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };

  const titleText = "Happy Birthday";
  const nameText = "Sakthi!";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Purple Balloons" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-6 font-sans tracking-wide uppercase">
            It's your special day
          </span>
          
          <div className="text-5xl md:text-7xl lg:text-8xl font-script text-white mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <div className="flex flex-wrap justify-center gap-2">
              {titleText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {nameText.split("").map((char, i) => (
                <motion.span
                  key={`name-${i}`}
                  custom={titleText.length + i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className="text-purple-300"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
          
          <p className="max-w-xl mx-auto text-lg md:text-xl text-purple-100 font-sans leading-relaxed mt-8">
            To the most amazing person I know. Today is all about you, your smile, and your magic.
          </p>

          <motion.div 
            className="mt-16"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button 
              onClick={handleButtonClick}
              animate={{
                y: buttonClicked ? 30 : 0,
              }}
              transition={{ type: "spring", damping: 10 }}
              className="bg-white text-purple-900 px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all flex items-center gap-2 mx-auto"
            >
              <motion.span
                key={buttonTexts[clickCount]}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {buttonTexts[clickCount]}
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}