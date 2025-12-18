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
    img: rasamalaiImg,
  },
  {
    title: "Birthday Breakfast",
    desc: "Crispy dosa with soft white and green chutney",
    img: dosaImg,
  },
  {
    title: "Birthday Lunch",
    desc: "Soft chappati with creamy paneer butter masala",
    img: paneerImg,
  },
  {
    title: "Birthday Snacks",
    desc: "Delicious masala poori chat with paani puri",
    img: paniPuriImg,
  },
  {
    title: "Birthday Dinner",
    desc: "Savory veg kothu parotta to celebrate the evening",
    img: kothuImg,
  },
];

export default function FoodMenu() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-script text-center text-white mb-16 drop-shadow-lg"
          style={{
            animation: "glow 3s ease-in-out infinite",
            textShadow: "0 0 20px rgba(168,85,247,0.6)",
          }}
        >
          Sakthi's Favourites for her Special Day
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_#a855f7]"></div>
        </h2>

        <div className="space-y-12">
          {/* Sweet & Breakfast Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foodItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl border-2 border-purple-500/30"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <motion.h3
                    className="text-4xl md:text-5xl font-script text-white mb-2 drop-shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-xl text-purple-100 font-sans max-w-md leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lunch Item */}
          <div className="relative group w-full h-[600px] overflow-hidden rounded-3xl shadow-2xl border-2 border-purple-500/30">
            <img
              src={foodItems[2].img}
              alt={foodItems[2].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-12">
              <motion.h3
                className="text-5xl md:text-6xl font-script text-white mb-4 drop-shadow-lg text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {foodItems[2].title}
              </motion.h3>
              <motion.p
                className="text-xl md:text-2xl text-purple-100 font-sans text-center max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {foodItems[2].desc}
              </motion.p>
            </div>
          </div>

          {/* Snacks & Dinner Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foodItems.slice(3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl border-2 border-purple-500/30"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <motion.h3
                    className="text-4xl md:text-5xl font-script text-white mb-2 drop-shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-xl text-purple-100 font-sans max-w-md leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
