import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function Countdown() {
  const [, setLocation] = useLocation();
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setLocation("/home");
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setLocation("/home");
          return 0;
        }
        return prev - 1;
      });
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }, 1000);

    return () => clearInterval(interval);
  }, [setLocation]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = (timeLeft / (15 * 60)) * 100;

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  const numberVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      className="relative min-h-screen w-full bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <span className="text-sm md:text-base font-sans uppercase tracking-[0.2em] text-purple-300">
            Get ready for something special
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-script text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] mt-4">
            Surprise Coming
          </h1>
        </motion.div>

        {/* Circular Progress Ring */}
        <motion.div
          className="relative w-80 h-80 md:w-96 md:h-96 mx-auto mb-12"
          variants={pulseVariants}
          animate="animate"
        >
          {/* Background Circle */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(168, 85, 247, 0.1)"
              strokeWidth="2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradientStroke)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 1 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: "50% 50%", transform: "rotate(-90deg)" }}
            />
            <defs>
              <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d8b4fe" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Centered Timer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              key={`${minutes}:${seconds.toString().padStart(2, "0")}`}
              variants={numberVariants}
              initial="initial"
              animate="animate"
              transition={{ type: "spring", damping: 10 }}
              className="text-center"
            >
              <div className="text-8xl md:text-9xl font-bold font-sans tracking-tight">
                <span className={`inline-block transition-all duration-300 ${isAnimating ? "scale-110" : "scale-100"}`}>
                  {minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-purple-400">:</span>
                <span className={`inline-block transition-all duration-300 ${isAnimating ? "scale-110" : "scale-100"}`}>
                  {seconds.toString().padStart(2, "0")}
                </span>
              </div>
              <p className="text-lg md:text-2xl text-purple-200 font-handwriting mt-4 drop-shadow">
                until the magic happens ✨
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Motivational Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-md mx-auto space-y-4"
        >
          <p className="text-purple-200 font-sans text-lg">
            Something amazing is waiting for you
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center gap-1"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-purple-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Skip Button */}
        <motion.button
          onClick={() => setLocation("/home")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans transition-all backdrop-blur-md"
        >
          Skip Countdown
        </motion.button>
      </div>
    </motion.div>
  );
}
