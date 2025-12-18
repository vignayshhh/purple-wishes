import { motion } from "framer-motion";
import rasamalaiImg from "@assets/generated_images/rasamalai_indian_dessert.png";
import dosaImg from "@assets/stock_images/dosa_crispy_with_whi_d30072f2.jpg";
import paneerImg from "@assets/stock_images/paneer_butter_masala_059266f6.jpg";
import paniPuriImg from "@assets/stock_images/masala_puri_indian_s_c4f71c16.jpg";
import kothuImg from "@assets/generated_images/veg_kothu_parotta_indian_dish.png";

const foodItems = [
  {
    title: "Birthday Sweet",
    desc: "Giving Rasamalaai to the most Sweetest Rasamalaai",
    img: rasamalaiImg
  },
  {
    title: "Birthday Breakfast",
    desc: "Crispy dosa with soft white and green chutney",
    img: dosaImg
  },
  {
    title: "Birthday Lunch",
    desc: "Soft chappati with creamy paneer butter masala",
    img: paneerImg
  },
  {
    title: "Birthday Snacks",
    desc: "Delicious masala poori chat with paani puri",
    img: paniPuriImg
  },
  {
    title: "Birthday Dinner",
    desc: "Savory veg kothu parotta to celebrate the evening",
    img: kothuImg
  }
];

export default function FoodMenu() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-script text-center text-white mb-16 drop-shadow-lg" style={{animation: "glow 3s ease-in-out infinite", textShadow: "0 0 20px rgba(168,85,247,0.6)"}}>
          Sakthi's Favourites for her Special Day
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_#a855f7]"></div>
        </h2>

        <div className="space-y-24">
          {/* Sweet & Breakfast Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-3xl md:text-4xl font-script text-purple-300 mb-4 drop-shadow-lg">
                {foodItems[0].title}
              </h3>
              <p className="text-lg text-purple-200 font-sans text-center mb-6">
                {foodItems[0].desc}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-3xl md:text-4xl font-script text-purple-300 mb-4 drop-shadow-lg">
                {foodItems[1].title}
              </h3>
              <p className="text-lg text-purple-200 font-sans text-center mb-6">
                {foodItems[1].desc}
              </p>
            </motion.div>
          </div>

          {/* Large Image Row for Sweet & Breakfast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-96 overflow-hidden rounded-3xl shadow-2xl border-2 border-purple-500/30"
            >
              <img 
                src={foodItems[0].img} 
                alt={foodItems[0].title} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-96 overflow-hidden rounded-3xl shadow-2xl border-2 border-purple-500/30"
            >
              <img 
                src={foodItems[1].img} 
                alt={foodItems[1].title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Lunch Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-3xl md:text-4xl font-script text-purple-300 mb-4 drop-shadow-lg">
              {foodItems[2].title}
            </h3>
            <p className="text-lg text-purple-200 font-sans text-center mb-8 max-w-2xl">
              {foodItems[2].desc}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-[500px] h-96 overflow-hidden rounded-3xl shadow-2xl border-2 border-purple-500/30"
            >
              <img 
                src={foodItems[2].img} 
                alt={foodItems[2].title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Snacks & Dinner Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-3xl md:text-4xl font-script text-purple-300 mb-4 drop-shadow-lg">
                {foodItems[3].title}
              </h3>
              <p className="text-lg text-purple-200 font-sans text-center mb-6">
                {foodItems[3].desc}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-3xl md:text-4xl font-script text-purple-300 mb-4 drop-shadow-lg">
                {foodItems[4].title}
              </h3>
              <p className="text-lg text-purple-200 font-sans text-center mb-6">
                {foodItems[4].desc}
              </p>
            </motion.div>
          </div>

          {/* Large Image Row for Snacks & Dinner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-96 overflow-hidden rounded-3xl shadow-2xl border-2 border-purple-500/30"
            >
              <img 
                src={foodItems[3].img} 
                alt={foodItems[3].title} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-96 overflow-hidden rounded-3xl shadow-2xl border-2 border-purple-500/30"
            >
              <img 
                src={foodItems[4].img} 
                alt={foodItems[4].title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}