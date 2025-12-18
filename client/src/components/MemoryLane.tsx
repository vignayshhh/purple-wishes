import { motion } from "framer-motion";
import { Infinity } from "lucide-react";
import img1 from "@assets/WhatsApp_Image_2025-12-18_at_4.21.22_PM_(1)_1766066503640.jpeg";
import img2 from "@assets/WhatsApp_Image_2025-12-18_at_4.21.22_PM_(2)_1766066503641.jpeg";
import img3 from "@assets/WhatsApp_Image_2025-12-18_at_4.21.22_PM_(3)_1766066503641.jpeg";
import img4 from "@assets/WhatsApp_Image_2025-12-18_at_4.21.22_PM_1766066503641.jpeg";

const images = [img1, img2, img3, img4];

export default function MemoryLane() {
  return (
    <section id="memory-section" className="py-20 px-4 bg-gradient-to-t from-background to-purple-950/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-20 drop-shadow-lg">
          How it all Started
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_#a855f7]"></div>
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
          {/* Center Infinity Symbol */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-[0_0_40px_rgba(168,85,247,0.6)]">
            <Infinity className="w-12 h-12 text-purple-600 animate-pulse" />
          </div>

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`relative group ${index % 2 !== 0 ? 'md:mt-12' : 'md:mb-12'}`}
            >
              <div className="relative aspect-auto rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-500 rotate-1 group-hover:rotate-0">
                <img 
                  src={image}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-contain bg-gradient-to-br from-purple-800 to-indigo-900"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}