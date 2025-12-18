import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import heroBg from "@assets/stock_images/purple_balloons_birt_fa4c847a.jpg";

export default function Hero() {
  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#9b5de5', '#f15bb5', '#fee440']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#9b5de5', '#f15bb5', '#fee440']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

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
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-script text-white mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            Happy Birthday <br/>
            <span className="text-purple-300">Sakthi!</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-lg md:text-xl text-purple-100 font-sans leading-relaxed">
            To the most amazing person I know. Today is all about you, your smile, and your magic.
          </p>

          <motion.div 
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => document.getElementById('gift-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-900 px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all flex items-center gap-2 mx-auto"
            >
              ❤️ Scroll down ❤️
            </button>
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