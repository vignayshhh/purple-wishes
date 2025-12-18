import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useState, useEffect } from "react";
import bgVideo from "@assets/generated_videos/purple_and_gold_birthday_balloons_with_confetti.mp4";

export default function Hero() {
  const [clickCount, setClickCount] = useState(0);
  const [secretClicks, setSecretClicks] = useState(0);
  const [showSecretInput, setShowSecretInput] = useState(false);
  const [secretPhrase, setSecretPhrase] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const buttonTexts = [
    "💜 You're amazing!",
    "buffff...",
    "semmaaa po nee",
    "hmm hmm",
    "Hachuu C I",
    "enna",
    "K",
    "M",
  ];

  const handleButtonClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#9b5de5", "#f15bb5", "#fee440"],
    });

    const newCount = (clickCount + 1) % buttonTexts.length;
    setClickCount(newCount);

    if (newCount === 0) {
      document
        .getElementById("memory-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNameClick = () => {
    const newCount = secretClicks + 1;
    setSecretClicks(newCount);

    if (newCount >= 5) {
      setShowSecretInput(true);
      setSecretClicks(0);
    }
  };

  const handleSecretSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretPhrase.toLowerCase() === "naan yen bayapadanum") {
      try {
        // Create a temporary anchor element
        const link = document.createElement("a");
        // Use the correct filename from the public folder
        link.href = "/naan-yen-bayapadanum.pdf";
        // Suggest a filename for the download
        link.download = "secret-message.pdf";
        // Append to body, trigger download, then remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setShowSuccess(true);
        setShowSecretInput(false);
        setSecretPhrase(""); // Clear the input field

        // Show confetti on success
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 },
          colors: ["#9b5de5", "#f15bb5", "#fee440"],
        });

        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } catch (error) {
        console.error("Error downloading file:", error);
        alert("Error downloading file. Please try again.");
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  // Infinity symbol decoration component
  const InfinitySymbol = ({ className = "" }) => (
    <motion.div
      className={`absolute top-1/2 -translate-y-1/2 text-purple-300/20 ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 100 50"
        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
      >
        <path
          d="M82 25C82 13 67 0 50 0S18 13 18 25s15 25 32 25 32-13 32-25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 25C18 37 33 50 50 50s32-13 32-25S83 0 50 0 18 13 18 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video Loop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={bgVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-purple-900/30 to-purple-900/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Infinity Symbol Decorations */}
      <InfinitySymbol className="left-4 md:left-8 lg:left-16" />
      <InfinitySymbol className="right-4 md:right-8 lg:right-16 scale-x-[-1]" />

      <motion.div
        className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Header Badge */}
        <motion.div variants={textVariants} className="mb-8 md:mb-12">
          <motion.span
            className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-base md:text-lg font-sans font-medium tracking-wider uppercase text-purple-100"
            animate={{
              boxShadow: [
                "0 0 10px rgba(192, 132, 252, 0.3)",
                "0 0 20px rgba(192, 132, 252, 0.5)",
                "0 0 10px rgba(192, 132, 252, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            It's your special day
          </motion.span>
        </motion.div>

        {/* Main Title with Glowing Effect */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-script text-white text-center mb-6 md:mb-8"
          animate={{
            textShadow: [
              "0 0 10px rgba(255, 255, 255, 0.5)",
              "0 0 20px rgba(236, 72, 153, 0.7)",
              "0 0 30px rgba(168, 85, 247, 0.7)",
              "0 0 10px rgba(255, 255, 255, 0.5)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Happy Birthday,{" "}
          <motion.span
            className="cursor-pointer text-purple-200 hover:text-white transition-all duration-300 relative"
            onClick={handleNameClick}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
            }}
          >
            Sakthi
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-purple-300 rounded-full"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
          !
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-xl md:text-2xl text-purple-100 font-sans leading-relaxed mt-8 md:mt-12 font-medium"
          variants={textVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
          }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          To the most amazing person I know. Today is all about you, your smile,
          and your magic.
        </motion.p>

        {/* Interactive Button */}
        <motion.div
          className="mt-12 md:mt-16"
          variants={textVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.7, duration: 0.8 }}
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

      {/* Secret Input Modal */}
      <AnimatePresence>
        {showSecretInput && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-gradient-to-br from-purple-900 to-purple-700 p-8 rounded-2xl max-w-md w-full mx-4 shadow-2xl border border-purple-500/30"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
            >
              <h3 className="text-2xl font-script text-white mb-4">
                Enter the Secret Phrase
              </h3>
              <form onSubmit={handleSecretSubmit}>
                <input
                  type="text"
                  value={secretPhrase}
                  onChange={(e) => setSecretPhrase(e.target.value)}
                  className="w-full bg-purple-800/50 border border-purple-600 rounded-lg px-4 py-3 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
                  placeholder="Type the secret phrase..."
                  autoFocus
                />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowSecretInput(false);
                      setSecretPhrase("");
                    }}
                    className="px-4 py-2 rounded-lg bg-purple-800/50 hover:bg-purple-700/70 text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <span>🎉 Gift downloaded successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
