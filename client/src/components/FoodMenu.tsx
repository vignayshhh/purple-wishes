import { motion } from "framer-motion";
import rasamalaiImg from "@assets/stock_images/rasamalai_indian_swe_472ddac7.jpg";
import dosaImg from "@assets/stock_images/dosa_crispy_with_whi_d30072f2.jpg";
import paneerImg from "@assets/stock_images/paneer_butter_masala_059266f6.jpg";
import paniPuriImg from "@assets/stock_images/masala_puri_indian_s_c4f71c16.jpg";
import kothuImg from "@assets/stock_images/kothu_parotta_indian_6d816659.jpg";

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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-script text-center text-white mb-16 drop-shadow-lg">
          Sakthi's Favourites for her Special Day
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_#a855f7]"></div>
        </h2>

        <div className="space-y-16">
          {foodItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-4xl md:text-5xl font-script text-purple-300 mb-6 drop-shadow-lg">
                {item.title}
              </h3>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-md h-72 overflow-hidden rounded-3xl shadow-2xl border-2 border-purple-500/30 mb-6"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <p className="text-lg md:text-xl text-purple-200 font-sans text-center max-w-md">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}