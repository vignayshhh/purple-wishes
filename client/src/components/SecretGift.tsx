import { useState } from "react";
import { motion } from "framer-motion";

export default function SecretGift() {
  const [input, setInput] = useState("");
  const [showPdf, setShowPdf] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase() === "bottom up approach") {
      setShowPdf(true);
      setIsIncorrect(false);
    } else {
      setIsIncorrect(true);
      setShowPdf(false);
    }
  };

  const handleDownload = () => {
    const pdfPath = "/Fifty Shades 1 - Fifty Shades of Grey - PDF Room.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "secret-gift.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-purple-900 to-purple-950 overflow-hidden">
      {/* Left Decorative Element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64 bg-gradient-to-r from-purple-900/80 to-transparent backdrop-blur-sm -translate-x-1/2 rotate-12 transform-gpu"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-32 bg-gradient-to-br from-purple-700/40 to-transparent rounded-full blur-xl -translate-x-1/3 transform-gpu"></div>

      {/* Right Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 bg-gradient-to-l from-purple-900/80 to-transparent backdrop-blur-sm translate-x-1/2 -rotate-12 transform-gpu"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-32 bg-gradient-to-bl from-pink-700/40 to-transparent rounded-full blur-xl translate-x-1/3 transform-gpu"></div>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-script text-center text-white mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Secret Dark Gift 🌙
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_#a855f7]"></div>
        </motion.h2>

        <motion.div
          className="bg-purple-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-700/50 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-purple-200 text-xl md:text-2xl mb-8 text-center leading-relaxed">
            To unlock your special gift, enter the secret approach:
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-purple-800/50 border border-purple-600 rounded-lg px-6 py-4 text-lg text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Type the approach..."
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 text-lg rounded-lg transition-colors duration-300"
              >
                Unlock
              </button>
            </div>

            {isIncorrect && (
              <p className="text-red-400 text-base mt-3 text-center">
                That's not quite right. Try again!
              </p>
            )}
          </form>

          {showPdf && (
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-purple-800/30 p-6 rounded-xl border border-purple-700/50 mb-6">
                <p className="text-purple-200 text-xl md:text-2xl mb-6">
                  Your secret gift is ready!
                </p>
                <button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Download Your Gift 🎁
                </button>
              </div>
              <p className="text-purple-200 text-base md:text-lg mt-6 leading-relaxed">
                To know why I attached this here.. Go to 26 October Hanni Chithi
                group and read the messages at 4:24pm
              </p>
              <p className="text-purple-300 text-base mt-3">
                The gift will be downloaded automatically when you click the
                button.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-900 to-transparent pointer-events-none"></div>
    </section>
  );
}
