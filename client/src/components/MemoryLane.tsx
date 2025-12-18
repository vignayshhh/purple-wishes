import { motion } from "framer-motion";
import { Infinity } from "lucide-react";
// Using placeholders for personal photos - in a real app these would be the user's photos
import placeholder1 from "@assets/stock_images/purple_balloons_birt_fa4c847a.jpg"; 

export default function MemoryLane() {
  return (
    <section className="py-20 px-4 bg-gradient-to-t from-background to-purple-950/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-20 drop-shadow-lg">
          How it all Started
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_#a855f7]"></div>
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
          {/* Center Infinity Symbol */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-[0_0_40px_rgba(168,85,247,0.6)]">
            <Infinity className="w-12 h-12 text-purple-600 animate-pulse" />
          </div>

          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`relative group ${index % 2 !== 0 ? 'md:mt-12' : 'md:mb-12'}`}
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500">
                 {/* Placeholder for user photos - using a solid color/gradient div to represent photos since we don't have the personal ones */}
                 <div className="w-full h-full bg-gradient-to-br from-purple-800 to-indigo-900 flex items-center justify-center relative">
                    <img 
                      src={placeholder1} 
                      className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700" 
                      alt="Memory"
                    />
                    <span className="text-4xl">📸</span>
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-handwriting text-lg">Memory {index + 1}</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}