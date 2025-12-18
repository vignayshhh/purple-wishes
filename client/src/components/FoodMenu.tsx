import { motion } from "framer-motion";
import rasamalaiImg from "@assets/stock_images/rasamalai_indian_swe_27adcf5c.jpg";
import dosaImg from "@assets/stock_images/dosa_with_chutney_in_0396e90e.jpg";
import paneerImg from "@assets/stock_images/paneer_butter_masala_059266f6.jpg";
import paniPuriImg from "@assets/stock_images/pani_puri_masala_pur_3d1bec23.jpg";
import kothuImg from "@assets/stock_images/kothu_parotta_indian_37e94b6f.jpg";

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
        <h2 className="text-4xl md:text-5xl text-center text-white mb-16 drop-shadow-lg">
          Birthday Special Food Items Unakkuuu 🍽️
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_#a855f7]"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-2xl font-handwriting text-primary-foreground mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-purple-200/80 font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}