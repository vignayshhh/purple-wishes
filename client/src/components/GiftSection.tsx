import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import giftBoxImg from "@assets/Screenshot_2025-12-18_200800_1766068732159.jpg";
import earplugsImg from "@assets/Screenshot_2025-12-18_200830_1766068732158.jpg";
import confetti from "canvas-confetti";

export default function GiftSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#d8b4fe", "#a855f7", "#ffffff"],
      });
    }
  };

  return (
    <section
      id="gift-section"
      className="py-20 px-4 bg-gradient-to-b from-background to-purple-950/50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-script text-white mb-12 drop-shadow-lg"
          style={{
            animation: "glow 3s ease-in-out infinite",
            textShadow: "0 0 20px rgba(168,85,247,0.6)",
          }}
        >
          Summa Virtual Gift
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_#a855f7]"></div>
        </h2>

        <div className="relative min-h-[500px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="box"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 10 }}
                transition={{ duration: 0.5 }}
                className="cursor-pointer"
                onClick={handleOpen}
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    filter: [
                      "drop-shadow(0 0 20px rgba(168,85,247,0.3))",
                      "drop-shadow(0 0 50px rgba(168,85,247,0.6))",
                      "drop-shadow(0 0 20px rgba(168,85,247,0.3))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative group"
                >
                  <img
                    src={giftBoxImg}
                    alt="Gift Box"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl mask-image-gradient"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-400/50 group-hover:ring-purple-300 transition-all"></div>
                </motion.div>
                <p className="mt-8 text-3xl font-handwriting text-purple-100 animate-pulse">
                  Tap to open your surprise...
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="gift"
                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 12 }}
                className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl max-w-lg mx-auto shadow-[0_0_50px_rgba(168,85,247,0.2)]"
              >
                <div className="bg-white rounded-2xl p-6 mb-6 inline-block rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={earplugsImg}
                    alt="Purple Earplugs"
                    className="w-48 h-48 object-cover rounded-xl"
                  />
                </div>

                <div className="space-y-6 text-purple-100 font-sans text-xl leading-relaxed">
                  <p>
                    I really wanted to get you this but hehe dhuddu illa
                    Sakthiiii hahaha...
                  </p>
                  <p>
                    So i am keeping photo alone here.. I noticed that you are
                    much more happier if you sleep well..
                  </p>
                  <p className="font-medium text-white text-2xl">
                    So here are these purple earplugs from Loop to help you
                    sleep peacefully like a little princess 💜
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
